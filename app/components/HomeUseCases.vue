<template>
    <section class="py-16">
        <div class="container mx-auto px-6">
            <AppH2 class="text-center mb-4">{{ t("title") }}</AppH2>
            <AppSectionSubtitle class="text-center mb-16">{{
                t("subtitle")
            }}</AppSectionSubtitle>

            <!-- Cards Grid -->
            <div
                class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
            >
                <!-- Card 1: Procesos autónomos -->
                <div
                    class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl p-6 lg:p-8 hover:border-grey-700/70 transition-all duration-300 group"
                >
                    <h3
                        class="font-title text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4 max-w-sm"
                    >
                        {{ t("card1.title") }}
                    </h3>
                    <p class="mb-2 lg:text-lg">{{ t("card1.subtitle") }}</p>
                    <p
                        class="text-grey-300 text-sm lg:text-base leading-relaxed"
                    >
                        {{ t("card1.description") }}
                    </p>
                </div>

                <!-- Card 2: Asistentes que amplifican -->
                <div
                    class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl p-6 lg:p-8 hover:border-grey-700/70 transition-all duration-300 group"
                >
                    <h3
                        class="font-title text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4 max-w-sm"
                    >
                        {{ t("card2.title") }}
                    </h3>
                    <p class="mb-2 lg:text-lg">{{ t("card2.subtitle") }}</p>
                    <p
                        class="text-grey-300 text-sm lg:text-base leading-relaxed"
                    >
                        {{ t("card2.description") }}
                    </p>
                </div>

                <!-- Card 3: Productos que evolucionan -->
                <div
                    class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl p-6 lg:p-8 hover:border-grey-700/70 transition-all duration-300 group"
                >
                    <h3
                        class="font-title text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4 max-w-sm"
                    >
                        {{ t("card3.title") }}
                    </h3>
                    <p class="mb-2 lg:text-lg">{{ t("card3.subtitle") }}</p>
                    <p
                        class="text-grey-300 text-sm lg:text-base leading-relaxed"
                    >
                        {{ t("card3.description") }}
                    </p>
                </div>

                <!-- Card 4: Decisiones claras -->
                <div
                    class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl p-6 lg:p-8 hover:border-grey-700/70 transition-all duration-300 group"
                >
                    <h3
                        class="font-title text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4 max-w-sm"
                    >
                        {{ t("card4.title") }}
                    </h3>
                    <p class="mb-2 lg:text-lg">{{ t("card4.subtitle") }}</p>
                    <p
                        class="text-grey-300 text-sm lg:text-base leading-relaxed"
                    >
                        {{ t("card4.description") }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import AppH2 from "./AppH2.vue";
import AppSectionSubtitle from "./AppSectionSubtitle.vue";

const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="yaml">
es:
    title: "Soluciones que amplían las capacidades de tu negocio"
    subtitle: "Aplicamos ingeniería contextual e inteligencia adaptativa para transformar operaciones, productos y procesos de decisión en sistemas digitales dinámicos que aprenden, mejoran y escalan junto a tu organización."
    card1:
        title: "Operaciones Autónomas"
        subtitle: Procesos que se optimizan a sí mismos mediante inteligencia
        description: "Diseñamos sistemas internos y plataformas back-office que se automatizan y mejoran con el uso. Cada ejecución alimenta al sistema con datos para su optimización, reduciendo errores y aumentando la eficiencia operativa."
    card2:
        title: "Colaboración Humano–IA"
        subtitle: Inteligencia artificial que potencia, no reemplaza, las capacidades humanas
        description: "Creamos herramientas e interfaces donde agentes de IA trabajan junto a las personas, comprendiendo el contexto, anticipando necesidades y ejecutando tareas con precisión."
    card3:
        title: "Productos Adaptativos"
        subtitle: Aplicaciones que evolucionan con su entorno
        description: "Desarrollamos productos SaaS y sistemas empresariales capaces de aprender del uso y adaptarse al cambio del negocio. Las experiencias evolucionan junto a los usuarios, roles y objetivos."
    card4:
        title: "Inteligencia Contextual para Decisiones"
        subtitle: Decisiones más claras, impulsadas por datos y contexto
        description: "Integrando memoria, analítica y retroalimentación continua, convertimos información dispersa en conocimiento accionable. Los sistemas aprenden del uso real para ofrecer decisiones más precisas y oportunas."

en:
    title: "Solutions that evolve business capabilities"
    subtitle: "We apply context-driven engineering and adaptive intelligence to transform operations, products, and decision-making into dynamic digital systems that learn, improve, and scale with your organization."
    card1:
        title: "Autonomous Operations"
        subtitle: Processes that optimize themselves through intelligence
        description: "We design internal systems and back-office platforms that automate and improve through usage. Each execution becomes data for optimization, reducing errors, eliminating friction, and increasing operational efficiency."
    card2:
        title: "Human–AI Collaboration"
        subtitle: AI that augments human capabilities, not replaces them
        description: "We create tools and interfaces where AI agents work alongside people, understanding context, anticipating needs, and executing tasks with precision. The result is amplified human judgment and faster decision-making."
    card3:
        title: "Adaptive Products"
        subtitle: Applications that evolve with their environment
        description: "We build SaaS and enterprise systems capable of learning from usage and adapting to business change. These products evolve features, behaviors, and experiences over time, staying relevant as the organization grows."
    card4:
        title: "Context-Driven Intelligence"
        subtitle: Decisions guided by memory, analytics, and feedback
        description: "We integrate data, context, and continuous feedback loops to turn information into actionable insight. Our systems learn from real use, helping organizations decide faster and with more precision."
</i18n>
