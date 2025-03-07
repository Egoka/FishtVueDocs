<script lang="ts">
interface CardProps {
  to?: string
  target?: "_blank" | string
  icon?: string
  title?: string
}

interface CardSlots {
  default(props?: {}): any
}
</script>

<script setup lang="ts">
import {computed} from 'vue'

defineOptions({inheritAttrs: false})

const props = defineProps<CardProps>()
const slots = defineSlots<CardSlots>()

const classes = ref<Record<"base" | "icon" | "title" | "description" | "externalIcon", string>>({
  base: "group relative block p-4 sm:p-6 border border-dashed " +
      "rounded-sm transition-colors " +
      "border-neutral-200 dark:border-neutral-800 " +
      "bg-neutral-50 dark:bg-neutral-800 " +
      "hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 " +
      "hover:border-theme-500 dark:hover:border-theme-400",
  icon: "size-7 sm:size-6 m-2 block text-neutral-900 dark:text-neutral-white",
  title: "text-neutral-900 dark:text-white text-lg font-semibold",
  description: "text-[15px] text-neutral-500 dark:text-neutral-400",
  externalIcon: "size-4 align-top absolute right-2 top-2 " +
  "text-neutral-400 dark:text-neutral-500 " +
  "group-hover:text-neutral-900 dark:group-hover:text-white " +
  "pointer-events-none transition-colors " + props.title?.length ? "mt-1" : ""
})

const target = computed(() => props.target || (!!props.to && props.to.startsWith('http') ? '_blank' : undefined))

const ariaLabel = computed(() => (props.title || 'Card link').trim())
</script>

<template>
  <div :class="classes.base">
    <NuxtLink
        v-if="to"
        :aria-label="ariaLabel"
        v-bind="{ to, target, ...$attrs }"
        class="focus:outline-none"
        tabindex="-1">
      <span class="absolute inset-0" aria-hidden="true"/>
    </NuxtLink>

    <CodeIcon v-if="!!to && target === '_blank'" ssr icon="uim:arrow-up-right" :class="classes.externalIcon"/>
    <div class="flex gap-1 sm:gap-3 items-center mb-2">
      <CodeIcon v-if="icon" ssr :icon="icon" :class="classes.icon"/>
      <p :class="classes.title">{{ title }}</p>
    </div>

    <p v-if="!!slots.default" :class="classes.description">
      <slot mdc-unwrap="p"/>
    </p>
  </div>
</template>
