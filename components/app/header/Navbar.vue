<script setup lang="ts">
import {Icon} from '@iconify/vue'
import {useRoute} from 'vue-router'
import {useI18n} from "vue-i18n";
import {useScroll} from "@vueuse/core";

const route = useRoute()
const {locale} = useI18n()
const {theme} = useAppConfig()

const {data: navigation} = await useAsyncData(route.path, () =>
    queryCollectionNavigation(locale.value, ['icon'])
)
const isSidebarOpen = ref(false)
watch(() => route.path, () => {
  isSidebarOpen.value = false
})
const {arrivedState} = useScroll(globalThis.window)
const {top} = toRefs(arrivedState)
</script>

<template>
  <nav class="hidden md:flex items-center">
    <AppHeaderSearchTrigger/>
    <DocThemeToggle/>
    <NuxtLink
        v-for="link in theme.socialLinks"
        :key="link.link"
        :to="link.link"
        :aria-label="link.icon"
        target="_blank"
        class="w-9 h-9 bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted flex items-center justify-center rounded-lg text-xl flex-shrink-0"
    >
      <Icon :ssr="true" :icon="`simple-icons:${link.icon}`"/>
    </NuxtLink>
  </nav>

  <div class="md:hidden flex flex-row gap-2">
    <AppHeaderSearchTrigger/>
    <FButton mode="outline" @click="isSidebarOpen = true" class="m-0 px-2"
             :class="[!top?'border-transparent bg-neutral-50 dark:bg-neutral-900':'border-neutral-200']">
      <Icon :ssr="true" icon="lucide:menu" class="text-lg text-neutral-800 dark:text-neutral-200"/>
    </FButton>
    <FDialog v-model="isSidebarOpen" position="left" close-button without-margin
             class="bg-white dark:bg-neutral-900 h-screen border border-neutral-200 dark:border-neutral-700 rounded-none !pt-16">
      <div class="flex items-center justify-center">
        <span class="font-semibold mr-12">Appearance</span>
        <DocThemeToggle/>
      </div>
      <FSeparator class="my-2" :gradient="5"></FSeparator>
      <DocSidebar :items="navigation ?? []"/>
    </FDialog>
  </div>
</template>