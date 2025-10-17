<template>
    <NuxtLink
        v-if="destination"
        :to="destination"
        class="bg-gradient-to-br from-gradient-from to-gradient-to from-10% to-200% hover:bg-to-100% transition-all duration-300 text-grey-950 font-medium px-6 py-3 rounded-full text-center block text-sm w-full lg:w-fit relative hover:cursor-pointer"
    >
        <slot />
    </NuxtLink>
    <button
        v-else
        class="bg-gradient-to-br from-gradient-from to-gradient-to from-10% to-200% hover:bg-primary/80 transition-all duration-300 text-grey-950 font-medium px-6 py-3 rounded-full text-center block text-sm w-full lg:w-fit relative hover:cursor-pointer"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps<{
    destination?: string;
}>();
</script>
