<script setup lang="ts">
const value = ref('')
</script>

<template>
  <Aria
      placeholder="Enter your text here"
      v-model="value">
  </Aria>
</template>