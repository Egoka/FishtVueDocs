<script setup lang="ts">
import {useRoute} from 'vue-router'
import {useAsyncData} from '#app'
import {useI18n} from 'vue-i18n'
import {ref} from "vue";
import type {PageCollectionItemBase} from "@nuxt/content";

definePageMeta({layout: 'docs'})
const {locale, t} = useI18n()
const route = useRoute()
const path = computed(() => route.path.replace(`/${locale.value}`, '') ?? "/")
const {data: page} = await useAsyncData(`path-${path.value}`, () =>
    queryCollection(locale.value).path(path.value).first())
let tabMenu = ref<PageCollectionItemBase[]>()
let surround = ref()
if (page.value?.id) {
  const regex = new RegExp(`([^/.]+)\\.${page.value.extension}$`);
  let category = page.value.id.match(regex)?.[1]
  category = category !== "index" && !page.value.navigation ? `/${category}` : ""
  const path = route.path.replace(`/${locale.value}`, '').replace(category, "") ?? "/"
  const result = await useAsyncData(`path-addition-${path}`, () => Promise.all([
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
  <div class="px-6 md:px-8 lg:px-12 py-6 md:py-12 overflow-x-hidden flex-1">
    <DocTabMenu v-if="page" :tab-menu-items="tabMenuItems"/>
    <FButton v-if="page && page?.body.toc?.links?.length" mode="outline" class="w-max relative xl:hidden">
      {{ t('onPage') }}
      <FFixWindow stylePosition="fixed" position="bottom-left" eventOpen="click" eventClose="hover"
                  class="max-w-80 max-h-96 overflow-auto bg-neutral-100 dark:bg-neutral-800 p-5 text-left rounded-xl flex-col space-y-6 no-scrollbar border dark:border-neutral-800">
        <DocOutline v-if="page?.body.toc?.links?.length" :headers="page?.body.toc?.links"/>
      </FFixWindow>
    </FButton>
    <article class="w-full prose prose-stone dark:prose-invert max-w-none">
      <DocHeader v-if="page" :title="page?.title" :description="page?.description" :links="page?.links"/>
      <div v-if="page" class="mt-8 space-y-12">
        <ContentRenderer :value="page"/>
      </div>
      <template v-else>
        <Doc404/>
      </template>
    </article>
    <DocFooter v-if="page" :control="surround"/>
  </div>

  <div v-if="page"
      class="hidden xl:flex w-64 flex-shrink-0 py-12 pl-2 sticky top-[7.25rem] overflow-y-auto md:overflow-x-hidden h-[calc(100vh-15rem)] flex-col space-y-6 no-scrollbar">
    <DocOutline v-if="page?.body.toc?.links?.length" :headers="page?.body.toc?.links"/>
    <DocCommunity/>
    <div class="fixed bottom-0 z-10 w-64 h-12 bg-gradient-to-b from-transparent to-neutral-100 dark:to-neutral-900"/>
  </div>
</template>
