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
                                            <!-- <div
                                                class="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% border-2 border-primary rounded-full flex items-center justify-center font-bold text-base text-background shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                                            >
                                                {{ index + 1 }}
                                            </div> -->
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
                                            class="text-gray-500 mb-2 text-xl font-semibold"
                                        >
                                            {{ step.subtitle }}
                                        </p>
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
                                class="absolute left-10 top-24 h-[calc(100%-28rem)] w-0.5 border-l-2 border-dashed border-gradient-from z-0"
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
                                            class="text-gray-500 mb-4 text-base font-semibold"
                                        >
                                            {{ step.subtitle }}
                                        </p>
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
    subtitle: string;
    description: string;
}

const processSteps = computed((): ProcessStep[] => [
    {
        title: t("step1.title"),
        subtitle: t("step1.subtitle"),
        description: t("step1.description"),
    },
    {
        title: t("step2.title"),
        subtitle: t("step2.subtitle"),
        description: t("step2.description"),
    },
    {
        title: t("step3.title"),
        subtitle: t("step3.subtitle"),
        description: t("step3.description"),
    },
    {
        title: t("step4.title"),
        subtitle: t("step4.subtitle"),
        description: t("step4.description"),
    },
    {
        title: t("step5.title"),
        subtitle: t("step5.subtitle"),
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
    title: "Metodología Diseñada para la Evolución Continua"
    subtitle: "Un proceso vivo que evoluciona en cada paso. Nuestra metodología integra estrategia, arquitectura, implementación y evolución en un ciclo continuo. Cada fase se retroalimenta con aprendizajes del uso real, asegurando que el software aprenda, se adapte y crezca junto a la organización."
    step1:
        title: "Descubrimiento Estratégico y Contextual"
        subtitle: "Entendemos tu organización, tus usuarios y tu ecosistema."
        description: "Analizamos objetivos, flujos operativos e interacciones críticas para identificar oportunidades de evolución. Mediante Ingeniería Contextual, definimos cómo el sistema debe percibir, razonar y actuar dentro de su entorno."
    step2:
        title: "Arquitectura Cognitiva y Diseño de Experiencia"
        subtitle: "Diseñamos cómo el sistema piensa y cómo las personas interactúan con él."
        description: "Combinamos estrategia UX y arquitectura para definir modelos contextuales, lógica adaptativa y colaboración entre humanos y agentes de IA. El resultado: una experiencia coherente que conecta propósito, inteligencia y usabilidad."
    step3:
        title: "Prototipado, Validación y Aprendizaje"
        subtitle: "Convertimos ideas en experiencias comprobables y basadas en evidencia."
        description: "Creamos prototipos interactivos y simulaciones impulsadas por IA para validar valor, flujo y viabilidad antes del desarrollo. Esto reduce el riesgo, acelera el aprendizaje y asegura la alineación entre usuarios, negocio y tecnología."
    step4:
        title: "Desarrollo Adaptativo e Implementación Inteligente"
        subtitle: "Construimos software preparado para aprender y escalar."
        description: "Implementamos arquitecturas robustas — APIs, capas de datos, agentes de IA y memoria contextual — que permiten adaptabilidad desde el primer día. El sistema evoluciona naturalmente a medida que recibe nuevos datos y comportamientos."
    step5:
        title: "Evolución Continua y Mejora Contextual"
        subtitle: "Aprendemos del uso real y evolucionamos con el tiempo."
        description: "Tras el lanzamiento, iniciamos un ciclo de retroalimentación adaptativa: medimos el uso, analizamos el contexto y evolucionamos funciones, interfaces y comportamientos mediante Ingeniería Adaptativa. El software nunca se detiene: crece con tu negocio."

en:
    title: "Methodology Designed for Continuous Evolution"
    subtitle: "A living process that evolves with every step. Our methodology integrates strategy, architecture, implementation, and evolution in a continuous loop. Each phase overlaps, feeding insights from real usage to ensure the software learns, adapts, and grows with your organization."
    step1:
        title: "Strategic & Contextual Discovery"
        subtitle: "Understanding your organization, your users, and your ecosystem."
        description: "We start by analyzing goals, users, operations, and critical interactions to uncover opportunities for evolution. Through Context Engineering, we define how the system should perceive, reason, and act within its environment."
    step2:
        title: "Cognitive Architecture & Experience Design"
        subtitle: "Designing how the system thinks and how people interact with it."
        description: "We combine UX strategy and system architecture to define contextual models, adaptive logic, and collaboration between humans and AI agents. The result: a coherent experience that connects business purpose, intelligence, and usability."
    step3:
        title: "Prototyping, Validation & Learning"
        subtitle: "Turning ideas into testable, evidence-based experiences."
        description: "We build interactive prototypes and AI-driven simulations to validate value, flow, and feasibility before development. This reduces risk, accelerates learning, and ensures alignment between users, business, and technology."
    step4:
        title: "Adaptive Development & Intelligent Implementation"
        subtitle: "Building future-ready software designed to learn and scale."
        description: "We implement robust architectures — APIs, data layers, AI agents, and contextual memory — enabling adaptability from day one. The software evolves naturally through new data, behaviors, and insights."
    step5:
        title: "Continuous Evolution & Contextual Improvement"
        subtitle: "Learning from real usage and evolving over time."
        description: "After launch, we enter an adaptive feedback cycle — measuring usage, analyzing context, and evolving features, interfaces, and logic through Adaptive Engineering. Your software never stops improving — it grows with your business."
</i18n>
