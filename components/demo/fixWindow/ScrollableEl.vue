<script setup lang="ts">
import {classDiv} from "~/components/demo/fixWindow/dataForExamples";

const divRef = ref<HTMLElement>()
</script>

<template>
  <div ref="divRef" :class="[classDiv, 'size-46 overflow-auto']">
    <Button class="my-48">
      Scroll me up
      <FixWindow :scrollableEl="divRef" event-open="click" mode="filled">
        This hint moves with the button
      </FixWindow>
    </Button>
  </div>
</template>