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
    subtitle: Trabajamos en cuatro dimensiones clave para integrar IA de forma estratégica y generar impacto real en tu organización.
    quadrant1:
        title: "Impulsar lo nuevo"
        description: "Productos digitales, plataformas o SaaS concebidos con IA en el corazón desde el primer día."
    quadrant2:
        title: "Potenciar lo existente"
        description: "Soluciones digitales ya en marcha que evolucionan con asistentes, analítica y escalabilidad continua."
    quadrant3:
        title: "Reinventar lo interno"
        description: "Procesos y operaciones dentro de la organización que se vuelven más autónomos, ágiles y eficientes."
    quadrant4:
        title: "Expandir lo externo"
        description: "Experiencias para clientes y usuarios finales que integran IA de forma natural, aumentando confianza, personalización y valor."

en:
    title: "How we transform organizations"
    subtitle: We work across four key dimensions to strategically integrate AI and generate real impact in your organization.
    quadrant1:
        title: "Drive the new"
        description: "Digital products, platforms or SaaS conceived with AI at the heart from day one."
    quadrant2:
        title: "Enhance the existing"
        description: "Digital solutions already in progress that evolve with assistants, analytics and continuous scalability."
    quadrant3:
        title: "Reinvent the internal"
        description: "Processes and operations within the organization that become more autonomous, agile and efficient."
    quadrant4:
        title: "Expand the external"
        description: "Experiences for customers and end users that integrate AI naturally, increasing trust, personalization and value."
</i18n>
