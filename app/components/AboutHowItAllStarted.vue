<template>
    <section class="py-16 lg:py-24 bg-zinc-950">
        <div class="max-w-7xl mx-auto px-4 lg:px-16">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <AppH2>{{ t("title") }}</AppH2>
                <AppSectionSubtitle>{{ t("subtitle") }}</AppSectionSubtitle>
            </div>

            <!-- Content Grid -->
            <div class="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                <!-- Text Content -->
                <div class="order-2 lg:order-2 lg:col-span-2">
                    <div class="space-y-6">
                        <p class="text-lg text-zinc-300 leading-relaxed">
                            {{ t("story.paragraph1") }}
                        </p>
                        <p class="text-lg text-zinc-300 leading-relaxed">
                            {{ t("story.paragraph2") }}
                        </p>
                        <p class="text-lg text-zinc-300 leading-relaxed">
                            {{ t("story.paragraph3") }}
                        </p>
                        <p class="text-lg text-zinc-300 leading-relaxed">
                            {{ t("story.paragraph4") }}
                        </p>
                    </div>

                    <!-- Founder Info -->
                    <div class="mt-8 pt-8 border-t border-zinc-700">
                        <div class="flex items-center gap-4">
                            <div>
                                <h4 class="text-xl font-semibold text-white">
                                    {{ t("founder.name") }}
                                </h4>
                                <p class="text-primary font-medium">
                                    {{ t("founder.title") }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Image -->
                <div class="order-1 lg:order-1 lg:col-span-1">
                    <div class="relative">
                        <img
                            src="/images/page-about/ceo-myntropic.jpg"
                            :alt="t('founder.imageAlt')"
                            class="max-h-[480px] rounded-3xl"
                        />
                        <!-- <div
                            class="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"
                        /> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n({
    useScope: "local",
});
</script>

<i18n lang="yaml">
es:
    title: Cómo empezó todo
    subtitle: La visión que dio origen a Myntropic
    story:
        paragraph1: "Todo comenzó con una simple observación: la mayoría de los sistemas de software se vuelven obsoletos antes de alcanzar su potencial real. Las empresas invierten enormes recursos en tecnología que funciona perfectamente al momento del lanzamiento, pero que rápidamente se convierte en una limitación para el crecimiento."
        paragraph2: "Después de años trabajando en proyectos que seguían este patrón frustrante, decidimos que tenía que haber una mejor manera. No podíamos seguir construyendo sistemas que fueran inflexibles por diseño, que requirieran reconstrucciones completas cada vez que el negocio evolucionaba."
        paragraph3: "Fue entonces cuando desarrollamos nuestra filosofía de Ingeniería de Software Evolutiva y Contextual. En lugar de crear software que simplemente funciona, nos enfocamos en crear sistemas que aprenden, se adaptan y mejoran continuamente."
        paragraph4: "Myntropic nació de esta visión: un futuro donde la tecnología no limite el crecimiento, sino que lo acelere. Donde los sistemas de software evolucionen junto con tu negocio, entendiendo el contexto y adaptándose a las necesidades cambiantes."
    founder:
        name: Lucas Semelin
        title: Fundador y CEO
        imageAlt: Lucas Semelin, Fundador y CEO de Myntropic
en:
    title: How it all started
    subtitle: The vision that gave birth to Myntropic
    story:
        paragraph1: "It all started with a simple observation: most software systems become obsolete before reaching their real potential. Companies invest enormous resources in technology that works perfectly at launch, but quickly becomes a limitation for growth."
        paragraph2: "After years working on projects that followed this frustrating pattern, we decided there had to be a better way. We couldn't keep building systems that were inflexible by design, that required complete rebuilds every time the business evolved."
        paragraph3: "That's when we developed our philosophy of Evolutionary and Contextual Software Engineering. Instead of creating software that simply works, we focus on creating systems that learn, adapt, and continuously improve."
        paragraph4: "Myntropic was born from this vision: a future where technology doesn't limit growth, but accelerates it. Where software systems evolve alongside your business, understanding context and adapting to changing needs."
    founder:
        name: Lucas Semelin
        title: Founder & CEO
        imageAlt: Lucas Semelin, Founder and CEO of Myntropic
</i18n>
