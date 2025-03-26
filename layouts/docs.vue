<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {locale} = useI18n()
const {data: navigation, refresh} = useAsyncData(`navigation-${locale.value}`, () =>
    queryCollectionNavigation(locale.value, ['icon', 'name'])
)
watch(() => locale.value, async () => await refresh())
</script>

<template>
  <AppHeader/>
  <div class="max-w-[1440px] w-full h-full grow">
    <div class="w-full">
      <div
          class="-z-1 w-full h-max absolute top-0 left-0 inset-0 pointer-events-none flex justify-center overflow-hidden">
        <div class="w-[108rem] flex-none flex justify-end h-screen">
          <!--          <img class="w-[90rem] flex-none max-w-none" decoding="async" src="/new-bg.png" alt="backdrop">-->
<!--          <div data-orientation="horizontal" class="isolate relative h-16">-->
            <div
                class="absolute z-1 rounded-full bg-theme-600 dark:bg-theme-800 blur-[300px] size-60 sm:size-80 transform -translate-x-1/2 left-0 -translate-y-80">
              <div
                  class="absolute z-1 rounded-full bg-theme-600 dark:bg-theme-800 blur-[300px] size-60 sm:size-80 transform -translate-x-1/2 left-0 -translate-y-80"></div>
            </div>
<!--            <div-->
<!--                class="absolute -z-10 inset-0 h-full w-full bg-[radial-gradient(circle,var(&#45;&#45;color-theme-300)_1px,transparent_1px)] dark:bg-[radial-gradient(circle,var(&#45;&#45;color-theme-900)_1px,transparent_1px)] bg-[size:20px_20px]"></div>-->
            <ClientOnly>
              <Doc039/>
            </ClientOnly>
        </div>
      </div>

      <main class="flex flex-col md:flex-row">
        <aside
            v-if="navigation?.length"
            class="hidden md:block w-[15rem] flex-shrink-0 py-4 pl-4 pr-4 sticky top-[7.25rem] h-full overflow-y-auto max-h-[calc(100vh-13rem)]">
          <DocSidebar :items="navigation ?? []"/>
          <div class="h-6 w-full"/>
        </aside>
        <slot/>
      </main>
    <AppFooter/>
    </div>
  </div>
</template>