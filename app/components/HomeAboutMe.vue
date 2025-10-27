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
    title: "Cómo empecé"
    subtitle: "La historia detrás de mi enfoque en el onboarding"
    story:
        paragraph1: "Después de más de 20 años diseñando y desarrollando productos digitales, descubrí un patrón que se repetía una y otra vez: productos bien construidos que fallaban no por su tecnología, sino porque los usuarios no entendían cómo empezar a usarlos."
        paragraph2: "Ahí comprendí que el verdadero problema no era técnico, sino experiencial. Las empresas invertían grandes recursos en adquirir usuarios, pero no en ayudarlos a alcanzar valor desde el primer uso. Y sin activación, no hay retención ni crecimiento."
        paragraph3: "Desde entonces, enfoqué mi trabajo en resolver ese primer gran momento: el onboarding. Combino UX, estrategia product-led y analítica para diseñar experiencias de incorporación que eliminan fricción, comunican valor y fortalecen la relación entre producto y usuario."
        paragraph4: "Hoy ayudo a startups y empresas SaaS B2B y B2C a mejorar su activación, retención y expansión mediante procesos de onboarding más claros, medibles y humanos."
    founder:
        name: "Lucas Semelin"
        title: "Especialista en UX Onboarding para SaaS"
        imageAlt: "Lucas Semelin, Especialista en UX Onboarding para SaaS"

en:
    title: "How I Started"
    subtitle: "The story behind my approach to onboarding"
    story:
        paragraph1: "After more than 20 years designing and developing digital products, I noticed a recurring pattern: great products that failed not because of their technology, but because users didn’t understand how to start using them."
        paragraph2: "That’s when I realized the real problem wasn’t technical, it was experiential. Companies were investing heavily in acquisition, but not in helping users reach value fast. And without activation, there’s no retention or growth."
        paragraph3: "Since then, I’ve focused my work on improving that crucial first moment, onboarding. I combine UX, product-led strategy, and analytics to design onboarding experiences that remove friction, communicate value, and strengthen the connection between product and user."
        paragraph4: "Today, I help B2B and B2C SaaS companies improve activation, retention, and expansion through clearer, data-driven, and more human onboarding processes."
    founder:
        name: "Lucas Semelin"
        title: "UX Onboarding Specialist for SaaS"
        imageAlt: "Lucas Semelin, UX Onboarding Specialist for SaaS"
</i18n>
