<script setup lang="ts">
const isChecked = ref(false)
</script>

<template>
  <Switch required label="Accept Terms" v-model="isChecked"/>
  <Switch required label="Accept Terms" switchingType="switch" v-model="isChecked"/>
</template>