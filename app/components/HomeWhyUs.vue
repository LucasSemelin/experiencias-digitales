<template>
    <section class="py-16">
        <div class="container mx-auto px-6">
            <AppH2>{{ t("title") }}</AppH2>
            <AppSectionSubtitle>{{ t("subtitle") }}</AppSectionSubtitle>

            <!-- Cards Grid -->
            <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <!-- Card 1: Visión integral -->
                <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
                        <svg
                            class="w-full h-full text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                    </div>
                    <div class="flex-1">
                        <AppH3>{{ t("card1.title") }}</AppH3>
                        <p
                            class="mt-3 text-text-secondary leading-relaxed max-w-sm"
                        >
                            {{ t("card1.description") }}
                        </p>
                    </div>
                </div>

                <!-- Card 2: Diseño centrado en personas -->
                <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
                        <svg
                            class="w-full h-full text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                        </svg>
                    </div>
                    <div class="flex-1">
                        <AppH3>{{ t("card2.title") }}</AppH3>
                        <p
                            class="mt-3 text-text-secondary leading-relaxed max-w-sm"
                        >
                            {{ t("card2.description") }}
                        </p>
                    </div>
                </div>

                <!-- Card 3: IA aplicada con sentido -->
                <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
                        <svg
                            class="w-full h-full text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                            />
                        </svg>
                    </div>
                    <div class="flex-1">
                        <AppH3>{{ t("card3.title") }}</AppH3>
                        <p
                            class="mt-3 text-text-secondary leading-relaxed max-w-sm"
                        >
                            {{ t("card3.description") }}
                        </p>
                    </div>
                </div>

                <!-- Card 4: Proceso vivo -->
                <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
                        <svg
                            class="w-full h-full text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                        </svg>
                    </div>
                    <div class="flex-1">
                        <AppH3>{{ t("card4.title") }}</AppH3>
                        <p
                            class="mt-3 text-text-secondary leading-relaxed max-w-sm"
                        >
                            {{ t("card4.description") }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import AppH2 from "./AppH2.vue";
import AppH3 from "./AppH3.vue";
import AppSectionSubtitle from "./AppSectionSubtitle.vue";

const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="yaml">
es:
    title: "Lo que Me Hace Diferente"
    subtitle: "No optimizo pasos, diseño experiencias que conectan valor, propósito y datos. Mi enfoque combina UX, estrategia product-led e inteligencia artificial para crear procesos de onboarding que aprenden del uso, se adaptan al contexto y evolucionan con el producto."
    card1:
        title: "1. Enfoque Integral y Product-Led"
        description: "Combino estrategia, diseño y métricas para entender no solo qué hacen los usuarios, sino por qué lo hacen. Cada decisión de onboarding está guiada por datos, contexto y objetivos de negocio claros."
    card2:
        title: "2. Experiencias Humanas Guiadas por Datos"
        description: "Diseño recorridos que acompañan al usuario, no lo fuerzan. Cada interacción busca reducir fricción, aumentar confianza y ofrecer valor desde el primer uso, utilizando analítica y comportamiento real."
    card3:
        title: "3. Optimización Basada en Aprendizaje Continuo"
        description: "El onboarding no es un proceso estático: evoluciona con el producto. Implemento ciclos de medición, validación y ajuste constante para escalar activación, retención y satisfacción."
    card4:
        title: "4. Inteligencia Artificial Aplicada al Onboarding"
        description: "Uso IA para personalizar recorridos, detectar puntos de fricción y anticipar abandono. La tecnología se integra con propósito: mejorar la experiencia y maximizar el valor de cada usuario."

en:
    title: "What Makes Me Different"
    subtitle: "I don’t just optimize steps — I design onboarding experiences that connect value, purpose, and data. My approach combines UX, product-led strategy, and artificial intelligence to create onboarding processes that learn from use, adapt to context, and evolve with the product."
    card1:
        title: "1. Product-Led & Holistic Approach"
        description: "I combine strategy, UX, and analytics to understand not just what users do, but why they do it. Every onboarding decision is driven by data, context, and clear business goals."
    card2:
        title: "2. Human Experiences Guided by Data"
        description: "I design onboarding journeys that guide users instead of pushing them. Every interaction reduces friction, builds trust, and delivers value from the very first use, supported by behavioral data."
    card3:
        title: "3. Continuous Learning & Optimization"
        description: "Onboarding isn’t static — it evolves with the product. I apply cycles of measurement, validation, and iteration to continuously scale activation, retention, and user satisfaction."
    card4:
        title: "4. AI-Powered Personalization"
        description: "I leverage AI to personalize onboarding flows, detect friction points, and predict churn. Technology is used with purpose: to enhance the experience and maximize user value."
</i18n>
