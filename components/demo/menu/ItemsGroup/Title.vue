<script setup lang="ts">
</script>

<template>
  <Menu :groups="[
    {
      items: [
        { title: 'New Item' },
        { title: 'Open Recent' },
        { title: 'Save' },
        { title: 'Export' },
        { title: 'Settings' }
      ]
    },
    {
      items: [
        { title: 'Share' },
        { title: 'Print' }
      ]
    }

  ]">
  </Menu>
</template>