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
                        class="text-grey-500 mb-4 text-base lg:text-xl font-semibold max-w-md"
                    >
                        {{ t("solution1.subtitle") }}
                    </p>
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
                            :alt="t('solution1.title')"
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
                        class="text-grey-500 mb-4 text-base lg:text-xl font-semibold max-w-md"
                    >
                        {{ t("solution2.subtitle") }}
                    </p>
                    <p>{{ t("solution2.subtitle") }}</p>
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
                        class="text-grey-500 mb-4 text-base lg:text-xl font-semibold max-w-md"
                    >
                        {{ t("solution3.subtitle") }}
                    </p>
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
                        class="text-grey-500 mb-4 text-base lg:text-xl font-semibold max-w-md"
                    >
                        {{ t("solution4.subtitle") }}
                    </p>
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
                        class="text-grey-500 mb-4 text-base lg:text-xl font-semibold max-w-md"
                    >
                        {{ t("solution5.subtitle") }}
                    </p>
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
    title: "Soluciones que evolucionan con tu empresa"
    solution1:
        title: Colaboración Humano + IA
        subtitle: "Diseñamos experiencias donde la inteligencia artificial potencia el criterio humano."
        description: "Creamos interacciones fluidas entre personas y agentes de IA. Nuestro enfoque UX asegura que la inteligencia artificial sea un copiloto confiable, eliminando fricciones y ampliando la capacidad de decisión de los equipos."
    solution2:
        title: "Arquitectura Inteligente"
        subtitle: "Software diseñado para escalar con IA desde su núcleo."
        description: "Desarrollamos aplicaciones digitales, desde SaaS hasta sistemas críticos, con la inteligencia artificial integrada en la arquitectura. Esto permite personalización continua, aprendizaje con el uso y decisiones basadas en datos reales."
    solution3:
        title: "Orquestación de Agentes"
        subtitle: "El motor detrás de la eficiencia autónoma."
        description: "Diseñamos entornos donde equipos de agentes de IA trabajan de forma coordinada para ejecutar tareas complejas. Definimos roles, reglas y flujos inteligentes que transforman la IA en un verdadero motor operativo, liberando a las personas para el análisis y la estrategia."
    solution4:
        title: "Aumento de Procesos"
        subtitle: "Flujos de negocio más rápidos, precisos y sin errores."
        description: "Transformamos tus operaciones internas en procesos inteligentes que se ejecutan con asistencia de IA. Automatizamos lo repetitivo y potenciamos la eficiencia, para que tus equipos se concentren en crear valor y tomar mejores decisiones."
    solution5:
        title: "Escalamiento Continuo"
        subtitle: "Soluciones que crecen al ritmo del mercado."
        description: "Nada en tu negocio es estático, y tu software tampoco debería serlo. Creamos plataformas que evolucionan con métricas, feedback y analítica predictiva, asegurando adaptación constante y máximo retorno de inversión."
en:
    title: "Solutions that evolve with your business"
    solution1:
        title: "Human + AI Collaboration"
        subtitle: "Designing experiences where AI empowers human judgment"
        description: "We create seamless interactions between people and AI agents. Our UX-driven approach ensures that AI acts as a reliable co-pilot, removing friction and amplifying team decision-making capabilities."
    solution2:
        title: "Intelligent Architecture"
        subtitle: "AI-scalable software designed from the ground up"
        description: "We build digital applications, from SaaS to mission-critical systems, with AI integrated into the architecture. This enables continuous personalization, learning from usage, and data-driven decisions."
    solution3:
        title: "Agent Orchestration"
        subtitle: "The engine behind autonomous efficiency"
        description: "We design environments where teams of AI agents work in a coordinated manner to execute complex tasks. We define intelligent roles, rules, and workflows that transform AI into a true operational engine, freeing humans for analysis and strategy."
    solution4:
        title: "Process Augmentation"
        subtitle: "Intelligent and error-free workflows"
        description: "We transform your internal operations into intelligent processes powered by AI assistance. We automate the repetitive and enhance efficiency, allowing your teams to focus on creating value and making better decisions."
    solution5:
        title: "Continuous Scaling"
        subtitle: "Solutions that grow at market speed"
        description: "Nothing in your business is static, and neither should your software be. We create platforms that evolve with metrics, feedback, and predictive analytics, ensuring constant adaptation and maximum return on investment."
</i18n>
