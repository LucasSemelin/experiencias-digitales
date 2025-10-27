<template>
    <div class="bg-zinc-950 text-zinc-100">
        <HomeHero />
        <!-- Problems Section -->
        <AppTrustedBy />
        <HomeProblems id="Problems" />
        <!-- <HomePhrase /> -->
        <HomeSolutions id="Services" />
        <HomeProcess id="Process" />
        <!-- <HomeWhoWeWorkFor /> -->
        <HomeWhyUs id="AboutMe" />
        <!-- <HomePortfolio id="portfolio" /> -->
        <HomeAboutMe />
        <HomeTestimonials />
        <AppContactForm id="ContactMe" />
    </div>
</template>

<script setup>
// Dynamic title based on locale
useHead({
    title: computed(() => "UX Onboarding Specialist for SaaS"),
});
</script>

<i18n lang="yaml">
es:
    seo:
        title: "UX Onboarding Specialist for SaaS"

en:
    seo:
        title: "UX Onboarding Specialist for SaaS"
</i18n>
