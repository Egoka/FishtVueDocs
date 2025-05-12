<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n()
const dialog = ref(false)
</script>

<template>
  <div class="relative">
    <Button @click="dialog = true">{{ t("button.dialog") }}</Button>
    <Dialog v-model="dialog" position="center" close-button class="p-0">
      <template #default="{closeDialog}">
        <div class="flex items-start justify-between p-4 border-b rounded-t border-gray-200 dark:border-gray-800">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white"> NEOM </h3>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Nature Reserve – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.
          </p>
          <img class="rounded-lg" src="https://images.unsplash.com/photo-1682687220989-cbbd30be37e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80" alt="">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Nature Reserve – NEOM, Saudi Arabia
          </p>
        </div>
        <!-- Modal footer -->
        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-800">
          <Button class="mx-2" mode="primary" @click="closeDialog">Скачать</Button>
          <Button class="mx-2 px-2" mode="ghost" @click="closeDialog"><Icons type="shopping-bag" class="h-4 w-4"/></Button>
          <Button class="mx-2 px-2" mode="ghost" @click="closeDialog"><Icons type="link" class="h-4 w-4"/></Button>
        </div>
      </template>
    </Dialog>
  </div>
</template>