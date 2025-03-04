<script setup lang="ts">
import type {TocLink} from "~/app.config";

defineProps<{
  headers: TocLink[] | undefined
  root?: boolean
}>()

function onClick({target: el}: Event) {
  const id = (el as HTMLAnchorElement).href!.split('#')[1]
  const heading = document.getElementById(decodeURIComponent(id))
  heading?.focus({preventScroll: false})
}
</script>

<template>
  <ul :class="root ? 'root' : 'nested'">
    <li
        v-for="{ children, id, text } in headers"
        :key="text"
    >
      <a
          class="outline-link block whitespace-nowrap overflow-hidden text-ellipsis text-neutral-600  dark:text-neutral-400 data-[active]:text-neutral-800 dark:data-[active]:text-neutral-200 hover:text-neutral-800  dark:hover:text-neutral-200 text-sm leading-8 w-full transition-colors duration-300"
          :class="{ 'font-medium': root }"
          :href="`#${id}`"
          :title="text"
          @click="onClick"
      >
        {{ text }}
      </a>
      <template v-if="children?.length">
        <DocOutlineItem :headers="children"/>
      </template>
    </li>
  </ul>
</template>

<style scoped>
.root {
  position: relative;
  z-index: 1;
  padding-right: 16px;
  padding-left: 16px;
}

.nested {
  padding-left: 16px;
}

.outline-link.nested {
  padding-left: 13px;
}
</style>
