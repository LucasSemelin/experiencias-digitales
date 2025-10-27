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
                    class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-3xl p-6 lg:p-8 hover:border-grey-700/70 transition-all duration-300 group"
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
                    class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-3xl p-6 lg:p-8 hover:border-grey-700/70 transition-all duration-300 group"
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
                    class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-3xl p-6 lg:p-8 hover:border-grey-700/70 transition-all duration-300 group"
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
                    class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-3xl p-6 lg:p-8 hover:border-grey-700/70 transition-all duration-300 group"
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
    title: "Un mal onboarding puede arruinar incluso el mejor producto"
    subtitle: "Cuando los usuarios no entienden el valor desde el primer uso, el crecimiento se detiene. Cada punto de fricción en el onboarding se convierte en abandono, pérdida de ingresos y oportunidades que no vuelven."
    card1:
        title: "Retención que nunca empieza"
        subtitle: "La retención no se diseña al final: empieza en las primeras interacciones"
        description: "Sin una experiencia que muestre valor rápido, la retención ni siquiera comienza. Los usuarios que completan un buen onboarding son 3× más propensos a seguir activos a los 90 días."
    card2:
        title: "Abandono evitable"
        subtitle: "La mayoría se va antes de descubrir el valor real del producto."
        description: "El 75 % de los nuevos usuarios se va en la primera semana si no obtiene orientación o resultados rápidos. Fricción, pasos innecesarios o mensajes confusos destruyen activación."
    card3:
        title: "Sin adopción interna ni expansión"
        subtitle: "Cuando los usuarios no entienden cómo usarlo, tampoco lo recomiendan."
        description: "Un onboarding deficiente frena activación y bloquea crecimiento. El 80 % de los clientes B2B afirma que su experiencia inicial influye en si recomendarán o ampliarán el uso del producto."
    card4:
        title: "Crecimiento en riesgo"
        subtitle: "El onboarding no es un costo: es la base del crecimiento."
        description: "Las empresas que invierten en un buen onboarding aumentan en promedio un 34 % el LTV. Sin activación ni adopción efectiva, el crecimiento se estanca y la inversión en adquisición no se recupera."

en:
    title: "Poor onboarding can ruin even the best product"
    subtitle: "When users don’t understand the value from their first interaction, growth stops. Every point of friction in onboarding turns into abandonment, lost revenue, and missed opportunities."
    card1:
        title: "Retention that never starts"
        subtitle: "Retention isn’t designed at the end — it begins in the first interactions."
        description: "Without an experience that delivers quick value, retention never starts. Users who complete a good onboarding are 3× more likely to remain active after 90 days."
    card2:
        title: "Avoidable churn"
        subtitle: "Most users leave before discovering the real value of the product."
        description: "75% of new users churn within the first week if they don’t get guidance or quick results. Friction, unnecessary steps, or unclear messaging destroy activation."
    card3:
        title: "No internal adoption or expansion"
        subtitle: "When users don’t understand how to use it, they don’t recommend it either."
        description: "Poor onboarding slows activation and blocks growth. 80% of B2B customers say their initial experience influences whether they’ll recommend or expand product usage."
    card4:
        title: "Growth at risk"
        subtitle: "Onboarding isn’t a cost — it’s the foundation of growth."
        description: "Companies that invest in proper onboarding increase LTV by an average of 34%. Without activation or effective adoption, growth stalls and acquisition investments are never recovered."
</i18n>
