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
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
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
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
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
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
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
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
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
    title: "Lo que nos hace diferentes"
    subtitle: "Lo que nos diferencia no es solo lo que hacemos, sino cómo lo hacemos: unimos experiencia humana, ingeniería y la inteligencia artificial en un proceso vivo que evoluciona junto a cada proyecto. Más de 20 años creando software y productos digitales para startups, empresas y organizaciones."
    card1:
        title: "Visión Integral 360º"
        description: "UX, Software e Inteligencia Artificial conectados como un solo sistema operativo desde el inicio."
    card2:
        title: "Diseño Centrado en el Aumento Humano"
        description: "La IA potencia la capacidad humana. Nunca la reemplaza o la obstaculiza."
    card3:
        title: "IA Aplicada al ROI"
        description: "Multiagentes, memoria y analítica avanzada enfocados exclusivamente a resolver problemas críticos y generar Retorno de Inversión, no a sumar complejidad."
    card4:
        title: "Proceso Vivo y Proactivo"
        description: "Etapas que se retroalimentan y escalan automáticamente con los datos de uso real, garantizando la evolución continua."

en:
    title: "What sets us apart"
    subtitle: "What sets us apart is not just what we do, but how we do it: we combine human experience, engineering, and artificial intelligence in a living process that evolves with each project. Over 20 years creating software and digital products for startups, companies, and organizations."
    card1:
        title: "Comprehensive 360º Vision"
        description: "UX, Software, and Artificial Intelligence connected as a single operating system from the start."
    card2:
        title: "Human-Centered Augmentation Design"
        description: "AI enhances human capability. It never replaces or hinders it."
    card3:
        title: "Applied AI for ROI"
        description: "Multi-agents, memory, and advanced analytics focused exclusively on solving critical problems and generating Return on Investment, not adding complexity."
    card4:
        title: "Living and Proactive Process"
        description: "Stages that feed back and scale automatically with real usage data, ensuring continuous evolution."
</i18n>
