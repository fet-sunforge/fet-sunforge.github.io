<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { initializeAssessor, clearAssessorCode } from '@/lib/markingclient'
import type { AssessorInfo } from '@/lib/markingclient'
import LoginComponent from '@/components/LoginComponent.vue'
import ThemeFab from "@/components/ThemeFab.vue";
import { Button } from "@/components/ui/button";
import { Separator } from '@/components/ui/separator';
import MarkProjectDetails from '@/components/MarkProjectDetails.vue'
import AssessmentComponent from '@/components/AssessmentComponent.vue'
import { rubrics } from '@/rubrics/poster';

const assessor = ref<AssessorInfo | null>(null)
const loading = ref(true)

onMounted(async () => {
  // Check if assessor is already logged in
  const result = await initializeAssessor()
  if (result) {
    afterLogin(result.info)
  }
  loading.value = false
})

const handleLoginSuccess = (info: AssessorInfo) => {
  afterLogin(info)
}

const handleLogout = () => {
  clearAssessorCode()
  assessor.value = null
}

const courseCodeLabel = "cc"
const itemIndexLabel = "i"
const courseCode = ref("")
const itemIndex = ref(0)
const url = new URL(window.location.href)
courseCode.value = url.searchParams.get(courseCodeLabel) || ""
itemIndex.value = url.searchParams.get(itemIndexLabel) ? parseInt(url.searchParams.get(itemIndexLabel)!) : 0

const afterLogin = async (info: AssessorInfo) => {
  assessor.value = info
}

const scores = ref(0)
</script>

<template>
  <div class="flex flex-col w-full items-center">
    <div class="flex flex-col w-full max-w-4xl py-10 px-3 gap-3">
      <div class="w-full text-center text-xl">
        Poster Evaluation
      </div>
      <Separator class="my-2"/>

      <div v-if="loading" class="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>

      <div v-else-if="!assessor">
        <LoginComponent @login-success="handleLoginSuccess" />
      </div>

      <template v-else>
        <div class="flex flex-row items-center gap-1">
          <div class="flex-1">Logged in as {{ assessor.name }}</div>
          <Button
            @click="handleLogout"
            class=" bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </Button>
        </div>

        <Separator class="my-2"/>
        <MarkProjectDetails :coursecode="courseCode" :itemindex="itemIndex"/>
        <Separator class="my-2"/>
        <template v-for="criterion in rubrics.criteria" :key="criterion.id">
          <AssessmentComponent :criterion="criterion" :levels="rubrics.levels" v-model="scores" />
        </template>
      </template>

      <Separator class="my-2"/>
    </div>
  </div>
  <ThemeFab />
</template>
