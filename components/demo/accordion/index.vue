<script lang="ts" setup>
import type {DemoOption} from "~/components/demo/index.vue";
import type {AccordionProps} from "#fishtvue/accordion";
import {layoutConfigOptions} from "~/components/demo/configOptions";

const optionsValues = ref<AccordionProps>({
  dataSource: [
    {
      "title": "User Profile",
      "subtitle": "Manage your personal information and settings. Here you can update your profile picture, change your password, and edit your contact details."
    },
    {
      "title": "Order History",
      "subtitle": "View your past orders and track their status. Check the details of all your previous orders, including delivery status and tracking information.",
      "open": true
    },
    {
      "title": "Payment Methods",
      "subtitle": "Add or update your payment information. Securely manage your credit cards, PayPal, and other payment methods."
    },
    {
      "title": "Notifications",
      "subtitle": "Customize your notification preferences. Choose how you want to receive updates about your orders, promotions, and account activity."
    },
    {
      "title": "Help & Support",
      "subtitle": "Get assistance with any issues or questions. Access FAQs, contact customer support, or submit a support ticket."
    }
  ]

})
const options = computed<DemoOption[]>(() => layoutConfigOptions<AccordionProps>(optionsValues.value,
    [
      "multiple",
      "animationDuration",
      "icon",
      "class",
      "classItem",
      "classTitle",
      "classSubtitle"
    ]))
</script>

<template>
  <Demo v-model="optionsValues" :options="options" class-demo="block content-center" title="Accordion">
    <Accordion v-bind="optionsValues"/>
  </Demo>
</template>