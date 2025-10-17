<template>
    <section class="py-16">
        <div class="container mx-auto px-6">
            <AppH2 class="text-center mb-4">{{ t("title") }}</AppH2>
            <AppSectionSubtitle class="text-center mb-16">{{
                t("subtitle")
            }}</AppSectionSubtitle>

            <!-- Desktop Layout: 4 Columns -->
            <div class="hidden lg:block">
                <div class="max-w-7xl mx-auto">
                    <!-- Grid Container -->
                    <div class="grid grid-cols-4 gap-6">
                        <!-- Column 1 -->
                        <div
                            class="flex flex-col justify-between p-6 bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl hover:border-grey-700/70 transition-all duration-300"
                        >
                            <AppH3
                                class="font-title text-lg font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4"
                            >
                                {{ t("quadrant1.title") }}
                            </AppH3>
                            <p
                                class="text-grey-100 leading-relaxed text-lg mb-2"
                            >
                                {{ t("quadrant1.subtitle") }}
                            </p>
                            <p class="text-grey-300 leading-relaxed text-sm">
                                {{ t("quadrant1.description") }}
                            </p>
                            <p
                                class="text-green-400 leading-relaxed text-sm mt-3 font-medium"
                            >
                                {{ t("quadrant1.result") }}
                            </p>
                        </div>

                        <!-- Column 2 -->
                        <div
                            class="flex flex-col justify-between p-6 bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl hover:border-grey-700/70 transition-all duration-300"
                        >
                            <AppH3
                                class="font-title text-lg font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4"
                            >
                                {{ t("quadrant2.title") }}
                            </AppH3>
                            <p
                                class="text-grey-100 leading-relaxed text-lg mb-2"
                            >
                                {{ t("quadrant2.subtitle") }}
                            </p>
                            <p class="text-grey-300 leading-relaxed text-sm">
                                {{ t("quadrant2.description") }}
                            </p>
                            <p
                                class="text-green-400 leading-relaxed text-sm mt-3 font-medium"
                            >
                                {{ t("quadrant2.result") }}
                            </p>
                        </div>

                        <!-- Column 3 -->
                        <div
                            class="flex flex-col justify-between p-6 bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl hover:border-grey-700/70 transition-all duration-300"
                        >
                            <AppH3
                                class="font-title text-lg font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4"
                            >
                                {{ t("quadrant3.title") }}
                            </AppH3>
                            <p
                                class="text-grey-100 leading-relaxed text-lg mb-2"
                            >
                                {{ t("quadrant3.subtitle") }}
                            </p>
                            <p class="text-grey-300 leading-relaxed text-sm">
                                {{ t("quadrant3.description") }}
                            </p>
                            <p
                                class="text-green-400 leading-relaxed text-sm mt-3 font-medium"
                            >
                                {{ t("quadrant3.result") }}
                            </p>
                        </div>

                        <!-- Column 4 -->
                        <div
                            class="flex flex-col justify-between p-6 bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl hover:border-grey-700/70 transition-all duration-300"
                        >
                            <AppH3
                                class="font-title text-lg font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4"
                            >
                                {{ t("quadrant4.title") }}
                            </AppH3>
                            <p
                                class="text-grey-100 leading-relaxed text-lg mb-2"
                            >
                                {{ t("quadrant4.subtitle") }}
                            </p>
                            <p class="text-grey-300 leading-relaxed text-sm">
                                {{ t("quadrant4.description") }}
                            </p>
                            <p
                                class="text-green-400 leading-relaxed text-sm mt-3 font-medium"
                            >
                                {{ t("quadrant4.result") }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile Layout: Stacked cards with background image -->
            <div class="lg:hidden">
                <!-- Background Image -->
                <div class="relative">
                    <div
                        class="absolute inset-0 opacity-10 rounded-xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/solutions/process1.jpg"
                            alt="Proceso"
                            class="w-full h-full object-cover"
                        />
                    </div>

                    <!-- Stacked Cards -->
                    <div class="relative z-10 space-y-6">
                        <!-- Card 1 -->
                        <div
                            class="p-6 bg-grey-900/60 backdrop-blur-sm border border-grey-800/50 rounded-xl"
                        >
                            <h3
                                class="font-title text-xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-3"
                            >
                                {{ t("quadrant1.title") }}
                            </h3>
                            <p class="text-grey-300 leading-relaxed text-sm">
                                {{ t("quadrant1.description") }}
                            </p>
                            <p
                                class="text-green-400 leading-relaxed text-sm mt-3 font-medium"
                            >
                                {{ t("quadrant1.result") }}
                            </p>
                        </div>

                        <!-- Card 2 -->
                        <div
                            class="p-6 bg-grey-900/60 backdrop-blur-sm border border-grey-800/50 rounded-xl"
                        >
                            <h3
                                class="font-title text-xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-3"
                            >
                                {{ t("quadrant2.title") }}
                            </h3>
                            <p class="text-grey-300 leading-relaxed text-sm">
                                {{ t("quadrant2.description") }}
                            </p>
                            <p
                                class="text-green-400 leading-relaxed text-sm mt-3 font-medium"
                            >
                                {{ t("quadrant2.result") }}
                            </p>
                        </div>

                        <!-- Card 3 -->
                        <div
                            class="p-6 bg-grey-900/60 backdrop-blur-sm border border-grey-800/50 rounded-xl"
                        >
                            <h3
                                class="font-title text-xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-3"
                            >
                                {{ t("quadrant3.title") }}
                            </h3>
                            <p class="text-grey-300 leading-relaxed text-sm">
                                {{ t("quadrant3.description") }}
                            </p>
                            <p
                                class="text-green-400 leading-relaxed text-sm mt-3 font-medium"
                            >
                                {{ t("quadrant3.result") }}
                            </p>
                        </div>

                        <!-- Card 4 -->
                        <div
                            class="p-6 bg-grey-900/60 backdrop-blur-sm border border-grey-800/50 rounded-xl"
                        >
                            <h3
                                class="font-title text-xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-3"
                            >
                                {{ t("quadrant4.title") }}
                            </h3>
                            <p class="text-grey-300 leading-relaxed text-sm">
                                {{ t("quadrant4.description") }}
                            </p>
                            <p
                                class="text-green-400 leading-relaxed text-sm mt-3 font-medium"
                            >
                                {{ t("quadrant4.result") }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import AppH2 from "./AppH2.vue";
import AppH3 from "./AppH3.vue";
import AppSectionSubtitle from "./AppSectionSubtitle.vue";

const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="yaml">
es:
    title: "Cómo Transformamos las Organizaciones"
    subtitle: "A través de nuestro enfoque de Ingeniería Evolutiva y Contextual, ayudamos a las organizaciones a repensar cómo sus sistemas, procesos y experiencias evolucionan. El resultado: ecosistemas más inteligentes, operaciones más adaptativas y crecimiento sostenible impulsado por la inteligencia y el contexto."
    quadrant1:
        title: "Impulsamos lo Nuevo"
        subtitle: "Diseñamos sistemas inteligentes desde el primer día."
        description: "Ayudamos a las organizaciones a crear plataformas preparadas para la IA y conscientes de su contexto, donde la UX, los datos y la inteligencia trabajan como un solo ecosistema adaptativo. Nuestra consultoría garantiza que cada nuevo producto nazca con la capacidad de aprender, evolucionar y escalar de forma coherente."
        result: "🟢 Resultado: Software preparado para la inteligencia, la adaptabilidad y la evolución continua."
    quadrant2:
        title: "Potenciamos lo Existente"
        subtitle: "Evolucionamos lo que ya funciona — de forma inteligente."
        description: "Transformamos sistemas actuales en plataformas adaptativas y autoevolutivas. Integramos capas contextuales, agentes de IA y analítica adaptativa para modernizar arquitecturas heredadas y alinearlas con el uso real y los cambios del negocio."
        result: "🟢 Resultado: Sistemas que aprenden del uso, reducen la fricción y se mantienen relevantes."
    quadrant3:
        title: "Reinventamos lo Interno"
        subtitle: "Convertimos las operaciones en flujos inteligentes."
        description: "Analizamos y rediseñamos los procesos internos para que sean más ágiles, autónomos y guiados por datos. Mediante automatización y aumento inteligente de procesos, transformamos operaciones complejas en sistemas dinámicos que respaldan decisiones estratégicas."
        result: "🟢 Resultado: Operaciones más inteligentes, decisiones más rápidas y equipos potenciados."
    quadrant4:
        title: "Expandimos lo Externo"
        subtitle: "Creamos experiencias que conectan personas, datos e inteligencia."
        description: "Diseñamos productos y experiencias centradas en el usuario donde la IA potencia la interacción, la personalización y la generación de valor en cada punto de contacto digital. El objetivo: construir ecosistemas donde la tecnología y las personas evolucionen juntas."
        result: "🟢 Resultado: Productos inteligentes que se adaptan a los usuarios y crecen con su contexto."

en:
    title: "How We Transform Organizations"
    subtitle: "Through our Evolutionary & Contextual Engineering approach, we help organizations rethink how their systems, processes, and experiences evolve. The result: smarter ecosystems, more adaptive operations, and sustainable business growth driven by intelligence and context."
    quadrant1:
        title: "Drive the New Era"
        subtitle: "Designing intelligent systems from day one."
        description: "We help organizations create AI-ready and context-aware platforms — from SaaS to enterprise tools — where UX, data, and intelligence work together as a single adaptive ecosystem. Our consulting ensures that every new product is born to learn, evolve, and scale coherently over time."
        result: "🟢 Result: Software built for intelligence, adaptability, and long-term evolution."
    quadrant2:
        title: "Enhance the Existing"
        subtitle: "Evolving what already works — intelligently."
        description: "We transform existing systems into adaptive, self-improving platforms. By integrating contextual layers, AI agents, and adaptive analytics, we modernize legacy architectures, aligning them with real-world data and business change."
        result: "🟢 Result: Systems that learn from usage, reduce friction, and stay relevant."
    quadrant3:
        title: "Reinvent the Internal"
        subtitle: "Transforming operations into intelligent workflows."
        description: "We analyze and redesign your internal processes to make them more agile, autonomous, and data-driven. Through process augmentation and automation, we turn complex operations into dynamic systems that support decision-making and strategic execution."
        result: "🟢 Result: Smarter operations, faster decisions, and empowered teams."
    quadrant4:
        title: "Expand the External"
        subtitle: "Creating experiences that connect people, data, and intelligence."
        description: "We design user-centric experiences where AI enhances interaction, personalization, and value generation across every digital touchpoint. Our goal: to create ecosystems where technology and people evolve together."
        result: "🟢 Result: Intelligent products that adapt to users and grow with their context."
</i18n>
