<template>
    <div class="min-h-screen bg-zinc-950">
        <!-- Hero con background image -->
        <div
            v-if="post && post.meta && post.meta.image"
            class="relative w-full h-[320px] md:h-[420px] bg-center bg-cover"
            :style="`background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('${post.meta.image}')`"
        ></div>
        <!-- Contenedor del post superpuesto -->
        <div class="relative z-20 max-w-4xl mx-auto px-4 lg:px-8 -mt-64">
            <div
                class="md:bg-zinc-950/70 md:backdrop-blur-sm rounded-2xl shadow-2xl px-6 py-8"
            >
                <h1
                    class="font-title text-lg lg:text-xl xl:text-2xl text-zinc-100 text-left lg:text-center leading-normal pt-4 mb-14"
                >
                    {{ post.meta.title }}
                </h1>
                <!-- Article Container -->
                <article v-if="post">
                    <!-- Article Header -->
                    <header class="mb-16">
                        <!-- Back to Blog Link -->

                        <!-- Article Meta -->
                        <div
                            class="flex flex-wrap items-center gap-6 text-xs lg:text-sm text-zinc-400"
                        >
                            <!-- Date -->
                            <div
                                v-if="(post as any).meta.date"
                                class="flex items-center gap-2"
                            >
                                <svg
                                    class="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <time :datetime="(post as any).meta.date">
                                    {{ formatDate((post as any).meta.date) }}
                                </time>
                            </div>

                            <!-- Author -->
                            <div
                                v-if="(post as any).meta.author"
                                class="flex items-center gap-2"
                            >
                                <svg
                                    class="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <span>{{ (post as any).meta.author }}</span>
                            </div>

                            <!-- Reading Time -->
                            <div
                                v-if="(post as any).meta.readingTime"
                                class="flex items-center gap-2"
                            >
                                <svg
                                    class="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>
                                    {{ (post as any).meta.readingTime }}
                                    {{ t("reading_time") }}
                                </span>
                            </div>
                        </div>

                        <!-- Tags -->

                        <div
                            v-if="
                                (post as any).meta.tags &&
                                (post as any).meta.tags.length
                            "
                            class="flex flex-wrap gap-2 mt-6"
                        >
                            <span
                                v-for="tag in (post as any).meta.tags"
                                :key="tag"
                                class="px-2 py-1 bg-grey-800 text-grey-400 text-xs rounded-full"
                            >
                                #{{ tag }}
                            </span>
                        </div>

                        <!-- Excerpt -->
                        <div v-if="(post as any).meta.excerpt" class="mt-8">
                            <p
                                class="text-zinc-300 text-lg lg:text-xl leading-relaxed italic border-l-4 border-primary pl-6"
                            >
                                {{ (post as any).meta.excerpt }}
                            </p>
                        </div>
                    </header>

                    <!-- Article Content -->
                    <div class="prose prose-lg prose-invert max-w-none">
                        <ContentRenderer :value="post" />
                    </div>

                    <!-- Article Footer -->
                    <footer class="mt-16 pt-8 border-t border-zinc-800">
                        <!-- Share Section -->
                        <div
                            class="flex items-center justify-between flex-wrap gap-4"
                        >
                            <div class="flex items-center gap-4">
                                <span class="text-zinc-400 font-semibold">{{
                                    t("share")
                                }}</span>
                                <div class="flex gap-2">
                                    <!-- Twitter Share -->
                                    <a
                                        :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title || '')}&url=${encodeURIComponent(currentUrl)}`"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="p-2 rounded-full bg-zinc-900 text-zinc-300 hover:bg-primary hover:text-background transition-all duration-300"
                                    >
                                        <svg
                                            class="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                            />
                                        </svg>
                                    </a>

                                    <!-- LinkedIn Share -->
                                    <a
                                        :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="p-2 rounded-full bg-zinc-900 text-zinc-300 hover:bg-primary hover:text-background transition-all duration-300"
                                    >
                                        <svg
                                            class="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                            />
                                        </svg>
                                    </a>

                                    <!-- Copy Link -->
                                    <button
                                        @click="copyToClipboard"
                                        class="p-2 rounded-full bg-zinc-900 text-zinc-300 hover:bg-primary hover:text-background transition-all duration-300"
                                        title="Copiar enlace"
                                    >
                                        <svg
                                            class="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <!-- Back to top -->
                            <button
                                @click="scrollToTop"
                                class="flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors duration-300 group"
                            >
                                <span>{{ t("back_to_top") }}</span>
                                <svg
                                    class="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 15l7-7 7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </footer>
                </article>
                <!-- Error State -->
                <div
                    v-else
                    class="max-w-4xl mx-auto px-4 lg:px-8 py-16 text-center"
                >
                    <div class="mb-8">
                        <svg
                            class="w-16 h-16 mx-auto text-zinc-600 mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.691-2.5M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                        <h1
                            class="font-title text-3xl lg:text-4xl text-zinc-100 mb-4"
                        >
                            {{ t("not_found_title") }}
                        </h1>
                        <p class="text-zinc-400 text-lg mb-8">
                            {{ t("not_found_desc") }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { Collections } from "@nuxt/content";
const { t, locale } = useI18n({ useScope: "local" });

const route = useRoute();
const slug = route.params.slug as string;

// Fetch the blog post
const { data: post } = await useAsyncData(
    `blog-${slug}-${locale.value}`,
    async () => {
        const collection = ("content_" + locale.value) as keyof Collections;
        let content = await queryCollection(collection)
            .path(`/blog/${slug}`)
            .first();
        // Fallback a inglés si no existe en el idioma actual
        if (!content && locale.value !== "en") {
            content = await queryCollection("content_en")
                .path(`/blog/${slug}`)
                .first();
        }
        return content;
    },
    { watch: [locale] }
);

// SEO dinámico multilenguaje
watchEffect(() => {
    if (!post.value) return;
    useSeoMeta({
        title: post.value.seo.title || t("not_found_title"),
        description:
            post.value.excerpt ||
            post.value.seo.description ||
            "Blog de Myntropic",
        ogTitle: post.value.seo.title || t("not_found_title"),
        ogDescription:
            post.value.excerpt ||
            post.value.seo.description ||
            "Blog de Myntropic",
        ogImage: post.value.meta.image || "/images/og-default.jpg",
        twitterCard: "summary_large_image",
        // SEO multilenguaje
        language: locale.value,
        ogLocale: locale.value === "en" ? "en_US" : "es_ES",
    });
});

// Get current URL for sharing
const currentUrl = computed(() => {
    if (process.client) {
        return window.location.href;
    }
    return `https://myntropic.com${route.fullPath}`;
});

