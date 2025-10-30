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
            meta: [
                // Open Graph / Facebook
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    property: "og:title",
                    content:
                        "Experiencias Digitales | UX Strategy & Product-Led Design for SaaS Growth",
                },
                {
                    property: "og:description",
                    content:
                        "I help SaaS startups and companies improve activation, retention, and growth through clear, data-driven, and frictionless onboarding experiences.",
                },
                {
                    property: "og:image",
                    content: "/images/og-lucassemelin.jpg",
                },
                {
                    property: "og:image:width",
                    content: "1200",
                },
                {
                    property: "og:image:height",
                    content: "630",
                },
                {
                    property: "og:url",
                    content: "https://lucassemelin.com",
                },
                {
                    property: "og:site_name",
                    content: "UX Strategy & Product-Led Design for SaaS Growth",
                },
                // Twitter Card
                {
                    name: "twitter:card",
                    content: "summary_large_image",
                },
                {
                    name: "twitter:title",
                    content:
                        "Experiencias Digitales | UX Strategy & Product-Led Design for SaaS Growth",
                },
                {
                    name: "twitter:description",
                    content:
                        "I help SaaS startups and companies improve activation, retention, and growth through clear, data-driven, and frictionless onboarding experiences.",
                },
                {
                    name: "twitter:image",
                    content: "/images/og-lucassemelin.jpg",
                },
                // General SEO
                {
                    name: "description",
                    content:
                        "I help SaaS startups and companies improve activation, retention, and growth through clear, data-driven, and frictionless onboarding experiences.",
                },
                {
                    name: "keywords",
                    content:
                        "onboarding, SaaS, B2B, B2C, inteligencia artificial, IA, experiencias digitales, desarrollo de software, UX, UI, agentes IA, RAG, automatización",
                },
                {
                    name: "author",
                    content: "Experiencias Digitales",
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
        baseUrl: "https://lucassemelin.com",
        defaultLocale: "es",
        locales: [
            { code: "es", name: "Español" },
            { code: "en", name: "English" },
        ],
        strategy: "no_prefix",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            alwaysRedirect: true,
            fallbackLocale: "es",
            redirectCode: 301, // <-- ¡Asegúrate de esto!
        },
    },
    modules: [
        "@nuxt/eslint",
        "@nuxt/image", // "nuxt-resend",
        "@nuxtjs/i18n",
        "@vueuse/nuxt",
        "nuxt-gtag",
        "@nuxtjs/seo",
        "@nuxt/content",
    ],
    vite: {
        plugins: [tailwindcss()],
    },
    css: ["~/assets/css/app.css"],
    gtag: {
        id: "GTM-PXHVRBL6",
        enabled: process.env.NODE_ENV === "production",
    },
    site: {
        url: "https://lucassemelin.com",
        name: "Experiencias Digitales",
        trailingSlash: false,
    },
});
