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
    title: "La historia detrás de Experiencias Digitales"
    subtitle: "Por qué decidí enfocar mi trabajo en la experiencia y el crecimiento product-led"
    story:
        paragraph1: "Durante más de dos décadas diseñé y desarrollé productos digitales para startups, empresas tecnológicas y organizaciones. Con el tiempo fui descubriendo que la experiencia de usuario no era un complemento del producto: era su núcleo. Sin una buena experiencia, incluso las mejores ideas se estancaban."
        paragraph2: "Después de colaborar en el diseño de varios SaaS, noté un patrón constante: los founders tenían visión y producto, pero no un rumbo claro para hacerlo crecer. Fue entonces cuando comencé a profundizar en estrategia product-led y a entender cómo el diseño puede ser una palanca real de crecimiento."
        paragraph3: "Combinar UX design con estrategia product-led me permitió ver el impacto de una experiencia bien diseñada no solo en la satisfacción del usuario, sino también en las métricas del negocio. Esa conexión entre diseño, estrategia y crecimiento fue el origen de Experiencias Digitales."
        paragraph4: "Hoy, desde el estudio, ayudamos a empresas SaaS B2B y B2C a mejorar activación, retención y expansión, diseñando experiencias que no solo eliminan fricción, sino que convierten cada interacción en una oportunidad de crecimiento sostenible."
    founder:
        name: "Lucas Semelin"
        title: "Fundador y Director de Experiencias Digitales"
        imageAlt: "Lucas Semelin, Fundador y Director de Experiencias Digitales"

en:
    title: "The Story Behind Experiencias Digitales"
    subtitle: "Why I chose to focus my work on experience and product-led growth"
    story:
        paragraph1: "For over two decades, I’ve been designing and developing digital products for startups, tech companies, and organizations. Over time, I realized that user experience wasn’t just a layer of the product—it was its core. Without a strong experience, even great ideas fail to grow."
        paragraph2: "After working on several SaaS products, I noticed a recurring challenge: founders had vision and product, but lacked a clear direction to scale. That’s when I started studying product-led strategy and saw how design could drive growth, not just usability."
        paragraph3: "Combining UX design with product-led strategy revealed how experience can directly influence both user satisfaction and business metrics. That connection between design, strategy, and growth inspired the creation of Experiencias Digitales."
        paragraph4: "Today, through the studio, we help B2B and B2C SaaS companies improve activation, retention, and expansion—designing experiences that remove friction and turn every interaction into an opportunity for sustainable growth."
    founder:
        name: "Lucas Semelin"
        title: "Founder & Director at Experiencias Digitales"
        imageAlt: "Lucas Semelin, Founder & Director at Experiencias Digitales"
</i18n>
