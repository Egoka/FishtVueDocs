<script setup lang="ts">
const outlined = ref("outlined")
const filled = ref("filled")
const underlined = ref("underlined")
</script>
<template>
  <Input disabled label="label" mode="outlined" v-model="outlined"></Input>
  <Input disabled label="label" mode="filled" v-model="filled"></Input>
  <Input disabled label="label" mode="underlined" v-model="underlined"></Input>
</template>