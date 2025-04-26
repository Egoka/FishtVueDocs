<script setup>
const menuRef = ref();
const selectFirstItem = () => {
  const firstItemKey = menuRef.value.listGroups[0].items[0]._key;
  menuRef.value.setSelectedItem(firstItemKey);
};
</script>
<template>
  <Button @click="selectFirstItem">Select First Item</Button>
  <Separator class="w-full"/>
  <Menu
      ref="menuRef"
      :selected="true"
      :groups="[{ items: [{ title: 'Item 1', icon: 'star' }, { title: 'Item 2' }] }]"
  >
  </Menu>
</template>
