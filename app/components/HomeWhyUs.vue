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
                        <!-- Icono gráfico de barras -->
                        <svg
                            class="w-full h-full text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <rect
                                x="3"
                                y="10"
                                width="4"
                                height="11"
                                rx="1"
                                stroke="currentColor"
                                stroke-width="1.5"
                                fill="none"
                            />
                            <rect
                                x="9"
                                y="6"
                                width="4"
                                height="15"
                                rx="1"
                                stroke="currentColor"
                                stroke-width="1.5"
                                fill="none"
                            />
                            <rect
                                x="15"
                                y="2"
                                width="4"
                                height="19"
                                rx="1"
                                stroke="currentColor"
                                stroke-width="1.5"
                                fill="none"
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
                        <!-- Icono usuario/persona -->
                        <svg
                            class="w-full h-full text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                cx="12"
                                cy="8"
                                r="4"
                                stroke="currentColor"
                                stroke-width="1.5"
                                fill="none"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2"
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
                        <!-- Icono engranaje -->
                        <svg
                            class="w-full h-full text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="3"
                                stroke="currentColor"
                                stroke-width="1.5"
                                fill="none"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09A1.65 1.65 0 009 3.6V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
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
                        <!-- Icono chip/IA -->
                        <svg
                            class="w-full h-full text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <rect
                                x="7"
                                y="7"
                                width="10"
                                height="10"
                                rx="2"
                                stroke="currentColor"
                                stroke-width="1.5"
                                fill="none"
                            />
                            <path
                                stroke="currentColor"
                                stroke-width="1.5"
                                d="M12 2v2M12 20v2M2 12h2M20 12h2M5.5 5.5l1.5 1.5M17 17l1.5 1.5M5.5 18.5l1.5-1.5M17 7l1.5-1.5"
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
