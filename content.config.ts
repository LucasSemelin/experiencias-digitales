import { defineContentConfig, defineCollection } from "@nuxt/content";

const commonSchema = undefined; // Puedes definir un schema común si lo necesitas

export default defineContentConfig({
    collections: {
        // Español
        content_es: defineCollection({
            type: "page",
            source: {
                include: "es/**",
                prefix: "",
            },
            schema: commonSchema,
        }),
        // Inglés
        content_en: defineCollection({
            type: "page",
            source: {
                include: "en/**",
                prefix: "",
            },
            schema: commonSchema,
        }),
    },
});
