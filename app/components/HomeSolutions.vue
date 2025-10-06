<template>
    <section class="py-16">
        <div class="container mx-auto px-6">
            <AppH2 class="text-center mb-16">{{ t("title") }}</AppH2>

            <!-- Solution 1 -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16"
            >
                <!-- Mobile order: title first -->
                <div class="lg:order-2 order-1">
                    <AppH3 class="mb-4">{{ t("solution1.title") }}</AppH3>
                    <p
                        class="text-gray-300 text-sm lg:text-base leading-relaxed order-3 lg:order-2"
                    >
                        {{ t("solution1.description") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop left, Mobile middle -->
                <div class="lg:order-1 order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-md h-64 lg:h-80 rounded-xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/solutions/solution1.jpg"
                            class="w-full h-full object-cover"
                            alt="Experiencias centradas en las personas"
                        />
                    </div>
                </div>
            </div>

            <!-- Solution 2 -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16"
            >
                <!-- Mobile order: title first -->
                <div class="order-1">
                    <AppH3 class="mb-4">{{ t("solution2.title") }}</AppH3>
                    <p
                        class="text-gray-300 text-sm lg:text-base leading-relaxed order-3 lg:order-1"
                    >
                        {{ t("solution2.description") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop right, Mobile middle -->
                <div class="order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-md h-64 lg:h-80 rounded-xl overflow-hidden"
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
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16"
            >
                <!-- Mobile order: title first -->
                <div class="lg:order-2 order-1">
                    <AppH3 class="mb-4">{{ t("solution3.title") }}</AppH3>
                    <p
                        class="text-gray-300 text-sm lg:text-base leading-relaxed order-3 lg:order-2"
                    >
                        {{ t("solution3.description") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop left, Mobile middle -->
                <div class="lg:order-1 order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-md h-64 lg:h-80 rounded-xl overflow-hidden"
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
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16"
            >
                <!-- Mobile order: title first -->
                <div class="order-1">
                    <AppH3 class="mb-4">{{ t("solution4.title") }}</AppH3>
                    <p
                        class="text-gray-300 text-sm lg:text-base leading-relaxed order-3 lg:order-1"
                    >
                        {{ t("solution4.description") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop right, Mobile middle -->
                <div class="order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-md h-64 lg:h-80 rounded-xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/solutions/solution4.jpg"
                            class="w-full h-full object-cover"
                            alt="Automatización y aumento de procesos de negocio"
                        />
                    </div>
                </div>
            </div>

            <!-- Solution 5 -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
                <!-- Mobile order: title first -->
                <div class="lg:order-2 order-1">
                    <AppH3 class="mb-4">{{ t("solution5.title") }}</AppH3>
                    <p
                        class="text-gray-300 text-sm lg:text-base leading-relaxed order-3 lg:order-2"
                    >
                        {{ t("solution5.description") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop left, Mobile middle -->
                <div class="lg:order-1 order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-md h-64 lg:h-80 rounded-xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/solutions/solution5.jpg"
                            class="w-full h-full object-cover"
                            alt="Evolución y escalabilidad continua"
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
    title: "Diseñamos el futuro de la colaboración Humano + IA"
    solution1:
        title: "Experiencias que Colaboran: La IA como Copiloto Humano"
        description: "Diseñamos interacciones donde humanos y agentes de IA colaboran de forma fluida y natural. Nuestro enfoque UX asegura que la inteligencia artificial sea un aliado que amplifica el criterio humano, eliminando la fricción y la percepción de barrera."
    solution2:
        title: "Arquitectura Inteligente: Software Diseñado para Escalar con AI"
        description: "Creamos aplicaciones digitales (desde SaaS hasta sistemas críticos) que integran la inteligencia artificial desde el núcleo. La inteligencia no es un parche, sino una capa esencial de la arquitectura que garantiza la evolución y la personalización basadas en datos."
    solution3:
        title: "Orquestación de Agentes: El Motor de Eficiencia Autónoma"
        description: "Diseñamos entornos donde equipos de agentes de IA trabajan de manera coordinada y autónoma para resolver tareas de alto impacto. Definimos roles, reglas y flujos para que la IA sea un verdadero motor de eficiencia que libera a su equipo para el criterio humano y la estrategia."
    solution4:
        title: "Aumento de Procesos: Flujos de Negocio Inteligentes y sin Errores"
        description: "Convertimos sus operaciones internas en flujos inteligentes basados en datos que reducen drásticamente el tiempo de ejecución y minimizan los errores críticos. La IA potencia a sus equipos, liberándolos de lo repetitivo para que puedan aportar creatividad, visión y foco estratégico."
    solution5:
        title: "Escalamiento Continuo: Soluciones Que Evolucionan con el Mercado"
        description: "Nada es estático. Nuestras soluciones se adaptan y crecen incorporando métricas, feedback y analítica predictiva. Aseguramos que su plataforma evolucione continuamente junto a su negocio, garantizando siempre el máximo Retorno de Inversión (ROI)."
en:
    title: "We design the future of Human + AI collaboration"
    solution1:
        title: "Collaborative Experiences: AI as a Human Co-pilot"
        description: "We design interactions where humans and AI agents collaborate seamlessly and naturally. Our UX approach ensures that artificial intelligence is an ally that amplifies human judgment, eliminating friction and the perception of barriers."
    solution2:
        title: "Intelligent architecture: Software designed to scale with AI"
        description: "We create digital applications (from SaaS to mission-critical systems) that integrate artificial intelligence from the core. Intelligence is not a patch, but an essential layer of the architecture that ensures evolution and data-driven personalization."
    solution3:
        title: "Agent orchestration: The engine of autonomous efficiency"
        description: "We design environments where teams of AI agents work autonomously and coordinatedly to solve high-impact tasks. We define roles, rules and flows to make AI a true engine of efficiency that frees your team for human judgment and strategy."
    solution4:
        title: "Augmentation of business processes: Intelligent and error-free workflows"
        description: "We turn your internal operations into intelligent data-driven flows that drastically reduce execution time and minimize critical errors. AI empowers your teams, freeing them from the repetitive so they can bring creativity, vision and strategic focus."
    solution5:
        title: "Continuous scaling: Solutions that evolve with the market"
        description: "Nothing is static. Our solutions adapt and grow by incorporating metrics, feedback and predictive analytics. We ensure that your platform continuously evolves alongside your business, always guaranteeing the highest Return on Investment (ROI)."
</i18n>
