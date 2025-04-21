<script setup lang="ts">
import {cn} from "~/composables/tailwindHandler";
import {classDiv, classDivActive, classWindow} from "~/components/demo/fixWindow/dataForExamples";

const isOpen = ref(false)
</script>

<template>
  <div :class="cn(...classDiv, isOpen ? classDivActive : '')">
    Mouse Up
    <FixWindow
        :class="classWindow"
        eventOpen="mouseup"
        eventClose="click"
        @open="isOpen = true"
        @close="isOpen = false"
    >
      Opened on mouse up
    </FixWindow>
  </div>
</template>