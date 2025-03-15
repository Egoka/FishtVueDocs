<script setup lang="ts">
defineProps<{
  lang? : string
  class? : any
}>()
const classes = ref({
  root: "px-1.5 py-0.5 text-sm font-mono font-medium inline-block border " +
      "rounded-sm " +
      "border-neutral-200 dark:border-neutral-700 " +
      "text-neutral-700 dark:text-neutral-300 " +
      "bg-neutral-50 dark:bg-neutral-800"
})
</script>

<template>
  <code
      :class="[classes.root, `shiki language-${lang}`]">
    <slot/>
  </code>
</template>
