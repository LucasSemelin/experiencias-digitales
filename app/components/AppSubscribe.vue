<template>
    <div
        class="w-full max-w-2xl mx-auto rounded-4xl p-6 mt-8 flex flex-col items-center"
    >
        <h2 class="font-title text-2xl text-white mb-2 text-center">
            {{ t("title") }}
        </h2>
        <p class="text-zinc-300 text-base font-body mb-4 text-center">
            {{ t("subtitle") }}
        </p>
        <form
            @submit.prevent="subscribe"
            class="w-full flex flex-col gap-4 items-center"
        >
            <input
                id="subscribe-email"
                v-model="email"
                type="email"
                autocomplete="email"
                class="block w-full rounded-xl border border-zinc-700/50 bg-zinc-800/30 text-white focus:ring-4 focus:ring-primary focus:outline-none sm:text-sm p-4"
                :placeholder="t('placeholder')"
                required
                :disabled="loading || success"
            />
            <AppButton :disabled="loading || success" class="w-full lg:w-fit">
                <span v-if="!loading && !success">{{ t("button") }}</span>
                <span v-else-if="loading">{{ t("loading") }}</span>
                <span v-else>{{ t("success") }}</span>
            </AppButton>
        </form>
        <p v-if="error" class="text-red-400 text-sm mt-2">{{ t("error") }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "local" });
const email = ref("");
const loading = ref(false);
const success = ref(false);
const error = ref("");

async function subscribe() {
    if (!email.value) return;
    loading.value = true;
    error.value = "";
    try {
        await $fetch("/api/subscribe", {
            method: "POST",
            body: new URLSearchParams({ email: email.value }),
        });
        success.value = true;
        setTimeout(() => {
            email.value = "";
            success.value = false;
        }, 5000);
    } catch {
        error.value = t("error");
    } finally {
        loading.value = false;
    }
}
</script>

<i18n lang="yaml">
es:
    title: Suscribite a nuestro newsletter
    subtitle: Recibí novedades y recursos de ingeniería contextual y evolutiva.
    placeholder: Tu email
    button: Suscribirme
    loading: Enviando...
    success: ¡Gracias por suscribirte!
    error: Ocurrió un error. Intentá de nuevo.
en:
    title: Subscribe to our newsletter
    subtitle: Get updates and resources on contextual & evolutionary engineering.
    placeholder: Your email
    button: Subscribe
    loading: Sending...
    success: Thank you for subscribing!
    error: Something went wrong. Please try again.
</i18n>
