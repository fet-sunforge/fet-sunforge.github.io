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

defineProps<{
  item: any
  open: boolean
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
        <DialogHeader>
          <DialogTitle>{{ item.title }}</DialogTitle>
          <DialogDescription>{{ item.pic.join(", ") }}</DialogDescription>
        </DialogHeader>

        <p class="text-sm text-muted-foreground">
          {{ item.desc }}
        </p>

        <DialogFooter>
          <Button @click="$emit('close')">Close</Button>
        </DialogFooter>
      </div>
    </DialogContent>
  </Dialog>
</template>
