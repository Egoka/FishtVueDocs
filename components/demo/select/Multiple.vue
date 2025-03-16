<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {countries} from "~/components/demo/select/dataForExample";

const {locale} = useI18n()
const data = ref(countries[locale.value])
const selectedValues = ref()
</script>

<template>
  <Select v-model="selectedValues" :dataSelect="data" multiple/>
</template>