<template>
    <section class="py-16 lg:py-24">
        <div class="max-w-7xl mx-auto px-4 lg:px-16">
            <!-- Section Header -->
            <div class="text-center lg:mb-16">
                <AppH2>{{ t("title") }}</AppH2>
                <AppSectionSubtitle>{{ t("subtitle") }}</AppSectionSubtitle>
            </div>

            <!-- Mission Content -->
            <div class="max-w-4xl mx-auto">
                <div class="lg:text-center mb-12">
                    <p
                        class="text-lg lg:text-3xl font-light text-white leading-relaxed"
                    >
                        {{ t("mission.statement") }}
                    </p>
                </div>

                <!-- Core Values Grid -->
                <div class="grid md:grid-cols-3 gap-8 lg:gap-12 mt-16">
                    <div class="lg:text-center flex flex-col lg:items-center">
                        <AppH3 class="mb-4 w-full">{{
                            t("values.title1")
                        }}</AppH3>
                        <p class="text-zinc-300 leading-relaxed">
                            {{ t("values.description1") }}
                        </p>
                    </div>
                    <div class="lg:text-center flex flex-col lg:items-center">
                        <AppH3 class="mb-4">{{ t("values.title2") }}</AppH3>
                        <p class="text-zinc-300 leading-relaxed">
                            {{ t("values.description2") }}
                        </p>
                    </div>
                    <div class="lg:text-center flex flex-col lg:items-center">
                        <AppH3 class="mb-4">{{ t("values.title3") }}</AppH3>
                        <p class="text-zinc-300 leading-relaxed">
                            {{ t("values.description3") }}
                        </p>
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
    title: Nuestra Misión
    subtitle: Lo que nos impulsa cada día
    mission:
        statement: "Transformar la forma en que las empresas piensan sobre la tecnología, creando sistemas que no solo resuelvan problemas actuales, sino que evolucionen para enfrentar desafíos futuros."
    values:
        title1: Evolución
        description1: "Creemos que el software debe crecer y adaptarse junto con tu negocio, no limitarlo."
        title2: Contexto
        description2: "Cada solución debe entender profundamente el entorno en el que opera."
        title3: Innovación
        description3: "Combinamos tecnologías emergentes con principios sólidos de ingeniería."
en:
    title: Our Mission
    subtitle: What drives us every day
    mission:
        statement: "To transform the way companies think about technology, creating systems that not only solve current problems, but evolve to face future challenges."
    values:
        title1: Evolution
        description1: "We believe software should grow and adapt alongside your business, not limit it."
        title2: Context
        description2: "Every solution must deeply understand the environment in which it operates."
        title3: Innovation
        description3: "We combine emerging technologies with solid engineering principles."
</i18n>
