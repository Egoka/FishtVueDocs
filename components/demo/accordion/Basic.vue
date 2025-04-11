<template>

  <Accordion :dataSource="[
  { title: 'Section 1', subtitle: 'Content for section 1' },
  { title: 'Section 2', subtitle: 'Content for section 2', open: true },
  { title: 'Section 3', subtitle: 'Content for section 3' }
]">
  </Accordion>
  <Separator class="w-full h-20"></Separator>
  <Accordion :dataSource="[
  { title: 'FAQ 1', subtitle: 'Answer to FAQ 1' },
  { title: 'FAQ 2', subtitle: 'Answer to FAQ 2' }
]" :multiple="true">
  </Accordion>
</template>
<script lang="ts" setup>
</script>