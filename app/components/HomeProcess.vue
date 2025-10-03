<template>
    <section class="py-16">
        <div class="container mx-auto px-6">
            <AppH2>{{ t("title") }}</AppH2>
            <AppSectionSubtitle>{{ t("subtitle") }}</AppSectionSubtitle>

            <!-- Process Steps -->
            <div class="mt-16">
                <div class="relative">
                    <!-- Desktop Layout -->
                    <div class="hidden lg:block">
                        <div class="relative">
                            <!-- Connecting Line -->
                            <div
                                class="absolute left-[16.67%] top-24 h-[calc(100%-12rem)] w-0.5 border-l-3 border-dashed border-gradient-from z-0"
                            />

                            <!-- Process Steps -->
                            <div class="space-y-20">
                                <div
                                    v-for="(step, index) in processSteps"
                                    :key="index"
                                    class="relative flex items-start gap-8"
                                >
                                    <!-- Image Container (1/3 width) -->
                                    <div class="w-1/3 relative z-10">
                                        <div
                                            class="relative group cursor-pointer"
                                        >
                                            <NuxtImg
                                                :ref="
                                                    (el: HTMLElement | null) =>
                                                        setImageRef(el, index)
                                                "
                                                :src="`/images/process/process${
                                                    index + 1
                                                }.jpg`"
                                                :alt="`Paso ${index + 1}`"
                                                class="w-full h-48 object-cover rounded-xl border- shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105"
                                                :style="{
                                                    transform: `scale(${
                                                        imageScales[index] ||
                                                        0.85
                                                    })`,
                                                }"
                                            />
                                            <!-- Step Number Badge -->
                                            <div
                                                class="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% border-2 border-primary rounded-full flex items-center justify-center font-bold text-base text-background shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                                            >
                                                {{ index + 1 }}
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Content Container (2/3 width) -->
                                    <div class="w-2/3 pt-4">
                                        <AppH3
                                            class="text-xl font-title font-bold text-primary mb-4"
                                        >
                                            {{ step.title }}
                                        </AppH3>
                                        <p
                                            class="text-grey-300 leading-relaxed max-w-lg"
                                        >
                                            {{ step.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Mobile Layout -->
                    <div class="lg:hidden">
                        <div class="relative">
                            <!-- Connecting Line -->
                            <div
                                class="absolute left-10 top-24 h-[calc(100%-20rem)] w-0.5 border-l-2 border-dashed border-gradient-from z-0"
                            />

                            <!-- Process Steps -->
                            <div class="space-y-16">
                                <div
                                    v-for="(step, index) in processSteps"
                                    :key="index"
                                    class="relative"
                                >
                                    <!-- Image Container (full width) -->
                                    <div
                                        class="relative z-10 mb-6 group cursor-pointer"
                                    >
                                        <NuxtImg
                                            :ref="(el: HTMLElement | null) => setImageRef(el, index + 5)"
                                            :src="`/images/process/process${
                                                index + 1
                                            }.jpg`"
                                            :alt="`Paso ${index + 1}`"
                                            class="w-full h-48 object-cover rounded-xl border border-grey-800/50 shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105"
                                            :style="{
                                                transform: `scale(${
                                                    imageScales[index + 5] ||
                                                    0.85
                                                })`,
                                            }"
                                        />
                                        <!-- Step Number Badge -->
                                        <div
                                            class="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to rounded-full flex items-center justify-center font-bold text-base text-background shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        >
                                            {{ index + 1 }}
                                        </div>
                                    </div>

                                    <!-- Content Container (with left margin) -->
                                    <div class="ml-16">
                                        <AppH3
                                            class="text-lg font-title font-bold text-primary mb-3"
                                        >
                                            {{ step.title }}
                                        </AppH3>
                                        <p
                                            class="text-grey-300 leading-relaxed text-sm"
                                        >
                                            {{ step.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
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

interface ProcessStep {
    title: string;
    description: string;
}

const processSteps = computed((): ProcessStep[] => [
    {
        title: t("step1.title"),
        description: t("step1.description"),
    },
    {
        title: t("step2.title"),
        description: t("step2.description"),
    },
    {
        title: t("step3.title"),
        description: t("step3.description"),
    },
    {
        title: t("step4.title"),
        description: t("step4.description"),
    },
    {
        title: t("step5.title"),
        description: t("step5.description"),
    },
]);

// Scroll animation logic
const imageRefs = ref<(HTMLElement | null)[]>([]);
const imageScales = ref<Record<number, number>>({});

const setImageRef = (el: HTMLElement | null, index: number) => {
    if (el) {
        imageRefs.value[index] = el;
    }
};

const calculateScale = (element: HTMLElement): number => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementCenter = rect.top + rect.height / 2;
    const screenCenter = windowHeight / 2;

    // Calculate distance from center of screen
    const distance = Math.abs(elementCenter - screenCenter);
    const maxDistance = windowHeight / 2;

    // Calculate scale based on distance (closer to center = larger)
    const normalizedDistance = Math.min(distance / maxDistance, 1);
    const minScale = 0.85;
    const maxScale = 1.05;

    // If element is completely out of view, use minimum scale
    if (rect.bottom < 0 || rect.top > windowHeight) {
        return minScale;
    }

    // Scale from minScale to maxScale based on proximity to center
    return maxScale - normalizedDistance * (maxScale - minScale);
};

const updateScrollAnimations = () => {
    imageRefs.value.forEach((el, index) => {
        if (el) {
            const scale = calculateScale(el);
            imageScales.value[index] = scale;
        }
    });
};

onMounted(() => {
    // Initial calculation
    nextTick(() => {
        updateScrollAnimations();
    });

    // Add scroll listener
    window.addEventListener("scroll", updateScrollAnimations);
    window.addEventListener("resize", updateScrollAnimations);
});

onUnmounted(() => {
    window.removeEventListener("scroll", updateScrollAnimations);
    window.removeEventListener("resize", updateScrollAnimations);
});
</script>

<i18n lang="yaml">
es:
    title: "Un proceso vivo que evoluciona con cada paso"
    subtitle: Nuestro proceso de trabajo se basa en etapas que se solapan, se retroalimentan y se repiten. Cada ciclo integra insights y métricas que permiten que el producto evolucione de manera continua.
    step1:
        title: "Descubrimiento estratégico"
        description: "Entendemos a fondo tu contexto, usuarios, procesos y objetivos. Aquí combinamos análisis humano con IA para detectar patrones, oportunidades y puntos críticos más rápido."
    step2:
        title: "Diseño de experiencias"
        description: "Definimos arquitecturas de interacción centradas en personas y agentes de IA. Herramientas inteligentes nos permiten anticipar escenarios, validar flujos y ahorrar tiempo en exploración."
    step3:
        title: "Prototipado y validación"
        description: "Creamos prototipos que se testean con usuarios y también con simulaciones potenciadas por IA, lo que acelera la iteración y reduce riesgos antes del desarrollo."
    step4:
        title: "Implementación de software e IA"
        description: "Desarrollamos aplicaciones digitales preparadas para la inteligencia artificial, integrando agentes, memoria, analítica y automatización. Usamos IA en el propio proceso de ingeniería para optimizar calidad y velocidad de entrega."
    step5:
        title: "Evolución continua"
        description: "Nada queda estático. Medimos, analizamos y mejoramos con datos reales, apoyándonos en analítica avanzada y agentes que monitorean el uso en tiempo real para guiar la evolución del producto."

en:
    title: "A living process that evolves with each step"
    subtitle: Our work process is based on overlapping, feedback-driven, and iterative stages. Each cycle integrates insights and metrics that allow the product to evolve continuously.
    step1:
        title: "Strategic Discovery"
        description: "We deeply understand your context, users, processes, and objectives. Here we combine human analysis with AI to detect patterns, opportunities, and critical points faster."
    step2:
        title: "Experience Design"
        description: "We define interaction architectures centered on people and AI agents. Intelligent tools allow us to anticipate scenarios, validate flows, and save time in exploration."
    step3:
        title: "Prototyping and Validation"
        description: "We create prototypes that are tested with users and also with AI-powered simulations, which accelerates iteration and reduces risks before development."
    step4:
        title: "Software and AI Implementation"
        description: "We develop digital applications prepared for artificial intelligence, integrating agents, memory, analytics, and automation. We use AI in the engineering process itself to optimize quality and delivery speed."
    step5:
        title: "Continuous Evolution"
        description: "Nothing remains static. We measure, analyze, and improve with real data, relying on advanced analytics and agents that monitor usage in real-time to guide product evolution."
</i18n>
