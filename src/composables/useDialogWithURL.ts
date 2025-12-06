import { ref, onMounted, onBeforeUnmount } from "vue"
import type { Course, Project } from "@/interfaces.ts"

interface UseDialogWithURLOptions {
  items: Course[]           // default: "id"
  sectionName?: string         // default: "section"
  itemName?: string           // default: "item"
}

export function useDialogWithURL<T extends Record<string, any>>(
  options: UseDialogWithURLOptions
) {
  const {
    items,
    sectionName = "s",
    itemName = "i",
  } = options

  const selectedItem = ref<Project | null>(null)
  const dialogOpen = ref(false)

  // read item from URL param
  function readFromURL() {
    const url = new URL(window.location.href)
    const sectionId = url.searchParams.get(sectionName)
    const itemId = url.searchParams.get(itemName)

    if (!itemId) {
      dialogOpen.value = false
      selectedItem.value = null
      return
    }

    const sid: number = !sectionId ? 0 : isNaN(Number(sectionId)) ? 0 : Number(sectionId)
    if (sid < 0 || sid >= items.length) {
      dialogOpen.value = false
      selectedItem.value = null
      return
    }
    const iid: number = isNaN(Number(itemId)) ? 0 : Number(itemId)

    const found = items[sid]?.projects[iid] as Project | null
    if (found) {
      selectedItem.value = found
      dialogOpen.value = true
    }
  }

  // open dialog + set URL param
  function openDialog(sectionIdx: number, itemIdx: number) {
    selectedItem.value = items[sectionIdx]?.projects[itemIdx] as Project | null
    dialogOpen.value = true

    const url = new URL(window.location.href)
    url.searchParams.set(itemName, itemIdx.toString())
    url.searchParams.set(sectionName, sectionIdx.toString())
    history.pushState({ dialog: true }, "", url)
  }

  // close dialog + remove URL param
  function closeDialog() {
    dialogOpen.value = false
    selectedItem.value = null

    const url = new URL(window.location.href)
    url.searchParams.delete(itemName)
    url.searchParams.delete(sectionName)
    history.pushState({ dialog: false }, "", url)
  }

  // handle browser Back button
  function onPopState() {
    readFromURL()
  }

  onMounted(() => {
    readFromURL()
    window.addEventListener("popstate", onPopState)
  })

  onBeforeUnmount(() => {
    window.removeEventListener("popstate", onPopState)
  })

  return {
    selectedItem,
    dialogOpen,
    openDialog,
    closeDialog,
  }
}
