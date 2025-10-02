<script setup lang="ts">
import HomeProcess from "~/components/HomeProcess.vue";
import HomeSolutions from "~/components/HomeSolutions.vue";
import HomeUseCases from "~/components/HomeUseCases.vue";
import HomeWhoWeWorkFor from "~/components/HomeWhoWeWorkFor.vue";
</script>

<template>
    <div class="bg-background text-grey-100 select-none">
        <HomeHero />
        <AppTrustedBy />
        <HomeSolutions id="solutions" />
        <HomeUseCases id="use-cases" />
        <HomeProcess id="approach" />
        <HomeWhoWeWorkFor />
        <AppContactForm id="contact" />
    </div>
</template>
