<script setup lang="ts">
import {classDiv, classDivActive, classWindow, type Position} from "./dataForExamples"
import {cn} from "~/composables/tailwindHandler";

const positions = ref<Array<Position | {}>>([
  {
    name: "Top Left",
    position: "top-left"
  },
  {},
  {
    name: "Top",
    position: "top"
  },
  {},
  {
    name: "Top Right",
    position: "top-right"
  },
  {
    name: "Left Top",
    position: "left-top"
  },
  {},
  {
    name: "Center Top",
    position: "center-top"
  },
  {},
  {
    name: "Right Top",
    position: "right-top"
  },
  {
    name: "Left",
    position: "left"
  },
  {
    name: "Center Left",
    position: "center-left"
  },
  {
    name: "Center",
    position: "center"
  },
  {
    name: "Center Right",
    position: "center-right"
  },
  {
    name: "Right",
    position: "right"
  },
  {
    name: "Left Bottom",
    position: "left-bottom"
  },
  {},
  {
    name: "Center Bottom",
    position: "center-bottom"
  },
  {},
  {
    name: "Right Bottom",
    position: "right-bottom"
  },
  {
    name: "Bottom Left",
    position: "bottom-left"
  },
  {},
  {
    name: "Bottom",
    position: "bottom"
  },
  {},
  {
    name: "Bottom Right",
    position: "bottom-right"
  }
])
const isOpenFixed = ref(false)
const isOpenAbsolute = ref(false)
</script>

<template>
  <div class="flex w-auto gap-16 justify-center items-center flex-wrap">
    <div :class="cn(...classDiv, isOpenFixed ? classDivActive : '', 'm-5')">
      <div :class="cn(classWindow, 'bg-transparent dark:bg-transparent')">Fixed</div>
      <FixWindow
          v-for="(item, key) in positions as Position[]"
          :key="key"
          v-model="isOpenFixed"
          typePosition="fixed"
          :position="item.position as any">
        <div class="size-8 bg-theme-600/80 dark:bg-theme-400/80 rounded-sm"></div>
      </FixWindow>
    </div>
    <div :class="cn(...classDiv, isOpenAbsolute ? classDivActive : '', 'm-5')">
      <div :class="cn(classWindow, 'bg-transparent dark:bg-transparent')">Absolute</div>
      <FixWindow
          v-for="(item, key) in positions as Position[]"
          :key="key"
          v-model="isOpenAbsolute"
          typePosition="absolute"
          :position="item.position as any">
        <div class="size-8 bg-theme-600/80 dark:bg-theme-400/80 rounded-sm"></div>
      </FixWindow>
    </div>
  </div>
</template>