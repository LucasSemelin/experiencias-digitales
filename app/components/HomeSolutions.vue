<template>
    <section class="py-16">
        <div class="container mx-auto px-6">
            <AppH2 class="text-center mb-16">{{ t("title") }}</AppH2>
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
    title: "Diseño experiencias de onboarding que activan, retienen y escalan."
    subtitle: "Combino UX, estrategia product-led y analítica para eliminar fricciones, acelerar la activación y aumentar la retención de tus usuarios SaaS. Mi objetivo es simple: que cada nuevo usuario entienda el valor de tu producto desde el primer uso y quiera volver."
    solution1:
        title: Diseño para activar antes
        subtitle: "Cada interacción cuenta."
        description: "Simplifico los primeros pasos del usuario para que alcance el valor del producto lo antes posible. Identifico fricciones, defino el “aha moment” y optimizo el recorrido inicial para aumentar la tasa de activación y reducir abandono."
        outcome: "Un plan estratégico para la evolución del sistema."
    solution2:
        title: "Experiencias que retienen"
        subtitle: "El onboarding no termina con el registro."
        description: "Diseño recorridos guiados, mensajes contextuales y flujos que mantienen al usuario comprometido. El resultado: una experiencia más clara, más predecible y una retención que empieza desde el día uno."
        outcome: "Una arquitectura coherente que integra UX, inteligencia y adaptabilidad."
    solution3:
        title: "Onboarding que impulsa expansión"
        subtitle: "La adopción interna es clave para crecer."
        description: "Diseño experiencias que facilitan la comprensión, el uso compartido y la recomendación del producto dentro de las organizaciones B2B. Cuando los usuarios entienden y confían, se convierten en promotores naturales."
        outcome: "Un sistema vivo e inteligente, listo para crecer continuamente."
    solution4:
        title: "Crecimiento medible y sostenible"
        subtitle: "Diseñar sin medir es adivinar."
        description: "Integro analítica, comportamiento y métricas de activación para que tu onboarding sea una inversión con retorno, no un gasto operativo. Cada mejora tiene impacto directo en retención, expansión y valor del cliente."
        outcome: "Un sistema autoevolutivo alineado con la evolución del negocio."

en:
    title: "I design onboarding experiences that activate, retain, and scale."
    subtitle: "I combine UX, product-led strategy, and analytics to eliminate friction, accelerate activation, and boost retention for your SaaS users. My goal is simple: to ensure every new user understands your product's value from the first use and wants to return."
    solution1:
        title: "Design to Activate Faster"
        subtitle: "Every interaction counts."
        description: "I streamline the user's initial steps to reach product value as quickly as possible. I identify frictions, define the 'aha moment,' and optimize the initial journey to increase activation rates and reduce abandonment."
        outcome: A strategic blueprint for system evolution.
    solution2:
        title: "Experiences that Retain"
        subtitle: "Onboarding doesn't end at sign-up."
        description: "I design guided journeys, contextual messaging, and flows that keep users engaged. The result: a clearer, more predictable experience and retention that starts from day one."
        outcome: A cohesive architecture that blends UX, intelligence, and adaptability.
    solution3:
        title: "Onboarding that Drives Expansion"
        subtitle: "Internal adoption is key to growth."
        description: "I design experiences that facilitate understanding, sharing, and recommending the product within B2B organizations. When users understand and trust, they become natural promoters."
        outcome: A living, intelligent system ready for continuous growth.
    solution4:
        title: "Measurable and Sustainable Growth"
        subtitle: "Designing without measuring is guessing."
        description: "I integrate analytics, behavior, and activation metrics so your onboarding is an investment with returns, not an operational expense. Every improvement has a direct impact on retention, expansion, and customer value."
        outcome: A self-improving system aligned with your business evolution.
</i18n>
