<script setup lang="ts">
import type {DemoOption} from "~/components/demo/index.vue";
import type {InputProps} from "#fishtvue/input";

const optionsValues = reactive<InputProps>({})
const options = computed<DemoOption[]>(()=>([
  {nameComp: "type", modelValue: optionsValues["type"], label: "Type", typeComp: "select", dataSelect: ["text", "number", "email", "password"]},
  {nameComp: "mode", modelValue: optionsValues["mode"], label: "Mode", typeComp: "select", dataSelect: ["filled", "outlined", "underlined"]},
  {nameComp: "autoFocus", modelValue: optionsValues["autoFocus"], label: "Auto focus", typeComp: "switch"},
  {nameComp: "label", modelValue: optionsValues["label"], label: "Label", typeComp: "input"},
  {nameComp: "placeholder", modelValue: optionsValues["placeholder"], label: "Placeholder", typeComp: "input"},
  {nameComp: "autocomplete", modelValue: optionsValues["autocomplete"], label: "Autocomplete", typeComp: "select", dataSelect: ["on", "off"]},
  {nameComp: "maskInput", modelValue: optionsValues["maskInput"], label: "Mask", typeComp: "select", dataSelect: ["phone", "number", "price"]},
  {nameComp: "clear", modelValue: optionsValues["clear"], label: "Is clear", typeComp: "switch"},
  {nameComp: "help", modelValue: optionsValues["help"], label: "Help text", typeComp: "input"},
  {nameComp: "required", modelValue: optionsValues["required"], label: "Is required", typeComp: "switch"},
]))
function updateValue(name: keyof InputProps, value: any) {
  optionsValues[name] = value
}
</script>

<template>
  <Demo title="Input" :options="options" @update:value="updateValue as any">
    <Input v-bind="optionsValues"/>
  </Demo>
</template>