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
    title: "Transformamos los límites de tu negocio."
    subtitle: "Escenarios donde la inteligencia artificial amplifica a equipos, usuarios y organizaciones en cualquier contexto. Estos son algunos retos que resolvemos:"
    card1:
        title: "Procesos internos autónomos"
        description: "Liberamos Backoffice y Operaciones de tareas repetitivas. Los agentes de IA ejecutan, integran y aprenden, permitiendo que sus equipos se concentren en el criterio y el valor estratégico."
    card2:
        title: "Asistentes que amplifican la productividad"
        description: "Experiencias digitales donde la IA anticipa necesidades y se convierte en un copiloto confiable para empleados y usuarios finales, acelerando la toma de decisiones."
    card3:
        title: "Productos que se adaptan y evolucionan en tiempo real"
        description: "Plataformas potenciadas con IA desde el núcleo: experiencias que aprenden del uso, se personalizan automáticamente y responden de forma dinámica a cada contexto de mercado."
    card4:
        title: "Decisiones claras frente a la complejidad de los datos"
        description: "La información deja de ser un obstáculo. Documentos, registros y bases de datos se transforman en conocimiento accionable e inmediato para que su organización responda con precisión y velocidad."

en:
    title: "We transform the boundaries of your business."
    subtitle: "Scenarios where artificial intelligence amplifies teams, users, and organizations in any context. Here are some challenges we solve:"
    card1:
        title: "Autonomous internal processes"
        description: "We free Backoffice and Operations from repetitive tasks. AI agents execute, integrate, and learn, allowing your teams to focus on judgment and strategic value."
    card2:
        title: "Assistants that amplify productivity"
        description: "Digital experiences where AI anticipates needs and becomes a reliable co-pilot for employees and end users, accelerating decision-making."
    card3:
        title: "Products that adapt and evolve in real-time"
        description: "Platforms powered by AI at their core: experiences that learn from usage, automatically personalize, and dynamically respond to each market context."
    card4:
        title: "Clear decisions amidst data complexity"
        description: "Information is no longer an obstacle. Documents, records, and databases are transformed into actionable and immediate knowledge so your organization can respond with precision and speed."
</i18n>
