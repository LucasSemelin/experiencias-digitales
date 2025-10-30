<template>
    <section class="py-16">
        <div class="container mx-auto px-6">
            <AppH2 class="text-center mb-8 max-w-4xl mx-auto">{{
                t("title")
            }}</AppH2>
            <AppSectionSubtitle>{{ t("subtitle") }}</AppSectionSubtitle>
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
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-2"
                    >
                        {{ t("solution1.description") }}
                    </p>
                    <!-- <p class="text-sm mt-4 text-gradient-from">
                        Outcome: {{ t("solution1.outcome") }}
                    </p> -->
                </div>
                <!-- Image placeholder - Desktop left, Mobile middle -->
                <div class="lg:order-1 order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
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
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-1"
                    >
                        {{ t("solution2.description") }}
                    </p>
                    <!-- <p class="text-sm mt-4 text-gradient-from">
                        Outcome: {{ t("solution2.outcome") }}
                    </p> -->
                </div>
                <!-- Image placeholder - Desktop right, Mobile middle -->
                <div class="order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
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
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-2"
                    >
                        {{ t("solution3.description") }}
                    </p>
                    <!-- <p class="text-sm mt-4 text-gradient-from">
                        Outcome: {{ t("solution3.outcome") }}
                    </p> -->
                </div>
                <!-- Image placeholder - Desktop left, Mobile middle -->
                <div class="lg:order-1 order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
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
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-1"
                    >
                        {{ t("solution4.description") }}
                    </p>
                    <!-- <p class="text-sm mt-4 text-gradient-from">
                        Outcome: {{ t("solution4.outcome") }}
                    </p> -->
                </div>
                <!-- Image placeholder - Desktop right, Mobile middle -->
                <div class="order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/solutions/solution4.jpg"
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
    title: "Convertimos la fricción en crecimiento con estrategia UX y diseño product-led."
    subtitle: "Ayudamos a equipos SaaS B2B y B2C a transformar productos complejos en experiencias claras, escalables y centradas en el usuario. Aplicamos estrategia UX, diseño product-led y analítica para impulsar activación, retención y expansión sostenibles."
    solution1:
        title: "Estrategia UX orientada al crecimiento"
        subtitle: "Primero entendemos, después diseñamos."
        description: "Analizamos el contexto del negocio, los flujos actuales y las métricas de adopción para descubrir dónde se pierde el valor. Alineamos objetivos de producto y experiencia para priorizar mejoras con impacto real en retención y expansión."
        outcome: "Un diagnóstico claro y una hoja de ruta estratégica para evolucionar el producto."
    solution2:
        title: "Onboarding optimizado"
        subtitle: "Cada paso inicial define la relación con el usuario."
        description: "Diseñamos experiencias que comunican valor desde el primer uso. Simplificamos flujos, reducimos fricción y conectamos a los usuarios con el 'aha moment' lo antes posible para acelerar la activación y reducir el abandono."
        outcome: "Un recorrido inicial que convierte curiosidad en adopción real."
    solution3:
        title: "Diseño para retención y expansión"
        subtitle: "El crecimiento empieza cuando los usuarios permanecen."
        description: "Creamos experiencias continuas y coherentes que fortalecen el hábito de uso y facilitan la recomendación interna en entornos B2B. La retención y la expansión se vuelven consecuencias naturales de una UX bien diseñada."
        outcome: "Una arquitectura de experiencia escalable, centrada en el valor continuo."
    solution4:
        title: "Evolución continua basada en datos"
        subtitle: "Diseñar es aprender, medir y mejorar."
        description: "Integramos analítica y comportamiento para detectar oportunidades de optimización y validar resultados en tiempo real. Cada iteración refuerza la conexión entre negocio, usuario y producto."
        outcome: "Un sistema de mejora constante alineado con la evolución del negocio."

en:
    title: "We turn friction into growth through UX strategy and product-led design."
    subtitle: "We help B2B and B2C SaaS teams transform complex products into clear, scalable, and user-centered experiences. Through UX strategy, product-led design, and analytics, we drive sustainable activation, retention, and expansion."
    solution1:
        title: "Growth-Driven UX Strategy"
        subtitle: "Understand first, design later."
        description: "We analyze the business context, current flows, and adoption metrics to uncover where value is being lost. We align product and experience goals to prioritize improvements with measurable impact on retention and expansion."
        outcome: "A clear diagnosis and a strategic roadmap for product evolution."
    solution2:
        title: "Optimized Onboarding"
        subtitle: "Every first step shapes the user relationship."
        description: "We design experiences that communicate value from the first use. We simplify flows, reduce friction, and connect users with the 'aha moment' as early as possible to accelerate activation and reduce churn."
        outcome: "An initial journey that turns curiosity into real adoption."
    solution3:
        title: "Design for Retention and Expansion"
        subtitle: "Growth starts when users stay."
        description: "We create continuous, coherent experiences that build usage habits and enable internal advocacy in B2B environments. Retention and expansion become natural outcomes of thoughtful UX."
        outcome: "A scalable experience architecture focused on sustained value."
    solution4:
        title: "Data-Driven Continuous Evolution"
        subtitle: "Design means learning, measuring, and improving."
        description: "We integrate analytics and behavioral insights to identify optimization opportunities and validate results in real time. Each iteration strengthens the connection between business, user, and product."
        outcome: "A continuous improvement system aligned with business evolution."
</i18n>
