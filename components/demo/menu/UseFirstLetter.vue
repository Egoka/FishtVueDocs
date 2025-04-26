<template>
  <Menu
      :useFirstLetter="true"
      :groups="[
        {
          title: 'Group 1',
          items: [
            { title: 'Home', icon: 'mdi:home' },
            { title: 'Settings',  },
            { title: 'Profile',  },
            { title: 'Dashboard', },
            { title: 'Documents', },
            { title: 'Messages',  }
          ]
        }
      ]">
  </Menu>
</template>