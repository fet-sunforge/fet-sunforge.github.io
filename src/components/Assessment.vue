<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import type { Rubric } from '@/types/rubrics';
import AssessmentComponent from '@/components/AssessmentComponent.vue'
import AssessmentSubmit from '@/components/AssessmentSubmit.vue';
import type { AssessorInfo } from '@/lib/markingclient';
import { validateAssessor } from '@/lib/markingclient';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangleIcon, Info } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';

const props = defineProps<{
  rubrics: Rubric;
  assessor: AssessorInfo;
  coursecode: string;
  component: string;
  itemindex: number;
}>();

// const scores = ref(new Map<string, number>());
const scores = ref<Record<string, number>>({});
const savedScores = ref<Record<string, number>>({});
const scoresChanged = computed(() => {
  return JSON.stringify(scores.value) !== JSON.stringify(savedScores.value);
});

onMounted(() => {
  loadExistingMarks();
});

const updateScore = (criterionId: string, score: number) => {
  scores.value[criterionId] = score;
  console.log(scores.value)
};

const resetScores = () => {
  scores.value = { ...savedScores.value };
};

const loading = ref(false);
const showComponents = ref(false);
const message = ref('');
const messageType = ref<'default' | 'destructive' | null>(null);

const loadExistingMarks = async () => {
  loading.value = true
  message.value = 'Loading...'
  messageType.value = "default"
  showComponents.value = false

  try {
    const response = await validateAssessor({
      assessor: props.assessor.assessor,
      course: props.coursecode,
      component: props.component,
      itemIndex: props.itemindex,
    })

    props.rubrics.criteria.forEach(criterion => scores.value[criterion.id] = 0);
    if (response.valid && response.existingMarks) {
      let keysInScores = Object.keys(scores.value)
      let keysInExistingMarks = Object.keys(response.existingMarks)
      keysInExistingMarks.forEach(key => {
        if (keysInScores.includes(key)) {
          scores.value[key] = response.existingMarks?.[key] || 0
        }
      })
      message.value = 'Loaded existing marks'
      messageType.value = 'default'
    } else {
      message.value = 'No existing marks found - starting new assessment'
      messageType.value = 'default'
    }
    savedScores.value = {...scores.value};
    showComponents.value = true
  } catch (error) {
    console.error('Failed to load marks:', error)
    message.value = 'Error loading marks'
    messageType.value = 'destructive'
    showComponents.value = false
  } finally {
    loading.value = false
  }
}

const afterSaved = () => {
  savedScores.value = {...scores.value};
};
</script>

<template>
  <Alert v-if="message" :variant="messageType">
    <Info v-if="messageType === 'default'" />
    <AlertTriangleIcon v-else />
    <AlertDescription>{{ message }}</AlertDescription>
  </Alert>
  <template v-if="showComponents">
    <template v-for="criterion in rubrics.criteria" :key="criterion.id">
      <AssessmentComponent
        :criterion="criterion"
        :levels="rubrics.levels"
        :score="scores[criterion.id] || 0"
        @update:score="updateScore(criterion.id, $event)" />
    </template>
    <AssessmentSubmit
      :scores="scores"
      :assessor="props.assessor"
      :coursecode="props.coursecode"
      :component="props.component"
      :itemindex="props.itemindex"
      @saved="afterSaved"
    />
    <template v-if="scoresChanged">
      <Alert variant="destructive">
        <AlertTriangleIcon />
        <AlertDescription>You have unsaved changes</AlertDescription>
      </Alert>
      <Button @click="resetScores">Reset Scores</Button>
    </template>
  </template>
</template>
