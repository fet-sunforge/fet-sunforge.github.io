<template>
  <div
    v-motion
    :initial="{ scale: 1, opacity: 0 }"
    :enter="{ scale: 1, opacity: 1 }"
    :hover="{ scale: 1.03 }"
    :tap="{ scale: 0.97 }"
    class="cursor-pointer"
    @click="$emit('open', item)"
  >
    <Card class="rounded-xl shadow-sm border border-border p-4">
      <CardHeader>
        <CardTitle>{{ item.title }}</CardTitle>
        <CardDescription class="text-nowrap overflow-hidden text-ellipsis">{{ item.pic.join(", ") }}</CardDescription>
      </CardHeader>
      <CardContent class="text-nowrap overflow-hidden text-ellipsis h-20">{{ item.desc }}</CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

defineProps<{ item: any }>()
defineEmits(["open"])
</script>
