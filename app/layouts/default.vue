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

        <!-- Footer Links -->
        <footer class="pb-8 px-4 lg:px-8">
            <div class="max-w-2xl mx-auto text-center">
                <div class="flex justify-center items-center gap-6 text-sm">
                    <NuxtLink
                        to="/cookie-policy"
                        class="text-grey-400 hover:text-primary transition-colors duration-200"
                    >
                        {{ t("footer.cookiePolicy") }}
                    </NuxtLink>
                    <span class="text-grey-600">•</span>
                    <NuxtLink
                        to="/privacy-policy"
                        class="text-grey-400 hover:text-primary transition-colors duration-200"
                    >
                        {{ t("footer.privacyPolicy") }}
                    </NuxtLink>
                </div>
            </div>
        </footer>

        <AppCookiesConsent />
    </div>
</template>

<script setup>
const { t } = useI18n({
    useScope: "local",
});

// Dynamic title based on locale
useHead({
    title: computed(() => t("seo.title")),
});
</script>

<i18n lang="yaml">
es:
    basedin: "Desde "
    workingwith: creando experiencias inteligentes para empresas globales.
    footer:
        cookiePolicy: "Política de Cookies"
        privacyPolicy: "Política de Privacidad"

en:
    basedin: "Based in "
    workingwith: We deliver digital solutions for global clients
    footer:
        cookiePolicy: "Cookie Policy"
        privacyPolicy: "Privacy Policy"
</i18n>
