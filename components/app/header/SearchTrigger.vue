<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {Icon} from "@iconify/vue";
import {useScroll} from "@vueuse/core";

const {arrivedState} = useScroll(globalThis.window)
const {top} = toRefs(arrivedState)
const {locale, t} = useI18n()
const isOpenDialogWindow = ref(false)
const {data: surround} = await useAsyncData('foo-surround', () =>
        queryCollectionSearchSections(locale.value)
)
console.log("surround", surround.value)
</script>

<template>
  <FButton mode="outline" @click="isOpenDialogWindow = true" class="m-0 transition-colors duration-300" :class="[!top?'border-transparent bg-neutral-50 dark:bg-neutral-900':'border-neutral-200']">
    <Icon :ssr="true" icon="material-symbols:search-rounded" class="h-5 w-5 text-neutral-600 dark:text-neutral-400"/>
    <span class="hidden md:inline-flex w-24 lg:w-20 text-left">{{ t("Search") }}</span>
    <span class="hidden md:inline-flex w-max text-xs"><kbd>⌘ K</kbd></span>
  </FButton>
  <ClientOnly>
    <FDialog v-model:model-value="isOpenDialogWindow" closeButton notAnimate toTeleport="#__nuxt" position="top"
             class="top-30 left-1/2 -translate-x-1/4">
      <div class="size-52">Data</div>
    </FDialog>
  </ClientOnly>
</template>

<style scoped>

</style>