<script setup lang="ts">
import { getAssessedMarksMultipleCourses } from '@/lib/markingclient';
import { ref, onMounted } from 'vue';
import { groupAssessedMarksBySubmission, type GroupedSubmission } from '@/lib/helpers';
import ThemeFab from '@/components/ThemeFab.vue';
import { TableHeader } from '@/components/ui/table';

const result = ref<GroupedSubmission[]>([]);
onMounted(async () => {
  result.value = groupAssessedMarksBySubmission(await getAssessedMarksMultipleCourses('poster', [
    'beeefyp1',
    'beeefyp2',
    'bchefyp2',
    'idp1',
    'idp2'
  ]));
})
</script>

<template>
  <div>
    <pre>{{ result }}</pre>
  </div>

  <div class="flex flex-col w-full items-center">
    <div class="flex flex-col w-full max-w-4xl py-10 px-3 gap-3">
      <div class="flex flex-col w-full" id="data-table">
        <div class="flex flex-row">
          <TableHeader>Course</TableHeader>
          <TableHeader>Item Index</TableHeader>
          <TableHeader>Assessor</TableHeader>
          <TableHeader>Marks</TableHeader>
        </div>
        <div class="flex flex-row" v-for="submission in result">
          <div class="flex-1">{{ submission.course }}</div>
          <div class="flex-1">{{ submission.itemIndex }}</div>
          <div class="flex-1">{{ submission.assessors }}</div>
           <div class="flex-1">{{ submission }}</div>
        </div>
      </div>
    </div>
  </div>
  <ThemeFab />
</template>
