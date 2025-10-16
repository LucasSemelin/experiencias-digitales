<template>
    <section
        class="hero-section relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
    >
        <!-- Dark overlay for better text readability -->
        <div class="absolute inset-0 bg-black/50 z-0" />

        <!-- Hero Content -->
        <div class="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-16">
            <div
                class="flex flex-col items-start lg:items-center text-left lg:text-center gap-8"
            >
                <!-- Main Headline -->
                <div class="py-2">
                    <p
                        class="text-primary font-semibold pb-2 text-lg lg:text-xl font-open-sans tagline"
                    >
                        {{ t("tagline") }}
                    </p>
                    <h1
                        class="font-title font-normal text-4xl xl:text-5xl text-grey-100 leading-tight max-w-4xl"
                    >
                        {{ t("title") }}
                    </h1>
                </div>

                <!-- Description -->
                <div class="py-2">
                    <p
                        class="font-open-sans text-white text-base lg:text-lg xl:text-xl max-w-4xl leading-relaxed description"
                    >
                        {{ t("description") }}
                    </p>
                </div>

                <!-- Call-to-Action Section -->
                <div
                    class="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start lg:items-center pt-8"
                >
                    <!-- Primary CTA Button -->
                    <AppButton destination="#contact">
                        {{ t("mainCTA") }}
                    </AppButton>

                    <!-- Secondary CTA Link -->
                    <NuxtLink
                        href="#approach"
                        class="text-grey-100 text-sm underline hover:text-primary transition-colors duration-300 px-4 py-2"
                    >
                        {{ t("secondaryCTA") }}
                    </NuxtLink>
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
/* Custom font classes */
.font-electrolize {
    font-family: "Electrolize", sans-serif;
}

.font-open-sans {
    font-family: "Open Sans", sans-serif;
}

/* Responsive background images */
.hero-section {
    background-image: url("/images/icons/homehero-mobile.jpg");
}

@media (min-width: 1024px) {
    .hero-section {
        background-image: url("/images/homehero.jpg");
    }
}

/* Enhanced responsive design */
@media (max-width: 640px) {
    h1 {
        font-size: 2rem; /* text-3xl equivalent */
        line-height: 1.2;
    }

    .tagline {
        font-size: 1rem;
    }

    .description {
        font-size: 0.875rem; /* text-sm equivalent */
    }
}

@media (min-width: 641px) and (max-width: 1024px) {
    h1 {
        font-size: 2.5rem; /* text-4xl equivalent */
    }
}
</style>

<i18n lang="yaml">
es:
    tagline: Context & Evolution Engineering
    title: Diseñamos y desarrollamos software que evoluciona con tu empresa
    description: Creamos sistemas digitales aplicando UX, ingeniería de software e inteligencia artificial para diseñar soluciones que entienden su contexto, aprenden del uso y evolucionan con tu negocio
    mainCTA: Conversemos sobre tu proyecto
    secondaryCTA: o conocé cómo trabajamos
en:
    tagline: Context & Evolution Engineering
    title: We design and build software that evolves with your business
    description: We create digital systems by applying UX, software engineering, and artificial intelligence to design solutions that understand their context, learn from usage, and evolve with your business
    mainCTA: Let's talk about your project
    secondaryCTA: or see how we work
</i18n>
