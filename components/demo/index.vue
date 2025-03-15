<script lang="ts">
import type {InputProps} from "#fishtvue/input";
import type {SelectProps} from "#fishtvue/select";
import type {SwitchProps} from "#fishtvue/switch";

type BaseOption = { nameComp: string }
type OptionInput = BaseOption & { typeComp: "input" } & InputProps
type OptionSelect = BaseOption & { typeComp: "select" } & SelectProps
type OptionSwitch = BaseOption & { typeComp: "switch" } & SwitchProps
export type DemoOption = OptionInput | OptionSelect | OptionSwitch
export type DemoEmits = {
  (event: "update:value", name: DemoEmits["name"], payload: any): void
}
</script>

<script setup lang="ts">
import {cn} from "#imports";

const props = defineProps<{
  title?: string
  options: DemoOption[]
  class?: string
}>()
const emit = defineEmits<DemoEmits>()

const classes = ref({
  root:
      "rounded-sm w-full relative my-4" +
      "border border-dashed border-neutral-200 dark:border-neutral-700 " +
      "bg-neutral-50 dark:bg-neutral-800",
  demo: "flex justify-center items-center p-8 gap-4 w-full h-full " +
      "rounded-sm border border-dashed border-neutral-200 dark:border-neutral-700 " +
      "text-red-950/5 dark:text-red-50/5 bg-[size:10px_10px] bg-fixed bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,_transparent_0,_transparent_50%)]",
  title: "font-asap font-bold text-neutral-200 dark:text-neutral-400",
  blockBorder: 'rounded-sm border border-neutral-200 dark:border-neutral-700'
})

</script>

<template>
  <div :class="cn(classes.root, props.class)">
    <Split
        :panels="[{name: 'right'}, {name: 'left', size: 50, maxSize: 70, minSize: 25}]"
        class="min-h-[15rem] relative"
        units="percentages">
      <template #right>
        <Split
            direction="vertical"
            :panels="[{name: 'top'}, {name: 'bottom', size: 30, maxSize: 70, minSize: 25}]">
          <template #top>
            <div :class="cn(`absolute top-2 left-3`, classes.title)">
              {{ props.title ?? "Component" }}
            </div>
            <div :class="cn(classes.demo)">
              <slot/>
            </div>
          </template>
          <template #bottom>
            <div :class="cn('w-full h-full p-4', classes.blockBorder)">
              <div :class="cn( classes.title)">
                Code
              </div>
            </div>
          </template>
        </Split>
      </template>
      <template #left>
        <div :class="cn('p-4 flex flex-col overflow-auto max-h-[80vh]', classes.blockBorder)">
          <div :class="cn(`sticky -top-4 pt-5 pb-2 -mt-4 mb-4 z-10 bg-neutral-50 dark:bg-neutral-800`, classes.title)">
            Options
          </div>
          <div v-for="option in options" :key="option.nameComp">
            <Input
                v-if="option.typeComp === 'input'"
                v-bind="option"
                mode="filled"
                autocomplete="off"
                @update:modelValue="(value: any) => emit('update:value', option.nameComp, value)"/>
            <Select
                v-if="option.typeComp === 'select'"
                v-bind="option"
                mode="filled"
                noQuery
                @update:modelValue="(value: any) => emit('update:value', option.nameComp, value)"/>
            <Switch
                v-if="option.typeComp === 'switch'"
                v-bind="option"
                switchingType="switch"
                @update:modelValue="(value: any) => emit('update:value', option.nameComp, value)"/>
          </div>
        </div>
      </template>
    </Split>
  </div>
</template>