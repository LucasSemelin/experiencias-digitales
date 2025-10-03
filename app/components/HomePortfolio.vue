<template>
    <section class="py-16">
        <div class="container mx-auto px-6">
            <AppH2>{{ t("title") }}</AppH2>

            <!-- Cards Grid -->
            <div class="space-y-6 lg:space-y-8 max-w-4xl mx-auto mt-12">
                <!-- Card 1: Optimización de procesos de compliance -->
                <div
                    class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl overflow-hidden hover:border-grey-700/70 transition-all duration-300 group"
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
                                {{ t("case1.title") }}
                            </h3>
                            <div
                                class="space-y-3 text-sm lg:text-base text-grey-300 leading-relaxed"
                            >
                                <div>
                                    <span class="text-primary font-semibold">{{
                                        t("case1.challenge_label")
                                    }}</span>
                                    <span class="ml-1">{{
                                        t("case1.challenge")
                                    }}</span>
                                </div>
                                <div>
                                    <span class="text-primary font-semibold">{{
                                        t("case1.solution_label")
                                    }}</span>
                                    <span class="ml-1">{{
                                        t("case1.solution")
                                    }}</span>
                                </div>
                                <div>
                                    <span class="text-primary font-semibold">{{
                                        t("case1.impact_label")
                                    }}</span>
                                    <span class="ml-1">{{
                                        t("case1.impact")
                                    }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Plataforma de salud -->
                <div
                    class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl overflow-hidden hover:border-grey-700/70 transition-all duration-300 group"
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
                                {{ t("case2.title") }}
                            </h3>
                            <div
                                class="space-y-3 text-sm lg:text-base text-grey-300 leading-relaxed"
                            >
                                <div>
                                    <span class="text-primary font-semibold">{{
                                        t("case2.challenge_label")
                                    }}</span>
                                    <span class="ml-1">{{
                                        t("case2.challenge")
                                    }}</span>
                                </div>
                                <div>
                                    <span class="text-primary font-semibold">{{
                                        t("case2.solution_label")
                                    }}</span>
                                    <span class="ml-1">{{
                                        t("case2.solution")
                                    }}</span>
                                </div>
                                <div>
                                    <span class="text-primary font-semibold">{{
                                        t("case2.impact_label")
                                    }}</span>
                                    <span class="ml-1">{{
                                        t("case2.impact")
                                    }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 3: SaaS B2B huella de carbono -->
                <div
                    class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl overflow-hidden hover:border-grey-700/70 transition-all duration-300 group"
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
                                {{ t("case3.title") }}
                            </h3>
                            <div
                                class="space-y-3 text-sm lg:text-base text-grey-300 leading-relaxed"
                            >
                                <div>
                                    <span class="text-primary font-semibold">{{
                                        t("case3.challenge_label")
                                    }}</span>
                                    <span class="ml-1">{{
                                        t("case3.challenge")
                                    }}</span>
                                </div>
                                <div>
                                    <span class="text-primary font-semibold">{{
                                        t("case3.solution_label")
                                    }}</span>
                                    <span class="ml-1">{{
                                        t("case3.solution")
                                    }}</span>
                                </div>
                                <div>
                                    <span class="text-primary font-semibold">{{
                                        t("case3.impact_label")
                                    }}</span>
                                    <span class="ml-1">{{
                                        t("case3.impact")
                                    }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import AppH2 from "./AppH2.vue";

const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="yaml">
es:
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

en:
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
</i18n>
