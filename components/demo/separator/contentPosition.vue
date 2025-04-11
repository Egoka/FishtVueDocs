<template>
  <Separator contentPosition="center" :gradient="[20, 30]" :depth="3">
    Centered Content
  </Separator>
  <br/>
  <Separator contentPosition="left" :gradient="[10, 20]" :depth="3">
    Left Content
  </Separator>
  <br/>
  <Separator contentPosition="right" :gradient="[10, 20]" :depth="3">
    Right Content
  </Separator>
  <Separator contentPosition="full" :gradient="false" :depth="1"></Separator>
</template>
<script setup lang="ts">
</script>