import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        en: defineCollection({
            type: "page",
            source: {
                include: "en/**",
                prefix: '/'
            },
            schema: z.object({
                description: z.string(),
                icon: z.string()
            })
        }),
        ru: defineCollection({
            type: "page",
            source: {
                include: "ru/**",
                prefix: '/'
            },
            schema: z.object({
                description: z.string(),
                icon: z.string()
            })
        }),
    }
})