<!-- Example 1: Login Component -->
<script setup lang="ts">
import { ref } from 'vue'
import { loginAssessor } from '@/lib/markingclient'
import type { AssessorInfo } from '@/lib/markingclient'
import { Alert, AlertDescription } from './ui/alert';

const emit = defineEmits<{
  (e: 'login-success', assessor: AssessorInfo): void
}>()

const code = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    const assessorInfo = await loginAssessor(code.value)
    emit('login-success', assessorInfo)
  } catch (err) {
    error.value = 'Invalid assessor code. Please try again.'
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="max-w-md mx-auto p-6 bg-accent rounded-lg">
    <h2 class="text-2xl font-bold mb-4">Assessor Login</h2>
    <form @submit.prevent="handleLogin" class="flex flex-col w-full gap-2">
      <Input
        type="text"
        v-model="code"
        placeholder="Enter your assessor code"
        required
        id="code"
        class="px-3 py-2"
      />
      <Button
        class="btn btn-primary"
        type="submit"
        :disabled="loading"
      >{{ loading ? 'Loading...' : 'Submit' }}</Button>
      <Alert v-if="error" variant="destructive">
        <AlertDescription>{{ error }}</AlertDescription>
      </Alert>
    </form>
  </div>
</template>
