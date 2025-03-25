<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {professions} from "~/components/demo/select/dataForExample";

const {locale} = useI18n()
const data = ref(professions[locale.value])
const selectedValues = ref()
</script>

<template>
  <Select autoFocus :dataSelect="data" v-model="selectedValues"/>
</template>