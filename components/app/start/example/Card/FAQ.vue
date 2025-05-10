<script setup lang="ts">
import { ref } from "vue"

// FAQ Data
const faqData = ref([
  {
    title: "What is FishtVue, and why should I use it?",
    subtitle: "FishtVue is an open-source library of beautiful and customizable Vue.js components. It helps developers save time by providing pre-built, reusable UI components for their applications.",
    open: false
  },
  {
    title: "Is there a demo or documentation available for FishtVue?",
    subtitle: "Yes, you can find the documentation and live examples in the repository or its dedicated website (if available). Check the README.md or the repository for more details.",
    open: false
  },
  {
    title: "What kind of components does FishtVue offer?",
    subtitle: "FishtVue provides a variety of UI components like buttons, modals, accordions, dropdowns, and more. These components are designed to be customizable and easy to integrate.",
    open: false
  },
  {
    title: "Do I need to use Vue 3 to work with FishtVue?",
    subtitle: "Yes, FishtVue is compatible with Vue 3. Make sure your project is using Vue 3 for the components to work properly.",
    open: false
  },
  {
    title: "Can I customize the appearance of components?",
    subtitle: "Absolutely! FishtVue components are designed to be highly customizable. You can adjust styles, classes, and other properties to match your application's design.",
    open: false
  }
])
</script>

<template>
  <div class="max-w-[600px] m-auto">
    <h1 class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-100">
      FAQ
      <span class="text-neutral-300 dark:text-neutral-700 font-normal">(Frequently Asked Questions)</span>
    </h1>
    <Accordion :dataSource="faqData" multiple class="max-h-80 overflow-auto"/>
  </div>
</template>