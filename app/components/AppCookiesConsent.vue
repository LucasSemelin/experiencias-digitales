<template>
    <div
        v-if="showConsent"
        class="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-sm sm:w-auto bg-grey-900/80 backdrop-blur-md border border-grey-700 rounded-xl p-6 z-50"
    >
        <div class="mb-4">
            <h3 class="text-grey-100 font-title font-semibold text-lg mb-2">
                {{ t("title") }}
            </h3>
            <p class="text-grey-300 text-sm leading-relaxed">
                {{ t("content.text") }}
                <NuxtLink
                    to="/cookie-policy"
                    class="text-primary hover:text-white transition-colors duration-200 underline"
                >
                    {{ t("content.link") }} </NuxtLink
                >{{ t("content.suffix") }}
            </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
            <AppButton @click="acceptCookies"> {{ t("accept") }} </AppButton>
            <button
                class="px-4 py-2 border border-grey-600 text-grey-100 text-sm font-semibold rounded-lg hover:bg-grey-700 transition-all duration-300"
                @click="declineCookies"
            >
                {{ t("decline") }}
            </button>
        </div>
    </div>
</template>

<script setup>
const showConsent = ref(false);

onMounted(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
        // Show consent banner after a short delay
        setTimeout(() => {
            showConsent.value = true;
        }, 1000);
    }
});

function acceptCookies() {
    localStorage.setItem("cookieConsent", "accepted");
    showConsent.value = false;
}

function declineCookies() {
    localStorage.setItem("cookieConsent", "declined");
    showConsent.value = false;
}

const { t } = useI18n({
    useScope: "local",
});
</script>

<i18n lang="yaml">
es:
    title: Consentimiento de Cookies
    content:
        text: 'Usamos cookies para mejorar tu experiencia, analizar el tráfico y optimizar el rendimiento del sitio. Al hacer clic en "Aceptar", consentís el uso de cookies según nuestra '
        link: "Política de Cookies"
        suffix: "."
    accept: "Aceptar todas"
    decline: "Rechazar"
en:
    title: Cookie Consent
    content:
        text: 'We use cookies to improve your experience, analyze traffic, and optimize site performance. By clicking "Accept", you agree to the use of cookies as described in our '
        link: "Cookie Policy"
        suffix: "."
    accept: "Accept all"
    decline: "Decline"
</i18n>
