<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { Course, Project } from "@/interfaces";
import CourseDescription from "@/components/CourseDescription.vue";
import { UsersIcon, UserIcon } from "lucide-vue-next";

defineProps<{
  course: Course
  item: Project
  open: boolean
  group?: boolean
}>()

defineEmits(["close"])
</script>

<template>
  <Dialog :open="open" @update:open="$emit('close')">
    <DialogContent class="p-0 overflow-hidden rounded-xl">
      <div
        v-motion
        :initial="{ scale: 0.85, opacity: 0 }"
        :enter="{ scale: 1, opacity: 1 }"
        :leave="{ scale: 0.85, opacity: 0 }"
        transition="spring"
        class="p-6 space-y-3"
      >
        <CourseDescription :course="course" />
        <DialogHeader>
          <DialogTitle>{{ item.title }}</DialogTitle>
          <DialogDescription class="flex flex-row gap-2 overflow-hidden">
            <UsersIcon v-if="group"/>
            <UserIcon v-else />
            <div class="flex-1 text-nowrap overflow-hidden text-ellipsis">{{ item.pic.join(", ") }}</div>
          </DialogDescription>
        </DialogHeader>

        <p class="text-sm text-muted-foreground" v-html="item.desc"></p>

        <DialogFooter>
          <Button @click="$emit('close')">Close</Button>
        </DialogFooter>
      </div>
    </DialogContent>
  </Dialog>
</template>
