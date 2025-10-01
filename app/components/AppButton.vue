<template>
    <NuxtLink
        v-if="destination"
        :to="destination"
        class="bg-primary hover:bg-primary/80 transition-all duration-300 text-dark font-medium px-6 py-2 rounded-xl text-center block text-sm w-full lg:w-fit relative"
    >
        <slot />
    </NuxtLink>
    <button
        v-else
        class="bg-primary hover:bg-primary/80 transition-all duration-300 text-dark font-medium px-6 py-2 rounded-xl text-center block text-sm w-full lg:w-fit relative"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps<{
    destination?: string;
}>();
</script>
