<script setup>
const { t } = useI18n({ useScope: "local" });
</script>

<template>
    <section class="py-16 px-4 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col items-center gap-8">
                <!-- Title -->
                <AppH2>
                    {{ t("title") }}
                </AppH2>

                <!-- Company Logos -->
                <div
                    class="flex flex-wrap items-center justify-center gap-8 lg:gap-12 xl:gap-12 w-full"
                >
                    <TrustedIcon
                        logo-path="/trusted/logo-eunoia.svg"
                        alt-text="Eunoia Care"
                        class="h-8 lg:h-10"
                    />

                    <TrustedIcon
                        logo-path="/trusted/logo-carbonwatcher.svg"
                        alt-text="Carbon Watcher"
                        class="h-12 lg:h-10"
                    />
                    <TrustedIcon
                        logo-path="/trusted/logo-archetify.svg"
                        alt-text="Archetify"
                        class="h-8 lg:h-10"
                    />
                    <!-- <TrustedIcon
                        logoPath="/trusted/logo-hsbc.svg"
                        altText="HSBC"  
                    /> -->

                    <TrustedIcon
                        logo-path="/trusted/logo-cenital.svg"
                        alt-text="Cenital"
                        class="h-6 lg:h-8"
                    />
                    <TrustedIcon
                        logo-path="/trusted/logo-tna.svg"
                        alt-text="TNA"
                        class="h-5 lg:h-5"
                    />
                    <TrustedIcon
                        logo-path="/trusted/logo-quilmes.svg"
                        alt-text="Quilmes"
                        class="h-10 lg:h-10"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Enhanced responsive design */
@media (max-width: 640px) {
    h2 {
        font-size: 1.5rem; /* text-2xl equivalent */
        line-height: 1.4;
    }

    /* Smaller gaps on mobile */
    .logo-container {
        gap: 1.5rem; /* 24px */
    }
}

@media (min-width: 641px) and (max-width: 1024px) {
    h2 {
        font-size: 1.875rem; /* text-3xl equivalent */
    }
}

/* Smooth hover transitions for logos */
img {
    transition: opacity 0.3s ease-in-out;
}

/* Ensure proper alignment */
.logo-container {
    align-items: center;
    justify-content: center;
}
</style>

<i18n lang="yaml">
es:
    title: "Trabajamos junto a empresas que innovan"

en:
    title: "We work with innovative companies"
</i18n>
