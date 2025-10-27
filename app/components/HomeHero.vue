<template>
    <section
        class="hero-section relative w-full min-h-screen flex items-center justify-center bg-cover bg-[25%] lg:bg-center bg-no-repeat overflow-hidden"
    >
        <!-- Dark overlay for better text readability -->
        <div class="absolute inset-0 bg-black/50 lg:bg-black/50 z-0" />

        <!-- Hero Content -->
        <div class="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-16 mt-32">
            <div
                class="flex flex-col items-start lg:items-center text-left lg:text-center gap-2 lg:gap-8"
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
                        <span>{{ t("title") }}</span>
                        <!-- <br />
                        <span>{{ t("title2") }}</span> -->
                    </h1>
                </div>

                <!-- Description -->
                <div class="py-2">
                    <p
                        class="font-open-sans text-white text-base lg:text-lg xl:text-2xl max-w-4xl leading-relaxed description"
                    >
                        {{ t("description") }}
                    </p>
                </div>

                <!-- Call-to-Action Section -->
                <div
                    class="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start lg:items-center pt-8"
                >
                    <!-- Primary CTA Button -->
                    <AppButton
                        destination="#ContactMe"
                        variant="primary"
                        size="large"
                    >
                        {{ t("mainCTA") }}
                    </AppButton>

                    <!-- Secondary CTA Link -->
                    <NuxtLink
                        href="#Process"
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
    background-image: url("/images/homehero.jpg");
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
    tagline: UX Onboarding para SaaS B2B & B2C
    title: Menos fricción. Más activación.
    title2: Construyamos inteligente
    description: Ayudo a equipos de producto SaaS B2B y B2C a optimizar el onboarding con un enfoque UX y product-led que impulsa activación y crecimiento.
    mainCTA: Comencemos ahora
    secondaryCTA: o descubrí el proceso
en:
    tagline: UX Onboarding for B2B & B2C SaaS
    title: Less Friction. More Activation.
    title2: Let's Build Smart.
    description: I help B2B and B2C SaaS product teams optimize onboarding with a UX and product-led approach that drives activation and growth.
    mainCTA: Get Started Now
    secondaryCTA: or discover the process
</i18n>
