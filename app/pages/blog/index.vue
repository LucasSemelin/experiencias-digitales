<template>
    <div class="min-h-screen bg-background">
        <!-- Header Spacer -->
        <div class="h-32"></div>

        <!-- Blog Container -->
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-16">
            <!-- Blog Header -->
            <header class="text-center mb-16">
                <h1
                    class="font-title text-4xl lg:text-5xl xl:text-6xl text-grey-100 leading-tight mb-6"
                >
                    Blog de Myntropic
                </h1>
                <p
                    class="text-grey-300 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
                >
                    Descubre las últimas tendencias en transformación digital,
                    innovación tecnológica y estrategias empresariales que están
                    dando forma al futuro.
                </p>
            </header>

            <!-- Blog Posts Grid -->
            <div
                v-if="posts && posts.length"
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <article
                    v-for="post in posts"
                    :key="post._path"
                    class="bg-grey-900 rounded-lg overflow-hidden hover:bg-grey-800 transition-all duration-300 group border border-grey-800 hover:border-grey-700"
                >
                    <!-- Featured Image -->
                    <div
                        v-if="(post as any).image"
                        class="aspect-video overflow-hidden"
                    >
                        <img
                            :src="(post as any).image"
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
                            class="flex items-center gap-4 text-sm text-grey-400 mb-3"
                        >
                            <!-- Date -->
                            <div
                                v-if="(post as any).date"
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
                                <time :datetime="(post as any).date">
                                    {{ formatDate((post as any).date) }}
                                </time>
                            </div>

                            <!-- Reading Time -->
                            <div
                                v-if="(post as any).readingTime"
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
                                <span>{{ (post as any).readingTime }} min</span>
                            </div>
                        </div>

                        <!-- Post Title -->
                        <h2
                            class="font-title text-xl lg:text-2xl text-grey-100 mb-3 leading-tight group-hover:text-primary transition-colors duration-300"
                        >
                            {{ post.title }}
                        </h2>

                        <!-- Post Excerpt -->
                        <p
                            v-if="(post as any).excerpt"
                            class="text-grey-300 leading-relaxed mb-4 line-clamp-3"
                        >
                            {{ (post as any).excerpt }}
                        </p>

                        <!-- Tags -->
                        <div
                            v-if="
                                (post as any).tags && (post as any).tags.length
                            "
                            class="flex flex-wrap gap-2 mb-4"
                        >
                            <span
                                v-for="tag in (post as any).tags.slice(0, 3)"
                                :key="tag"
                                class="px-2 py-1 bg-grey-800 text-grey-400 text-xs rounded-full"
                            >
                                #{{ tag }}
                            </span>
                            <span
                                v-if="(post as any).tags.length > 3"
                                class="px-2 py-1 bg-grey-800 text-grey-400 text-xs rounded-full"
                            >
                                +{{ (post as any).tags.length - 3 }}
                            </span>
                        </div>

                        <!-- Read More Link -->
                        <NuxtLink
                            :to="post._path"
                            class="inline-flex items-center gap-2 text-primary hover:text-gradient-via transition-colors duration-300 font-semibold group"
                        >
                            Leer más
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
                        </NuxtLink>
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
                    Próximamente
                </h2>
                <p class="text-grey-400 text-lg mb-8">
                    Estamos trabajando en contenido increíble para ti. ¡Mantente
                    atento!
                </p>
                <NuxtLink
                    to="/contact"
                    class="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-gradient-from hover:via-gradient-via hover:to-gradient-to transition-all duration-300"
                >
                    Contáctanos
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Fetch all blog posts
const { data: posts } = await useAsyncData("blog-posts", () => {
    return queryCollection("blog").sort({ date: -1 }).find();
});

// Set page meta
useSeoMeta({
    title: "Blog - Myntropic | Transformación Digital e Innovación",
    description:
        "Descubre las últimas tendencias en transformación digital, innovación tecnológica y estrategias empresariales en el blog de Myntropic.",
    ogTitle: "Blog - Myntropic | Transformación Digital e Innovación",
    ogDescription:
        "Descubre las últimas tendencias en transformación digital, innovación tecnológica y estrategias empresariales en el blog de Myntropic.",
    ogImage: "/images/og-blog.jpg",
    twitterCard: "summary_large_image",
});

// Format date function
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
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
}
</style>
