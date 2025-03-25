<script setup lang="ts">
const valueText = ref("")
const valueNumber = ref("")
const valueEmail = ref("")
const valuePassword = ref("")
</script>

<template>
  <Input type="text" label="text" width="200px" v-model="valueText"/>
  <Input type="number" label="number" width="200px" v-model="valueNumber"/>
  <Input type="email" label="email" width="200px" v-model="valueEmail"/>
  <Input type="password" label="password" width="200px" v-model="valuePassword"/>
</template>