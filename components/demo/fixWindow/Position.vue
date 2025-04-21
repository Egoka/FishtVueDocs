<script setup lang="ts">
import type {Position} from "./dataForExamples"
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
const classItem = ref([
  "flex justify-center items-center text-center",
  "size-16 p-2",
  "text-neutral-400 dark:text-neutral-500",
  "hover:text-neutral-600 hover:dark:text-neutral-300",
  "rounded-sm border-2 border-neutral-300 dark:border-neutral-700 border-dotted",
  "hover:border-theme-600 hover:dark:border-theme-400 hover:bg-theme-600/20 hover:dark:bg-theme-400/20",
  "cursor-pointer"
])
</script>

<template>
  <div class="grid grid-cols-5 gap-y-5 gap-x-5">
    <template
        v-for="(item, key) in positions as Position[]"
        :key="key"
    >
      <div v-if="Object.keys(item)?.length" :class="classItem" class="">
        {{ item.name }}
        <FixWindow :position="item.position as any">
          <div class="size-8 bg-theme-600/80 dark:bg-theme-400/80 rounded-sm"></div>
        </FixWindow>
      </div>
      <div v-else></div>
    </template>
  </div>
</template>