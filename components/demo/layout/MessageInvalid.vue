<script setup lang="ts">
import {useI18n} from "vue-i18n";
const {t} = useI18n()
</script>
<template>
  <Input :messageInvalid="t('message.required')" isInvalid></Input>
</template>