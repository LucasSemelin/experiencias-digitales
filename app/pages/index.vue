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
        <!-- <HomeWhyUs id="AboutMe" /> -->
        <!-- <HomePortfolio id="portfolio" /> -->
        <HomeAboutMe id="AboutUs" />
        <!-- <HomeTestimonials /> -->
        <AppContactForm id="ContactUs" />
    </div>
</template>

<script setup>
// Dynamic title based on locale
useHead({
    title: computed(() => "UX Strategy & Product-Led Design for SaaS Growth"),
});
</script>

<i18n lang="yaml">
es:
    seo:
        title: "UX Strategy & Product-Led Design for SaaS Growth"

en:
    seo:
        title: "UX Strategy & Product-Led Design for SaaS Growth"
</i18n>
