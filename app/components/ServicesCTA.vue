<template>
    <section class="w-full py-16 lg:py-24 bg-zinc-950">
        <div class="max-w-7xl mx-auto px-4 lg:px-16">
            <!-- Connected Services Section -->
            <div class="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
                <h2
                    class="font-title font-normal text-2xl lg:text-3xl xl:text-4xl text-white leading-tight mb-6 lg:mb-8"
                >
                    {{ t("connected.title") }}
                </h2>
                <p
                    class="font-open-sans text-zinc-400 text-base lg:text-lg xl:text-xl leading-relaxed mb-6"
                >
                    {{ t("connected.description1") }}
                </p>
                <p
                    class="font-open-sans text-zinc-300 text-base lg:text-lg xl:text-xl leading-relaxed"
                >
                    {{ t("connected.description2") }}
                </p>
            </div>

            <!-- Final CTA Section -->
            <div
                class="bg-zinc-900/50 rounded-2xl lg:rounded-3xl p-8 lg:p-12 xl:p-16 border border-zinc-800"
            >
                <div class="max-w-4xl mx-auto text-center">
                    <!-- CTA Heading -->
                    <h3
                        class="font-title font-normal text-2xl lg:text-3xl xl:text-4xl text-white leading-tight mb-6 lg:mb-8"
                    >
                        {{ t("cta.heading") }}
                    </h3>

                    <!-- CTA Description -->
                    <p
                        class="font-open-sans text-zinc-400 text-base lg:text-lg xl:text-xl leading-relaxed mb-8 lg:mb-12"
                    >
                        {{ t("cta.description") }}
                    </p>

                    <!-- CTA Buttons -->
                    <div
                        class="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center"
                    >
                        <!-- Primary CTA -->
                        <AppButton destination="/solutions">
                            {{ t("cta.main") }}
                        </AppButton>

                        <!-- Secondary CTA -->
                        <NuxtLink
                            to="/contact"
                            class="inline-flex items-center text-zinc-300 text-sm lg:text-base hover:text-primary transition-colors duration-300 group"
                        >
                            {{ t("cta.secondary") }}
                            <svg
                                class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import AppButton from "./AppButton.vue";

const { t } = useI18n({
    useScope: "local",
});
</script>

<style scoped>
.font-open-sans {
    font-family: "Open Sans", sans-serif;
}

.font-title {
    font-family: "Electrolize", sans-serif;
}
</style>

<i18n lang="yaml">
es:
    connected:
        title: "Servicios Conectados, Un Marco Evolutivo"
        description1: "Cada servicio refuerza a los otros."
        description2: "La ingeniería proporciona estructura, el contexto da propósito, el diseño asegura usabilidad, y la consultoría guía la evolución. Juntos, forman un marco cohesivo para construir sistemas que aprenden, se adaptan y crecen."
    cta:
        heading: "Diseñemos Sistemas Que Evolucionen Contigo"
        description: "Ayudamos a las organizaciones a convertir la complejidad en adaptabilidad a través del diseño, la ingeniería y la inteligencia. Si tu software necesita evolucionar, podemos hacerlo realidad — de manera sostenible."
        main: "Explora Nuestras Soluciones"
        secondary: "Habla con Nuestro Equipo"

en:
    connected:
        title: "Connected Services, One Evolutionary Framework"
        description1: "Each service reinforces the others."
        description2: "Engineering provides structure, context gives purpose, design ensures usability, and consulting guides evolution. Together, they form a cohesive framework for building systems that learn, adapt, and grow."
    cta:
        heading: "Let's Design Systems That Evolve With You"
        description: "We help organizations turn complexity into adaptability through design, engineering, and intelligence. If your software needs to evolve, we can make it happen — sustainably."
        main: "Explore Our Solutions"
        secondary: "Talk to Our Team"
</i18n>
