<script setup lang="ts">
const valueNumber = ref("")
const valuePrice = ref("")
const valuePhone = ref("")
</script>
<template>
  <Input maskInput="number" label="number" v-model="valueNumber"/>
  <Input maskInput="price" label="price" v-model="valuePrice"/>
  <Input maskInput="phone" label="phone" v-model="valuePhone"/>
</template>