<script setup lang="ts">
import type { Criterion } from '@/types/rubrics';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { onMounted, ref } from 'vue';
import { ChevronsUpDown } from 'lucide-vue-next';

const props = defineProps<{
  criterion: Criterion;
  levels: Array<{ from: number, to: number }>;
  score: number;
}>();

const emit = defineEmits(['update:score']);

const scorelist = ref<number[]>([]);
onMounted(() => {
  scorelist.value = [0, ...Array.from({ length: props.criterion.maxScore }, (_, i) => i + 1)];
});
const updateScore = (s: number) => {
  emit('update:score', s);
};
</script>

<template>
  <div class="assessment-component">
    <div class="flex flex-col flex-1 mb-2">
      <div class="text-xl font-bold">{{ criterion.title }}</div>
      <div>{{ criterion.description }}</div>
    </div>
    <ButtonGroup class="mb-2 w-full flex flex-row overflow-auto">
      <Button
        class="flex-1" variant="outline"
        v-for="s in scorelist" :key="s" :value="s"
        @click="updateScore(s)"
        :class="s <= score ? 'bg-primary!' : ''"
      >{{ s }}</Button>
    </ButtonGroup>
    <!-- <Separator class="my-2" /> -->
    <Collapsible class="border border-border py-1">
      <CollapsibleTrigger class="flex flex-row w-full text-sm items-center px-1 pb-1">
        <div class="flex-1">Rubrics</div>
        <ChevronsUpDown :size="16"/>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div class="levels flex flex-col sm:flex-row-reverse">
          <div v-for="(level, index) in criterion.levels"
            :key="level.id"
            class="level flex-1 p-2"
            :class="levels && levels[index] && score >= levels[index].from && score <= levels[index].to ? 'bg-primary' : ''"
          >
            <div class="text-center bg-accent">{{ level.title }}</div>
            <div class="text-center bg-accent">{{ levels?.[index]?.from }} - {{ levels?.[index]?.to }}</div>
            <div class="text-center">{{ level.description }}</div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
    <Separator class="my-2" />
  </div>
</template>
