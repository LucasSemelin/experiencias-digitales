<template>
    <section class="py-16">
        <div class="container mx-auto px-6">
            <AppH2 class="text-center mb-16">{{ t("title") }}</AppH2>

            <!-- Solution 1 -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-28"
            >
                <!-- Mobile order: title first -->
                <div class="lg:order-2 order-1">
                    <AppH3 class="mb-4">{{ t("solution1.title") }}</AppH3>
                    <p
                        class="text-zinc-500 mb-4 text-base lg:text-xl font-semibold"
                    >
                        {{ t("solution1.subtitle") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-2"
                    >
                        {{ t("solution1.description") }}
                    </p>
                    <p class="text-sm mt-4 text-gradient-from">
                        Outcome: {{ t("solution1.outcome") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop left, Mobile middle -->
                <div class="lg:order-1 order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/solutions/solution1.jpg"
                            class="w-full h-full object-cover"
                            :alt="t('solution1.title')"
                        />
                    </div>
                </div>
            </div>

            <!-- Solution 2 -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-28"
            >
                <!-- Mobile order: title first -->
                <div class="order-1">
                    <AppH3 class="mb-4">{{ t("solution2.title") }}</AppH3>
                    <p
                        class="text-zinc-500 mb-4 text-base lg:text-xl font-semibold"
                    >
                        {{ t("solution2.subtitle") }}
                    </p>
                    <p>{{ t("solution2.subtitle") }}</p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-1"
                    >
                        {{ t("solution2.description") }}
                    </p>
                    <p class="text-sm mt-4 text-gradient-from">
                        Outcome: {{ t("solution2.outcome") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop right, Mobile middle -->
                <div class="order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/solutions/solution2.jpg"
                            class="w-full h-full object-cover"
                            alt="Software inteligente preparado para la IA"
                        />
                    </div>
                </div>
            </div>

            <!-- Solution 3 -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-28"
            >
                <!-- Mobile order: title first -->
                <div class="lg:order-2 order-1">
                    <AppH3 class="mb-4">{{ t("solution3.title") }}</AppH3>
                    <p
                        class="text-zinc-500 mb-4 text-base lg:text-xl font-semibold"
                    >
                        {{ t("solution3.subtitle") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-2"
                    >
                        {{ t("solution3.description") }}
                    </p>
                    <p class="text-sm mt-4 text-gradient-from">
                        Outcome: {{ t("solution3.outcome") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop left, Mobile middle -->
                <div class="lg:order-1 order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/solutions/solution3.jpg"
                            class="w-full h-full object-cover"
                            alt="Equipos de Agentes orquestados dentro del software"
                        />
                    </div>
                </div>
            </div>

            <!-- Solution 4 -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-28"
            >
                <!-- Mobile order: title first -->
                <div class="order-1">
                    <AppH3 class="mb-4">{{ t("solution4.title") }}</AppH3>
                    <p
                        class="text-zinc-500 mb-4 text-base lg:text-xl font-semibold"
                    >
                        {{ t("solution4.subtitle") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-1"
                    >
                        {{ t("solution4.description") }}
                    </p>
                    <p class="text-sm mt-4 text-gradient-from">
                        Outcome: {{ t("solution4.outcome") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop right, Mobile middle -->
                <div class="order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/solutions/solution4.jpg"
                            class="w-full h-full object-cover"
                            alt="Automatización y aumento de procesos de negocio"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import AppH2 from "./AppH2.vue";
import AppH3 from "./AppH3.vue";

const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="yaml">
es:
    title: "Soluciones diseñadas para evolucionar junto a tu negocio"
    solution1:
        title: Consultoría Evolutiva y Contextual
        subtitle: "Entendemos tu sistema, tus datos y tu contexto."
        description: "Comenzamos analizando el ecosistema de tu organización para identificar puntos de fricción, dependencias y oportunidades de evolución. En conjunto, definimos una hoja de ruta para la transformación inteligente."
        outcome: "Un plan estratégico para la evolución del sistema."
    solution2:
        title: "Arquitectura Cognitiva y de Experiencia"
        subtitle: "Diseñamos cómo el sistema piensa e interactúa."
        description: "Definimos los modelos cognitivos, las capas de experiencia y la lógica adaptativa que conectan la intención humana con comportamientos inteligentes, garantizando usabilidad y conciencia contextual."
        outcome: "Una arquitectura coherente que integra UX, inteligencia y adaptabilidad."
    solution3:
        title: "Implementación de Sistemas Adaptativos"
        subtitle: "Construimos bases inteligentes y escalables."
        description: "Diseñamos e implementamos sistemas capaces de aprender, adaptarse e integrar componentes impulsados por IA. Desde SaaS hasta plataformas empresariales, desarrollamos cimientos preparados para el futuro."
        outcome: "Un sistema vivo e inteligente, listo para crecer continuamente."
    solution4:
        title: "Evolución Continua y Mejora Contextual"
        subtitle: "Aprendemos del uso y evolucionamos con el tiempo."
        description: "Una vez en producción, el sistema entra en un ciclo de mejora continua: medimos el uso real, analizamos señales contextuales y evolucionamos el software de forma iterativa según los datos y comportamientos."
        outcome: "Un sistema autoevolutivo alineado con la evolución del negocio."

en:
    title: "Solutions designed to evolve with your business"
    solution1:
        title: "Evolutionary & Contextual Consulting"
        subtitle: "Understanding your system, your data, and your context."
        description: "We begin by analyzing your organization’s ecosystem to uncover friction points, dependencies, and opportunities for evolution. Together, we define a roadmap for intelligent transformation."
        outcome: A strategic blueprint for system evolution.
    solution2:
        title: "Cognitive & Experience Architecture"
        subtitle: "Designing how the system thinks and interacts."
        description: "We define the cognitive models, experience layers, and adaptive logic that connect human intent with intelligent behaviors, ensuring usability and contextual awareness."
        outcome: A cohesive architecture that blends UX, intelligence, and adaptability.
    solution3:
        title: "Adaptive System Implementation"
        subtitle: "Building intelligent and scalable foundations."
        description: "We design and implement software systems capable of learning, adapting, and integrating AI-driven components. From SaaS to enterprise platforms, we engineer future-ready foundations."
        outcome: A living, intelligent system ready for continuous growth.
    solution4:
        title: "Continuous Evolution & Contextual Improvement"
        subtitle: "Learning from usage and evolving over time."
        description: "Once live, the system enters a continuous improvement loop, we measure real usage, analyze contextual signals, and iteratively evolve the software based on data and behavior."
        outcome: A self-improving system aligned with your business evolution.
</i18n>
