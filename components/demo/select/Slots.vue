<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {countries} from "~/components/demo/select/dataForExample";

const {locale} = useI18n()
const data = ref(countries[locale.value])
const selectedValue = ref()
</script>

<template>
  <Select v-model="selectedValue" :dataSelect="data">
    <template #values="{ selected }">
      <Badge>{{ selected.marker }}</Badge>
    </template>
    <template #item="{ item }">
      <div>{{ item.marker }}</div>
    </template>
  </Select>
</template>