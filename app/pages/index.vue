<template>
    <div class="bg-background text-grey-100 select-none">
        <HomeHero />
        <AppTrustedBy />
        <HomeSolutions id="solutions" />
        <HomeUseCases id="use-cases" />
        <HomeProcess id="approach" />
        <HomeWhoWeWorkFor />
        <HomeWhyUs />
        <HomePortfolio id="portfolio" />
        <HomeTestimonials />
        <AppContactForm id="contact" />
    </div>
</template>

<script setup>
const { t } = useI18n({
    useScope: "local",
});

// Dynamic title based on locale
useHead({
    title: computed(
        () =>
            "Myntropic Studio | Engineering Evolution: Digital Systems that Learn, Collaborate, and Grow"
    ),
});
</script>

<i18n lang="yaml">
es:
    seo:
        title: "Myntropic Studio | Ingeniería de la Evolución: Sistemas Digitales que Aprenden, Colaboran y Crecen"

en:
    seo:
        title: "Myntropic Studio | Engineering Evolution: Digital Systems that Learn, Collaborate, and Grow"
</i18n>
