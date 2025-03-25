<script setup lang="ts">
const selectedItem = ref()
</script>

<template>
  <Select :dataSelect="[]" noData="No fruits available" v-model="selectedItem"/>
</template>