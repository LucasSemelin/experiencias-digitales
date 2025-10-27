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
    title: "Metodología para un Onboarding sin Fricción"
    subtitle: "Un proceso claro y medible que combina análisis, diseño, implementación y mejora continua. Cada fase transforma el onboarding en una experiencia más intuitiva, efectiva y alineada con los objetivos de tu producto SaaS."
    step1:
        title: "Auditoría y Diagnóstico"
        subtitle: "Identifico puntos de fricción y oportunidades de mejora."
        description: "Analizo tu flujo de onboarding actual, las métricas de activación y los patrones de abandono para entender dónde y por qué los usuarios se detienen."
    step2:
        title: "Estrategia y Rediseño UX"
        subtitle: "Redefino la experiencia para mostrar valor desde el primer uso."
        description: "Diseño recorridos claros, mensajes contextuales y flujos guiados que ayudan al usuario a alcanzar su primer ‘aha moment’ rápidamente."
    step3:
        title: "Implementación y Validación"
        subtitle: "Transformo el diseño en mejoras reales y medibles."
        description: "Trabajo junto a tu equipo para implementar los cambios y medir su impacto. Priorizo quick wins que reduzcan abandono y aceleren activación."
    step4:
        title: "Optimización y Evolución Continua"
        subtitle: "Tu onboarding sigue mejorando con el tiempo."
        description: "Monitoreo resultados, recojo aprendizajes del uso real y ajusto el flujo para escalar retención y crecimiento de forma sostenida."

en:
    title: "Methodology for Frictionless Onboarding"
    subtitle: "A clear, measurable process that combines analysis, design, implementation, and continuous improvement. Each phase turns onboarding into a more intuitive, effective experience aligned with your SaaS product goals."
    step1:
        title: "Audit & Diagnosis"
        subtitle: "Identifying friction points and opportunities for improvement."
        description: "I analyze your current onboarding flow, activation metrics, and drop-off patterns to understand where and why users get stuck."
    step2:
        title: "UX Strategy & Redesign"
        subtitle: "Redefining the experience to show value from the first use."
        description: "I design clear journeys, contextual messages, and guided flows that help users reach their first ‘aha moment’ quickly."
    step3:
        title: "Implementation & Validation"
        subtitle: "Turning design into real, measurable improvements."
        description: "I work closely with your team to implement and track changes, prioritizing quick wins that reduce churn and accelerate activation."
    step4:
        title: "Optimization & Continuous Evolution"
        subtitle: "Your onboarding keeps getting better over time."
        description: "I monitor results, gather insights from real usage, and adjust the flow to continuously scale retention and growth."
</i18n>
