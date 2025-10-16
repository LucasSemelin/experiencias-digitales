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
    title: "Nuestro proceso de ingeniería evolutiva"
    subtitle: "Un proceso vivo que combina ingeniería, contexto y adaptación. En Myntropic Studio, cada proyecto atraviesa un ciclo diseñado para que el software no solo funcione, sino que entienda, aprenda y evolucione junto a tu empresa."
    step1:
        title: "Descubrimiento Estratégico y Contextual"
        subtitle: Comprendemos el entorno antes de escribir una línea de código.
        description: "Analizamos los objetivos del negocio, los usuarios, los flujos operativos y las interacciones críticas. Aplicamos herramientas de Context Engineering para definir cómo el sistema deberá razonar, recordar y actuar dentro de tu ecosistema digital."
    step2:
        title: "Arquitectura Cognitiva y Diseño de Experiencia"
        subtitle: Diseñamos cómo el sistema piensa y cómo las personas interactúan con él.
        description: "Unimos UX y arquitectura para estructurar la comprensión contextual, la lógica de decisión y las reglas de colaboración entre humanos y agentes. El resultado: una base sólida que conecta propósito, experiencia y comportamiento inteligente."
    step3:
        title: "Prototipado, Validación y Aprendizaje"
        subtitle: Convertimos ideas en experiencias tangibles y medibles.
        description: "Creamos prototipos funcionales que se testean con usuarios y simulaciones impulsadas por IA. Esto nos permite validar valor, flujo y viabilidad antes del desarrollo, reduciendo riesgo y acelerando el aprendizaje."
    step4:
        title: "Desarrollo Adaptativo y AI-Driven"
        subtitle: Construimos software preparado para aprender y escalar.
        description: "Implementamos arquitecturas modernas (API, agentes, memoria, analítica) con una base técnica sólida y extensible. El software nace con la capacidad de adaptarse a nuevos datos, escenarios y objetivos sin perder coherencia."
    step5:
        title: "Evolución Continua y Mejora Contextual"
        subtitle: El software sigue aprendiendo después del lanzamiento.
        description: "Medimos el uso real, analizamos patrones y retroalimentamos el sistema. Cada ciclo integra Adaptive Engineering para ajustar funciones, interfaces y comportamientos según el contexto cambiante del negocio."

en:
    title: "Methodology Designed for Continuous Evolution"
    subtitle: "A living process that evolves with every step. Our methodology is based on overlapping, feedback-driven, and scalable stages. Each cycle integrates advanced insights and metrics to ensure the product **proactively and continuously evolves**."
    step1:
        title: "Strategic & Contextual Discovery"
        subtitle: We deeply understand your context, users, and goals.
        description: "We analyze business objectives, users, operational flows, and critical interactions. We apply Context Engineering tools to define how the system should reason, remember, and act within your digital ecosystem."
    step2:
        title: "Cognitive Architecture & Experience Design"
        subtitle: We design how the system thinks and how people interact with it.
        description: "We combine UX and architecture to structure contextual understanding, decision logic, and collaboration rules between humans and agents. The result: a solid foundation that connects purpose, experience, and intelligent behavior."
    step3:
        title: "Prototyping, Validation & Learning"
        subtitle: We turn ideas into tangible, testable experiences.
        description: "We create functional prototypes tested with users and AI-driven simulations. This allows us to validate value, flow, and feasibility before development, reducing risk and accelerating learning."
    step4:
        title: "Adaptive, AI-Driven Development"
        subtitle: We build future-ready software designed to learn and scale.
        description: "We implement modern architectures (APIs, agents, memory, analytics) with a solid and extensible technical foundation. The software is born with the ability to adapt to new data, scenarios, and objectives without losing coherence."
    step5:
        title: "Continuous Evolution & Contextual Improvement"
        subtitle: The software keeps learning post-launch.
        description: "We measure real usage, analyze patterns, and feed the system. Each cycle integrates Adaptive Engineering to adjust features, interfaces, and behaviors according to the changing business context."
</i18n>
