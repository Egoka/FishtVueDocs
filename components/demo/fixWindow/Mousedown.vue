<script setup lang="ts">
import {cn} from "~/composables/tailwindHandler";
import {classDiv, classDivActive, classWindow} from "~/components/demo/fixWindow/dataForExamples";

const isOpen = ref(false)
</script>

<template>
  <div :class="cn(...classDiv, isOpen ? classDivActive : '')">
    Mouse Down
    <FixWindow
        :class="classWindow"
        eventOpen="mousedown"
        eventClose="mouseup"
        @open="isOpen = true"
        @close="isOpen = false"
    >
      Opened on mouse down
    </FixWindow>
  </div>
</template>