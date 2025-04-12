<template>
  <Split
      class="relative rounded-lg border dark:border-gray-800"
      :styles="{panel: 'h-28 flex justify-center items-center font-semibold text-xl'}":panels="[
  { name: 'resizable1', },
  { name: 'resizable2', },
  { name: 'static', size: 30, disabled: true }, // Disabled resizing
  { name: 'resizable3' },
  { name: 'resizable4' }
  ]">
    <template #static>
      <div class="m-2">Static Panel</div>
    </template>
    <template #resizable1>
      <div class="m-2">Resizable Panel</div>
    </template>
    <template #resizable2>
      <div class="m-2">Resizable Panel</div>
    </template>
    <template #resizable3>
      <div class="m-2">Resizable Panel</div>
    </template>
    <template #resizable4>
      <div class="m-2">Resizable Panel</div>
    </template>
  </Split>
</template>