// Format date function
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    // Usa el locale actual para el formato de fecha
    return date.toLocaleDateString(locale.value === "en" ? "en-US" : "es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

// Copy to clipboard function
const copyToClipboard = async () => {
    if (process.client && navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(currentUrl.value);
            // You could add a toast notification here
            console.log("Enlace copiado al portapapeles");
        } catch (err) {
            console.error("Error al copiar al portapapeles:", err);
        }
    }
};

// Scroll to top function
const scrollToTop = () => {
    if (process.client) {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
};
</script>

<style>
@reference "../../assets/css/app.css"
/* Custom prose styles to match your design */
.prose {
    @apply text-zinc-100;
}

.prose h1 {
    @apply font-semibold text-zinc-100 font-title;
}

.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
    @apply bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-180% bg-clip-text text-transparent font-semibold;
}

.prose h1 {
    @apply text-4xl lg:text-5xl xl:text-5xl mb-6 pb-6 mt-8;
}

.prose h2 {
    @apply text-2xl lg:text-3xl xl:text-4xl mb-4 mt-8;
}

.prose h3 {
    @apply text-2xl lg:text-3xl lg:w-10/12 mb-4 mt-6;
}

/* Enlaces dentro de h2 y h3 con estilo de AppH3 */
.prose h2 a,
.prose h3 a {
    @apply bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-180% bg-clip-text text-transparent font-semibold no-underline;
}

.prose h2 a:hover,
.prose h3 a:hover {
    @apply bg-gradient-to-r from-primary via-gradient-via to-gradient-to;
}

.prose h4 {
    @apply text-lg lg:text-xl xl:text-2xl mb-3 mt-5;
}

.prose h5 {
    @apply text-base lg:text-lg xl:text-xl mb-3 mt-4;
}

.prose h6 {
    @apply text-sm lg:text-base xl:text-lg mb-2 mt-3;
}

.prose p {
    @apply text-zinc-200 leading-relaxed mb-4;
}

.prose a {
    @apply text-primary hover:text-gradient-via transition-colors duration-300 underline;
}

.prose ul,
.prose ol {
    @apply text-zinc-200 mb-4;
}

.prose li {
    @apply mb-2;
}

