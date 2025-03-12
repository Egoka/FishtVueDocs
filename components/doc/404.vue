<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n()
</script>

<template>
  <div class="w-full sm:w-3/4 flex flex-col justify-center items-center h-[calc(100vh-20rem)] sm:h-[30rem]">
    <AppLogo class="w-6 md:w-7 fill-neutral-400 dark:fill-neutral-500"/>
    <div
        class="w-3/4 sm:w-full border-y border-neutral-200 dark:border-neutral-700 m-8 p-8 md:my-8 md:py-16 md:mx-0 md:px-0">
      <h1 class="font-asap text-center text-3xl md:text-5xl text-neutral-600 dark:text-neutral-300">
        {{ t("PageNotFound") }}
      </h1>
    </div>
    <NuxtLink to="/">
      <FButton mode="outline" class="mt-8">{{ t("GoBackHome") }}</FButton>
    </NuxtLink>
  </div>
</template>