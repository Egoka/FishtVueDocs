<script setup lang="ts">
import {openAlert} from "#fishtvue/alert"
function open(title: string) {
  openAlert({title: title, displayTime: 2000, position: 'top-right'})
}
</script>

<template>
  <Menu :groups="[
    {
      items: [
        { title: 'Profile', icon: 'user', onInactive: (_, item) => open(item.title ?? '') },
        { title: 'Settings', icon: 'cog-6-tooth', onInactive: (_, item) => open(item.title ?? '') },
        { title: 'Documents', icon: 'document-text', onInactive: (_, item) => open(item.title ?? '') }
      ]
    },
    {
      title: 'Actions',
      items: [
        { title: 'Upload', icon: 'arrow-up-tray', onInactive: (_, item) => open(item.title ?? '') },
        { title: 'Share', icon: 'share', onInactive: (_, item) => open(item.title ?? '') },
        { title: 'Delete', icon: 'trash', onInactive: (_, item) => open(item.title ?? '') }
      ]
    }
  ]">
  </Menu>
</template>

<style scoped>

</style>