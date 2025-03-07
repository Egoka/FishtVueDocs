<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps<{
  ssr?: boolean;
  icon: string;
  class?: any
}>()
</script>

<template>
  <Icon v-if="icon" :ssr="ssr" :icon="icon" :class="props.class" />
</template>
