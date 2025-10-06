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
    title: "Metodología Diseñada para la Evolución Continua"
    subtitle: "Un proceso vivo que evoluciona con cada paso. Nuestra metodología se basa en etapas que se solapan, se retroalimentan y se escalan. Cada ciclo integra *insights* y métricas avanzadas que garantizan que el producto **evolucione de forma proactiva y continua"
    step1:
        title: "Descubrimiento Estratégico & AI-Powered Research"
        description: "Entendemos a fondo tu contexto, usuarios y objetivos. Combinamos análisis humano con IA para detectar patrones de alto valor, oportunidades ocultas y puntos críticos más rápido que la competencia."
    step2:
        title: "Arquitectura de Experiencia Humano-AI"
        description: "Definimos arquitecturas de interacción centradas en personas y sistemas inteligentes. Utilizamos herramientas de IA para anticipar escenarios, validar flujos de trabajo y acelerar la fase de diseño."
    step3:
        title: "Prototipado y Validación Predictiva"
        description: "Creamos prototipos que se testean con usuarios y con simulaciones potenciadas por IA. Esto acelera la iteración, reduce el riesgo de inversión y valida el valor antes del primer commit."
    step4:
        title: "Implementación de Software AI-Ready."
        description: "Desarrollamos plataformas digitales preparadas para el futuro, integrando agentes, memoria, analítica y automatización. Usamos AI en nuestra propia ingeniería para optimizar la calidad del código y la velocidad de entrega."
    step5:
        title: "Evolución Continua & Escalabilidad Garantizada"
        description: "Nada es estático. Medimos, analizamos y mejoramos con datos reales, apoyándonos en analítica avanzada y agentes que monitorean el valor en tiempo real para guiar el camino al crecimiento."

en:
    title: "Methodology Designed for Continuous Evolution"
    subtitle: "A living process that evolves with every step. Our methodology is based on overlapping, feedback-driven, and scalable stages. Each cycle integrates advanced insights and metrics to ensure the product **proactively and continuously evolves**."
    step1:
        title: "Strategic Discovery & AI-Powered Research"
        description: "We deeply understand your context, users, and goals. We combine human analysis with AI to uncover high-value patterns, hidden opportunities, and pain points faster than the competition."
    step2:
        title: "Human-AI Experience Architecture"
        description: "We define interaction architectures centered on people and intelligent systems. We use AI tools to anticipate scenarios, validate workflows, and accelerate the design phase."
    step3:
        title: "Predictive Prototyping & Validation"
        description: "We create prototypes tested with users and AI-powered simulations. This accelerates iteration, reduces investment risk, and validates value before the first commit."
    step4:
        title: "AI-Ready Software Implementation"
        description: "We develop future-ready digital platforms, integrating agents, memory, analytics, and automation. We use AI in our own engineering to optimize code quality and delivery speed."
    step5:
        title: "Continuous Evolution & Guaranteed Scalability"
        description: "Nothing is static. We measure, analyze, and improve with real data, leveraging advanced analytics and agents that monitor value in real-time to guide the path to growth."
</i18n>
