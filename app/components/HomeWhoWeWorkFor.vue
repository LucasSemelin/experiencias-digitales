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
                            class="flex flex-col justify-center p-6 bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl hover:border-grey-700/70 transition-all duration-300"
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
                        </div>

                        <!-- Column 2 -->
                        <div
                            class="flex flex-col justify-center p-6 bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl hover:border-grey-700/70 transition-all duration-300"
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
                        </div>

                        <!-- Column 3 -->
                        <div
                            class="flex flex-col justify-center p-6 bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl hover:border-grey-700/70 transition-all duration-300"
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
                        </div>

                        <!-- Column 4 -->
                        <div
                            class="flex flex-col justify-center p-6 bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl hover:border-grey-700/70 transition-all duration-300"
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
    title: "Cómo transformamos organizaciones"
    subtitle: "A través de nuestro enfoque de Evolution Engineering, ayudamos a organizaciones a repensar cómo funciona su software, sus procesos y sus experiencias. El resultado: sistemas más inteligentes, equipos más enfocados y negocios que crecen con propósito."
    quadrant1:
        title: "Impulsamos lo nuevo"
        subtitle: "Software y plataformas creadas para nacer con inteligencia y contexto."
        description: "Diseñamos y desarrollamos productos digitales, desde SaaS hasta soluciones internas, donde la IA, la UX y la arquitectura adaptativa trabajan desde el inicio para garantizar escalabilidad y coherencia."
    quadrant2:
        title: "Potenciamos lo existente"
        subtitle: "Evolucionamos sistemas actuales para que aprendan y se ajusten al uso real."
        description: "Modernizamos arquitecturas, incorporamos memoria contextual, agentes de IA y analítica adaptativa, logrando que tus sistemas actuales sean más eficientes, autónomos y relevantes."
    quadrant3:
        title: "Reinventamos lo interno"
        subtitle: "Transformamos operaciones en ecosistemas digitales inteligentes."
        description: "Digitalizamos procesos complejos y los convertimos en flujos automatizados que se integran con tus herramientas actuales. El resultado: equipos más ágiles, menos fricción y decisiones basadas en datos reales."
    quadrant4:
        title: "Expandimos lo externo"
        subtitle: "Creamos experiencias que conectan personas, datos y sistemas inteligentes."
        description: "Diseñamos productos orientados a usuarios, partners o clientes finales, donde la inteligencia artificial mejora la interacción y genera valor continuo en cada punto de contacto."

en:
    title: "How we transform organizations"
    subtitle: "Through our Evolution Engineering approach, we help organizations rethink how their software, processes, and experiences work. The result: smarter systems, more focused teams, and businesses that grow with purpose."
    quadrant1:
        title: "Drive the new"
        subtitle: "Software and platforms built to be intelligent and context-aware from day one."
        description: "We design and develop digital products, from SaaS to internal solutions, where AI, UX, and adaptive architecture work together from the start to ensure scalability and coherence."
    quadrant2:
        title: "Enhance the existing"
        subtitle: "We evolve existing systems to learn and adapt to real-world usage."
        description: "We modernize architectures, incorporating contextual memory, AI agents, and adaptive analytics, making your current systems more efficient, autonomous, and relevant."
    quadrant3:
        title: "Reinvent the internal"
        subtitle: "We transform internal processes to be more agile and data-driven."
        description: "We digitize complex processes and turn them into automated workflows that integrate with your current tools. The result: more agile teams, less friction, and decisions based on real data."
    quadrant4:
        title: "Expand the external"
        subtitle: "We create experiences that connect people, data, and intelligent systems."
        description: "We design user-centric products where artificial intelligence enhances interaction and generates continuous value at every touchpoint."
</i18n>
