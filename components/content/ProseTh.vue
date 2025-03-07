<!--<template>-->
<!--  <th class="py-3 px-4 text-left text-sm text-muted-foreground bg-card first:rounded-l-xl last:rounded-r-xl">-->
<!--    <slot />-->
<!--  </th>-->
<!--</template>-->
<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <th :class="[
      'py-3 px-4',
      'font-semibold text-sm text-left',
      'border-e border-b first:border-s border-t',
      'border-neutral-200 dark:border-neutral-700',
      props.class
      ]">
    <slot />
  </th>
</template>
