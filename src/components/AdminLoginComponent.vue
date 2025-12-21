<!-- Example 1: Login Component -->
<script setup lang="ts">
import { ref } from 'vue'
import { loginAdmin } from '@/lib/adminclient'
import type { AdminInfo } from '@/lib/adminclient'
import { Alert, AlertDescription } from './ui/alert';
import { Input } from './ui/input';
import { Button } from './ui/button';

const emit = defineEmits<{
  (e: 'login-success', admin: AdminInfo): void
}>()

const code = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    const adminInfo = await loginAdmin(code.value)
    emit('login-success', adminInfo)
  } catch (err) {
    error.value = 'Invalid admin code. Please try again.'
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="max-w-md mx-auto p-6 bg-accent rounded-lg">
    <h2 class="text-2xl font-bold mb-4">Admin Login</h2>
    <div class="flex flex-col w-full gap-2">
      <Input
        type="text"
        :model-value="code"
        @update:model-value="code = $event as string"
        placeholder="Enter your admin code"
        required
        id="code"
        class="px-3 py-2"
      />
      <Button
        @click="handleLogin"
        class="btn btn-primary"
        type="submit"
        :disabled="loading"
      >{{ loading ? 'Loading...' : 'Submit' }}</Button>
      <Alert v-if="error" variant="destructive">
        <AlertDescription>{{ error }}</AlertDescription>
      </Alert>
    </div>
  </div>
</template>
