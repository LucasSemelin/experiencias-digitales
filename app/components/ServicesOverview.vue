<template>
    <section class="w-full py-16 lg:py-24 bg-zinc-950">
        <div class="max-w-7xl mx-auto px-4 lg:px-16">
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
                <!-- Text Content - Left side on desktop -->
                <div class="lg:col-span-1 order-1">
                    <h2
                        class="font-title font-normal text-2xl lg:text-3xl xl:text-4xl text-white leading-tight mb-6 lg:mb-8"
                    >
                        {{ t("title") }}
                    </h2>
                    <p
                        class="font-open-sans text-zinc-400 text-base lg:text-lg xl:text-xl leading-relaxed mb-8"
                    >
                        {{ t("description") }}
                    </p>

                    <!-- Call to Action -->
                    <!-- <NuxtLink
                        href="#services"
                        class="inline-flex items-center text-white text-sm lg:text-base hover:text-primary transition-colors duration-300 group"
                    >
                        {{ t("cta") }}
                        <svg
                            class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </NuxtLink> -->
                </div>

                <!-- Image - Right side on desktop -->
                <div
                    class="lg:col-span-1 order-2 flex justify-center lg:justify-end"
                >
                    <div class="w-full max-w-xs lg:max-w-sm">
                        <NuxtImg
                            src="/images/page-services/services-triangle.jpg"
                            class="w-full h-auto object-contain rounded-3xl"
                            :alt="t('title')"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n({
    useScope: "local",
});
</script>

<style scoped>
.font-open-sans {
    font-family: "Open Sans", sans-serif;
}

.font-title {
    font-family: "Electrolize", sans-serif;
}
</style>

<i18n lang="yaml">
es:
    title: "Un Enfoque Unificado para Sistemas Inteligentes"
    description: "En Myntropic Studio, no separamos el diseño de la ingeniería o la inteligencia de la experiencia — los conectamos. Nuestros servicios forman un marco unificado donde cada capa de un sistema entiende su contexto y está construida para evolucionar."
    cta: "Conoce más sobre nuestros servicios"

en:
    title: "A Unified Approach to Intelligent Systems"
    description: "At Myntropic Studio, we don't separate design from engineering or intelligence from experience — we connect them. Our services form a unified framework where every layer of a system understands its context and is built to evolve."
    cta: "Learn More About Our Services"
</i18n>
