import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",

    devtools: { enabled: true },
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            title: "Myntropic Studio | Diseñamos experiencias inteligentes que potencian a las personas",
            link: [
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Electrolize&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap",
                },
            ],
        },
    },
    router: {
        options: {
            scrollBehaviorType: "smooth",
        },
    },
    i18n: {
        defaultLocale: "es",
        locales: [
            { code: "es", name: "Español" },
            { code: "en", name: "English" },
        ],
    },
    modules: ["@nuxt/eslint", "@nuxt/image", "@nuxtjs/i18n"],
    vite: {
        plugins: [tailwindcss()],
    },
    css: ["~/assets/css/app.css"],
    image: {
        dir: "assets/images",
    },
});
