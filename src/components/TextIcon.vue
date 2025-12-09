<template>
  <svg
    v-bind="attrs"
    :width="size"
    :height="size"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Optional background -->
    <!-- <rect width="100" height="100" rx="0" fill="#f0f0f0" /> -->

    <!-- Characters -->
    <template v-for="(char, i) in chars" :key="i">
      <text
        :x="getXPos(i)"
        :y="getYPos(i)"
        font-size="40"
        font-weight="bold"
        font-family="monospace"
        text-align="start"
        text-anchor="start"
        fill="currentColor"
      >
        {{ char }}
      </text>
    </template>

    <!-- Wave Path -->
    <!-- <path
      :id="pathId"
      d="M 10 55
         C 30 20, 70 90, 90 45"
      fill="none"
      stroke="none"
    /> -->

    <!-- Text following the curve -->
    <!-- <text
      font-size="28"
      font-weight="bold"
      font-family="monospace"
      fill="#333"
      text-anchor="middle"
    >
      <textPath
        :href="`#${pathId}`"
        startOffset="50%"
        textLength="70"
        lengthAdjust="spacingAndGlyphs"
      >
        {{ displayText }}
      </textPath>
    </text> -->
  </svg>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

const props = defineProps<{
  text: string;
  size?: number;   // only size the whole SVG
}>();

// Default icon size
const size = computed(() => props.size ?? 80);

const attrs = useAttrs();

// Clean + max 3 characters
const chars = computed(() => props.text.trim().split(""));

const getXPos = (index: number) => {
  const positions = chars.value.length === 3 ? positionsForThree : positionsForFour;
  return positions[index]?.x;
};

const getYPos = (index: number) => {
  const positions = chars.value.length === 3 ? positionsForThree : positionsForFour;
  return positions[index]?.y;
};

// Predefined zig-zag positions
const positionsForThree = [
  { x: 15.92, y: 52.92 }, // 1st char (NW)
  { x: 33.71, y: 76.16 }, // 2nd char (lower)
  { x: 57.24, y: 63.29 }, // 3rd char (higher again)
  // { x: 65, y: 65 }, // 4th char (optional bottom-right)
];

const positionsForFour = [
  { x: 18.70, y: 45 }, // 1st char (NW)
  { x: 47.72, y: 45 }, // 2nd char (lower)
  { x: 18.56, y: 84.08 }, // 3rd char (higher again)
  { x: 47.72, y: 84.08 }, // 4th char (optional bottom-right)
];
// Use only the first 4 characters
// const displayText = computed(() => props.text.trim().slice(0, 4));

// Unique path ID for multiple component instances
// const pathId = `wave-${Math.random().toString(36).substring(2, 9)}`;
</script>
