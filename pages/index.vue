<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <div class="w-screen h-screen bg-neutral-400 dark:bg-neutral-700">
    Start Page
    <NuxtLink :to="localePath('/gettingstarted/introduction')">Get Started</NuxtLink>
  </div>
</template>

<style scoped>

</style>