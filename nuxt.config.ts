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
                        "Myntropic Studio | Evolutionary & Contextual Engineering Consulting for Intelligent Systems",
                },
                {
                    property: "og:description",
                    content:
                        "We help organizations design and evolve intelligent, adaptive, and sustainable software systems. Through Evolutionary & Contextual Engineering, we combine UX, AI, and software architecture to create systems that learn and grow with your business.",
                },
                {
                    property: "og:image",
                    content: "/images/og-myntropic.jpg",
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
                    content: "https://myntropic.studio",
                },
                {
                    property: "og:site_name",
                    content: "Myntropic Studio",
                },
                // Twitter Card
                {
                    name: "twitter:card",
                    content: "summary_large_image",
                },
                {
                    name: "twitter:title",
                    content:
                        "Myntropic Studio | Evolutionary & Contextual Engineering Consulting for Intelligent Systems",
                },
                {
                    name: "twitter:description",
                    content:
                        "We help organizations design and evolve intelligent, adaptive, and sustainable software systems. Through Evolutionary & Contextual Engineering, we combine UX, AI, and software architecture to create systems that learn and grow with your business.",
                },
                {
                    name: "twitter:image",
                    content: "/images/og-myntropic.jpg",
                },
                // General SEO
                {
                    name: "description",
                    content:
                        "We help organizations design and evolve intelligent, adaptive, and sustainable software systems. Through Evolutionary & Contextual Engineering, we combine UX, AI, and software architecture to create systems that learn and grow with your business.",
                },
                {
                    name: "keywords",
                    content:
                        "inteligencia artificial, IA, experiencias digitales, desarrollo de software, UX, UI, agentes IA, RAG, automatización",
                },
                {
                    name: "author",
                    content: "Myntropic Studio",
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
        baseUrl: "https://myntropic.studio",
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
        enabled: process.env.NODE_ENV === "production",
        id: "G-YE8VMK86WG",
    },
    site: {
        url: "https://myntropic.studio",
        name: "Myntropic Studio",
        trailingSlash: false,
    },
});
