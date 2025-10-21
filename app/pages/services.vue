<template>
    <div class="bg-zinc-950 text-zinc-100">
        <ServicesHero />
        <ServicesOverview />
        <ServicesServices id="services/" />
        <ServicesCTA />
        <AppTrustedBy />
        <HomeTestimonials />
        <!-- <AppContactForm id="contact" /> -->
    </div>
</template>

<script setup lang="ts">
useHead({
    title: computed(
        () => "Our Services | Evolutionary & Contextual Software Engineering"
    ),
});
</script>
