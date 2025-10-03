<template>
    <section
        class="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-gradient-from via-35% via-gradient-via to-gradient-to overflow-hidden"
    >
        <!-- Hero Content -->
        <div class="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-16">
            <div class="flex flex-col items-center text-center gap-8">
                <!-- Tagline -->
                <div class="py-2">
                    <p
                        class="text-primary font-semibold text-lg lg:text-xl font-open-sans tagline"
                    >
                        {{ t("tagline") }}
                    </p>
                </div>

                <!-- Main Headline -->
                <div class="py-2">
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
                    class="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center pt-8"
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
    tagline: Automation. Augmentation. Autonomy.
    title: Diseñamos experiencias inteligentes que potencian a las personas
    description: Creamos experiencias digitales de alto valor para tus usuarios a través de la combinación de diseño UX, ingeniería de software e inteligencia artificial.
    mainCTA: Conversemos sobre tu proyecto
    secondaryCTA: o conocé cómo trabajamos
en:
    tagline: Automation. Augmentation. Autonomy.
    title: We design intelligent experiences that empower people
    description: We deliver high-value digital experiences for your users through the combination of UX design, software engineering, and artificial intelligence.
    mainCTA: Let's talk about your project
    secondaryCTA: or see how we work
</i18n>
