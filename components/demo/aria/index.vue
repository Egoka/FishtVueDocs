<script setup lang="ts">
import type {DemoOption} from "~/components/demo/index.vue";
import type {AriaProps} from "#fishtvue/aria";

const optionsValues = ref<AriaProps>({})
const options = computed<DemoOption[]>(()=>([
  // {nameComp: "type", modelValue: optionsValues["type"], label: "Type", typeComp: "select", dataSelect: ["text", "number", "email", "password"]},
  {nameComp: "mode", modelValue: optionsValues.value["mode"], label: "Mode", typeComp: "select", dataSelect: ["filled", "outlined", "underlined"]},
  // {nameComp: "autoFocus", modelValue: optionsValues.value["autoFocus"], label: "Auto focus", typeComp: "switch"},
  {nameComp: "label", modelValue: optionsValues.value["label"], label: "Label", typeComp: "input"},
  // {nameComp: "placeholder", modelValue: optionsValues.value["placeholder"], label: "Placeholder", typeComp: "input"},
  // {nameComp: "autocomplete", modelValue: optionsValues.value["autocomplete"], label: "Autocomplete", typeComp: "select", dataSelect: ["on", "off"]},
  // {nameComp: "maskInput", modelValue: optionsValues.value["maskInput"], label: "Mask", typeComp: "select", dataSelect: ["phone", "number", "price"]},
  {nameComp: "clear", modelValue: optionsValues.value["clear"], label: "Is clear", typeComp: "switch"},
  {nameComp: "help", modelValue: optionsValues.value["help"], label: "Help text", typeComp: "input"},
  {nameComp: "required", modelValue: optionsValues.value["required"], label: "Is required", typeComp: "switch"},
]))
</script>

<template>
  <Demo v-model="optionsValues" title="Aria" :options="options">
    <Aria v-bind="optionsValues"/>
  </Demo>
</template>