<script setup lang="ts">
import {openAlert} from "#fishtvue/alert"
function open(title: string) {
  openAlert({title: title, displayTime: 2000, position: 'top-right'})
}
</script>

<template>
  <Menu
      :selected="true"
      :groups="[
    {
      items: [
        { title: 'Profile', icon: 'user', onClick: (_, item) => open(item.title ?? '') },
        { title: 'Settings', icon: 'cog-6-tooth', onClick: (_, item) => open(item.title ?? '') },
        { title: 'Documents', icon: 'document-text', onClick: (_, item) => open(item.title ?? '') }
      ]
    },
    {
      title: 'Actions',
      items: [
        { title: 'Upload', icon: 'arrow-up-tray', onClick: (_, item) => open(item.title ?? '') },
        { title: 'Share', icon: 'share', onClick: (_, item) => open(item.title ?? '') },
        { title: 'Delete', icon: 'trash', onClick: (_, item) => open(item.title ?? '') }
      ]
    }
  ]">
  </Menu>
</template>

<style scoped>

</style>