<template>
    <section class="py-16 lg:py-24 bg-zinc-950">
        <div class="max-w-7xl mx-auto px-4 lg:px-16">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <AppH2>{{ t("title") }}</AppH2>
                <AppSectionSubtitle>{{ t("subtitle") }}</AppSectionSubtitle>
            </div>

            <!-- Approach Grid -->
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
                <!-- Methodology -->
                <div>
                    <AppH3 class="mb-8">{{ t("methodology.title") }}</AppH3>
                    <div class="space-y-6">
                        <div class="flex gap-4">
                            <div
                                class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1"
                            >
                                <span
                                    class="text-sm font-semibold text-zinc-900"
                                    >{{ t("methodology.number1") }}</span
                                >
                            </div>
                            <div>
                                <h4
                                    class="text-lg font-semibold text-white mb-2"
                                >
                                    {{ t("methodology.title1") }}
                                </h4>
                                <p class="text-zinc-300 leading-relaxed">
                                    {{ t("methodology.description1") }}
                                </p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div
                                class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1"
                            >
                                <span
                                    class="text-sm font-semibold text-zinc-900"
                                    >{{ t("methodology.number2") }}</span
                                >
                            </div>
                            <div>
                                <h4
                                    class="text-lg font-semibold text-white mb-2"
                                >
                                    {{ t("methodology.title2") }}
                                </h4>
                                <p class="text-zinc-300 leading-relaxed">
                                    {{ t("methodology.description2") }}
                                </p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div
                                class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1"
                            >
                                <span
                                    class="text-sm font-semibold text-zinc-900"
                                    >{{ t("methodology.number3") }}</span
                                >
                            </div>
                            <div>
                                <h4
                                    class="text-lg font-semibold text-white mb-2"
                                >
                                    {{ t("methodology.title3") }}
                                </h4>
                                <p class="text-zinc-300 leading-relaxed">
                                    {{ t("methodology.description3") }}
                                </p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div
                                class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1"
                            >
                                <span
                                    class="text-sm font-semibold text-zinc-900"
                                    >{{ t("methodology.number4") }}</span
                                >
                            </div>
                            <div>
                                <h4
                                    class="text-lg font-semibold text-white mb-2"
                                >
                                    {{ t("methodology.title4") }}
                                </h4>
                                <p class="text-zinc-300 leading-relaxed">
                                    {{ t("methodology.description4") }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Principles -->
                <div>
                    <AppH3 class="mb-8">{{ t("principles.title") }}</AppH3>
                    <div class="space-y-6">
                        <div class="border-l-4 border-primary pl-6">
                            <h4 class="text-lg font-semibold text-white mb-2">
                                {{ t("principles.title1") }}
                            </h4>
                            <p class="text-zinc-300 leading-relaxed">
                                {{ t("principles.description1") }}
                            </p>
                        </div>
                        <div class="border-l-4 border-primary pl-6">
                            <h4 class="text-lg font-semibold text-white mb-2">
                                {{ t("principles.title2") }}
                            </h4>
                            <p class="text-zinc-300 leading-relaxed">
                                {{ t("principles.description2") }}
                            </p>
                        </div>
                        <div class="border-l-4 border-primary pl-6">
                            <h4 class="text-lg font-semibold text-white mb-2">
                                {{ t("principles.title3") }}
                            </h4>
                            <p class="text-zinc-300 leading-relaxed">
                                {{ t("principles.description3") }}
                            </p>
                        </div>
                        <div class="border-l-4 border-primary pl-6">
                            <h4 class="text-lg font-semibold text-white mb-2">
                                {{ t("principles.title4") }}
                            </h4>
                            <p class="text-zinc-300 leading-relaxed">
                                {{ t("principles.description4") }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="text-center mt-16 pt-16 border-t border-zinc-700">
                <p class="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                    {{ t("cta.description") }}
                </p>
                <div class="flex justify-center">
                    <AppButton destination="/contact">
                        {{ t("cta.button") }}
                    </AppButton>
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

<i18n lang="yaml">
es:
    title: Nuestro Enfoque
    subtitle: Cómo hacemos que la tecnología evolucione contigo
    methodology:
        title: Metodología Evolutiva
        number1: "1"
        title1: Análisis Contextual
        description1: "Estudiamos profundamente tu negocio, procesos y objetivos para entender el ecosistema completo."
        number2: "2"
        title2: Diseño Adaptativo
        description2: "Creamos arquitecturas flexibles que pueden evolucionar sin requerir reconstrucciones completas."
        number3: "3"
        title3: Implementación Iterativa
        description3: "Desarrollamos en ciclos cortos con feedback continuo para asegurar alineación con tus necesidades."
        number4: "4"
        title4: Evolución Continua
        description4: "Monitoreamos y mejoramos el sistema constantemente basándose en datos reales de uso."
    principles:
        title: Principios Fundamentales
        title1: Pensamiento Sistémico
        description1: "Vemos tu tecnología como parte de un ecosistema más amplio, no como componentes aislados."
        title2: Inteligencia Integrada
        description2: "Incorporamos IA y machine learning de manera natural en las soluciones, no como agregados."
        title3: Escalabilidad Inteligente
        description3: "Diseñamos sistemas que crecen de manera eficiente según las demandas reales del negocio."
        title4: Experiencia Centrada
        description4: "Priorizamos la experiencia del usuario final en cada decisión técnica que tomamos."
    cta:
        description: "¿Listo para crear tecnología que evolucione con tu negocio? Hablemos sobre tu proyecto."
        button: Comencemos a conversar
en:
    title: Our Approach
    subtitle: How we make technology evolve with you
    methodology:
        title: Evolutionary Methodology
        number1: "1"
        title1: Contextual Analysis
        description1: "We deeply study your business, processes, and objectives to understand the complete ecosystem."
        number2: "2"
        title2: Adaptive Design
        description2: "We create flexible architectures that can evolve without requiring complete rebuilds."
        number3: "3"
        title3: Iterative Implementation
        description3: "We develop in short cycles with continuous feedback to ensure alignment with your needs."
        number4: "4"
        title4: Continuous Evolution
        description4: "We constantly monitor and improve the system based on real usage data."
    principles:
        title: Core Principles
        title1: Systems Thinking
        description1: "We see your technology as part of a broader ecosystem, not as isolated components."
        title2: Integrated Intelligence
        description2: "We naturally incorporate AI and machine learning into solutions, not as add-ons."
        title3: Smart Scalability
        description3: "We design systems that grow efficiently according to real business demands."
        title4: Experience Centered
        description4: "We prioritize the end-user experience in every technical decision we make."
    cta:
        description: "Ready to create technology that evolves with your business? Let's talk about your project."
        button: Let's start talking
</i18n>
