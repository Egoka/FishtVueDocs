<script setup lang="ts">
import type {DemoOption} from "~/components/demo/index.vue";
import type {SelectProps} from "#fishtvue/select";
import {countries} from "~/components/demo/select/dataForExample";
import {useI18n} from "vue-i18n";

const {locale} = useI18n()
const data = ref(countries[locale.value])
const optionsValues = reactive<SelectProps>({})
const options = computed<DemoOption[]>(() => ([
  {
    nameComp: "dataSelect",
    modelValue: optionsValues["dataSelect"],
    label: "Data Select",
    typeComp: "select",
    multiple: true,
    maxVisible: 2,
    classSelect: "w-full",
    dataSelect: data.value
  },
  // {
  //   nameComp: "mode",
  //   modelValue: optionsValues["mode"],
  //   label: "Mode",
  //   typeComp: "select",
  //   dataSelect: ["filled", "outlined", "underlined"]
  // },
  // {nameComp: "autoFocus", modelValue: optionsValues["autoFocus"], label: "Auto focus", typeComp: "switch"},
  // {nameComp: "label", modelValue: optionsValues["label"], label: "Label", typeComp: "input"},
  // {nameComp: "placeholder", modelValue: optionsValues["placeholder"], label: "Placeholder", typeComp: "input"},
  // {nameComp: "autocomplete", modelValue: optionsValues["autocomplete"], label: "Autocomplete", typeComp: "select", dataSelect: ["on", "off"]},
  // {nameComp: "maskInput", modelValue: optionsValues["maskInput"], label: "Mask", typeComp: "select", dataSelect: ["phone", "number", "price"]},
  // {nameComp: "clear", modelValue: optionsValues["clear"], label: "Is clear", typeComp: "switch"},
  // {nameComp: "help", modelValue: optionsValues["help"], label: "Help text", typeComp: "input"},
  // {nameComp: "required", modelValue: optionsValues["required"], label: "Is required", typeComp: "switch"},
]))

function updateValue(name: keyof SelectProps, value: any) {
  optionsValues[name] = value
}
</script>

<template>
    <Demo title="Select" :options="options" @update:value="updateValue as any">
      <Select v-bind="optionsValues"/>
    </Demo>
</template>