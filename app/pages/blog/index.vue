<template>
    <div class="min-h-screen bg-zinc-950">
        <!-- Header Spacer -->
        <div class="h-32" />

        <!-- Blog Container -->
        <div class="max-w-7xl mx-auto px-4 lg:px-8">
            <!-- Blog Header -->
            <!-- <header class="text-center mb-16">
                <h1
                    class="font-title text-4xl lg:text-5xl xl:text-6xl text-grey-100 leading-tight mb-6"
                >
                    {{
                        locale === "en" ? "Myntropic Blog" : "Blog de Myntropic"
                    }}
                </h1>
                <p
                    class="text-grey-300 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
                >
                    {{
                        locale === "en"
                            ? "Discover the latest trends in digital transformation, technology innovation, and business strategies shaping the future."
                            : "Descubre las últimas tendencias en transformación digital, innovación tecnológica y estrategias empresariales que están dando forma al futuro."
                    }}
                </p>
            </header> -->

            <!-- Blog Posts Grid -->
            <div
                v-if="posts && posts.length"
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <article
                    v-for="post in posts"
                    :key="post._path"
                    class="bg-zinc-900 rounded-3xl overflow-hidden hover:bg-zinc-900/50 transition-all duration-300 group border cursor-pointer"
                >
                    <!-- Featured Image -->
                    <div
                        v-if="post.meta.image"
                        class="aspect-video overflow-hidden"
                    >
                        <img
                            :src="post.meta.image"
                            :alt="post.title"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <!-- Placeholder for posts without image -->
                    <div
                        v-else
                        class="aspect-video bg-gradient-to-br from-primary/20 to-gradient-via/20 flex items-center justify-center"
                    >
                        <svg
                            class="w-16 h-16 text-primary/50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                        </svg>
                    </div>

                    <div class="p-6">
                        <!-- Post Meta -->
                        <div
                            class="flex items-center gap-4 text-sm text-zinc-400 mb-3"
                        >
                            <!-- Date -->
                            <div
                                v-if="post.meta.date"
                                class="flex items-center gap-1"
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
                                <time :datetime="post.meta.date">
                                    {{ formatDate(post.meta.date) }}
                                </time>
                            </div>

                            <!-- Reading Time -->
                            <div
                                v-if="post.meta.readingTime"
                                class="flex items-center gap-1"
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
                                <span
                                    >{{ post.meta.readingTime }}
                                    {{ t("reading_time") }}</span
                                >
                            </div>
                        </div>

                        <!-- Post Title -->
                        <h2
                            class="font-title text-xl lg:text-2xl text-grey-100 mb-3 leading-tight"
                        >
                            {{ post.title }}
                        </h2>

                        <!-- Post Excerpt -->
                        <p
                            v-if="post.description"
                            class="text-zinc-400 leading-relaxed mb-4 line-clamp-3 text-sm"
                        >
                            {{ post.description }}
                        </p>

                        <!-- Tags -->
                        <div
                            v-if="post.meta.tags && post.meta.tags.length"
                            class="flex flex-wrap gap-2 mb-4"
                        >
                            <span
                                v-for="tag in post.meta.tags.slice(0, 3)"
                                :key="tag"
                                class="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-full"
                            >
                                #{{ tag }}
                            </span>
                            <span
                                v-if="post.meta.tags.length > 3"
                                class="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-full"
                            >
                                +{{ post.meta.tags.length - 3 }}
                            </span>
                        </div>

                        <!-- Read More Link -->
                        <!-- <NuxtLink
                            :to="post._path"
                            class="inline-flex items-center gap-2 text-primary hover:text-gradient-via transition-colors duration-300 font-semibold group"
                        >
                            {{ locale === "en" ? "Read more" : "Leer más" }}
                            <svg
                                class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </NuxtLink> -->
                    </div>
                </article>
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-16">
                <svg
                    class="w-16 h-16 mx-auto text-grey-600 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.691-2.5M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                </svg>
                <h2 class="font-title text-2xl lg:text-3xl text-grey-100 mb-4">
                    {{ locale === "en" ? "Coming soon" : "Próximamente" }}
                </h2>
                <p class="text-grey-400 text-lg mb-8">
                    {{
                        locale === "en"
                            ? "We are working on amazing content for you. Stay tuned!"
                            : "Estamos trabajando en contenido increíble para ti. ¡Mantente atento!"
                    }}
                </p>
                <AppButton destination="/contact" class="mx-auto">
                    {{ locale === "en" ? "Contact us" : "Contactanos" }}
                </AppButton>
            </div>

            <!-- Debugging Output for Nuxt Content -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, onMounted } from "vue";
const { t, locale } = useI18n();

const debugContent = ref(null);

onMounted(() => {
    if (posts.value) debugContent.value = posts.value;
});

// Fetch all blog posts según idioma
const { data: posts } = await useAsyncData(
    `blog-posts-${locale.value}`,
    async () => {
        const collection = ("content_" + locale.value) as keyof Collections;
        // Usar .all() para obtener todos los posts
        const all = await queryCollection(collection).all();
        // Asignar el array crudo para depuración
        return all;
    },
    { watch: [locale] }
);

// Set page meta adaptado a idioma
useSeoMeta({
    title:
        locale.value === "en"
            ? "Blog - Myntropic | Digital Transformation & Innovation"
            : "Blog - Myntropic | Transformación Digital e Innovación",
    description:
        locale.value === "en"
            ? "Discover the latest trends in digital transformation, technology innovation, and business strategies on the Myntropic blog."
            : "Descubre las últimas tendencias en transformación digital, innovación tecnológica y estrategias empresariales en el blog de Myntropic.",
    ogTitle:
        locale.value === "en"
            ? "Blog - Myntropic | Digital Transformation & Innovation"
            : "Blog - Myntropic | Transformación Digital e Innovación",
    ogDescription:
        locale.value === "en"
            ? "Discover the latest trends in digital transformation, technology innovation, and business strategies on the Myntropic blog."
            : "Descubre las últimas tendencias en transformación digital, innovación tecnológica y estrategias empresariales en el blog de Myntropic.",
    ogImage: "/images/og-blog.jpg",
    twitterCard: "summary_large_image",
});

// Format date function multilenguaje
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale.value === "en" ? "en-US" : "es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};
</script>

<style>
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-clamp: 3;
}
</style>

<i18n lang="yaml">
es:
    reading_time: min de lectura
en:
    reading_time: min read
</i18n>
