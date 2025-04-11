<template>
  <Accordion :dataSource="[
  { title: 'Chevron Style', subtitle: 'Uses ChevronDown icon' },
  { title: 'Arrow Style', subtitle: 'Uses ArrowDownCircle icon' }
]" icon="ChevronDown">
  </Accordion>
  <Separator class="w-full h-20"></Separator>
  <Accordion :dataSource="[
  { title: 'Chevron Style', subtitle: 'Uses ChevronDown icon' },
  { title: 'Arrow Style', subtitle: 'Uses ArrowDownCircle icon' }
]" icon="ArrowDownCircle">
  </Accordion>
</template>