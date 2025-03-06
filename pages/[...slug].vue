<script setup lang="ts">
import {useRoute} from 'vue-router'
import {useAsyncData} from '#app'
import {useI18n} from 'vue-i18n'
import {ref} from "vue";
import type {PageCollectionItemBase} from "@nuxt/content";

definePageMeta({layout: 'docs'})
const {locale, t} = useI18n()
const route = useRoute()
const {data: page} = await useAsyncData(() =>
    queryCollection(locale.value).path(route.path.replace(`/${locale.value}`, '') ?? "/").first())
let tabMenu = ref<PageCollectionItemBase[]>()
let surround = ref()
if (page.value?.id) {
  const regex = new RegExp(`([^/.]+)\\.${page.value.extension}$`);
  let category = page.value.id.match(regex)?.[1]
  category = category !== "index" ? `/${category}` : ""
  const path = route.path.replace(`/${locale.value}`, '').replace(category, "") ?? "/"
  const result = await useAsyncData(() => Promise.all([
    queryCollection(locale.value).where("path", "LIKE", `${path}%`).all(),
    queryCollectionItemSurroundings(locale.value, path, {fields: ['title', 'description']})
  ]), {transform: ([tabMenu, surround]) => ({tabMenu, surround})})
  tabMenu.value = result.data.value?.tabMenu
  surround.value = result.data.value?.surround
}
const tabMenuItems = computed(() => tabMenu.value?.map((item) => {
  const regex = new RegExp(`([^/.]+)\\.${item.extension}$`);
  const title = (item as any)?.name ?? item?.meta?.name ?? item.id.match(regex)?.[1]
  return {
    title: title === "index" ? "usage" : title,
    path: item.path
  }
}))
</script>

<template>
  <div class="px-6 md:px-8 lg:px-24 py-6 md:py-12 overflow-x-hidden flex-1">
    <DocTabMenu :tab-menu-items="tabMenuItems"/>
    <FButton v-if="page?.body.toc?.links?.length" mode="outline" class="w-max relative xl:hidden">
      {{ t('onPage') }}
      <FFixWindow stylePosition="fixed" position="bottom-left" eventOpen="click" eventClose="hover"
                  class="max-w-80 max-h-96 overflow-auto bg-neutral-100 dark:bg-neutral-800 p-5 text-left rounded-xl flex-col space-y-6 no-scrollbar border dark:border-neutral-800">
        <DocOutline collapsible :headers="page?.body.toc?.links"/>
      </FFixWindow>
    </FButton>
    <article class="w-full prose prose-stone dark:prose-invert max-w-none">
      <div v-if="page">
        <ContentRenderer :value="page"/>
      </div>
      <div v-else>
        <p>Page not found</p>
      </div>
    </article>
    <DocFooter :control="surround"/>
  </div>

  <div
      class="hidden xl:flex w-64 flex-shrink-0 py-12 pl-2 sticky top-[7.25rem] overflow-y-auto md:overflow-x-hidden h-[calc(100vh-7.25rem)] flex-col space-y-6 no-scrollbar">
    <DocOutline :headers="page?.body.toc?.links"/>
    <DocCommunity/>
    <div class="fixed bottom-0 z-10 w-64 h-12 bg-gradient-to-b from-transparent to-neutral-100 dark:to-neutral-900"/>
  </div>
</template>
