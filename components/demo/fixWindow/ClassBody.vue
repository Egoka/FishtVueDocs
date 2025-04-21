<script setup lang="ts">

import {classDiv} from "~/components/demo/fixWindow/dataForExamples";
</script>

<template>
  <div :class="classDiv">
    Hover Me
    <FixWindow classBody="custom-dialog-class border-theme-200 dark:border-theme-800" mode="outlined">This is a dynamic window!</FixWindow>
  </div>
</template>

<style scoped>
:deep(.custom-dialog-class){
  --pattern-fg: color-mix(in oklab, var(--color-theme-500) 40%, transparent);
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(315deg, var(--pattern-fg) 0, var(--pattern-fg) 1px, transparent 0, transparent 50%);
}
</style>