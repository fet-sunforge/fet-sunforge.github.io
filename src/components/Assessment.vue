<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Rubric } from '@/types/rubrics';
import AssessmentComponent from '@/components/AssessmentComponent.vue'
import { Button } from '@/components/ui/button';
import type { AssessorInfo } from '@/lib/markingclient';
import { validateAssessor } from '@/lib/markingclient';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangleIcon, Info } from 'lucide-vue-next';

const props = defineProps<{
  rubrics: Rubric;
  assessor: AssessorInfo;
  coursecode: string;
  component: string;
  itemindex: number;
}>();

// const scores = ref(new Map<string, number>());
const scores = ref<Record<string, number>>({});

onMounted(() => {
  loadExistingMarks();
});

const updateScore = (criterionId: string, score: number) => {
  scores.value[criterionId] = score;
  saveScores();
};

const saveScores = () => {
  // save to DB
};

const loading = ref(false);
const message = ref('');
const messageType = ref<'default' | 'destructive' | null>(null);

const loadExistingMarks = async () => {
  loading.value = true
  message.value = ''

  try {
    const response = await validateAssessor({
      assessor: props.assessor.assessor,
      course: props.coursecode,
      component: props.component,
      itemIndex: props.itemindex,
    })

    if (response.valid && response.existingMarks) {
      scores.value = response.existingMarks
      message.value = 'Loaded existing marks'
      messageType.value = 'default'
    } else {
      props.rubrics.criteria.forEach(criterion => scores.value[criterion.id] = 0);
      message.value = 'No existing marks found - starting new assessment'
      messageType.value = 'default'
    }
  } catch (error) {
    console.error('Failed to load marks:', error)
    message.value = 'Error loading marks'
    messageType.value = 'destructive'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <Alert v-if="message" :variant="messageType">
    <Info v-if="messageType === 'default'" />
    <AlertTriangleIcon v-else />
    <AlertDescription>{{ message }}</AlertDescription>
  </Alert>
  <template v-for="criterion in rubrics.criteria" :key="criterion.id">
    <AssessmentComponent
      :criterion="criterion"
      :levels="rubrics.levels"
      :score="scores[criterion.id] || 0"
      @update:score="updateScore(criterion.id, $event)" />
  </template>
  <Button @click="saveScores" class="bg-emerald-600 rounded hover:bg-emerald-700">Save</Button>
</template>
