<script setup lang="ts">
import {cn} from "~/composables/tailwindHandler";
import {classDiv, classDivActive, classWindow} from "~/components/demo/fixWindow/dataForExamples";
import {useI18n} from "vue-i18n";
const {t} = useI18n()
const isOpen = ref(false)
</script>

<template>
  <Switch switchingType="switch" v-model="isOpen" :label="t('label.open')"/>
  <Separator class="w-full mb-10"></Separator>
  <div :class="cn(...classDiv, isOpen ? classDivActive : '')">
    Hover Me
    <FixWindow
        v-model="isOpen"
        :class="classWindow"
    >
      This window is controlled programmatically.
    </FixWindow>
  </div>
</template>