<script setup lang="ts">
import {cn} from "~/composables/tailwindHandler";
import {classDiv, classDivActive, classWindow} from "~/components/demo/fixWindow/dataForExamples";
const isOpen = ref(false)
</script>

<template>
  <div :class="cn(...classDiv, isOpen ? classDivActive : '')">
    Hover Me
    <FixWindow
        :class="classWindow"
        eventOpen="hover"
        eventClose="hover"
        @open="isOpen = true"
        @close="isOpen = false"
    >
      Opened on hover
    </FixWindow>
  </div>
</template>