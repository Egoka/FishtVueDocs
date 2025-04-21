<script setup lang="ts">
import {classDiv} from "~/components/demo/fixWindow/dataForExamples";
</script>
<template>
  <div :class="[classDiv, 'mt-10']">
    Hover Me
    <FixWindow>This is a dynamic window!</FixWindow>
  </div>
</template>