<script setup lang="ts">
import {cn} from "#imports";

const props = defineProps<{
  class?: string
}>()
const classes = ref({
  root: "flex flex-col justify-center items-center overflow-auto " +
      "rounded-sm w-full relative my-4 p-8 gap-4 " +
      "border border-neutral-200 dark:border-neutral-700 " +
      "bg-neutral-100/70 dark:bg-neutral-900/70"
})
</script>

<template>
  <div :class="cn(classes.root, props.class)">
    <slot/>
  </div>
</template>