<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {countries} from "~/components/demo/select/dataForExample";

const {locale} = useI18n()
const data = ref(countries[locale.value])
const selectedValue = ref()
</script>

<template>
  <Select
      v-model="selectedValue"
      :dataSelect="data"
      classSelect="text-red-200/50 dark:text-red-600/50 bg-[size:10px_10px] bg-fixed bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,_transparent_0,_transparent_50%)]"
      classSelectList="text-red-950/50 dark:text-red-50/50 bg-[size:10px_10px] bg-fixed bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,_transparent_0,_transparent_50%)]"
  />
</template>