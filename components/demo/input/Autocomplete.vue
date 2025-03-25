<script setup lang="ts">
const valueOn = ref<string>("")
const valueOff = ref<string>("")
</script>

<template>
  <Input autocomplete="on" label="on" v-model="valueOn"/>
  <Input autocomplete="off" label="off" v-model="valueOff"/>
</template>