import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",

    devtools: { enabled: true },
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            script: [
                {
                    src: "https://t.contentsquare.net/uxa/4707ddaf46a33.js",
                    defer: true,
                },
            ],
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
        strategy: "no_prefix",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            redirectOn: "root",
        },
    },
    modules: [
        "@nuxt/eslint",
        "@nuxt/image",
        "@nuxtjs/i18n", // "nuxt-resend",
        "@vueuse/nuxt",
        "nuxt-gtag",
    ],
    vite: {
        plugins: [tailwindcss()],
    },
    css: ["~/assets/css/app.css"],
    image: {
        dir: "assets/images",
    },
    gtag: {
        enabled: process.env.NODE_ENV === "production",
        id: "2G-YE8VMK86WG",
    },
});
