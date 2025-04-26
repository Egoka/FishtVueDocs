<script setup lang="ts">

</script>

<template>
  <Menu :groups="[
    {
      items: [
        {
          title: 'Item',
          class: 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300'
        },
        {
          title: 'Settings',
          class: 'text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300'
        },
        {
          title: 'Profile',
          class: 'text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300'
        },
        {
          title: 'Notifications',
          class: 'text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300'
        },
        {
          title: 'Help',
          class: 'text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300'
        }
      ]
    }
  ]">
  </Menu>
</template>

<style scoped>

</style>