<script setup lang="ts">
import {ref, watchPostEffect} from 'vue'

const colorMode = useColorMode()
const isDark = ref()
const icon = ref()
const duration= ref(false)
const icons:Record<any, string> = {
  light: "lucide:sun",
  dark: "lucide:moon-star",
  system: ""
}
const switchTitle = ref('')
watch(() => colorMode.value, () => {
  isDark.value = colorMode.value === 'dark'
  icon.value = icons[colorMode.value]
  setTimeout(() => duration.value = icon.value?.length, 100)
}, {immediate: true})
watch(isDark,(value)=>{
  colorMode.preference = value ? 'dark' : 'light'
})

watchPostEffect(() => {
  switchTitle.value = isDark.value
    ? 'Switch to light theme'
    : 'Switch to dark theme'
})
</script>

<template>
  <FButton mode="ghost" class="px-2 size-9" aria-label="switchTitle" @click="isDark = !isDark">
    <transition leave-active-class="transition-opacity ease-in duration-500" leave-from-class="opacity-100" leave-to-class="opacity-0"
                enter-active-class="transition-opacity ease-in duration-500" enter-from-class="opacity-0" enter-to-class="opacity-100">
      <AppIcons v-show="duration" :icon="icon" class="size-5"/>
    </transition>
    <FFixWindow :delay="10" class="hidden lg:flex lg:border-transparent px-2 py-0.5 rounded-xs bg-neutral-100 dark:bg-neutral-900">Switch theme</FFixWindow>
  </FButton>
</template>
