<script setup lang="ts">

import {groupsMenuMini} from "~/components/demo/menu/dataForExamples";
</script>

<template>
  <Menu :groups="groupsMenuMini()">
    <template #footer>
      <div class="p-2 text-center">Footer Content</div>
    </template>
  </Menu>
</template>

<style scoped>

</style>