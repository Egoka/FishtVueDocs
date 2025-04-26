<script lang="ts" setup>
const {t} = useI18n()
</script>
<template>

  <Accordion :dataSource="[
  { title: t('content.accordion.base.1.title'), subtitle: t('content.accordion.base.1.subtitle') },
  { title: t('content.accordion.base.2.title'), subtitle: t('content.accordion.base.2.subtitle'), open: true },
  { title: t('content.accordion.base.2.title'), subtitle: t('content.accordion.base.2.subtitle') }
]">
  </Accordion>
  <Separator class="h-20"></Separator>
  <Accordion :dataSource="[
  { title: t('content.accordion.base.FAQ1.title'), subtitle: t('content.accordion.base.FAQ1.subtitle') },
  { title: t('content.accordion.base.FAQ2.title'), subtitle: t('content.accordion.base.FAQ2.subtitle') }
]" :multiple="true">
  </Accordion>
</template>