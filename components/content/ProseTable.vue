<!--<template>-->
<!--  <div class="-mx-6 md:mx-0 overflow-x-auto mb-12 mt-5 relative">-->
<!--    <table class="w-full table my-0">-->
<!--      <slot />-->
<!--    </table>-->
<!--  </div>-->
<!--</template>-->

<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
const classes = ref<Record<"root" | "base", string>>({
  root: "relative my-5 overflow-x-auto",
  base: "w-full border-separate border-spacing-0 rounded-sm"
})
</script>

<template>
  <div :class="[classes.root, props.class]">
    <table :class="classes.base">
      <slot />
    </table>
  </div>
</template>
