<script lang="ts">
import type {GroupMenu} from "fishtvue/menu";
import type {GeneratedLocale} from "@intlify/core-base";

type groupLocale = GroupMenu & {
  code: GeneratedLocale
}
</script>
<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t, locale, locales, setLocale} = useI18n()
const groupsLocales = computed(()=>([{
  items: locales.value?.map((loc)=>({
    title: loc.name,
    icon: `flag:${loc.flag}-4x3`,
    code: loc.code,
    class: locale.value === loc.code ? "bg-neutral-200 dark:bg-neutral-900" : ""
  }))
}]))
function selectLocale(item: groupLocale){
  setLocale(item.code)
}
</script>

<template>
  <FButton mode="ghost" class="button-locales px-2 size-9">
    <AppIcons icon="meteor-icons:language" class="w-6 "/>
    <FFixWindow :delay="3"
                class="hidden lg:flex lg:border-transparent px-2 py-0.5 rounded-xs bg-neutral-100 dark:bg-neutral-900">
      {{ t("SwitchLanguage") }}
    </FFixWindow>
  </FButton>
  <FFixWindow el=".button-locales" eventOpen="click" eventClose="click" position="bottom">
    <FMenu
        :groups="groupsLocales"
        :styles="{class :{itemIcon: 'w-6 opacity-100 rounded'}}"
        @on-click="(_:any, item:groupLocale) => selectLocale(item)"
    />
  </FFixWindow>
</template>