<template>
    <NuxtImg
        :src="logoPath"
        :alt="altText"
        class="opacity-80 hover:opacity-100 transition-opacity"
    />
</template>
<script setup lang="ts">
defineProps({
    logoPath: {
        type: String,
        required: true,
    },
    altText: {
        type: String,
        required: true,
    },
});
</script>
