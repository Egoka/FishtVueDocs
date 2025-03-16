<script setup lang="ts">
import type {DemoOption} from "~/components/demo/index.vue";
import type {SelectProps} from "#fishtvue/select";
import {countries} from "~/components/demo/select/dataForExample";
import {useI18n} from "vue-i18n";

const {locale} = useI18n()
const data = ref(countries[locale.value])
const optionsValues = reactive<SelectProps>({
  dataSelect: [data.value[0]]
})
const options = computed<DemoOption[]>(() => ([
  {nameComp: "mode", modelValue: optionsValues["mode"], label: "Mode", typeComp: "select", dataSelect: ["filled", "outlined", "underlined"]},
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
  {nameComp: "multiple", modelValue: optionsValues["multiple"], label: "Multiple", typeComp: "switch"},
  {nameComp: "maxVisible", modelValue: optionsValues["maxVisible"], label: "Max visible", help: "Maximum visible number of selected items", typeComp: "input", type: "number"},
  {nameComp: "required", modelValue: optionsValues["required"], label: "Is required", typeComp: "switch"},
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