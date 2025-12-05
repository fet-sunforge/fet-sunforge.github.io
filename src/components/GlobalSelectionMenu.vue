<script setup lang="ts">
import GlobalMenu from '@/components/GlobalMenu.vue'
import { ref, onMounted, computed } from 'vue';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About SUNForge Fest', path: '/about' },
  { name: 'Final Year Projects (1)', path: '/fyp1' },
  { name: 'Final Year Projects (2)', path: '/fyp2' },
  { name: 'Integrated Design Projects (1)', path: '/idp1' },
  { name: 'Integrated Design Projects (2)', path: '/idp2' },
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
import { useMediaQuery } from '@vueuse/core'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

const isDesktop = useMediaQuery('(min-width: 640px)')

const Modal = computed(() => ({
  Root: isDesktop.value ? Dialog : Drawer,
  Trigger: isDesktop.value ? DialogTrigger : DrawerTrigger,
  Content: isDesktop.value ? DialogContent : DrawerContent,
  Header: isDesktop.value ? DialogHeader : DrawerHeader,
  Title: isDesktop.value ? DialogTitle : DrawerTitle,
  Description: isDesktop.value ? DialogDescription : DrawerDescription,
  Footer: isDesktop.value ? DialogFooter : DrawerFooter,
  Close: isDesktop.value ? DialogClose : DrawerClose,
}))

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
  <component :is="Modal.Root">
    <component :is="Modal.Trigger" as-child>
      <GlobalMenu>{{ activePageName }}</GlobalMenu>
    </component>
    <component
      :is="Modal.Content"
      class="sm:max-w-md" :class="[
        { 'px-2 pb-8 *:px-4': !isDesktop },
      ]"
    >
       <component :is="Modal.Header" class="sr-only">
        <component :is="Modal.Title"></component>
        <component :is="Modal.Description"></component>
      </component>

      <div class="flex items-center gap-2">
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
    </component>
  </component>
</template>
