<!--<template>-->
<!--  <thead class="!border-none">-->
<!--    <slot />-->
<!--  </thead>-->
<!--</template>-->
<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <thead :class="['bg-neutral-50 dark:bg-neutral-800', props.class]">
  <slot/>
  </thead>
</template>
