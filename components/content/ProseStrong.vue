<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <strong :class="['', props.class]">
    <slot/>
  </strong>
</template>
