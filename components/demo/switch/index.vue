<script setup lang="ts">
import type {DemoOption} from "~/components/demo/index.vue";
import type {SwitchProps} from "#fishtvue/switch";
import {colors} from "~/components/demo/select/dataForExample";
import {useI18n} from "vue-i18n";

const {locale} = useI18n()
const optionsValues = ref<SwitchProps>({})
const options = computed<DemoOption[]>(() => ([
  {nameComp: "mode", modelValue: optionsValues.value["mode"], label: "Mode", typeComp: "select", dataSelect: ["filled", "outlined", "underlined"]},
  {nameComp: "required", modelValue: optionsValues.value["required"], label: "Is required", typeComp: "switch"},
]))
</script>

<template>
  <Demo v-model="optionsValues" title="Switch" :options="options">
    <Switch v-bind="optionsValues"/>
  </Demo>
</template>