<script setup lang="ts">
import type { Criterion } from '@/types/rubrics';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';

defineProps<{
  criterion: Criterion;
  levels: Array<{ from: number, to: number }>;
  score: number;
}>();
</script>

<template>
  <div class="assessment-component">
    <div class="flex flex-col flex-1 mb-2">
      <div class="text-xl font-bold">{{ criterion.title }}</div>
      <div>{{ criterion.description }}</div>
    </div>
    <ButtonGroup class="mb-2 w-full flex flex-row">
      <Button class="flex-1" variant="outline">0</Button>
      <Button class="flex-1" variant="outline" v-for="s in criterion.maxScore" :key="s" :value="s">{{ s }}</Button>
    </ButtonGroup>
    <!-- <Separator class="my-2" /> -->
    <div class="levels flex flex-col sm:flex-row gap-1">
      <div v-for="(level, index) in criterion.levels" :key="level.id" class="level flex-1">
        <div class="text-center bg-accent">{{ level.title }}</div>
        <div class="text-center bg-accent">{{ levels?.[index]?.from }} - {{ levels?.[index]?.to }}</div>
        <div class="text-center">{{ level.description }}</div>
      </div>
    </div>
    <Separator class="my-2" />
  </div>
</template>
