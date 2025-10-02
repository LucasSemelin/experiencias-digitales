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
                        class="font-title text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4"
                    >
                        {{ t("card1.title") }}
                    </h3>
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
                        class="font-title text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4"
                    >
                        {{ t("card2.title") }}
                    </h3>
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
                        class="font-title text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4"
                    >
                        {{ t("card3.title") }}
                    </h3>
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
                        class="font-title text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4"
                    >
                        {{ t("card4.title") }}
                    </h3>
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
    title: "Escenarios donde lo humano y la IA se potencian"
    subtitle: Creamos experiencias donde la inteligencia artificial potencia a equipos, usuarios y organizaciones en cualquier contexto.
    card1:
        title: "Procesos internos que se vuelven autónomos"
        description: "Backoffice y operaciones liberados de tareas repetitivas gracias a agentes que ejecutan, integran y aprenden, permitiendo que las personas se concentren en lo humano."
    card2:
        title: "Asistentes que amplifican a las personas"
        description: "Experiencias digitales donde la IA acompaña, guía y anticipa necesidades, convirtiéndose en un copiloto confiable para empleados y usuarios finales."
    card3:
        title: "Productos digitales que se adaptan y evolucionan"
        description: "Aplicaciones y plataformas potenciadas con IA desde el núcleo: experiencias que aprenden del uso, se personalizan y responden de forma dinámica a cada contexto."
    card4:
        title: "Decisiones claras en medio de la complejidad"
        description: "La información deja de ser un obstáculo: documentos, registros y datos se transforman en conocimiento accionable para responder más rápido y con precisión."

en:
    title: "Scenarios where humans and AI empower each other"
    subtitle: We create experiences where artificial intelligence empowers teams, users, and organizations in any context.
    card1:
        title: "Internal processes that become autonomous"
        description: "Backoffice and operations freed from repetitive tasks thanks to agents that execute, integrate and learn, allowing people to focus on the human aspect."
    card2:
        title: "Assistants that amplify people"
        description: "Digital experiences where AI accompanies, guides and anticipates needs, becoming a reliable copilot for employees and end users."
    card3:
        title: "Digital products that adapt and evolve"
        description: "Applications and platforms powered by AI from the core: experiences that learn from use, personalize and respond dynamically to each context."
    card4:
        title: "Clear decisions amid complexity"
        description: "Information is no longer an obstacle: documents, records and data are transformed into actionable knowledge to respond faster and more accurately."
</i18n>
