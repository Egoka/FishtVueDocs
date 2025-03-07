<script lang="ts">
export type SearchSections = {
  id: string;
  title: string;
  titles: string[];
  level: number;
  content: string;
}
</script>
<script setup lang="ts">
import {useFuse, type UseFuseOptions} from '@vueuse/integrations/useFuse'
import {useI18n} from "vue-i18n";
import {Icon} from "@iconify/vue";
import {useScroll} from "@vueuse/core";
import type {GroupMenu} from "fishtvue/menu";
import type {FuseResultMatch} from "fuse.js";

const {arrivedState} = useScroll(globalThis.window)
const {top} = toRefs(arrivedState)
const {locale, t} = useI18n()
const isOpenDialogWindow = ref(false)
const {data} = await useAsyncData('search', () =>
        Promise.all([
          queryCollectionSearchSections(locale.value),
          queryCollectionNavigation(locale.value, ['icon'])
        ]),
    {
      transform: ([files, navigation]) => ({files, navigation})
    })
const files = computed<SearchSections[]>(() => data.value?.files ?? [])
// console.log("files", files.value)
const navigation = computed(() => data.value?.navigation)
const icons = ref<Record<number, string>>({
  1: "mage:book",
  2: "stash:hash-solid",
  3: "stash:hash-light"
})
const fuseOptions = computed(() => ({
  "fuseOptions": {
    "keys": ['title', 'content'],
    "ignoreLocation": true,
    "ignoreDiacritics": false,
    "threshold": 0.2,
    "includeMatches": true,
  },
  "resultLimit": 20,
  "matchAllWhenSearchEmpty": true
} as UseFuseOptions<SearchSections>))
const searchTerm = ref()
// const fuse = new Fuse(files.value, fuseOptions.value.fuseOptions)
// const fuseResults = ref<FuseResult<SearchSections>[]>()
// watch(searchTerm, (value) => fuseResults.value = fuse.search(value ?? ""), {immediate: true})
const {results: fuseResults} = useFuse<SearchSections>(searchTerm, files, fuseOptions.value)

const menu = computed(() => navigation.value
    ?.map((item) => {
      return {
        title: item.title,
        separator: {
          icon: item.icon, gradient: 5
        },
        items: fuseResults.value?.filter((i) => i.item.id.startsWith(item?.path))
            .filter((i) => i.item.content?.length && i.item.id.includes("#"))
            .map((i) =>
                ({
                  title: i.item.title,
                  path: i.item.id,
                  level: i.item?.level,
                  icon: i.item?.level ? icons.value?.[i.item?.level] : undefined,
                  info: highlightIndices(i.matches?.find(m => m.key === "content"))
                }))
            .filter((i) => !(!searchTerm.value?.length && i?.level !== 1))
      } as GroupMenu
    })
    .filter(item => item.items?.length)
)

function highlightIndices(match: FuseResultMatch | undefined) {
  if (!match) return undefined
  if (!match?.value) return undefined
  const {value} = match
  if (!searchTerm?.value) return value;

  const regex = new RegExp(searchTerm.value, 'g');
  return value.replace(regex, `<mark>${searchTerm.value}</mark>`);
}

function toPath(item: any) {
  isOpenDialogWindow.value = false
  navigateTo(item.path ?? "")
}
</script>

<template>
  <FButton mode="outline" @click="isOpenDialogWindow = true" class="m-0 transition-colors duration-300">
    <Icon :ssr="true" icon="material-symbols:search-rounded" class="h-5 w-5 text-neutral-600 dark:text-neutral-400"/>
    <FFixWindow :delay="10" class="hidden lg:flex lg:border-transparent px-2 py-0.5 rounded-xs bg-neutral-100 dark:bg-neutral-900">{{ t("Search") }}</FFixWindow>
<!--    <span class="hidden md:inline-flex w-24 lg:w-20 text-left">{{ t("Search") }}</span>-->
<!--    <span class="hidden md:inline-flex w-max text-xs"><kbd>⌘ K</kbd></span>-->
  </FButton>
  <ClientOnly>
    <FDialog v-model:model-value="isOpenDialogWindow" notAnimate toTeleport="#__nuxt" position="top"
             class="top-20 left-1/2 -translate-x-1/4 p-0 sm:max-w-xl">
      <FInput
          ref="selectSearch"
          v-model="searchTerm"
          :placeholder="t('Searching')"
          auto-focus
          label-mode="vanishing"
          autocomplete="off"
          mode="outlined"
          class-input="text-lg"
          class-body="m-2 pb-2 mb-0 z-20 bg-white dark:bg-neutral-950"
          class="border-0 ring-0"
          clear
      >
        <template #before>
          <Icon :ssr="true" icon="material-symbols:search-rounded" class="h-5 w-5 text-gray-400 dark:text-gray-600"/>
        </template>
      </FInput>
      <FMenu
          class="w-full max-w-xl m-auto max-h-150 border-0 -mt-5 pt-10 "
          :groups="menu"
          :styles="{ class: { title: 'p-0', item: 'items-start', itemInfo: 'max-w-[20rem]', itemIcon: 'size-5 text-theme-600 dark:text-theme-300' }}"
          @on-click="(_:any, item: any) => toPath(item)">
        <template #title>
        </template>
      </FMenu>
    </FDialog>
  </ClientOnly>
</template>

<style scoped>
:global(html mark) {
  color: var(--color-theme-50);
  background-color: var(--color-theme-700);
  border-radius: 3px;
  padding: 0 2px;
}

:global(html.dark mark) {
  color: var(--color-theme-100);
  background-color: var(--color-theme-700);
}
</style>