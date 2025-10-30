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
                    class="flex flex-wrap items-center justify-between lg:justify-center gap-8 lg:gap-12 xl:gap-12 w-full"
                >
                    <TrustedIcon
                        logo-path="/images/trusted/logo-luro.svg"
                        alt-text="Luro"
                        class="h-8 lg:h-9"
                    />

                    <TrustedIcon
                        logo-path="/images/trusted/logo-pylon.svg"
                        alt-text=""
                        class="h-8 lg:h-9"
                    />
                    <TrustedIcon
                        logo-path="/images/trusted/logo-hoxhunt.svg"
                        alt-text=""
                        class="h-8 lg:h-9"
                    />
                    <TrustedIcon
                        logo-path="/images/trusted/logo-lemlist.svg"
                        alt-text=""
                        class="h-8 lg:h-10"
                    />
                    <TrustedIcon
                        logo-path="/images/trusted/logo-delend.svg"
                        alt-text=""
                        class="h-7 lg:h-8"
                    />
                    <TrustedIcon
                        logo-path="/images/trusted/logo-frontegg.svg"
                        alt-text=""
                        class="h-7 lg:h-9"
                    />
                    <TrustedIcon
                        logo-path="/images/trusted/logo-klue.svg"
                        alt-text=""
                        class="h-7 lg:h-7"
                    />
                    <TrustedIcon
                        logo-path="/images/trusted/logo-eunoia.svg"
                        alt-text="Eunoia Care"
                        class="h-8 lg:h-10"
                    />

                    <TrustedIcon
                        logo-path="/images/trusted/logo-carbonwatcher.svg"
                        alt-text="Carbon Watcher"
                        class="h-10 lg:h-10"
                    />

                    <TrustedIcon
                        logo-path="/images/trusted/logo-aiven.svg"
                        alt-text=""
                        class="h-8 lg:h-10"
                    />
                    <TrustedIcon
                        logo-path="/images/trusted/logo-kenjo.svg"
                        alt-text=""
                        class="h-8 lg:h-10"
                    />
                    <TrustedIcon
                        logo-path="/images/trusted/logo-archetify.svg"
                        alt-text="Archetify"
                        class="h-10"
                    />
                    <!-- <TrustedIcon
                        logoPath="/trusted/logo-hsbc.svg"
                        altText="HSBC"  
                    /> -->

                    <!-- <TrustedIcon
                        logo-path="/images/trusted/logo-cenital.svg"
                        alt-text="Cenital"
                        class="h-7 lg:h-8"
                    />
                    <TrustedIcon
                        logo-path="/images/trusted/logo-tna.svg"
                        alt-text="TNA"
                        class="h-4 lg:h-5"
                    />
                    <TrustedIcon
                        logo-path="/images/trusted/logo-quilmes.svg"
                        alt-text="Quilmes"
                        class="h-10 lg:h-10"
                    /> -->
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
    title: "Más de 20 empresas SaaS confían en nosotros"

en:
    title: "Trusted by 20+ SaaS Companies Worldwide"
</i18n>
