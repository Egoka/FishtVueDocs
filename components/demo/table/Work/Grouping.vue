<script setup lang="ts">
import generateData from "~/components/demo/table/dataForExample";
import {useI18n} from "vue-i18n";
import type {TableProps} from "fishtvue/table";
import { useAsyncData } from "#imports";

const {t} = useI18n()
const { data } = useAsyncData("tableWorkGrouping", () =>
    Promise.resolve(generateData(10, 'fruits', ['name','color','weightGrams']))
);
const columns = ref<TableProps["columns"]>([
  { dataField: 'name', caption: t('caption.name') },
  { dataField: 'color', caption: t('caption.color') },
  { dataField: 'weightGrams', caption: t('caption.weightGrams') }
])
</script>

<template>
  <Table
      grouping="color"
      :countVisibleRows="5"
      :data-source="data as any[]"
      :columns="columns">
  </Table>
</template>