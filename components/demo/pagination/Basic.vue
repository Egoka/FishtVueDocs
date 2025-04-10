<template>
  <Pagination :total="120" :modelValue="1" :sizePage="10" />
  <Pagination :total="500" :modelValue="1" :sizePage="20" :isInfoText="true" />
  <Pagination :total="300" :modelValue="3" :visibleNumberPages="7" />
</template>