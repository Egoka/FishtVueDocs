<script setup lang="ts">
const {site} = useAppConfig()
</script>

<template>
  <NuxtLink to="/" class="flex items-center gap-3">
    <AppLogo class="w-6 md:w-7 fill-neutral-600 dark:fill-neutral-400"/>
    <span class="font-asap font-bold tracking-wide text-2xl md:text-3xl text-neutral-600 dark:text-neutral-200">{{ site.title }}</span>
  </NuxtLink>
</template>