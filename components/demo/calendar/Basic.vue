<script setup lang="ts">
const selectedDate = ref()
</script>

<template>
  <Calendar v-model="selectedDate"/>
</template>