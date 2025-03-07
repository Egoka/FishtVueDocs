<!--<template>-->
<!--  <tbody class="before:h-2 before:content-[''] before:block">-->
<!--    <slot />-->
<!--  </tbody>-->
<!--</template>-->
<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <tbody :class="['', props.class]">
  <slot/>
  </tbody>
</template>
