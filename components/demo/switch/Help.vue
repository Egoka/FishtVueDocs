<script setup lang="ts">
const isChecked = ref(false)
</script>

<template>
  <Switch help="This switch enables or disables notifications." v-model="isChecked"/>
  <Switch help="This switch enables or disables notifications." switchingType="switch" v-model="isChecked"/>
</template>