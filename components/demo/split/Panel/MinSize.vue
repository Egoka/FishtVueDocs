<template>
  <Split
      class="relative rounded-lg border dark:border-gray-800"
      :styles="{panel: 'h-28 flex justify-center items-center font-semibold text-xl'}"
      :panels="[
       { name: 'top', size: 100, minSize: 150 }, // Starts with 150px due to minSize
       { name: 'bottom', size: 300, minSize: 150 }
     ]"
      direction="vertical"
      units="pixels">
    <template #top="{size}">
      <div>Top Panel</div>
      <div class="absolute bottom-0 right-0 p-2 font-extralight text-base text-neutral-700 dark:text-neutral-500">
        <span class="text-sm text-neutral-700 dark:text-neutral-600">Size: </span>
        {{Math.round(size)}}
        <span class="text-sm text-neutral-700 dark:text-neutral-600">px</span>
      </div>
    </template>
    <template #bottom="{size}">
      <div>Bottom Panel</div>
      <div class="absolute bottom-0 right-0 p-2 font-extralight text-base text-neutral-700 dark:text-neutral-500">
        <span class="text-sm text-neutral-700 dark:text-neutral-600">Size: </span>
        {{Math.round(size)}}
        <span class="text-sm text-neutral-700 dark:text-neutral-600">px</span>
      </div>
    </template>
  </Split>
</template>
<script setup lang="ts">
</script>