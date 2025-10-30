<template>
    <section class="py-16">
        <div class="container mx-auto px-6">
            <AppH2 class="text-center mb-4">{{ t("title") }}</AppH2>
            <AppSectionSubtitle class="text-center mb-16">{{
                t("subtitle")
            }}</AppSectionSubtitle>

            <!-- Cards Grid -->
            <div
                class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
            >
                <!-- Card 1: Procesos autónomos -->
                <div
                    class="bg-grey-900/60 backdrop-blur-sm rounded-3xl p-6 lg:p-8 hover:bg-grey-900/50 transition-all duration-300 group"
                >
                    <h3
                        class="font-title text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4 max-w-sm"
                    >
                        {{ t("card1.title") }}
                    </h3>
                    <p class="mb-2 lg:text-lg">{{ t("card1.subtitle") }}</p>
                    <p
                        class="text-grey-300 text-sm lg:text-base leading-relaxed"
                    >
                        {{ t("card1.description") }}
                    </p>
                </div>

                <!-- Card 2: Asistentes que amplifican -->
                <div
                    class="bg-grey-900/60 backdrop-blur-sm rounded-3xl p-6 lg:p-8 hover:bg-grey-900/50 transition-all duration-300 group"
                >
                    <h3
                        class="font-title text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4 max-w-sm"
                    >
                        {{ t("card2.title") }}
                    </h3>
                    <p class="mb-2 lg:text-lg">{{ t("card2.subtitle") }}</p>
                    <p
                        class="text-grey-300 text-sm lg:text-base leading-relaxed"
                    >
                        {{ t("card2.description") }}
                    </p>
                </div>

                <!-- Card 3: Productos que evolucionan -->
                <div
                    class="bg-grey-900/60 backdrop-blur-sm rounded-3xl p-6 lg:p-8 hover:bg-grey-900/50 transition-all duration-300 group"
                >
                    <h3
                        class="font-title text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4 max-w-sm"
                    >
                        {{ t("card3.title") }}
                    </h3>
                    <p class="mb-2 lg:text-lg">{{ t("card3.subtitle") }}</p>
                    <p
                        class="text-grey-300 text-sm lg:text-base leading-relaxed"
                    >
                        {{ t("card3.description") }}
                    </p>
                </div>

                <!-- Card 4: Decisiones claras -->
                <div
                    class="bg-grey-900/60 backdrop-blur-sm rounded-3xl p-6 lg:p-8 hover:bg-grey-900/50 transition-all duration-300 group"
                >
                    <h3
                        class="font-title text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to to-150% bg-clip-text text-transparent leading-tight mb-4 max-w-sm"
                    >
                        {{ t("card4.title") }}
                    </h3>
                    <p class="mb-2 lg:text-lg">{{ t("card4.subtitle") }}</p>
                    <p
                        class="text-grey-300 text-sm lg:text-base leading-relaxed"
                    >
                        {{ t("card4.description") }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import AppH2 from "./AppH2.vue";
import AppSectionSubtitle from "./AppSectionSubtitle.vue";

const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="yaml">
es:
    title: "Tu producto crece, pero la experiencia no evoluciona al mismo ritmo"
    subtitle: "A medida que el producto escala, los flujos, mensajes y decisiones que funcionaban al inicio comienzan a mostrar sus límites. La complejidad aumenta, la claridad se pierde y la experiencia deja de acompañar al crecimiento."
    card1:
        title: "Cuando el crecimiento se vuelve fricción"
        subtitle: "Las tácticas que te llevaron hasta acá no escalan solas."
        description: "Los flujos se vuelven confusos, las interacciones pierden coherencia y la experiencia deja de reflejar el valor real del producto. Lo que antes era ágil ahora genera fricción."
    card2:
        title: "Más esfuerzos, menos claridad"
        subtitle: "Agregar más no siempre soluciona la raíz del problema."
        description: "Cada nuevo feature, proceso o mensaje suma complejidad si no hay una visión UX que los conecte. Los usuarios se pierden, los equipos se saturan y el crecimiento se desacelera."
    card3:
        title: "Decisiones reactivas, sin contexto"
        subtitle: "Lo urgente reemplaza a lo importante."
        description: "Sin un marco claro para entender el recorrido del usuario, las mejoras se basan en intuición, pedidos aislados o métricas incompletas. Los verdaderos cuellos de botella permanecen ocultos."
    card4:
        title: "Experiencias que no escalan"
        subtitle: "El crecimiento sostenido requiere claridad, no solo velocidad."
        description: "El desafío no es agregar más, sino diseñar una experiencia que anticipe, guíe y evolucione con tus usuarios. Esa es la base de un SaaS product-led que crece de forma sostenible."

en:
    title: "Your product grows, but the experience doesn’t evolve with it"
    subtitle: "As your product scales, the flows, messages, and decisions that once worked start breaking down. Complexity increases, clarity fades, and the experience no longer supports growth."
    card1:
        title: "When growth becomes friction"
        subtitle: "The tactics that got you here won’t scale by themselves."
        description: "Flows become confusing, interactions lose coherence, and the experience stops reflecting the product’s real value. What used to feel agile now creates friction."
    card2:
        title: "More effort, less clarity"
        subtitle: "Adding more rarely fixes the root problem."
        description: "Every new feature, process, or message adds complexity if there’s no UX vision connecting them. Users get lost, teams get overwhelmed, and growth slows down."
    card3:
        title: "Reactive decisions, no context"
        subtitle: "Urgency replaces what truly matters."
        description: "Without a clear framework to understand the user journey, improvements are based on intuition, isolated feedback, or incomplete metrics. The real bottlenecks stay hidden."
    card4:
        title: "Experiences that don’t scale"
        subtitle: "Sustainable growth requires clarity, not just speed."
        description: "The challenge isn’t adding more — it’s designing an experience that anticipates, guides, and evolves with your users. That’s the foundation of a product-led SaaS that scales sustainably."
</i18n>
