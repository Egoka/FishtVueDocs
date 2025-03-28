import type {DemoOption} from "~/components/demo/index.vue";
import {useNuxtApp} from '#app';
import type {InputLayoutProps} from "#fishtvue/inputlayout";
import type {InputProps} from "#fishtvue/input";
import type {SelectProps} from "#fishtvue/select";
import type {CalendarProps} from "#fishtvue/calendar";
import type {SwitchProps} from "#fishtvue/switch";
import type {AriaProps} from "#fishtvue/aria";
import {colorsObj} from "~/components/demo/select/dataForExample";

const dataSelectMode = ["filled", "outlined", "underlined"]
const dataSelectLabelMode = ["offsetDynamic", "offsetStatic", "dynamic", "static", "vanishing", "none"]
const dataSelectAnimation = [
    {id: "transition-none", value: "None"},
    {id: "transition-all duration-0", value: "0"},
    {id: "transition-all duration-100", value: "100"},
    {id: "transition-all duration-500", value: "500"},
    {id: "transition-all duration-1000", value: "1000"},
]
export const layoutConfigOptions = <T extends InputProps | SelectProps | CalendarProps | SwitchProps>(optionsValues: T, namesOptions?: Array<keyof T>): DemoOption[] => {
    const { $i18n } = useNuxtApp()
    const {t, locale} = $i18n
    const resultOptions = ([
        {
            nameComp: "mode",
            typeComp: "select",
            modelValue: (optionsValues as InputLayoutProps)["mode"],
            label: t("label.mode"),
            help: t("help.mode"),
            dataSelect: dataSelectMode
        },
        {
            nameComp: "label",
            typeComp: "input",
            modelValue: (optionsValues as InputLayoutProps)["label"],
            label: t("label.label"),
            help: t("help.label"),
        },
        {
            nameComp: "labelMode",
            typeComp: "select",
            modelValue: (optionsValues as InputLayoutProps)["labelMode"],
            label: t("label.labelMode"),
            help: t("help.labelMode"),
            dataSelect: dataSelectLabelMode
        },
        {
            nameComp: "isInvalid",
            modelValue: (optionsValues as InputLayoutProps)["isInvalid"],
            label: t("label.isInvalid"),
            help: t("help.isInvalid"),
            typeComp: "switch"},
        {
            nameComp: "messageInvalid",
            modelValue: (optionsValues as InputLayoutProps)["messageInvalid"],
            label: t("label.messageInvalid"),
            help: t("help.messageInvalid"),
            typeComp: "aria"
        },
        {
            nameComp: "required",
            modelValue: (optionsValues as InputLayoutProps)["required"],
            label: t("label.required"),
            help: t("help.required"),
            typeComp: "switch"},
        {
            nameComp: "loading",
            modelValue: (optionsValues as InputLayoutProps)["loading"],
            label: t("label.loading"),
            help: t("help.loading"),
            typeComp: "switch"},
        {
            nameComp: "disabled",
            modelValue: (optionsValues as InputLayoutProps)["disabled"],
            label: t("label.disabled"),
            help: t("help.disabled"),
            typeComp: "switch"},
        {
            nameComp: "clear",
            modelValue: (optionsValues as InputLayoutProps)["clear"],
            label: t("label.clear"),
            help: t("help.clear"),
            typeComp: "switch"},
        {
            nameComp: "help",
            modelValue: (optionsValues as InputLayoutProps)["help"],
            label: t("label.help"),
            help: t("help.help"),
            typeComp: "aria"},
        {
            nameComp: "width",
            modelValue: (optionsValues as InputLayoutProps)["width"],
            label: t("label.width"),
            help: t("help.width"),
            typeComp: "input"},
        {
            nameComp: "height",
            modelValue: (optionsValues as InputLayoutProps)["height"],
            label: t("label.height"),
            help: t("help.height"),
            typeComp: "input"},
        {
            nameComp: "animation",
            modelValue: (optionsValues as InputLayoutProps)["animation"],
            label: t("label.animation"),
            help: t("help.animation"),
            typeComp: "select",
            dataSelect: dataSelectAnimation,
        },
        {
            nameComp: "classBody",
            modelValue: (optionsValues as InputLayoutProps)["classBody"],
            label: t("label.classBody"),
            help: t("help.classBody"),
            typeComp: "aria"},
        {
            nameComp: "class", modelValue: (optionsValues as InputLayoutProps)["class"],
            label: t("label.class"),
            help: t("help.class"),
            typeComp: "aria"
        },
        //Input
        {
            nameComp: "type",
            modelValue: (optionsValues as InputProps)["type"],
            label: t("label.Type"),
            help: t("help.Type"),
            typeComp: "select",
            dataSelect: ["text", "number", "email", "password"]
        },
        {
            nameComp: "autoFocus",
            modelValue: (optionsValues as InputProps)["autoFocus"],
            label: t("label.autoFocus"),
            help: t("help.autoFocus"),
            typeComp: "switch"
        },
        {
            nameComp: "placeholder",
            modelValue: (optionsValues as InputProps)["placeholder"],
            label: t("label.placeholder"),
            help: t("help.placeholder"),
            typeComp: "input"
        },
        {
            nameComp: "autocomplete",
            modelValue: (optionsValues as InputProps)["autocomplete"],
            label: t("label.autocomplete"),
            help: t("help.autocomplete"),
            typeComp: "select",
            dataSelect: ["on", "off"]
        },
        {
            nameComp: "maskInput",
            modelValue: (optionsValues as InputProps)["maskInput"],
            label: t("label.maskInput"),
            help: t("help.maskInput"),
            typeComp: "select",
            dataSelect: ["phone", "number", "price"]
        },
        {
            nameComp: "lengthInteger",
            modelValue: (optionsValues as InputProps)["lengthInteger"],
            label: t("label.lengthInteger"),
            help: t("help.lengthInteger"),
            typeComp: "input",
            type: "number",
            maskInput: "number"
        },
        {
            nameComp: "lengthDecimal",
            modelValue: (optionsValues as InputProps)["lengthDecimal"],
            label: t("label.lengthDecimal"),
            help: t("help.lengthDecimal"),
            typeComp: "input",
            type: "number",
            maskInput: "number"
        },
        {
            nameComp: "classInput",
            modelValue: (optionsValues as InputProps)["classInput"],
            label: t("label.classInput"),
            help: t("help.classInput"),
            typeComp: "aria"
        },
        //Select
        {
            nameComp: "dataSelect",
            modelValue: (optionsValues as SelectProps)["dataSelect"],
            label: t("label.DataSelect"),
            help: t("help.DataSelect"),
            typeComp: "select",
            multiple: true,
            maxVisible: 2,
            classSelect: "w-full",
            dataSelect: colorsObj[locale]
        },
        {
            nameComp: "keySelect",
            typeComp: "select",
            modelValue: (optionsValues as SelectProps)["keySelect"],
            label: t("label.keySelect"),
            help: t("help.keySelect"),
            dataSelect: Object.keys(colorsObj[locale][0])
        },
        {
            nameComp: "valueSelect",
            typeComp: "select",
            modelValue: (optionsValues as SelectProps)["valueSelect"],
            label: t("label.valueSelect"),
            help: t("help.valueSelect"),
            dataSelect: Object.keys(colorsObj[locale][0])
        },
        {
            nameComp: "multiple",
            modelValue: (optionsValues as SelectProps)["multiple"],
            label: t("label.multiple"),
            help: t("help.multiple"),
            typeComp: "switch"
        },
        {
            nameComp: "maxVisible",
            modelValue: (optionsValues as SelectProps)["maxVisible"],
            label: t("label.maxVisible"),
            help: t("help.maxVisible"),
            disabled: !(optionsValues as SelectProps)["multiple"],
            typeComp: "input",
            type: "number"
        },
        {
            nameComp: "closeButtonBadge",
            modelValue: (optionsValues as SelectProps)["closeButtonBadge"],
            label: t("label.closeButtonBadge"),
            help: t("help.closeButtonBadge"),
            typeComp: "switch"
        },
        {
            nameComp: "noData",
            modelValue: (optionsValues as SelectProps)["noData"],
            label: t("label.noData"),
            help: t("help.noData"),
            typeComp: "input"
        },
        {
            nameComp: "noQuery",
            modelValue: (optionsValues as SelectProps)["noQuery"],
            label: t("label.noQuery"),
            help: t("help.noQuery"),
            typeComp: "input"
        },
        {
            nameComp: "classSelect",
            modelValue: (optionsValues as SelectProps)["classSelect"],
            label: t("label.classSelect"),
            help: t("help.classSelect"),
            typeComp: "aria"
        },
        {
            nameComp: "classSelectList",
            modelValue: (optionsValues as SelectProps)["classSelectList"],
            label: t("label.classSelectList"),
            help: t("help.classSelectList"),
            typeComp: "aria"
        },
        {
            nameComp: "classMaskQuery",
            modelValue: (optionsValues as SelectProps)["classMaskQuery"],
            label: t("label.classMaskQuery"),
            help: t("help.classMaskQuery"),
            typeComp: "aria"
        },
        // paramsFixWindow
        //Calendar
        // paramsDatePicker
        {
            nameComp: "isNotCloseOnDateChange",
            modelValue: (optionsValues as CalendarProps)["isNotCloseOnDateChange"],
            label: t("label.isNotCloseOnDateChange"),
            help: t("help.isNotCloseOnDateChange"),
            typeComp: "switch"
        },
        {
            nameComp: "classDataPicker",
            modelValue: (optionsValues as CalendarProps)["classDataPicker"],
            label: t("label.classDataPicker"),
            help: t("help.classDataPicker"),
            typeComp: "aria"
        },
        {
            nameComp: "classPicker",
            modelValue: (optionsValues as CalendarProps)["classPicker"],
            label: t("label.classPicker"),
            help: t("help.classPicker"),
            typeComp: "aria"
        },
        {
            nameComp: "classDateText",
            modelValue: (optionsValues as CalendarProps)["classDateText"],
            label: t("label.classDateText"),
            help: t("help.classDateText"),
            typeComp: "aria"
        },
        // paramsFixWindow
        //Switch
        {
            nameComp: "switchingType",
            typeComp: "select",
            modelValue: (optionsValues as SwitchProps)["switchingType"],
            label: t("label.switchingType"),
            help: t("help.switchingType"),
            dataSelect: ["checkbox", "switch"]
        },
        {
            nameComp: "modeSwitch",
            typeComp: "select",
            modelValue: (optionsValues as SwitchProps)["mode"],
            label: t("label.modeSwitch"),
            help: t("help.modeSwitch"),
            dataSelect: [...dataSelectMode, "none"]
        },
        {
            nameComp: "rounded",
            modelValue: (optionsValues as SwitchProps)["rounded"],
            label: t("label.rounded"),
            help: t("help.rounded"),
            typeComp: "input",
            type: "number",
            maskInput: "number"
        },
        {
            nameComp: "iconActive",
            typeComp: "select",
            modelValue: (optionsValues as SwitchProps)["iconActive"],
            label: t("label.iconActive"),
            help: t("help.iconActive"),
            dataSelect: ["tabler:sun", "tabler:moon"]
        },
        {
            nameComp: "iconInactive",
            typeComp: "select",
            modelValue: (optionsValues as SwitchProps)["iconInactive"],
            label: t("label.iconInactive"),
            help: t("help.iconInactive"),
            dataSelect: ["tabler:sun", "tabler:moon"]
        },
        //Aria
        {
            nameComp: "wrap",
            typeComp: "select",
            modelValue: (optionsValues as AriaProps)["wrap"],
            label: t("label.wrap"),
            help: t("help.wrap"),
            dataSelect: ["soft", "hard", "off"]
        },
        {
            nameComp: "rows",
            modelValue: (optionsValues as AriaProps)["rows"],
            label: t("label.rows"),
            help: t("help.rows"),
            typeComp: "input",
            type: "number",
            maskInput: "number"
        },
        {
            nameComp: "maxLength",
            modelValue: (optionsValues as AriaProps)["maxLength"],
            label: t("label.maxLength"),
            help: t("help.maxLength"),
            typeComp: "input",
            type: "number",
            maskInput: "number"
        },
    ] as DemoOption[])
    return namesOptions?.length ? namesOptions.reduce((result: DemoOption[], nameOption) => {
        const findOption = resultOptions.find(i => nameOption === i.nameComp)
        if (findOption) result.push(findOption)
        return result
    }, []) as DemoOption[] : resultOptions
}