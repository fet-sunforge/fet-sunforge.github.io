<script setup lang="ts">
import { ref } from "vue"
import ItemCard from "./ItemCard.vue"
import ItemDialog from "./ItemDialog.vue"

const { desc, items } = defineProps<{
  desc: string,
  items: Array<{ title: string, desc: string }>
}>()

const selectedItem = ref(null as any)
const dialogOpen = ref(false)

function openItem(item: any) {
  selectedItem.value = item
  dialogOpen.value = true
}

function closeDialog() {
  dialogOpen.value = false
}
</script>

<template>
  <div class="bg-accent p-4 rounded-lg shadow-md">
    <h2 class="font-bold mb-2">Description</h2>
    <p class="text-accent-foreground">{{ desc }}</p>
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 grow flex-1">
    <ItemCard
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      @open="openItem"
    />
  </div>

   <ItemDialog
    v-if="selectedItem"
    :item="selectedItem"
    :open="dialogOpen"
    @close="closeDialog"
  />
</template>
