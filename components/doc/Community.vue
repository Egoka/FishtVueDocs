<script setup lang="ts">
import {computed} from 'vue'
import {Icon} from '@iconify/vue'
import {useI18n} from "vue-i18n";

const {t} = useI18n()
const {site} = useAppConfig()
const links = computed(() => [
  {label: 'Edit this page', url: "editLink.value.url", icon: 'lucide:pencil-line'},
  {label: 'Star on GitHub', url: site.github, icon: 'lucide:star'},
])
</script>

<template>
  <div>
    <div class="pt-4">
      <div class="font-bold text-sm mb-2 text-neutral-800 dark:text-neutral-200">{{ t("Community") }}</div>
      <div class="space-y-3 lg:space-y-2 mt-4">
        <a
            v-for="link in links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            class="inline-flex gap-2 items-center font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm transition-colors duration-300"
        >
          <Icon :ssr="true" class="text-lg iconify iconify--lucide" :icon="link.icon"/>
          <span>{{ link.label }}</span>
          <Icon :ssr="true" class="text-base iconify iconify--lucide" icon="lucide:arrow-up-right"/>
        </a>
      </div>
    </div>
  </div>
</template>
