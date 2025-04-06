import type {FieldType, FormStructure} from "#fishtvue/form"
import {useNuxtApp} from "#app";
import {fruits} from "~/components/demo/select/dataForExample";

const {$i18n} = useNuxtApp()
const {locale, t} = $i18n
type Keys =
    "username" |
    "email" |
    "password" |
    "additionalInformation" |
    "Input" |
    "Select" |
    "Calendar" |
    "Aria" |
    "TextEditor" |
    "Switch" |
    "Custom" |
    "requiredRule" |
    "emailRule" |
    "phoneRule" |
    "numericRule" |
    "regularRule" |
    "rangeRule" |
    "lengthRule" |
    "asyncRule" |
    "customRule" |
    "compareRule"
export const structureFields = (namesFields: Keys[]): FormStructure["fields"] => {
    const fields: Partial<Record<Keys, FieldType>> = {
        username: {
            typeComponent: 'Input',
            name: 'username',
            rules: {required: true},
            label: t('label.Username'),
            placeholder: t('placeholder.Username'),
            classCol: 'sm:col-span-6'
        },
        email: {
            typeComponent: 'Input',
            name: 'email',
            rules: {required: true, email: true},
            label: t('label.Email'),
            placeholder: t('placeholder.Email'),
            classCol: 'sm:col-span-3'
        },
        password: {
            typeComponent: 'Input',
            name: 'password',
            type: "password",
            rules: {required: true, length: {min: 3, max: 8, message: t("message.lengthRule", {min: 3, max: 8})}},
            label: t('label.Password'),
            placeholder: t('placeholder.Password'),
            classCol: 'sm:col-span-3'
        },
        additionalInformation: {
            typeComponent: "Switch",
            name: "additionalInformation",
            switchingType: "checkbox",
            rounded: 4,
            mode: "none",
            modelValue: false,
            label: t("label.additionalInformation"),
            required: true,
            classCol: "sm:col-span-6",
            help: t("help.additionalInformation"),
        },
        Input: {
            typeComponent: "Input",
            name: "Input",
            label: t("label.Input")
        },
        Select: {
            typeComponent: "Select",
            name: "Select",
            label: t("label.Select"),
            //@ts-ignore
            dataSelect: fruits[locale.value ?? "en"]
        },
        Calendar: {
            typeComponent: "Calendar",
            name: "Calendar",
            label: t("label.Calendar")
        },
        Aria: {
            typeComponent: "Aria",
            name: "Aria",
            label: t("label.Aria")
        },
        TextEditor: {
            typeComponent: "TextEditor",
            name: "TextEditor",
            label: t("label.TextEditor")
        },
        Switch: {
            typeComponent: "Switch",
            name: "Switch",
            label: t("label.Switch")
        },
        Custom: {
            typeComponent: "Custom",
            name: "Custom",
            nameTemplate: "custom",
            label: t("label.Custom"),
            classCol: "col-span-full rounded-md border border-gray-200 dark:border-gray-700 m-1"
        },
        requiredRule: {
            typeComponent: "Input",
            name: "requiredRule",
            label: t("label.requiredRule")
        },
        emailRule: {
            typeComponent: "Input",
            name: "emailRule",
            label: t("label.emailRule")
        },
        phoneRule: {
            typeComponent: "Input",
            name: "phoneRule",
            label: t("label.phoneRule")
        },
        numericRule: {
            typeComponent: "Input",
            name: "numericRule",
            label: t("label.numericRule")
        },
        regularRule: {
            typeComponent: "Input",
            name: "regularRule",
            label: t("label.regularRule")
        },
        rangeRule: {
            typeComponent: "Input",
            name: "rangeRule",
            label: t("label.rangeRule")
        },
        lengthRule: {
            typeComponent: "Input",
            name: "lengthRule",
            label: t("label.lengthRule")
        },
        asyncRule: {
            typeComponent: "Input",
            name: "asyncRule",
            label: t("label.asyncRule")
        },
        customRule: {
            typeComponent: "Input",
            name: "customRule",
            label: t("label.customRule")
        },
        compareRule: {
            typeComponent: "Input",
            name: "compareRule",
            label: t("label.compareRule")
        }
    }
    return namesFields.reduce((result: FormStructure["fields"], key) => {
        if (key in fields) result.push(fields[key] as FieldType)
        return result
    }, []) as FormStructure["fields"]
}