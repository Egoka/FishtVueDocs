<script setup lang="ts">
defineProps<{
  class?: any
}>()
</script>

<template>
  <FBadge mode="primary" class="rounded-full">
    <slot mdc-unwrap="p"/>
  </FBadge>
</template>
