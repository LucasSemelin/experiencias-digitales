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
                                            :ref="
                                                (el: HTMLElement | null) =>
                                                    setImageRef(el, index + 5)
                                            "
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
    title: "De la estrategia a la evolución continua"
    subtitle: "Un proceso estructurado y medible que combina investigación, diseño, validación y evolución continua. Cada fase está diseñada para optimizar la activación, la retención y el crecimiento desde la experiencia de usuario."
    step1:
        title: "Descubrimiento y Diagnóstico"
        subtitle: "Analizamos el contexto, los usuarios y los puntos de fricción."
        description: "Evaluamos el recorrido actual, las métricas de adopción y las interacciones clave para detectar qué bloquea la activación y dónde se pierde el valor percibido."
    step2:
        title: "Estrategia y Arquitectura UX"
        subtitle: "Definimos cómo la experiencia puede impulsar el crecimiento."
        description: "Convertimos los hallazgos en decisiones estratégicas: flujos optimizados, mensajes claros y una arquitectura UX alineada con los objetivos del negocio."
    step3:
        title: "Diseño, Implementación y Validación"
        subtitle: "Transformamos estrategia en resultados medibles."
        description: "Diseñamos e iteramos junto a tu equipo, implementando mejoras validadas con datos reales. Priorizamos acciones de alto impacto que reduzcan fricción y aumenten adopción."
    step4:
        title: "Evolución y Mejora Continua"
        subtitle: "La experiencia evoluciona junto a tu producto."
        description: "Monitoreamos resultados, analizamos el comportamiento y aplicamos aprendizajes para mantener la experiencia alineada con las necesidades del usuario y la evolución del negocio."

en:
    title: "From Strategy to Continuous Evolution"
    subtitle: "A structured, measurable process that combines research, design, validation, and continuous evolution. Each phase is designed to optimize activation, retention, and growth through user experience."
    step1:
        title: "Discovery & Diagnosis"
        subtitle: "We analyze context, users, and friction points."
        description: "We evaluate the current journey, adoption metrics, and key interactions to identify what blocks activation and where perceived value is being lost."
    step2:
        title: "UX Strategy & Architecture"
        subtitle: "We define how experience can drive growth."
        description: "We turn insights into strategic decisions: optimized flows, clear messaging, and a UX architecture aligned with business objectives."
    step3:
        title: "Design, Implementation & Validation"
        subtitle: "We turn strategy into measurable results."
        description: "We design and iterate alongside your team, implementing data-validated improvements. We prioritize high-impact actions that reduce friction and increase adoption."
    step4:
        title: "Evolution & Continuous Improvement"
        subtitle: "The experience evolves with your product."
        description: "We monitor results, analyze behavior, and apply learnings to keep the experience aligned with user needs and business growth."
</i18n>
