<template>
    <div class="bg-background text-grey-100">
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
    title: computed(() => "Myntropic Studio | Software & Context Engineering"),
});
</script>

<i18n lang="yaml">
es:
    seo:
        title: "Myntropic Studio | Software & Context Engineering"

en:
    seo:
        title: "Myntropic Studio | Software & Context Engineering"
</i18n>
