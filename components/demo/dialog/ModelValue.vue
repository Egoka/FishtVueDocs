<script setup lang="ts">
const dialog = ref(false)
</script>

<template>
  <Button @click="dialog = true">Open Dialog</Button>
  <Dialog v-model="dialog" size="md" position="center" closeButton>
    The dialog is open.
  </Dialog>
</template>