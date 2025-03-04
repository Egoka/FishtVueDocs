<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'reka-ui'
import { Icon } from '@iconify/vue'
import { ref, watchPostEffect } from 'vue'
import {useScroll} from "@vueuse/core";

const colorMode = useColorMode()
const isDark = ref(colorMode.value !== 'light')
onMounted(()=>{
  isDark.value = colorMode.value !== 'light'
})
const switchTitle = ref('')
watch(isDark,(value)=>{
  colorMode.preference = value ? 'dark' : 'light'
})

watchPostEffect(() => {
  switchTitle.value = isDark.value
    ? 'Switch to light theme'
    : 'Switch to dark theme'
})

const {arrivedState} = useScroll(globalThis.window)
const {top} = toRefs(arrivedState)
</script>

<template>
  <FButton mode="outline" class="px-2" :class="[!top?'border-transparent bg-neutral-50 dark:bg-neutral-900':'border-neutral-200']" aria-label="switchTitle" @click="isDark = !isDark">
    <Icon :ssr="true" :icon="!isDark? 'lucide:sun' : 'lucide:moon-star'" class="size-5" />
    <FFixWindow class="hidden lg:flex lg:border-transparent px-2 py-0.5 rounded-xs bg-neutral-100 dark:bg-neutral-900">Switch theme</FFixWindow>
  </FButton>
</template>
