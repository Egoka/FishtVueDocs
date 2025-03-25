<script setup lang="ts">
const value = ref<string>("")
</script>

<template>
  <Input placeholder="Enter your text here" v-model="value"/>
</template>