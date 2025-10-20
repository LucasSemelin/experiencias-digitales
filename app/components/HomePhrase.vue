<template>
    <section class="w-full py-16 lg:py-24 bg-zinc-950">
        <div class="max-w-7xl mx-auto px-4 lg:px-16">
            <div class="max-w-4xl mx-auto text-left lg:text-center">
                <p
                    class="font-open-sans text-zinc-400 text-base lg:text-xl leading-relaxed mb-8 text-left"
                >
                    {{ t("mission") }}
                </p>
                <p
                    class="font-open-sans text-white text-lg lg:text-xl xl:text-3xl leading-relaxed lg:text-right"
                >
                    {{ t("mission2") }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n({
    useScope: "local",
});
</script>

<style scoped>
.font-open-sans {
    font-family: "Open Sans", sans-serif;
}
</style>

<i18n lang="yaml">
es:
    mission: Tu software debería evolucionar con tu negocio, pero no lo hace. Las herramientas en las que confías no se ajustan a tus procesos reales, la IA falla porque no entiende tu contexto, y los sistemas heredados aún funcionan pero no pueden adaptarse al cambio. Puede que carezcas de la capacidad técnica para evolucionar tus plataformas, dependas de operaciones manuales que no escalan, o hayas probado varias soluciones que nunca encajan realmente. Y aunque necesitas innovación real, comprometerte con una reconstrucción masiva y costosa no es una opción.
    mission2: Lo que necesitas no es otra reconstrucción, sino innovación e inteligencia que se adapten a tu negocio, no al revés.

en:
    mission: Your software should evolve with your business, but it doesn’t. The tools you use don’t fit real processes, AI fails because it lacks context, and legacy systems can’t keep up with change. You’ve tried improving things, but nothing truly adapts. And committing to a massive, high-cost rebuild just isn’t an option.
    mission2: What you need isn’t another rebuild, it’s innovation and intelligence that adapt to your business, not the other way around.
</i18n>
