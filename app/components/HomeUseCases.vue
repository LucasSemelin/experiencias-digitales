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
    title: "Soluciones que transforman los límites de tu negocio"
    subtitle: "Diseñamos y desarrollamos software que amplifica las capacidades de tu empresa. Aplicamos inteligencia artificial, contexto y arquitectura adaptativa para transformar operaciones, productos y experiencias en ecosistemas digitales que aprenden y mejoran con el uso. Estos son los escenarios donde nuestro enfoque genera mayor impacto:"
    card1:
        title: "Procesos internos que se optimizan solos"
        description: "Desarrollamos sistemas internos y backoffice que automatizan tareas repetitivas, se integran con tus herramientas actuales y aprenden de cada ejecución. El resultado: menos errores, más eficiencia y equipos enfocados en decisiones estratégicas."
    card2:
        title: "Asistentes y plataformas que colaboran con tu equipo"
        description: "Creamos interfaces y herramientas donde agentes de IA trabajan junto a las personas, anticipando necesidades y ejecutando acciones con contexto. La inteligencia artificial no reemplaza: acompaña, amplifica y acelera el trabajo humano."
    card3:
        title: "Software que entiende su entorno y se adapta"
        description: "Diseñamos aplicaciones que comprenden su contexto —usuarios, roles, datos y objetivos— y responden de forma dinámica. Desde SaaS hasta sistemas empresariales, construimos soluciones que aprenden y evolucionan con tu negocio."
    card4:
        title: "Decisiones más claras, impulsadas por contexto y datos"
        description: "Convertimos información dispersa en conocimiento accionable. Nuestros sistemas integran memoria, analítica y feedback continuo para ayudarte a decidir con precisión y en tiempo real."

en:
    title: "Solutions that push your business boundaries"
    subtitle: "We design and build software that amplifies your company's capabilities. We apply artificial intelligence, context, and adaptive architecture to transform operations, products, and experiences into digital ecosystems that learn and improve with use. These are the scenarios where our approach generates the most impact:"
    card1:
        title: "Autonomous processes that optimize themselves"
        description: "We develop internal systems and back-office solutions that automate repetitive tasks, integrate with your current tools, and learn from each execution. The result: fewer errors, increased efficiency, and teams focused on strategic decisions."
    card2:
        title: "Assistants that amplify human capabilities"
        description: "We create interfaces and tools where AI agents work alongside people, anticipating needs and executing actions with context. Artificial intelligence doesn't replace: it accompanies, amplifies, and accelerates human work."
    card3:
        title: "Products that evolve with their context"
        description: "We design applications that understand their context—users, roles, data, and goals—and respond dynamically. From SaaS to enterprise systems, we build solutions that learn and evolve with your business."
    card4:
        title: "Clearer decisions, driven by context and data"
        description: "We turn scattered information into actionable knowledge. Our systems integrate memory, analytics, and continuous feedback to help you decide with precision and in real-time."
</i18n>
