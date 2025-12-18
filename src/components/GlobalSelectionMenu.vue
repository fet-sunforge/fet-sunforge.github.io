<script setup lang="ts">
import GlobalMenu from '@/components/GlobalMenu.vue'
import { ref, onMounted, computed } from 'vue';
import type { ComputedRef, FunctionalComponent } from 'vue';
import type { LucideProps } from 'lucide-vue-next';
import { HouseIcon, InfoIcon, VectorSquareIcon } from 'lucide-vue-next';

const pages: Array<{
    name: string;
    path: string;
    icon: FunctionalComponent<LucideProps, {}, any, {}>|null;
    short: string|null;
}> = [
  { name: 'Home', path: '/', icon: HouseIcon, short: null },
  { name: 'About SUNForge Fest', path: '/about', icon: InfoIcon, short: null },
  { name: 'Organising Committee', path: '/committee', icon: VectorSquareIcon, short: null },
  { name: 'Final Year Projects', path: '/fyp', icon: null, short: 'FYP' },
  { name: 'Integrated Design Projects', path: '/idp', icon: null, short: 'IDP' },
  { name: 'Sustainable Engineering Design', path: '/sed', icon: null, short: 'SED' },
  { name: 'Project Management and Engineering Design', path: '/pmed', icon: null, short: 'PMED' },
  { name: 'Design and Innovative Thinking', path: '/dit', icon: null, short: 'DIT' },
];

// get active page
const currentPath = ref('/')
onMounted(() => {
  currentPath.value = window.location.pathname
})
const activePage = computed(() => { return pages.find(page => page.path === currentPath.value) }) as ComputedRef<{
    name: string;
    path: string;
    icon: FunctionalComponent<LucideProps, {}, any, {}>|null;
    short: string|null;
}>

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
  ItemMedia,
  // ItemActions,
  ItemContent,
  // ItemDescription,
  ItemTitle,
  ItemSeparator,
} from '@/components/ui/item'

import TextIcon from '@/components/TextIcon.vue'
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <GlobalMenu>
        <div class="flex flex-row gap-2">
          <TextIcon v-if="activePage.short" :text="activePage.short" :size="30"></TextIcon>
          <component v-if="activePage.icon" :is="activePage.icon" :size="30" :stroke-width="1" />
          <span class="line-clamp-1 overflow-hidden">{{ activePage.name }}</span>
        </div>
      </GlobalMenu>
    </DialogTrigger>
    <DialogContent
      class="sm:max-w-md"
    >
      <DialogHeader class="sr-only">
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>

      <div class="flex items-center gap-2 overflow-y-auto max-h-[70vh]">
        <div class="flex w-full flex-col gap-0">
          <template v-for="(page, index) in pages" :key="page.path">
            <Item as-child>
              <a :href="page.path">
                <ItemMedia>
                  <TextIcon v-if="page.short" :text="page.short" :size="30"></TextIcon>
                  <component v-if="page.icon" :is="page.icon" :size="30" :stroke-width="1" />
                </ItemMedia>
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
