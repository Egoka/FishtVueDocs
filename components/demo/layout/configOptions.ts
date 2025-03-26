import type {DemoOption, PropsComponentsType} from "~/components/demo/index.vue";
import { useNuxtApp } from '#app';
const dataSelectMode = ["filled", "outlined", "underlined"]
const dataSelectLabelMode = ["offsetDynamic", "offsetStatic", "dynamic", "static", "vanishing", "none"]
const dataSelectAnimation = [
    {id: "transition-none", value: "None"},
    {id: "transition-all duration-0", value: "0"},
    {id: "transition-all duration-100", value: "100"},
    {id: "transition-all duration-500", value: "500"},
    {id: "transition-all duration-1000", value: "1000"},
]
const layoutConfigOptions = <T extends PropsComponentsType>(optionsValues: T | Ref<T>, namesOptions?: Array<keyof T>): DemoOption[] => {
    const { $i18n } = useNuxtApp()
    const { t } = $i18n
    const options = isRef(optionsValues) ? optionsValues.value as T : optionsValues
    return ([
        {
            nameComp: "mode",
            typeComp: "select",
            modelValue: options["mode"],
            label: t("mode"),
            dataSelect: dataSelectMode
        },
        {nameComp: "label", typeComp: "input", modelValue: options["label"],
            label: t("label")
        },
        {
            nameComp: "labelMode",
            typeComp: "select",
            modelValue: options["labelMode"],
            label: t("labelMode"),
            dataSelect: dataSelectLabelMode
        },
        {nameComp: "isInvalid", modelValue: options["isInvalid"],
            label: t("isInvalid"),
            typeComp: "switch"},
        {
            nameComp: "messageInvalid",
            modelValue: options["messageInvalid"],
            label: t("messageInvalid"),
            typeComp: "aria"
        },
        {nameComp: "required", modelValue: options["required"],
            label: t("required"),
            typeComp: "switch"},
        {nameComp: "loading", modelValue: options["loading"],
            label: t("loading"),
            typeComp: "switch"},
        {nameComp: "disabled", modelValue: options["disabled"],
            label: t("disabled"),
            typeComp: "switch"},
        {nameComp: "clear", modelValue: options["clear"],
            label: t("clear"),
            typeComp: "switch"},
        {nameComp: "help", modelValue: options["help"],
            label: t("help"),
            typeComp: "aria"},
        {nameComp: "width", modelValue: options["width"],
            label: t("width"),
            typeComp: "input"},
        {nameComp: "height", modelValue: options["height"],
            label: t("height"),
            typeComp: "input"},
        {
            nameComp: "animation",
            modelValue: options["animation"],
            label: t("animation"),
            typeComp: "select",
            dataSelect: dataSelectAnimation,
        },
        {nameComp: "classBody", modelValue: options["classBody"],
            label: t("classBody"),
            typeComp: "aria"},
        {nameComp: "class", modelValue: options["class"],
            label: t("class"),
            typeComp: "aria"},
    ] as DemoOption[]).filter(i => namesOptions?.length ? namesOptions.find(o => o === i.nameComp) : true)
}
export default layoutConfigOptions