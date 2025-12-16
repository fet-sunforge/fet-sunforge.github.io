<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { initializeAssessor, clearAssessorCode } from '@/lib/markingclient'
import type { AssessorInfo } from '@/lib/markingclient'
import LoginComponent from '@/components/LoginComponent.vue'
import ThemeFab from "@/components/ThemeFab.vue";
// import AssessmentComponent from '@/components/AssessmentComponent.vue'

const assessor = ref<AssessorInfo | null>(null)
const loading = ref(true)

onMounted(async () => {
  // Check if assessor is already logged in
  const result = await initializeAssessor()
  if (result) {
    assessor.value = result.info
  }
  loading.value = false
})

const handleLoginSuccess = (info: AssessorInfo) => {
  assessor.value = info
}

const handleLogout = () => {
  clearAssessorCode()
  assessor.value = null
}
</script>

<template>
  <div class="flex flex-col w-full items-center">
    <div class="flex flex-col w-full max-w-xl py-10 px-3 gap-3">
      <div class="w-full text-center text-xl">
        Poster Evaluation
      </div>

      <div v-if="loading" class="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>

      <div v-else-if="!assessor">
        <LoginComponent @login-success="handleLoginSuccess" />
      </div>
      <div v-else>
        <Button
          @click="handleLogout"
          class="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </Button>
        <!-- <AssessmentComponent :assessor="assessor" @logout="handleLogout" /> -->
      </div>
    </div>
  </div>
  <ThemeFab />
</template>
