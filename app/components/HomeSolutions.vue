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
    title: "Soluciones que integran diseño, software e inteligencia artificial"
    solution1:
        title: "Experiencias centradas en las personas"
        description: "Diseñamos interacciones donde humanos y agentes de IA colaboran de forma clara, confiable y natural. Nuestro enfoque UX asegura que la inteligencia artificial se perciba como un aliado que potencia y acompaña, nunca como una barrera."
    solution2:
        title: "Software inteligente preparado para la IA"
        description: "Creamos aplicaciones digitales - desde SaaS hasta sistemas de backoffice - que integran inteligencia artificial como parte de su núcleo. La inteligencia no es un agregado, sino parte esencial de la arquitectura y de la experiencia del usuario, siempre guiada por datos y analítica."
    solution3:
        title: "Equipos de Agentes orquestados dentro del software"
        description: "Diseñamos entornos donde los agentes de IA trabajan de manera autónoma y coordinada para resolver tareas complejas. Definimos roles, reglas y flujos de colaboración, logrando que la IA sea un verdadero motor de eficiencia mientras las personas se enfocan en lo que realmente requiere criterio humano."
    solution4:
        title: "Automatización y aumento de procesos de negocio"
        description: "Convertimos operaciones internas en flujos inteligentes basados en datos, que reducen tiempos, minimizan errores y amplían la capacidad de los equipos. La IA no sustituye a las personas: las potencia, liberándolas de lo repetitivo para que puedan aportar creatividad, estrategia y visión."
    solution5:
        title: "Evolución y escalabilidad continua"
        description: "Nuestras soluciones se adaptan y crecen. Incorporamos métricas, feedback y analítica avanzada para mejorar cada iteración, asegurando que tu producto evolucione junto a tu negocio y mantenga siempre un alto nivel de valor para usuarios y organización."
en:
    title: "Solutions that integrate design, software, and artificial intelligence"
    solution1:
        title: "People-centered experiences"
        description: "We design interactions where humans and AI agents collaborate in a clear, reliable, and natural way. Our UX approach ensures that artificial intelligence is perceived as an ally that empowers and accompanies, never as a barrier."
    solution2:
        title: "Intelligent software ready for AI"
        description: "We create digital applications - from SaaS to backoffice systems - that integrate artificial intelligence as part of their core. Intelligence is not an add-on, but an essential part of the architecture and user experience, always guided by data and analytics."
    solution3:
        title: "Teams of orchestrated Agents within software"
        description: "We design environments where AI agents work autonomously and coordinatedly to solve complex tasks. We define roles, rules and collaboration flows, making AI a true engine of efficiency while people focus on what really requires human judgment."
    solution4:
        title: "Automation and augmentation of business processes"
        description: "We transform internal operations into intelligent data-driven flows that reduce time, minimize errors and expand team capacity. AI doesn't replace people: it empowers them, freeing them from repetitive tasks so they can contribute creativity, strategy and vision."
    solution5:
        title: "Continuous evolution and scalability"
        description: "Our solutions adapt and grow. We incorporate metrics, feedback and advanced analytics to improve each iteration, ensuring that your product evolves alongside your business and always maintains a high level of value for users and organization."
</i18n>
