<template>
  <Accordion :dataSource="[
  { title: 'Default Title', subtitle: 'Uses default title slot' },
  { title: 'Custom Title', subtitle: 'This section has a custom title' }
]">
    <template #title="{ title }">
    <span>
      🔖 {{ title }}
    </span>
    </template>
  </Accordion>
</template>