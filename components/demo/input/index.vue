<script setup lang="ts">
import type {DemoOption} from "~/components/demo/index.vue";
import type {InputProps} from "#fishtvue/input";
import layoutConfigOptions from "~/components/demo/layout/configOptions";

const optionsValues = ref<InputProps>({})

const options = computed<DemoOption[]>(()=>([
  {nameComp: "type", modelValue: optionsValues.value["type"], label: "Type", typeComp: "select", dataSelect: ["text", "number", "email", "password"]},
  ...layoutConfigOptions<InputProps>(optionsValues.value),
]))
</script>

<template>
  <Demo v-model="optionsValues" title="Input" :options="options">
    <Input v-bind="optionsValues"/>
  </Demo>
</template>