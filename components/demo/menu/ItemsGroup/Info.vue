<script setup lang="ts">

</script>

<template>
  <Menu
      :styles="{width: '300px'}"
      :groups="[
    {
      items: [
        { title: 'Add', info: 'Create new item' },
        { title: 'Edit', info: 'Modify selected item' },
        { title: 'Delete', info: 'Remove permanently' },
        { title: 'Duplicate', info: 'Create a copy' },
        { title: 'Export', info: 'Save to file' }
      ]
    },
    {
      title: 'Advanced',
      items: [
        { title: 'Share', info: 'Send to colleagues' },
        { title: 'Archive', info: 'Store for later' },
        { title: 'Permissions', info: 'Manage access' }
      ]
    }
  ]">
  </Menu>
</template>

<style scoped>

</style>