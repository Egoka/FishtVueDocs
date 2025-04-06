<script setup lang="ts">
import type {FormProps, FieldInput} from "#fishtvue/form"
import {structureFields} from "~/components/demo/form/dataForExample";

const formValues = ref({username: '', email: '', password: ''})
const structure = ref<FormProps["structure"]>([{fields: [
    {
      ...structureFields(["username"])[0],
      insert:{
        beforeIcon: "solar:user-linear",
        beforeText: "Before",
        afterIcon: "solar:user-linear",
        afterText: "After",
      }
    } as FieldInput,
    {
      ...structureFields(["email"])[0],
      insert:{
        beforeIcon: "mdi:email-outline",
        beforeText: "Before",
        afterIcon: "mdi:email-outline",
        afterText: "After",
      }
    } as FieldInput,
    {
      ...structureFields(["password"])[0],
      insert:{
        beforeIcon: "ph:password-light",
        beforeText: "Before",
        afterIcon: "ph:password-light",
        afterText: "After",
      }
    } as FieldInput
  ]}])
</script>

<template>
  <Form :structure="structure" v-model:formFields="formValues"/>
</template>