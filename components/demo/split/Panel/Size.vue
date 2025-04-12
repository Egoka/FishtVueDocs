<template>
  <Split
      class="relative rounded-lg border dark:border-gray-800"
      :styles="{panel: 'h-28 flex justify-center items-center font-semibold text-xl'}"
      :panels="[
      { name: 'panel1', size: 70 },
      { name: 'panel2' }
    ]">
    <template #panel1="{size}">
      <div>Panel 1 Content</div>
      <div class="absolute bottom-0 right-0 p-2 font-extralight text-base text-neutral-700 dark:text-neutral-500">
        <span class="text-sm text-neutral-700 dark:text-neutral-600">Size: </span>
        {{Math.round(size)}}
        <span class="text-sm text-neutral-700 dark:text-neutral-600">%</span>
      </div>
    </template>
    <template #panel2="{size}">
      <div>Panel 2 Content</div>
      <div class="absolute bottom-0 right-0 p-2 font-extralight text-base text-neutral-700 dark:text-neutral-500">
        <span class="text-sm text-neutral-700 dark:text-neutral-600">Size: </span>
        {{Math.round(size)}}
        <span class="text-sm text-neutral-700 dark:text-neutral-600">%</span>
      </div>
    </template>
  </Split>
</template>