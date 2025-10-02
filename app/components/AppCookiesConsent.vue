<template>
    <div
        v-if="showConsent"
        class="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-sm sm:w-auto bg-dark/80 backdrop-blur-md border border-gray-700 rounded-xl p-6 z-50"
    >
        <div class="mb-4">
            <h3 class="text-white font-title font-semibold text-lg mb-2">
                {{ t("title") }}
            </h3>
            <p class="text-slate-300 text-sm leading-relaxed">
                {{ t("content") }}
            </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
            <AppButton @click="acceptCookies"> {{ t("accept") }} </AppButton>
            <button
                @click="declineCookies"
                class="px-4 py-2 border border-gray-600 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300"
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
    content: Uso cookies para mejorar tu experiencia de navegación y analizar mi
        tráfico. Al hacer clic en "Aceptar", das tu consentimiento para el uso de
        cookies.
    accept: Aceptar
    decline: Rechazar
en:
    title: Cookie Consent
    content: I use cookies to enhance your browsing experience and analyze my
        traffic. By clicking "Accept", you consent to my use of cookies.
    accept: Accept
    decline: Decline
</i18n>
