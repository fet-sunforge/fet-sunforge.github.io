<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { submitMarks } from '@/lib/markingclient';
import type { AssessorInfo } from '@/lib/markingclient';

const props = defineProps<{
  assessor: AssessorInfo;
  coursecode: string;
  component: string;
  itemindex: number;
  scores: Record<string, number>;
}>();
const emit = defineEmits(['saved']);

const loading = ref(false);
const message = ref('');
const messageType = ref<'default' | 'destructive' | null>(null);

const saveScores = async () => {
  // save to DB
  loading.value = true
  message.value = ''

  try {
    const response = await submitMarks({
      assessor: props.assessor.assessor,
      course: props.coursecode,
      component: props.component,
      itemIndex: props.itemindex,
      marks: props.scores,
    })

    message.value = `Marks ${response.action === 'created' ? 'submitted' : 'updated'} successfully!`
    messageType.value = 'default'
    emit('saved', props.scores)
  } catch (error) {
    message.value = 'Failed to submit marks. Please try again.'
    messageType.value = 'destructive'
    console.error(error)
  } finally {
    loading.value = false
  }
};
</script>

<template>
<Button @click="saveScores" class="bg-emerald-600 rounded hover:bg-emerald-700">{{ loading ? 'Saving...' : 'Save' }}</Button>
</template>
