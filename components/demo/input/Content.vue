<template>
<Input label="Username">
  <template #before>
    <Icons type="user-circle"/>
  </template>
</Input>
<Input label="Price">
  <template #after>
    USD
    <Icons type="circle-stack"/>
  </template>
</Input>
<Input label="Nickname" labelMode="vanishing">
  <template #before>
    <Icons type="ri:vk-fill"/>
    https://vk.com/
  </template>
  <template #after>
    .com
  </template>
</Input>
</template>