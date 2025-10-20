<template>
    <div class="min-h-screen bg-gray-950">
        <!-- Hero Section -->
        <section
            class="hero-section relative w-full min-h-screen flex items-center justify-center bg-cover bg-[25%] lg:bg-center bg-no-repeat overflow-hidden"
        >
            <!-- Dark overlay for better text readability -->
            <div class="absolute inset-0 bg-black/50 lg:bg-black/50 z-0" />

            <!-- Hero Content -->
            <div
                class="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-16 mt-32"
            >
                <div
                    class="flex flex-col items-start lg:items-center text-left lg:text-center gap-2 lg:gap-8"
                >
                    <!-- Main Headline -->
                    <div class="py-2">
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
                    <div class="py-2">
                        <p
                            class="font-open-sans text-white text-base lg:text-lg xl:text-2xl max-w-4xl leading-relaxed description"
                        >
                            {{ t("hero.description") }}
                        </p>
                    </div>

                    <!-- Call-to-Action Section -->
                    <div
                        class="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start lg:items-center pt-8"
                    >
                        <!-- Primary CTA Button -->
                        <AppButton destination="#case-studies">
                            {{ t("hero.mainCTA") }}
                        </AppButton>

                        <!-- Secondary CTA Link -->
                        <NuxtLink
                            href="/contact"
                            class="text-grey-100 text-sm underline hover:text-primary transition-colors duration-300 px-4 py-2"
                        >
                            {{ t("hero.secondaryCTA") }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- Case Studies Section -->
        <section id="case-studies" class="py-16 bg-gray-950">
            <div class="container mx-auto px-6">
                <AppH2>{{ t("portfolio.title") }}</AppH2>

                <!-- Cards Grid -->
                <div class="space-y-6 lg:space-y-8 max-w-4xl mx-auto mt-12">
                    <!-- Card 1: Optimización de procesos de compliance -->
                    <div
                        class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-3xl overflow-hidden hover:border-grey-700/70 transition-all duration-300 group"
                    >
                        <div class="flex flex-col md:flex-row">
                            <!-- Image -->
                            <div
                                class="w-full md:w-1/2 h-48 md:h-auto flex-shrink-0"
                            >
                                <NuxtImg
                                    src="/images/portfolio/compliance.jpg"
                                    alt="Optimización de procesos de compliance con IA"
                                    class="w-full h-full object-cover"
                                />
                            </div>

                            <!-- Content -->
                            <div class="flex-1 p-6 lg:p-8">
                                <h3
                                    class="font-title text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4"
                                >
                                    {{ t("portfolio.case1.title") }}
                                </h3>
                                <div
                                    class="space-y-3 text-sm lg:text-base text-grey-300 leading-relaxed"
                                >
                                    <div>
                                        <span
                                            class="text-primary font-semibold"
                                            >{{
                                                t(
                                                    "portfolio.case1.challenge_label"
                                                )
                                            }}</span
                                        >
                                        <span class="ml-1">{{
                                            t("portfolio.case1.challenge")
                                        }}</span>
                                    </div>
                                    <div>
                                        <span
                                            class="text-primary font-semibold"
                                            >{{
                                                t(
                                                    "portfolio.case1.solution_label"
                                                )
                                            }}</span
                                        >
                                        <span class="ml-1">{{
                                            t("portfolio.case1.solution")
                                        }}</span>
                                    </div>
                                    <div>
                                        <span
                                            class="text-primary font-semibold"
                                            >{{
                                                t(
                                                    "portfolio.case1.impact_label"
                                                )
                                            }}</span
                                        >
                                        <span class="ml-1">{{
                                            t("portfolio.case1.impact")
                                        }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: Plataforma de salud -->
                    <div
                        class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-3xl overflow-hidden hover:border-grey-700/70 transition-all duration-300 group"
                    >
                        <div class="flex flex-col md:flex-row">
                            <!-- Image -->
                            <div
                                class="w-full md:w-1/2 h-48 md:h-auto flex-shrink-0"
                            >
                                <NuxtImg
                                    src="/images/portfolio/healthcare.jpg"
                                    alt="Plataforma de salud con asistentes inteligentes"
                                    class="w-full h-full object-cover"
                                />
                            </div>

                            <!-- Content -->
                            <div class="flex-1 p-6 lg:p-8">
                                <h3
                                    class="font-title text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4"
                                >
                                    {{ t("portfolio.case2.title") }}
                                </h3>
                                <div
                                    class="space-y-3 text-sm lg:text-base text-grey-300 leading-relaxed"
                                >
                                    <div>
                                        <span
                                            class="text-primary font-semibold"
                                            >{{
                                                t(
                                                    "portfolio.case2.challenge_label"
                                                )
                                            }}</span
                                        >
                                        <span class="ml-1">{{
                                            t("portfolio.case2.challenge")
                                        }}</span>
                                    </div>
                                    <div>
                                        <span
                                            class="text-primary font-semibold"
                                            >{{
                                                t(
                                                    "portfolio.case2.solution_label"
                                                )
                                            }}</span
                                        >
                                        <span class="ml-1">{{
                                            t("portfolio.case2.solution")
                                        }}</span>
                                    </div>
                                    <div>
                                        <span
                                            class="text-primary font-semibold"
                                            >{{
                                                t(
                                                    "portfolio.case2.impact_label"
                                                )
                                            }}</span
                                        >
                                        <span class="ml-1">{{
                                            t("portfolio.case2.impact")
                                        }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: SaaS B2B huella de carbono -->
                    <div
                        class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-3xl overflow-hidden hover:border-grey-700/70 transition-all duration-300 group"
                    >
                        <div class="flex flex-col md:flex-row">
                            <!-- Image -->
                            <div
                                class="w-full md:w-1/2 h-48 md:h-auto flex-shrink-0"
                            >
                                <NuxtImg
                                    src="/images/portfolio/sustainability.jpg"
                                    alt="SaaS B2B de medición de huella de carbono"
                                    class="w-full h-full object-cover"
                                />
                            </div>

                            <!-- Content -->
                            <div class="flex-1 p-6 lg:p-8">
                                <h3
                                    class="font-title text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4"
                                >
                                    {{ t("portfolio.case3.title") }}
                                </h3>
                                <div
                                    class="space-y-3 text-sm lg:text-base text-grey-300 leading-relaxed"
                                >
                                    <div>
                                        <span
                                            class="text-primary font-semibold"
                                            >{{
                                                t(
                                                    "portfolio.case3.challenge_label"
                                                )
                                            }}</span
                                        >
                                        <span class="ml-1">{{
                                            t("portfolio.case3.challenge")
                                        }}</span>
                                    </div>
                                    <div>
                                        <span
                                            class="text-primary font-semibold"
                                            >{{
                                                t(
                                                    "portfolio.case3.solution_label"
                                                )
                                            }}</span
                                        >
                                        <span class="ml-1">{{
                                            t("portfolio.case3.solution")
                                        }}</span>
                                    </div>
                                    <div>
                                        <span
                                            class="text-primary font-semibold"
                                            >{{
                                                t(
                                                    "portfolio.case3.impact_label"
                                                )
                                            }}</span
                                        >
                                        <span class="ml-1">{{
                                            t("portfolio.case3.impact")
                                        }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="w-full py-16 lg:py-24 bg-zinc-950">
            <div class="max-w-7xl mx-auto px-4 lg:px-16">
                <!-- Final CTA Section -->
                <div
                    class="bg-zinc-900/50 rounded-2xl lg:rounded-3xl p-8 lg:p-12 xl:p-16 border border-zinc-800"
                >
                    <div class="max-w-4xl mx-auto text-center">
                        <!-- CTA Heading -->
                        <h3
                            class="font-title font-normal text-2xl lg:text-3xl xl:text-4xl text-white leading-tight mb-6 lg:mb-8"
                        >
                            {{ t("cta.heading") }}
                        </h3>

                        <!-- CTA Description -->
                        <p
                            class="font-open-sans text-zinc-400 text-base lg:text-lg xl:text-xl leading-relaxed mb-8 lg:mb-12"
                        >
                            {{ t("cta.description") }}
                        </p>

                        <!-- CTA Buttons -->
                        <div
                            class="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center"
                        >
                            <!-- Primary CTA -->
                            <AppButton destination="/contact">
                                {{ t("cta.main") }}
                            </AppButton>

                            <!-- Secondary CTA -->
                            <NuxtLink
                                to="/services"
                                class="inline-flex items-center text-zinc-300 text-sm lg:text-base hover:text-primary transition-colors duration-300 group"
                            >
                                {{ t("cta.secondary") }}
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
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import AppH2 from "~/components/AppH2.vue";
import AppButton from "~/components/AppButton.vue";

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

.font-title {
    font-family: "Electrolize", sans-serif;
}

/* Responsive background images */
.hero-section {
    background-image: url("/images/page-case-studies/casestudies-hero.jpg");
}

@media (min-width: 1024px) {
    .hero-section {
        background-image: url("/images/page-case-studies/casestudies-hero.jpg");
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
        title: "Casos de Estudio | Ingeniería de Software Evolutiva y Contextual"
        description: "Descubre cómo la inteligencia artificial ha transformado procesos en compliance, salud y sostenibilidad. Casos reales donde la IA marcó la diferencia."
    hero:
        tagline: "Casos de éxito"
        title: "Historias Reales de Transformación con IA"
        description: "Descubre cómo hemos ayudado a empresas a resolver desafíos complejos mediante soluciones de inteligencia artificial innovadoras y efectivas."
        mainCTA: "Ver casos de estudio"
        secondaryCTA: "Hablar con nosotros"
    portfolio:
        title: "Historias donde la inteligencia artificial marcó la diferencia"
        case1:
            title: "Optimización de procesos de compliance con IA"
            challenge_label: "El desafío:"
            challenge: "Los formularios web para determinar industria, alcance y disponibilidad de auditores demoraban hasta 3 días en procesarse manualmente."
            solution_label: "La solución:"
            solution: "Diseñamos e implementamos un sistema con agentes de IA, RAG para extracción de datos y memoria, reduciendo fricciones en el flujo de trabajo."
            impact_label: "El impacto:"
            impact: "El proceso pasó de tardar 3 días a resolverse en solo 3 minutos, liberando al equipo humano para tareas estratégicas."
        case2:
            title: "Plataforma de salud con asistentes inteligentes"
            challenge_label: "El desafío:"
            challenge: "Cuidadores familiares necesitaban coordinarse, evitar olvidos y contar con alertas anticipadas en la atención de pacientes."
            solution_label: "La solución:"
            solution: "Creamos una aplicación compartida con diseño UX centrado en lo humano e integración de IA con memoria a largo plazo, alertas contextuales y RAG."
            impact_label: "El impacto:"
            impact: "La herramienta mejoró la organización, redujo errores y permitió a los cuidadores enfocarse en brindar atención más humana y personalizada."
        case3:
            title: "SaaS B2B de medición de huella de carbono"
            challenge_label: "El desafío:"
            challenge: "Procesos largos y manuales en la carga e interpretación de datos ambientales dificultaban la adopción de la plataforma."
            solution_label: "La solución:"
            solution: "Diseñamos un SaaS con UX simple e integramos IA para automatizar el análisis de datos, interpretar documentos y recomendar compensaciones personalizadas."
            impact_label: "El impacto:"
            impact: "Se redujeron horas de trabajo manual, aumentó la precisión de los cálculos y las empresas pudieron tomar decisiones más rápidas y confiables."
    cta:
        heading: "¿Tienes un desafío similar?"
        description: "Cada proyecto es único, pero los principios son los mismos: entender el problema, diseñar la solución correcta e implementar con excelencia técnica."
        main: "Hablemos de tu proyecto"
        secondary: "Conocer nuestros servicios"

en:
    meta:
        title: "Case Studies | Evolutionary & Contextual Software Engineering"
        description: "Discover how artificial intelligence has transformed processes in compliance, healthcare, and sustainability. Real cases where AI made a difference."
    hero:
        tagline: "Success stories"
        title: "Real Stories of AI Transformation"
        description: "Discover how we've helped companies solve complex challenges through innovative and effective artificial intelligence solutions."
        mainCTA: "View case studies"
        secondaryCTA: "Talk to us"
    portfolio:
        title: "Stories where artificial intelligence made a difference"
        case1:
            title: "AI-powered compliance process optimization"
            challenge_label: "The challenge:"
            challenge: "Web forms to determine industry, scope and auditor availability took up to 3 days to process manually."
            solution_label: "The solution:"
            solution: "We designed and implemented a system with AI agents, RAG for data extraction and memory, reducing workflow friction."
            impact_label: "The impact:"
            impact: "The process went from taking 3 days to being resolved in just 3 minutes, freeing the human team for strategic tasks."
        case2:
            title: "Health platform with intelligent assistants"
            challenge_label: "The challenge:"
            challenge: "Family caregivers needed to coordinate, avoid oversights and have early alerts in patient care."
            solution_label: "The solution:"
            solution: "We created a shared application with human-centered UX design and AI integration with long-term memory, contextual alerts and RAG."
            impact_label: "The impact:"
            impact: "The tool improved organization, reduced errors and allowed caregivers to focus on providing more human and personalized care."
        case3:
            title: "B2B SaaS for carbon footprint measurement"
            challenge_label: "The challenge:"
            challenge: "Long and manual processes in loading and interpreting environmental data hindered platform adoption."
            solution_label: "The solution:"
            solution: "We designed a SaaS with simple UX and integrated AI to automate data analysis, interpret documents and recommend personalized offsets."
            impact_label: "The impact:"
            impact: "Manual work hours were reduced, calculation accuracy increased and companies were able to make faster and more reliable decisions."
    cta:
        heading: "Do you have a similar challenge?"
        description: "Every project is unique, but the principles are the same: understand the problem, design the right solution and implement with technical excellence."
        main: "Let's talk about your project"
        secondary: "Learn about our services"
</i18n>
