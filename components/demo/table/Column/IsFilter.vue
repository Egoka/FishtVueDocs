<script setup lang="ts">
import type {TableProps} from "fishtvue/table"
import generateData from "~/components/demo/table/dataForExample";
import {useI18n} from "vue-i18n";
import { useAsyncData } from "#imports";

const {t} = useI18n()
const { data } = useAsyncData("tableColumnIsFilter", () =>
    Promise.resolve(generateData(500, 'fruits', ['name', 'color', 'weightGrams', 'isTropical', 'originCountry', 'pricePerKg']))
);
const columns = ref<TableProps["columns"]>([
  {dataField: 'name', caption: t('caption.name'), isFilter: true},
  {dataField: 'color', type: 'select', isFilter: true, caption: t('caption.color')},
  {dataField: 'weightGrams', caption: t('caption.weightGrams'), isFilter: true}])
</script>

<template>
  <Table :data-source="data as any[]" :columns="columns" :countVisibleRows="5"></Table>
</template>