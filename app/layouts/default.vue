<template>
    <div class="bg-background min-h-screen">
        <AppHeader />
        <main id="main">
            <slot />
        </main>
        <!-- Location & Time Zone -->
        <section class="py-8 px-4 lg:px-8">
            <div class="max-w-2xl mx-auto text-center">
                <div class="bg-slate-800/50 rounded-2xl p-6">
                    <p class="text-slate-300 text-base font-body">
                        {{ t("basedin") }}
                        <span class="text-white font-semibold"
                            >Buenos Aires, Argentina</span
                        >
                    </p>
                    <p class="text-slate-300 text-base font-body">
                        {{ t("workingwith") }}
                    </p>
                </div>
            </div>
        </section>
        <AppCookiesConsent />
    </div>
</template>

<script setup>
const { t } = useI18n({
    useScope: "local",
});
</script>

<i18n lang="yaml">
es:
    basedin: "Desde "
    workingwith: creando experiencias inteligentes para empresas globales.

en:
    basedin: "Based in "
    workingwith: We deliver digital solutions for global clients
</i18n>
