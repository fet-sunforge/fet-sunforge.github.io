<script setup lang="ts">
import GlobalSelectionMenu from "@/components/GlobalSelectionMenu.vue";
import ThemeFab from "@/components/ThemeFab.vue";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-vue-next";

const committeeMembers = [{
  club: "IEM Sunway Student Chapter",
  members: [
    { name: 'Chan Ke Yee' },
    { name: 'Edvania Avelino Chissico' },
    { name: 'Farzana Binti Mohamad Lutfi' },
    { name: 'Niqeerta Devan' },
    { name: 'Shreya Reven' },
    { name: 'Taa Qi Hang' },
    { name: 'Tan Xin Ming' },
    { name: 'Hans Jaden Lim' }
  ]
}, {
  club: "IChemE Sunway Student Chapter",
  members: [
    { name: 'Chong Chee Hin' },
    { name: 'Low Lek Wye' },
    { name: 'Nicole Gan Xiao Ying' },
    { name: 'Richard Mark Gonzales Retita' },
    { name: 'Sarah Wong See Theng' }
  ]
}, {
  club: "IMechE Sunway Student Chapter",
  members: [
    { name: 'Koay Yun Sheng' },
    { name: 'Tan Din Xuen' }
  ]
}, {
  club: "ICE Sunway Student Chapter",
  members: [
    { name: 'Ewe Hong Jing' },
    { name: 'Fahad Fayez Faky Darir' }
  ]
}]
</script>

<template>
  <div class="flex flex-col w-screen h-screen items-center text-lg overflow-auto pt-23 pb-10">
    <GlobalSelectionMenu></GlobalSelectionMenu>
    <div class="flex flex-col items-center gap-3 max-w-6xl w-full px-10" style="margin-top: auto; margin-bottom: auto;">
      <div>This event is co-organised by</div>
      <div class="flex flex-row items-center gap-3 flex-wrap justify-center">
        <img src="../../assets/SEN.png" alt="SEN" class="h-20 rounded" />
        <img src="../../assets/IEM.png" alt="IEM" class="h-20 rounded" />
        <img src="../../assets/IChemE.png" alt="IChemE" class="h-20 rounded" />
        <img src="../../assets/IMechE.png" alt="IMechE" class="h-20 rounded" />
        <img src="../../assets/ICE.png" alt="ICE" class="h-20 rounded" />
      </div>
      <Alert class="max-w-2xl">
        <!-- <div class="flex flex-row items-center gap-3"> -->
          <InfoIcon />
          <AlertDescription>Student chapters are listed by establishment order, and student names are listed alphabetically.</AlertDescription>
        <!-- </div> -->
      </Alert>
      <template v-for="chapter in committeeMembers">
        <Separator />
        <div>{{ chapter.club }}</div>
        <div class="flex flex-row flex-wrap justify-center">
          <Badge v-for="member in chapter.members" :key="member.name" class="mr-2 mb-2 text-base">
            {{ member.name }}
          </Badge>
        </div>
      </template>
      <Separator />
    </div>
  </div>
  <ThemeFab />
</template>
