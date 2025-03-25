<script setup lang="ts">
const value = ref<string>("")
</script>

<template>
  <Input autoFocus v-model="value"/>
</template>