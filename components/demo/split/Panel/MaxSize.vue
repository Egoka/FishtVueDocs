<template>
  <Split
      class="relative rounded-lg border dark:border-gray-800"
      :styles="{panel: 'h-28 flex justify-center items-center font-semibold text-xl'}"
      :panels="[
       { name: 'left', size: 50, maxSize: 60 }, // Cannot exceed 60%
       { name: 'right', size: 50, minSize: 40, maxSize: 50 } // `maxSize` will equal `minSize` (40%)
     ]">
    <template #left="{size}">
      <div>Left Panel</div>
      <div class="absolute bottom-0 right-0 p-2 font-extralight text-base text-neutral-700 dark:text-neutral-500">
        <span class="text-sm text-neutral-700 dark:text-neutral-600">Size: </span>
        {{Math.round(size)}}
        <span class="text-sm text-neutral-700 dark:text-neutral-600">%</span>
      </div>
    </template>
    <template #right="{size}">
      <div>Right Panel</div>
      <div class="absolute bottom-0 right-0 p-2 font-extralight text-base text-neutral-700 dark:text-neutral-500">
        <span class="text-sm text-neutral-700 dark:text-neutral-600">Size: </span>
        {{Math.round(size)}}
        <span class="text-sm text-neutral-700 dark:text-neutral-600">%</span>
      </div>
    </template>
  </Split>
</template>