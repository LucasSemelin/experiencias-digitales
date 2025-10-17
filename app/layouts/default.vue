<template>
    <div class="bg-zinc-950 min-h-screen">
        <AppHeader />
        <main id="main">
            <slot />
        </main>
        <!-- Location & Time Zone -->
        <footer class="py-8 px-4 lg:px-8">
            <div class="max-w-2xl mx-auto text-center">
                <div class="bg-gray-800 rounded-4xl p-6">
                    <p class="text-slate-300 text-base font-body">
                        {{ t("basedin") }}
                        <span class="text-white font-semibold"
                            >Buenos Aires, Argentina</span
                        >
                    </p>
                    <p class="text-slate-300 text-base font-body">
                        {{ t("workingwith") }}
                    </p>
                    <div class="max-w-2xl mx-auto text-center mt-4">
                        <div
                            class="flex justify-center items-center gap-6 text-sm"
                        >
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
                </div>
                <div class="mt-4">
                    <p class="text-xs text-gray-400">
                        {{ t("footer.copyright") }}
                    </p>
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
    bodyAttrs: {
        class: "bg-zinc-950",
    },
    htmlAttrs: {
        class: "bg-zinc-950",
    },
});
</script>

<i18n lang="yaml">
es:
    basedin: "Desde "
    workingwith: creando experiencias inteligentes para empresas globales.
    footer:
        cookiePolicy: "Política de Cookies"
        privacyPolicy: "Política de Privacidad"
        copyright: "© 2025 Myntropic Studio. Todos los derechos reservados."

en:
    basedin: "Based in "
    workingwith: We deliver digital solutions for global clients
    footer:
        cookiePolicy: "Cookie Policy"
        privacyPolicy: "Privacy Policy"
        copyright: "© 2025 Myntropic Studio. All rights reserved."
</i18n>

<style>
/* Prevenir el fondo blanco en el rebote del scroll */
html {
    background-color: rgb(9, 9, 11); /* zinc-950 */
    overflow-x: hidden;
}

body {
    background-color: rgb(9, 9, 11); /* zinc-950 */
    overflow-x: hidden;
}

/* Prevenir el rebote en iOS Safari */
body {
    overscroll-behavior: none;
}

/* Alternativa para navegadores que soportan CSS custom properties */
:root {
    --background-color: rgb(9, 9, 11);
}

html,
body {
    background: var(--background-color);
}
</style>
