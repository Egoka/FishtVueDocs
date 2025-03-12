<script lang="ts">
import type {GroupMenu} from "fishtvue/menu";
import type {GeneratedLocale} from "@intlify/core-base";

type groupLocale = GroupMenu & {
  code: GeneratedLocale
}
</script>
<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {locale, locales, setLocale} = useI18n()
const groupsLocales = computed(()=>([{
  items: locales.value?.map((loc)=>({
    title: loc.name,
    icon: `flag:${loc.flag}-4x3`,
    code: loc.code,
    class: locale.value === loc.code ? "bg-neutral-200 dark:bg-neutral-900" : ""
  }))
}]))
function selectLocale(item: groupLocale){
  console.log("item.code", item.code)
  setLocale(item.code)
}
</script>

<template>
  <FButton mode="ghost" class="px-2 size-9" aria-label="switchTitle">
    <AppIcons icon="meteor-icons:language" class="w-6 "/>
    <FFixWindow eventOpen="click" eventClose="hover" position="bottom">
      <FMenu :groups="groupsLocales" :styles="{class :{itemIcon: 'w-6 opacity-100 rounded'}}" @on-click="(_:any, item:groupLocale) => selectLocale(item)"/>
    </FFixWindow>
  </FButton>
</template>