.prose blockquote {
    @apply border-l-4 border-primary pl-6 pr-6 py-4 italic text-zinc-300 bg-zinc-950 rounded-xl mx-4 my-6;
}

.prose code {
    @apply bg-zinc-800 text-primary px-2 py-1 rounded text-sm font-mono;
}

.prose pre {
    @apply bg-zinc-950 p-6 rounded-xl overflow-x-auto border border-zinc-800 my-6;
    background-color: #1e1e1e;
    box-shadow:
        0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.prose pre code {
    @apply bg-transparent p-0 text-zinc-100 font-mono;
    color: #d4d4d4;
    font-family:
        "Fira Code", "Cascadia Code", "JetBrains Mono", "SF Mono", Monaco,
        "Inconsolata", "Roboto Mono", "Source Code Pro", monospace;
}

/* Prism.js VS Code Dark+ VIBRANT syntax highlighting */
:root {
    --prism-bg: #1e1e1e;
    --prism-fg: #d4d4d4;
    --prism-comment: #57a64a;
    --prism-keyword: #569cd6;
    --prism-string: #d69d85;
    --prism-function: #dcdcaa;
    --prism-variable: #4fc1ff;
    --prism-number: #b5cea8;
    --prism-operator: #d4d4d4;
    --prism-attr: #4ec9b0;
    --prism-tag: #d16969;
    --prism-class: #4ec9b0;
    --prism-builtin: #b5cea8;
    --prism-selector: #c586c0;
    --prism-property: #9cdcfe;
    --prism-punctuation: #d4d4d4;
}

.prose pre {
    background: var(--prism-bg) !important;
    color: var(--prism-fg) !important;
    border-radius: 1rem;
    padding: 1.5rem;
    border: 1px solid #23272e;
    box-shadow:
        0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
    overflow-x: auto;
    margin: 1.5rem 0;
}

.prose code {
    font-family:
        "Fira Code", "Cascadia Code", "JetBrains Mono", "SF Mono", Monaco,
        "Inconsolata", "Roboto Mono", "Source Code Pro", monospace;
    font-size: 0.95em;
}

.prose pre code {
    background: none !important;
    color: var(--prism-fg) !important;
    padding: 0;
}

/* Prism token colors - VIBRANT */
.prose code .token.comment,
.prose code .token.prolog,
.prose code .token.doctype,
.prose code .token.cdata {
    color: var(--prism-comment);
    font-style: italic;
}
.prose code .token.punctuation {
    color: var(--prism-punctuation);
}
.prose code .token.property {
    color: var(--prism-property);
}
.prose code .token.tag,
.prose code .token.constant,
.prose code .token.symbol,
.prose code .token.deleted {
    color: var(--prism-tag);
}
.prose code .token.boolean,
.prose code .token.number {
    color: var(--prism-number);
}
.prose code .token.selector {
    color: var(--prism-selector);
}
.prose code .token.attr-name {
    color: var(--prism-attr);
}
.prose code .token.string,
.prose code .token.char,
.prose code .token.builtin,
.prose code .token.inserted {
    color: var(--prism-string);
}
.prose code .token.operator,
.prose code .token.entity,
.prose code .token.url,
.prose code .token.variable {
    color: var(--prism-variable);
}
.prose code .token.atrule,
.prose code .token.attr-value,
.prose code .token.class-name {
    color: var(--prism-class);
}
.prose code .token.keyword {
    color: var(--prism-keyword);
}
.prose code .token.function,
.prose code .token.regex,
.prose code .token.important {
    color: var(--prism-function);
}
.prose code .token.bold {
    font-weight: bold;
}
.prose code .token.italic {
    font-style: italic;
}
.prose code .token.entity {
    cursor: help;
}

/* Cambiar el fondo de la página del post */
:root {
    --page-bg: #09090b;
}

:global(body),
.prose,
.min-h-screen.bg-background {
    background-color: var(--page-bg) !important;
}
</style>

<i18n lang="yaml">
es:
    share: "Compartir:"
    copy_link: "Copiar enlace"
    back_to_top: "Volver arriba"
    not_found_title: "Artículo no encontrado"
    not_found_desc: "El artículo que buscas no existe o ha sido movido."
    reading_time: "min lectura"
en:
    share: "Share:"
    copy_link: "Copy link"
    back_to_top: "Back to top"
    not_found_title: "Article not found"
    not_found_desc: "The article you are looking for does not exist or has been moved."
    reading_time: "min read"
</i18n>
