<script lang="ts" setup>
import { computed } from 'vue'
import { Button } from './ui/button';
import type { Course } from '@/interfaces';

const props = defineProps<{
  course: Course
  itemindex: number
}>()
const AssessmentList = {
  "beeefyp1": ['poster'],
  "beeefyp2": ['poster'],
  "bchefyp2": ['poster'],
  "idp1": ['poster'],
  "idp2": ['poster'],
}
const isAssessed = computed(() => Object.keys(AssessmentList).includes(props.course.code))
const posterAssessmentLink = computed(() => `/m/poster?cc=${props.course.code}&i=${props.itemindex}`)
const goAssess = () => window.location.href = posterAssessmentLink.value
</script>

<template>
  <Button @click="goAssess" v-if="isAssessed">
    Assessment
  </Button>
</template>
