<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {fruits} from "~/components/demo/select/dataForExample";

const {locale} = useI18n()
const data = ref(fruits[locale.value])
const selectedValues = ref()
</script>

<template>
  <Select :dataSelect="data" v-model="selectedValues"/>
</template>