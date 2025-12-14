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
    <Card class="rounded-xl shadow-sm border border-border p-4 h-[12em]">
      <CardHeader>
        <CardTitle class="line-clamp-2 overflow-hidden pb-[0.2em]">{{ item.title }}</CardTitle>
        <CardDescription class="flex flex-row gap-2 overflow-hidden">
          <UsersIcon v-if="group" />
          <UserIcon v-else />
          <div class="flex-1 text-nowrap overflow-hidden text-ellipsis">{{ item.pic.join(", ") }}</div>
        </CardDescription>
      </CardHeader>
      <CardContent class="flex-1 overflow-hidden flex flex-col justify-end">
        <div class="line-clamp-3 h-[4.5em]" v-html="item.desc.replaceAll('<br>', ' ')"></div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { UserIcon, UsersIcon } from "lucide-vue-next";

defineProps<{ item: any, group?: boolean }>()
defineEmits(["open"])
</script>
