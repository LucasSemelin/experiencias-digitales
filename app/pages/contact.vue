<template>
    <div class="bg-zinc-950">
        <!-- Hero Section -->
        <section
            class="hero-section relative w-full h-[70vh] lg:h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        >
            <!-- Dark overlay for better text readability -->
            <div class="absolute inset-0 bg-black/40 lg:bg-black/60 z-0" />

            <!-- Hero Content -->
            <div
                class="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-16 mt-8 lg:mt-12"
            >
                <div
                    class="flex flex-col items-start lg:items-center text-left lg:text-center gap-1 lg:gap-4"
                >
                    <!-- Main Headline -->
                    <div class="py-1">
                        <p
                            class="text-primary font-semibold pb-2 text-lg lg:text-xl font-open-sans tagline"
                        >
                            {{ t("hero.tagline") }}
                        </p>
                        <h1
                            class="font-title font-normal text-4xl xl:text-5xl text-grey-100 leading-tight max-w-4xl"
                        >
                            {{ t("hero.title") }}
                        </h1>
                    </div>

                    <!-- Description -->
                    <div class="py-1">
                        <p
                            class="font-open-sans text-white text-base lg:text-lg xl:text-xl max-w-4xl leading-relaxed description"
                        >
                            {{ t("hero.subtitle") }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Form Section -->
        <div class="-mt-16 lg:-mt-20 relative z-20">
            <AppContactForm />
        </div>

        <!-- Additional Info Section -->
        <section class="py-16 px-4 lg:px-8 bg-zinc-900/50">
            <div class="max-w-4xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Response Time -->
                    <div class="text-center md:text-left">
                        <div
                            class="flex items-center justify-center md:justify-start mb-4"
                        >
                            <div
                                class="w-12 h-12 bg-gradient-to-br from-gradient-from to-gradient-to rounded-lg flex items-center justify-center"
                            >
                                <svg
                                    class="w-6 h-6 text-zinc-950"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-zinc-100 mb-2">
                            {{ t("info.responseTime.title") }}
                        </h3>
                        <p class="text-zinc-400">
                            {{ t("info.responseTime.description") }}
                        </p>
                    </div>

                    <!-- Free Consultation -->
                    <div class="text-center md:text-left">
                        <div
                            class="flex items-center justify-center md:justify-start mb-4"
                        >
                            <div
                                class="w-12 h-12 bg-gradient-to-br from-gradient-from to-gradient-to rounded-lg flex items-center justify-center"
                            >
                                <svg
                                    class="w-6 h-6 text-zinc-950"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-zinc-100 mb-2">
                            {{ t("info.consultation.title") }}
                        </h3>
                        <p class="text-zinc-400">
                            {{ t("info.consultation.description") }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: "local" });

useHead({
    title: computed(() => t("meta.title")),
    meta: [
        {
            name: "description",
            content: computed(() => t("meta.description")),
        },
    ],
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
    background-image: url("/images/page-contact/contact-hero-mobile.jpg");
}

@media (min-width: 1024px) {
    .hero-section {
        background-image: url("/images/page-contact/contact-hero.jpg");
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
    meta:
        title: "Contactanos | Expertos en Ingeniería de Software y Contexto Evolutiva"
        description: "Conectá con Myntropic Studio para conversar sobre cómo podemos ayudar a tu organización a diseñar, construir y evolucionar sistemas inteligentes. Creamos software adaptativo que entiende su contexto y crece junto a tu negocio."
    hero:
        tagline: "¿Tenés un proyecto en mente?"
        title: "Hablemos de tu próximo proyecto"
        subtitle: "¿Listo para llevar tu producto al próximo nivel? Conversemos sobre tu proyecto y cómo podemos ayudarte a crear software inteligente y experiencias excepcionales."
    info:
        responseTime:
            title: "Respuesta en 24hs"
            description: "Te contactaremos dentro de las próximas 24 horas para discutir tu proyecto en detalle."
        consultation:
            title: "Consulta gratuita"
            description: "La primera conversación es gratis. Sin compromiso, solo queremos entender tu visión."

en:
    meta:
        title: "Get in Touch | Evolutionary Software & Context Engineering Experts"
        description: "Connect with Myntropic Studio to discuss how we can help your organization design, build, and evolve intelligent systems. Let’s shape adaptive software that understands context and grows with your business."
    hero:
        tagline: "Got a project in mind?"
        title: "Let's talk about your next project"
        subtitle: "Ready to take your product to the next level? Let's discuss your project and how we can help you build intelligent software and exceptional experiences."
    info:
        responseTime:
            title: "24-hour response"
            description: "We'll get back to you within 24 hours to discuss your project in detail."
        consultation:
            title: "Free consultation"
            description: "The first conversation is free. No commitment, we just want to understand your vision."
</i18n>
