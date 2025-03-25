<script setup lang="ts">
import type {DemoOption} from "~/components/demo/index.vue";
import type {SelectProps} from "#fishtvue/select";
import {colors} from "~/components/demo/select/dataForExample";
import {useI18n} from "vue-i18n";

const {locale} = useI18n()
const optionsValues = ref<SelectProps>({
  dataSelect: [colors[locale.value][0]]
})
const options = computed<DemoOption[]>(() => ([
  {nameComp: "mode", modelValue: optionsValues.value["mode"], label: "Mode", typeComp: "select", dataSelect: ["filled", "outlined", "underlined"]},
  {
    nameComp: "dataSelect",
    modelValue: optionsValues.value["dataSelect"],
    label: "Data Select",
    typeComp: "select",
    multiple: true,
    maxVisible: 2,
    classSelect: "w-full",
    dataSelect: colors[locale.value]
  },
  {nameComp: "multiple", modelValue: optionsValues.value["multiple"], label: "Multiple", typeComp: "switch"},
  {nameComp: "maxVisible", modelValue: optionsValues.value["maxVisible"], label: "Max visible", disabled: !optionsValues.value["multiple"], help: "Maximum visible number of selected items", typeComp: "input", type: "number"},
  {nameComp: "required", modelValue: optionsValues.value["required"], label: "Is required", typeComp: "switch"},
]))
</script>

<template>
    <Demo v-model="optionsValues" title="Select" :options="options">
      <Select v-bind="optionsValues"/>
    </Demo>
</template>