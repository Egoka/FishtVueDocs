<script setup lang="ts">
import generateData from "~/components/demo/table/dataForExample";
import {useI18n} from "vue-i18n";
import type {TableProps} from "fishtvue/table";
import { useAsyncData } from "#app";

const {t} = useI18n()
const { data } = useAsyncData("tableWorkToolbar", () =>
    Promise.resolve(generateData(5, 'fruits', ['name','color','weightGrams']))
);
const columns = ref<TableProps["columns"]>([
  { dataField: 'name', caption: t('caption.name') },
  { dataField: 'color', caption: t('caption.color') },
  { dataField: 'weightGrams', caption: t('caption.weightGrams') }
])
</script>

<template>
  <Table
      :toolbar="{ visible: true }"
      :data-source="data as any[]"
      :columns="columns">
      <template #toolbar>
        <div class="custom-toolbar-class w-full p-5 text-left font-semibold text-xl"> {{ t("nameTable") }} </div>
      </template>
  </Table>
</template>
<style scoped>
.custom-toolbar-class{
  --pattern-fg: color-mix(in oklab, var(--color-theme-500) 40%, transparent);
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(315deg, var(--pattern-fg) 0, var(--pattern-fg) 1px, transparent 0, transparent 50%);
}
</style>