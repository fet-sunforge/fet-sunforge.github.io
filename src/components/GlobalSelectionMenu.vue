<script setup lang="ts">
import GlobalMenu from '@/components/GlobalMenu.vue'
import { ref, onMounted, computed } from 'vue';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About SUNForge Fest', path: '/about' },
  { name: 'Final Year Projects', path: '/fyp' },
  { name: 'Integrated Design Projects', path: '/idp' },
  { name: 'Sustainable Engineering Design', path: '/sed' },
  { name: 'Project Management and Engineering Design', path: '/pmed' },
  { name: 'Design and Innovative Thinking', path: '/dit' },
];

// get active page
const currentPath = ref('/')
onMounted(() => {
  currentPath.value = window.location.pathname
})
const activePage = computed(() => { return pages.find(page => page.path === currentPath.value) })
const activePageName = computed(() => activePage.value?.name ?? '')

// use drawer/dialog
import {
  Dialog,
  // DialogClose,
  DialogContent,
  DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

// item list
import {
  Item,
  // ItemActions,
  ItemContent,
  // ItemDescription,
  ItemTitle,
  ItemSeparator,
} from '@/components/ui/item'
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <GlobalMenu>{{ activePageName }}</GlobalMenu>
    </DialogTrigger>
    <DialogContent
      class="sm:max-w-md"
    >
      <DialogHeader class="sr-only">
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>

      <div class="flex items-center gap-2 overflow-y-auto max-h-[70vh]">
        <div class="flex w-full max-w-md flex-col gap-0">
          <template v-for="(page, index) in pages" :key="page.path">
            <Item as-child>
              <a :href="page.path">
                <ItemContent>
                  <ItemTitle class="text-xl">{{ page.name }}</ItemTitle>
                  <!-- <ItemDescription>
                    Learn how to get started with our components.
                  </ItemDescription> -->
                </ItemContent>
                <!-- <ItemActions>
                  <ChevronRightIcon class="size-4" />
                </ItemActions> -->
              </a>
            </Item>
            <ItemSeparator v-if="index !== pages.length - 1" />
          </template>
        </div>
      </div>

       <!-- <component :is="Modal.Footer" class="pt-4">
        <component :is="Modal.Close" as-child>
          <Button variant="outline">
            Close
          </Button>
        </component>
      </component>  -->
      <div class="absolute -top-2 -left-2 w-1/5 h-1/9 border-t-3 border-l-3 border-muted-foreground"></div>
      <div class="absolute -bottom-2 -left-2 w-1/5 h-1/9 border-b-3 border-l-3 border-muted-foreground"></div>
      <div class="absolute -top-2 -right-2 w-1/5 h-1/9 border-t-3 border-r-3 border-muted-foreground"></div>
      <div class="absolute -bottom-2 -right-2 w-1/5 h-1/9 border-b-3 border-r-3 border-muted-foreground"></div>
    </DialogContent>
  </Dialog>
</template>
