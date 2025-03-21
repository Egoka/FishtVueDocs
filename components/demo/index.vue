<script lang="ts">
import type {InputProps} from "#fishtvue/input";
import type {SelectProps} from "#fishtvue/select";
import type {SwitchProps} from "#fishtvue/switch";

type BaseOption = { nameComp: string };
type OptionInput = BaseOption & { typeComp: "input" } & InputProps;
type OptionSelect = BaseOption & { typeComp: "select" } & SelectProps;
type OptionSwitch = BaseOption & { typeComp: "switch" } & SwitchProps;
export type DemoOption = OptionInput | OptionSelect | OptionSwitch;
export type DemoEmits = {
  (event: "update:value", name: DemoEmits["name"], payload: any): void;
};
</script>

<script setup lang="ts">
import {cn} from "#imports";
import {ref, watch} from "vue";
import {createHighlighter} from "shiki";
import {isClient, useClipboard} from "@vueuse/core";
import {useI18n} from "vue-i18n";
const {t} = useI18n()


// Пропсы и события
const props = defineProps<{
  title?: string;
  options: DemoOption[];
  class?: string;
}>();
const emit = defineEmits<DemoEmits>();
const colorMode = useColorMode()
// Стили
const classes = ref({
  root:
      "rounded-sm w-full relative my-4" +
      "border border-dashed border-neutral-200 dark:border-neutral-700 " +
      "bg-neutral-50 dark:bg-neutral-800",
  demo:
      "flex justify-center items-center p-8 gap-4 w-full h-full " +
      "rounded-sm border border-dashed border-neutral-200 dark:border-neutral-700 " +
      "text-neutral-950/5 dark:text-neutral-50/5 bg-[size:10px_10px] bg-fixed bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,_transparent_0,_transparent_50%)]",
  title: "font-asap font-bold text-neutral-400 dark:text-neutral-400",
  blockBorder: 'rounded-sm border border-neutral-200 dark:border-neutral-700'
})

// Инициализация Shiki
const highlighter = await createHighlighter({
  themes: ["vitesse-light", "vitesse-dark"],
  langs: ['vue', 'javascript'],
});

// Реактивные данные для хранения сгенерированного кода
const generatedCode = ref("");
const highlightedCode = ref("")

// Функция для генерации кода компонента
function updateGeneratedCode() {
  const componentName = props.title; // Можно расширить для Select, Switch
  const optionsForComponent = props.options
      .filter(opt => opt.nameComp && opt.modelValue)
  console.log("optionsForComponent", optionsForComponent, props.options)
  if (optionsForComponent.length === 0) {
    generatedCode.value = `<${componentName}/>`;
  } else {
    const attrs = optionsForComponent.map((item) => {
      if (item.typeComp === "switch") return item.modelValue ? item.nameComp : false
      if (item.typeComp === "select" && item.multiple) return `${item.nameComp}="[${item.modelValue}]"`
      return `${item.nameComp}="${item.modelValue}"`
    }).filter(Boolean).join("\n ");
    generatedCode.value = `<${componentName} ${attrs ? `\n ${attrs}\n` : ''}/>`;
  }
  if (isClient) {
    const theme = colorMode.value === "light" ? "vitesse-light" : colorMode.value === "dark" ? "vitesse-dark" : ""
    highlightedCode.value = highlighter.codeToHtml(generatedCode.value, {lang: "vue", theme})
  }
}

// // Инициализация кода при монтировании
// updateGeneratedCode();

// Отслеживание изменений в options
watch(() => props.options, updateGeneratedCode, {deep: true});

watch(() => colorMode.value, updateGeneratedCode)

// updateGeneratedCode()
onMounted(()=> {
  updateGeneratedCode()
})

const clipboard = useClipboard()
const copied = ref(false)
let timeoutId: ReturnType<typeof setTimeout> | null = null;
function copy() {
  clipboard.copy(generatedCode.value || '')

  copied.value = true

  timeoutId = setTimeout(() => {
    copied.value = false
  }, 2000)
}
onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId);
});
</script>

<template>
  <div :class="cn(classes.root, props.class)">
    <Split
        :panels="[{ name: 'right' }, { name: 'left', size: 50, maxSize: 70, minSize: 25 }]"
        class="min-h-[15rem] relative"
        units="percentages">
      <template #right>
        <Split
            direction="vertical"
            units="percentages"
            :panels="[{ name: 'top' }, { name: 'bottom', size: 30, maxSize: 70, minSize: 25 }]">
          <template #top>
            <div :class="cn('absolute top-2 left-3 pt-5 pl-4', classes.title)">
              {{ props.title ?? "Component" }}
            </div>
            <div :class="cn(classes.demo)">
              <slot/>
            </div>
          </template>
          <template #bottom>
            <div :class="cn('group fishtvue-button', 'w-full h-full p-4 pt-10 overflow-auto', 'bg-white dark:bg-[#121212]', classes.blockBorder)">
              <div :class="cn('absolute top-2 left-5 rounded-sm px-2', 'bg-white dark:bg-[#121212]', classes.title)">Code</div>
              <Button
                  type="icon"
                  :icon="copied ? 'lucide:check' : 'lucide:copy'"
                  classIcon="size-4 transition-all duration-300"
                  color="neutral"
                  mode="outline"
                  size="xs"
                  :aria-label="t('CopyCode')"
                  class="absolute m-0 top-[11px] right-[11px] opacity-0 group-hover:opacity-100 transition"
                  tabindex="-1"
                  @click="copy"
              />
              <div v-html="highlightedCode"></div>
            </div>
          </template>
        </Split>
      </template>
      <template #left>
        <div :class="cn('p-4 flex flex-col gap-4 overflow-auto min-h-96 max-h-[80vh]', classes.blockBorder)">
          <div :class="cn(`sticky -top-4 pt-5 pl-4 pb-2 -mt-4 mb-4 z-10 bg-neutral-50 dark:bg-neutral-800`, classes.title)">
            Options
          </div>
          <div v-for="option in options" :key="option.nameComp">
            <Input
                v-if="option.typeComp === 'input'"
                v-bind="option"
                mode="filled"
                autocomplete="off"
                clear
                @update:modelValue="(value: any) => emit('update:value', option.nameComp, value)"
            />
            <Select
                v-if="option.typeComp === 'select'"
                v-bind="option"
                mode="filled"
                noQuery
                clear
                @update:modelValue="(value: any) => emit('update:value', option.nameComp, value)"
            />
            <Switch
                v-if="option.typeComp === 'switch'"
                v-bind="option"
                switchingType="switch"
                @update:modelValue="(value: any) => emit('update:value', option.nameComp, value)"
            />
          </div>
        </div>
      </template>
    </Split>
  </div>
</template>
<style>
.shiki span.line {
  display: block;
  line-height: 0px;
}

.shiki span.line.highlight {
  margin: 0 -16px;
  padding: 0 16px;
}
</style>