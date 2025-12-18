<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Rubric } from '@/types/rubrics';
import AssessmentComponent from '@/components/AssessmentComponent.vue'
import { Button } from '@/components/ui/button';

const props = defineProps<{
  rubrics: Rubric;
}>();

const scores = ref(new Map<string, number>());

onMounted(() => {
  props.rubrics.criteria.forEach(criterion => scores.value.set(criterion.id, 0));
  // read from DB
});

const updateScore = (criterionId: string, score: number) => {
  scores.value.set(criterionId, score);
};

const saveScores = () => {
  // save to DB
};
</script>

<template>
  <template v-for="criterion in rubrics.criteria" :key="criterion.id">
    <AssessmentComponent
      :criterion="criterion"
      :levels="rubrics.levels"
      :score="scores.get(criterion.id) || 0"
      @update:score="updateScore(criterion.id, $event)" />
  </template>
  <Button @click="saveScores" class="bg-emerald-600 rounded hover:bg-emerald-700">Save</Button>
</template>
