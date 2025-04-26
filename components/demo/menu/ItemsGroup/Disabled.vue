<script setup lang="ts">

</script>

<template>
  <Menu :groups="[
    {
      items: [
        { title: 'Edit', icon: 'pencil' },
        { title: 'Copy', icon: 'document-duplicate' },
        { title: 'Delete', icon: 'trash', disabled: true },
        { title: 'Download', icon: 'arrow-down-tray', disabled: true },
        { title: 'Share', icon: 'share' }
      ]
    },
    {
      title: 'Advanced Options',
      items: [
        { title: 'Settings', icon: 'cog-6-tooth' },
        { title: 'Move to Folder', icon: 'folder-arrow-down', disabled: true },
        { title: 'Add to Favorites', icon: 'star' }
      ]
    }
  ]">
  </Menu>
</template>

<style scoped>

</style>