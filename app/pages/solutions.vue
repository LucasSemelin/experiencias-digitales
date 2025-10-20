<template>
    <div class="bg-zinc-950 text-zinc-100">
        <SolutionsHero />
        <SolutionsWhatWeSolve />
        <SolutionsSolutions />
        <AppTrustedBy />
        <HomeTestimonials />
        <!-- <AppContactForm id="contact" /> -->
    </div>
</template>

<script setup lang="ts">
useHead({
    title: computed(
        () => "Our Solutions | Evolutionary & Contextual Software Engineering"
    ),
});
</script>
