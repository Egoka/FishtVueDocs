<script setup lang="ts">
const date = ref()
</script>

<template>
  <Calendar :paramsDatePicker="{ isRange: true, placeholder: 'Select date range' }" v-model="date"></Calendar>
</template>