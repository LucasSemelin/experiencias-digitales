<template>
    <div class="bg-zinc-950 text-zinc-100">
        <HomeHero />
        <!-- Phrase Section -->
        <HomePhrase />
        <AppTrustedBy />
        <HomeSolutions id="solutions" />
        <HomeUseCases id="use-cases" />
        <HomeProcess id="approach" />
        <HomeWhoWeWorkFor />
        <HomeWhyUs />
        <!-- <HomePortfolio id="portfolio" /> -->
        <HomeTestimonials />
        <!-- <AppContactForm id="contact" /> -->
    </div>
</template>

<script setup>
// Dynamic title based on locale
useHead({
    title: computed(
        () =>
            "Evolutionary & Contextual Engineering Consulting for Intelligent Systems"
    ),
});
</script>

<i18n lang="yaml">
es:
    seo:
        title: "Evolutionary & Contextual Engineering Consulting for Intelligent Systems"

en:
    seo:
        title: "Evolutionary & Contextual Engineering Consulting for Intelligent Systems"
</i18n>
