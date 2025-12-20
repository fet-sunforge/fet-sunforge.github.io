<script setup lang="ts">
import { getAssessedMarksMultipleCourses } from '@/lib/markingclient';
import { ref, onMounted, computed } from 'vue';
import { groupAssessedMarksBySubmission, type GroupedSubmission } from '@/lib/helpers';
import ThemeFab from '@/components/ThemeFab.vue';
import { Project } from '@/interfaces';
import { retrieveCourseProjectDetails } from '@/lib/projectdetailsutils';
import { rubrics as posterRubrics } from '@/rubrics/poster';
import type { Rubric } from '@/types/rubrics';
import { TableHeader, TableCell } from '@/components/ui/table';
import { calculateTotalMarks } from '@/lib/markcalculation';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Toggle } from '@/components/ui/toggle';
import { ArrowDownNarrowWide, ArrowUpWideNarrow } from 'lucide-vue-next';

const component = ref<string>('poster');
const rubric = ref<Rubric>(posterRubrics);
const courses = ref<string[]>(['beeefyp1', 'beeefyp2', 'bchefyp2', 'idp1', 'idp2']);

const result = ref<GroupedSubmission[]>([]);
const projectdetails = ref<{ course: Course | null, project: Project | null }[]>([]);
const totalMarks = ref<{assessors: number[], total: number}[]>([]);

const getMarks = async () => {
  result.value = groupAssessedMarksBySubmission(await getAssessedMarksMultipleCourses(component.value, courses.value));

  await Promise.all(result.value.map((submission) => retrieveCourseProjectDetails(submission.course, submission.itemIndex)))
    .then((details) => {
      projectdetails.value = details;
    }).then(() => {
      result.value.forEach((submission) => {
        const { assessors, total } = calculateTotalMarks(rubric.value, submission);
        totalMarks.value.push({ assessors, total });
      });
    });
}
onMounted(async () => {
  await getMarks();
  // result.value = groupAssessedMarksBySubmission(await getAssessedMarksMultipleCourses(component.value, courses.value));
})
const sortKey = ref<'course' | 'student' | 'total' >('course');
const sortOrderAsc = ref<boolean>(true);
const sortedprojectindices = computed<number[]>(() => {
  return projectdetails.value
    .map((_, index) => index)
    .sort((a, b) => {
      let aVal = ''
      let bVal = ''
      if (sortKey.value === 'course') {
        aVal = projectdetails.value[a].course.name
        bVal = projectdetails.value[b].course.name
      } else if (sortKey.value === 'student') {
        aVal = projectdetails.value[a].project.pic.join(' ')
        bVal = projectdetails.value[b].project.pic.join(' ')
      } else if (sortKey.value === 'total') {
        aVal = totalMarks.value[a].total
        bVal = totalMarks.value[b].total
      }

      const comparisonresult = compare(aVal, bVal)
      return sortOrderAsc.value ? comparisonresult : -comparisonresult
    })
})
function compare(a: unknown, b: unknown) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b
  }
  return String(a).localeCompare(String(b))
}


</script>

<template>
   <!-- <div>
    <pre>{{ result }}</pre>
  </div>

  <div>
    <pre>{{ projectdetails }}</pre>
  </div> -->
  <div class="flex flex-col w-full items-center">
    <div class="flex flex-col w-full py-10 px-10 gap-4">
      <div class="flex flex-row w-full gap-1 items-center">
        <div class="grow">Best Poster Award Evaluation</div>
        <div class="flex flex-row gap-2 items-center">
          <div>Sort by</div>
          <ToggleGroup type="single" v-model="sortKey" variant="outline">
            <ToggleGroupItem value="course">Course</ToggleGroupItem>
            <ToggleGroupItem value="student">Student</ToggleGroupItem>
            <ToggleGroupItem value="total">Total</ToggleGroupItem>
          </ToggleGroup>
          <Toggle v-model="sortOrderAsc" variant="outline">
            <ArrowDownNarrowWide v-if="sortOrderAsc" />
            <ArrowUpWideNarrow v-else />
          </Toggle>
        </div>
      </div>
      <div class="flex flex-col w-full gap-1 overflow-auto" aria-label="table">
        <div class="flex flex-row gap-1">
          <TableHeader class="w-30">Course</TableHeader>
          <TableHeader class="w-30">Title</TableHeader>
          <TableHeader class="w-30">Student(s)</TableHeader>
          <TableHeader class="grow">Assessors</TableHeader>
          <TableHeader class="w-30">Total</TableHeader>
        </div>
        <template v-for="index in sortedprojectindices" v-if="projectdetails.length > 0">
          <div class="flex flex-row gap-1">
            <TableCell class="w-30">{{ projectdetails[index].course?.name }}</TableCell>
            <TableCell class="w-30 line-clamp-5" :title="projectdetails[index].project?.title">{{ projectdetails[index].project?.title }}</TableCell>
            <TableCell class="w-30">{{ projectdetails[index].project?.pic?.join(', ') }}</TableCell>
            <TableCell class="grow">
              <div class="flex flex-row">
                <div class="flex-1">Assessor</div>
                <div class="flex-1" v-for="criterion in rubric.criteria">{{ criterion.title }}</div>
                <div class="flex-1">Total</div>
              </div>
              <div class="flex flex-row" v-for="(assessor, aindex) in result[index].assessors">
                <div class="flex-1">{{ assessor.assessorCode }}</div>
                <div class="flex-1" v-for="criterion in rubric.criteria">{{ assessor.marks[criterion.id] }}</div>
                <div class="flex-1">{{ Math.round(totalMarks[index]?.assessors[aindex]) }}</div>
              </div>
            </TableCell>
            <TableCell class="w-30">{{ Math.round(totalMarks[index]?.total) }}</TableCell>
          </div>
          <Separator class="my-2" />
        </template>
      </div>
    </div>
  </div>
  <ThemeFab />
</template>
