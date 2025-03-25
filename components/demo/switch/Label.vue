<script setup lang="ts">
const isChecked = ref(false)
</script>

<template>
  <Switch label="Enable Notifications" v-model="isChecked"/>
  <Switch label="Enable Notifications" switchingType="switch" v-model="isChecked"/>
</template>