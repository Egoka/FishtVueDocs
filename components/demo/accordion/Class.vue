<script lang="ts" setup>
const classRef = ref(false)
const classItem = ref(false)
const classTitle = ref(false)
const classSubtitle = ref(false)
</script>
<template>
  <div class="flex flex-wrap justify-center">
    <Switch v-model="classRef" label="class" switchingType="switch"/>
    <Switch v-model="classItem" label="classItem" switchingType="switch"/>
    <Switch v-model="classTitle" label="classTitle" switchingType="switch"/>
    <Switch v-model="classSubtitle" label="classSubtitle" switchingType="switch"/>
  </div>
  <Separator></Separator>
  <Accordion
      :class="classRef ? 'custom-accordion-class': ''"
      :classItem="classItem ? 'custom-accordion-class': ''"
      :classSubtitle="classSubtitle ? 'custom-accordion-class' : ''"
      :classTitle="classTitle ? 'custom-accordion-class': ''"
      :dataSource="[{ title: 'Styled Item', subtitle: 'Custom styles applied' }]">
  </Accordion>
</template>

<style scoped>
.custom-accordion-class {
  --pattern-fg: color-mix(in oklab, var(--color-theme-500) 40%, transparent);
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(315deg, var(--pattern-fg) 0, var(--pattern-fg) 1px, transparent 0, transparent 50%);
}

:deep(.custom-accordion-class) {
  --pattern-fg: color-mix(in oklab, var(--color-theme-500) 40%, transparent);
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(315deg, var(--pattern-fg) 0, var(--pattern-fg) 1px, transparent 0, transparent 50%);
}
</style>