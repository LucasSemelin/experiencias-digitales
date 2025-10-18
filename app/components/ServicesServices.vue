<template>
    <section class="py-16">
        <div class="container mx-auto px-6">
            <!-- <AppH2 class="text-center mb-16">{{ t("title") }}</AppH2> -->

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
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-2 mb-2"
                    >
                        {{ t("solution1.description") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-2"
                    >
                        {{ t("solution1.description2") }}
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
                            src="/images/page-services/services1.jpg"
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
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-1 mb-2"
                    >
                        {{ t("solution2.description") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-2"
                    >
                        {{ t("solution2.description2") }}
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
                            src="/images/page-services/services2.jpg"
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
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-2 mb-2"
                    >
                        {{ t("solution3.description") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-2"
                    >
                        {{ t("solution3.description2") }}
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
                            src="/images/page-services/services3.jpg"
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
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-1 mb-2"
                    >
                        {{ t("solution4.description") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-2"
                    >
                        {{ t("solution4.description2") }}
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
                            src="/images/page-services/services4.jpg"
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
        title: "Evolución y Consultoría Contextual"
        subtitle: "Entendemos tu sistema, tus datos y tu contexto."
        description: "Comenzamos analizando cómo opera tu organización, su entorno, objetivos, flujos de trabajo y ecosistemas de datos. A través de un descubrimiento contextual y técnico, identificamos dónde la inteligencia, automatización y adaptabilidad pueden generar mayor impacto."
        description2: "Nuestra consultoría combina estrategia de negocio, ingeniería de software y análisis contextual para diseñar una hoja de ruta hacia la evolución inteligente, alineando tu software con tu visión, tus usuarios y tus objetivos a largo plazo."
        outcome: "Claridad estratégica, visión contextual y un camino definido para la evolución del sistema."
    solution2:
        title: "Arquitectura Cognitiva y de Experiencia"
        subtitle: "Diseñamos cómo el sistema piensa y cómo las personas interactúan con él."
        description: "Una vez comprendido el contexto, arquitectamos las capas de inteligencia y experiencia que lo hacen posible. Definimos modelos cognitivos, lógicas adaptativas y marcos de UX que permiten a los sistemas percibir, razonar y responder de manera coherente a los usuarios y a las condiciones cambiantes."
        description2: "Esta fase establece la base para la usabilidad, consistencia e inteligencia escalable, asegurando que cada interacción se sienta natural, con propósito y alineada con las capacidades evolutivas del sistema."
        outcome: "Una arquitectura unificada que conecta UX, inteligencia y adaptabilidad."
    solution3:
        title: "Implementación de Sistemas Adaptativos"
        subtitle: "Construimos cimientos inteligentes, escalables y preparados para la IA."
        description: "Ingeniamos los sistemas centrales que permiten la evolución en la práctica: APIs, flujos de datos contextuales, agentes cognitivos y capas de memoria que aprenden del uso real."
        description2: "Nuestro enfoque de implementación se centra en la modularidad, observabilidad y capacidad adaptativa, creando un ecosistema de software vivo capaz de aprender, escalar y mejorar con el tiempo."
        outcome: "Un sistema inteligente diseñado para la adaptabilidad, el aprendizaje y la sostenibilidad a largo plazo."
    solution4:
        title: "Evolución Continua y Mejora Contextual"
        subtitle: "Aprendiendo del uso y evolucionando con el contexto."
        description: "Después del despliegue, comienza la verdadera evolución. Monitoreamos el rendimiento, analizamos datos contextuales y refinamos tanto la funcionalidad como la experiencia a través de ciclos adaptativos continuos."
        description2: "Cada iteración integra nuevas señales de tus usuarios, tus operaciones y tu entorno, mejorando la inteligencia, usabilidad y alineación con la evolución de tu negocio."
        outcome: "Un sistema que se auto-mejora y evoluciona continuamente junto a tu organización."

en:
    title: "Solutions designed to evolve with your business"
    solution1:
        title: "Evolutionary & Contextual Consulting"
        subtitle: "Understanding your system, your data, and your context."
        description: "We start by analyzing how your organization operates, its environment, objectives, workflows, and data ecosystems. Through contextual and technical discovery, we uncover where intelligence, automation, and adaptability can create the most impact."
        description2: "Our consulting blends business strategy, software engineering, and contextual analysis to design a roadmap for intelligent evolution, one that aligns your software with your vision, your users, and your long-term goals."
        outcome: Strategic clarity, contextual insight, and a defined path for system evolution.
    solution2:
        title: "Cognitive & Experience Architecture"
        subtitle: "Designing how the system thinks and how people interact with it."
        description: "Once we understand the context, we architect the intelligence and experience layers that bring it to life. We define cognitive models, adaptive logics, and UX frameworks that enable systems to perceive, reason, and respond coherently to users and changing conditions."
        description2: "This phase establishes the foundation for usability, consistency, and scalable intelligence, ensuring every interaction feels natural, purposeful, and aligned with the system’s evolving capabilities."
        outcome: A unified architecture that connects UX, intelligence, and adaptability.
    solution3:
        title: "Adaptive System Implementation"
        subtitle: "Building intelligent, scalable, and AI-ready foundations."
        description: "We engineer the core systems that enable evolution in practice: APIs, contextual data flows, cognitive agents, and memory layers that learn from real-world usage."
        description2: Our implementation approach focuses on modularity, observability, and adaptive capacity, creating a living software ecosystem capable of learning, scaling, and improving over time.
        outcome: An intelligent system designed for adaptability, learning, and long-term sustainability.
    solution4:
        title: "Continuous Evolution & Contextual Improvement"
        subtitle: "Learning from usage and evolving with context."
        description: "After deployment, the real evolution begins. We monitor performance, analyze contextual data, and refine both functionality and experience through continuous adaptive cycles."
        description2: Each iteration integrates new signals from your users, your operations, and your environment, enhancing intelligence, usability, and alignment with your business evolution.
        outcome: A self-improving system that continuously evolves alongside your organization.
</i18n>
