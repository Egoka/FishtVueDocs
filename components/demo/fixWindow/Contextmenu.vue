<script setup lang="ts">
import {cn} from "~/composables/tailwindHandler";
import {classDiv, classDivActive, classWindow} from "~/components/demo/fixWindow/dataForExamples";

const isOpen = ref(false)
</script>

<template>
  <div :class="cn(...classDiv, isOpen ? classDivActive : '')">
    Right-Click Me
    <FixWindow
        :class="classWindow"
        eventOpen="contextmenu"
        eventClose="click"
        @open="isOpen = true"
        @close="isOpen = false"
    >
      Opened on right-click
    </FixWindow>
  </div>
</template>