<template>
    <div class="bg-zinc-950 text-zinc-100">
        <AboutHero />
        <AboutHowItAllStarted id="howItAllStarted" />
        <AboutOurMission />
        <AboutOurApproach />
        <AppTrustedBy />
        <!-- <AppContactForm id="contact" /> -->
    </div>
</template>

<script setup lang="ts">
useHead({
    title: computed(
        () => "About Us | Evolutionary & Contextual Software Engineering"
    ),
});
</script>
