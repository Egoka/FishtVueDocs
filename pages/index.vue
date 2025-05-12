<script setup lang="ts">
import {type FishtVue, FishtVueSymbol} from "fishtvue/config"

const FishtVue = inject<FishtVue>(FishtVueSymbol)
if (FishtVue)
  console.log("FishtVue: ",
      FishtVue?.config.locale?.activeLocale,
      FishtVue?.getActiveLocale(),
      FishtVue?.setActiveLocale("en"),
      FishtVue?.getDefaultLocale(),
      (window as any)?.FishtVue)
</script>

<template>
  <AppStartIntro/>
  <AppStartExample/>
  <AppStartFeatures/>
</template>

<style scoped>

</style>