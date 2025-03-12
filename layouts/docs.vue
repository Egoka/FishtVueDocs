<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {locale} = useI18n()
const {data: navigation, refresh} = useAsyncData(`navigation-${locale.value}`, () =>
    queryCollectionNavigation(locale.value, ['icon', "name"])
)
watch(()=>locale.value, async ()=> {
  await refresh()
  console.log("refreshed", navigation.value)
})
</script>

<template>
  <AppHeader/>
  <div class="max-w-[1440px] w-full h-full grow">
    <div class="w-full">
      <div
          class="z-0 w-full h-max absolute top-0 left-0 inset-0 pointer-events-none flex justify-center overflow-hidden">
        <div class="w-[108rem] flex-none flex justify-end">
          <img class="w-[90rem] flex-none max-w-none" decoding="async" src="/new-bg.png" alt="backdrop">
        </div>
      </div>

      <main class="flex flex-col md:flex-row">
        <aside
            v-if="navigation?.length"
            class="hidden md:block w-[20rem] flex-shrink-0 py-4 pl-4 pr-4 sticky top-[7.25rem] h-full overflow-y-auto max-h-[calc(100vh-7.25rem)]">
          <DocSidebar :items="navigation ?? []"/>
          <div class="h-6 w-full"/>
        </aside>
        <slot/>
      </main>
    </div>
  </div>
</template>