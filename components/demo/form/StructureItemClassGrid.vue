<script setup lang="ts">
import type {FormProps, FormExpose} from "#fishtvue/form"
import {structureFields} from "./dataForExample";
import {useI18n} from "vue-i18n";

const {t} = useI18n()
const formValues = ref({username: '', email: '', password: '', additionalInformation: false, phone: '', price: '', age: ''})
const structure = ref<FormProps["structure"]>([
  {
    title: t("content.user.title"),
    description: t("content.user.description"),
    classGrid: "structure-first-class rounded-sm border border-gray-200 dark:border-gray-700 m-1",
    fields: structureFields(["username", "additionalInformation"])},
  {
    title: t("content.additionalInformation.title"),
    description: t("content.additionalInformation.description"),
    classGrid: "structure-second-class rounded-sm border border-gray-200 dark:border-gray-700 m-1",
    isHidden: true,
    fields: [{...structureFields(["email"])[0], classCol: 'sm:col-span-6'}]
  },
])
const formTest = ref<FormExpose>()
watch(formValues, () => {
  formTest.value?.setStructureParam(1, "isHidden", !formValues.value.additionalInformation)
}, {deep: true})
</script>

<template>
  <Form
      ref="formTest"
      :structure="structure"
      class="w-72"
      v-model:formFields="formValues">
    <template #itemTitle="{structure}">
      <h2
          v-if="structure?.title?.length"
          class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-100">
        {{ structure?.title }}
      </h2>
      <p
          v-if="structure?.description?.length"
          class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
        {{ structure?.description }}
      </p>
    </template>
  </Form>
</template>

<style scoped>
:deep(.structure-first-class){
  padding: 10px;
  --pattern-fg: color-mix(in oklab, oklch(0.637 0.237 25.331) 40%, transparent);
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(315deg, var(--pattern-fg) 0, var(--pattern-fg) 2px, transparent 0, transparent 50%);
}
:deep(.structure-second-class){
  padding: 10px;
  --pattern-fg: color-mix(in oklab, oklch(0.705 0.213 47.604) 40%, transparent);
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(315deg, var(--pattern-fg) 0, var(--pattern-fg) 2px, transparent 0, transparent 50%);
}
</style>