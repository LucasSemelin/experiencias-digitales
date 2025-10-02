<script setup lang="ts">
import HomeSolutions from "~/components/HomeSolutions.vue";
import HomeUseCases from "~/components/HomeUseCases.vue";
</script>

<template>
    <div class="bg-background text-grey-100 select-none">
        <HomeHero />
        <AppTrustedBy />
        <HomeSolutions id="solutions" />
        <HomeUseCases id="use-cases" />
        <AppContactForm id="contact" />
    </div>
</template>
