<script setup lang="ts">
const date = ref()
</script>

<template>
  <Calendar autoFocus v-model="date"></Calendar>
</template>