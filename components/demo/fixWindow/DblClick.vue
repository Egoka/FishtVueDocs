<script setup lang="ts">
import {cn} from "~/composables/tailwindHandler";
import {classDiv, classDivActive, classWindow} from "~/components/demo/fixWindow/dataForExamples";
const isOpen = ref(false)
</script>

<template>
  <div :class="cn(...classDiv, isOpen ? classDivActive : '')">
    Double-Click Me
    <FixWindow
        :class="classWindow"
        eventOpen="dblclick"
        eventClose="dblclick"
        @open="isOpen = true"
        @close="isOpen = false"
    >
      Opened on double-click
    </FixWindow>
  </div>
</template>