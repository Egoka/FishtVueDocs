<template>
  <Split
      class="relative rounded-lg border dark:border-gray-800"
      :styles="{panel: 'h-28 flex justify-center items-center font-semibold text-xl'}"
      :panels="[
      { name: 'panel1', size: 50 },
      { name: 'panel2', size: 50 }
    ]">
    <template #panel1>
      <div>Panel 1 Content</div>
    </template>
    <template #panel2>
      <div>Panel 2 Content</div>
    </template>
  </Split>
</template>