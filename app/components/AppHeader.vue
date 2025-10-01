<template>
    <header class="fixed top-0 left-0 w-full p-4 z-40">
        <div
            class="bg-background/70 backdrop-blur-sm rounded-2xl px-4 py-2 flex items-center justify-between"
        >
            <!-- Logo Section -->
            <NuxtLink to="/" class="flex items-center gap-2">
                <div class="w-12 h-12">
                    <NuxtImg
                        src="/myntropic-logo.svg"
                        alt="Myntropic Logo"
                        class="w-full h-full"
                    />
                </div>
                <div class="flex items-center">
                    <h1 class="font-title text-xl text-gray-100">
                        Myntropic Studio<span class="text-xs align-super"
                            >™</span
                        >
                    </h1>
                </div>
            </NuxtLink>

            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex items-center gap-12">
                <div
                    class="flex items-center gap-12 text-sm text-white font-open-sans"
                >
                    <NuxtLink
                        href="#"
                        class="hover:text-emerald-400 transition-colors"
                    >
                        Nuestras Soluciones
                    </NuxtLink>
                    <NuxtLink
                        to="#"
                        class="hover:text-emerald-400 transition-colors"
                    >
                        Dónde Impactamos
                    </NuxtLink>
                    <NuxtLink
                        to="#"
                        class="hover:text-emerald-400 transition-colors"
                    >
                        Cómo Trabajamos
                    </NuxtLink>
                    <NuxtLink
                        to="#"
                        class="hover:text-emerald-400 transition-colors"
                    >
                        Casos de Éxito
                    </NuxtLink>
                </div>

                <!-- Contact Button -->
                <AppButton destination="#">Contactanos</AppButton>
            </nav>

            <!-- Mobile Menu Button -->
            <button
                class="lg:hidden text-white z-50 relative"
                @click="toggleMobileMenu"
            >
                <!-- Hamburger Icon -->
                <svg
                    v-show="!isMobileMenuOpen"
                    class="w-6 h-6 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
                <!-- Close Icon -->
                <svg
                    v-show="isMobileMenuOpen"
                    class="w-6 h-6 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu Overlay -->
        <Transition name="overlay">
            <div
                v-if="isMobileMenuOpen"
                class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                @click="closeMobileMenu"
            />
        </Transition>

        <!-- Mobile Menu Drawer -->
        <Transition name="drawer">
            <div
                v-if="isMobileMenuOpen"
                class="fixed top-0 right-0 h-full w-80 bg-gray-900/90 backdrop-blur-md border-l border-gray-700 z-50 lg:hidden shadow-xl rounded-l-2xl"
            >
                <div class="p-6 pt-20">
                    <nav class="flex flex-col space-y-6">
                        <NuxtLink
                            href="#"
                            class="text-white text-lg hover:text-emerald-400 transition-colors py-2 font-open-sans"
                            @click="closeMobileMenu"
                        >
                            Nuestras Soluciones
                        </NuxtLink>
                        <NuxtLink
                            href="#"
                            class="text-white text-lg hover:text-emerald-400 transition-colors py-2 font-open-sans"
                            @click="closeMobileMenu"
                        >
                            Dónde Impactamos
                        </NuxtLink>
                        <NuxtLink
                            href="#"
                            class="text-white text-lg hover:text-emerald-400 transition-colors py-2 font-open-sans"
                            @click="closeMobileMenu"
                        >
                            Cómo Trabajamos
                        </NuxtLink>
                        <NuxtLink
                            to="#"
                            class="text-white text-lg hover:text-emerald-400 transition-colors py-2 font-open-sans"
                            @click="closeMobileMenu"
                        >
                            Casos de Éxito
                        </NuxtLink>
                        <NuxtLink
                            to="#"
                            class="bg-emerald-400 text-gray-900 px-6 py-3 rounded-lg text-base font-semibold font-open-sans hover:bg-emerald-300 transition-colors text-center mt-6"
                            @click="closeMobileMenu"
                        >
                            Contactanos
                        </NuxtLink>
                    </nav>
                </div>
            </div>
        </Transition>
    </header>
</template>

<script setup>
const isMobileMenuOpen = ref(false);

const logoUrl = computed(() => {
    // Using the existing logo in the project
    return "~/assets/images/myntropic-logo.svg";
});

function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
    isMobileMenuOpen.value = false;
}

// const { t } = useI18n({
//     useScope: "local",
// });
</script>

<!-- <i18n lang="yaml">
es:
    uxdesign: UX/UI Design
    engineering: Software Engineering
    aiandautomation: AI & Automation
    enterprise: Enterprise Solutions
    letstalk: Contact Us

en:
    uxdesign: UX/UI Design
    engineering: Software Engineering
    aiandautomation: AI & Automation
    enterprise: Enterprise Solutions
    letstalk: Contact Us
</i18n> -->

<style scoped>
/* Import Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Electrolize:wght@400&family=Open+Sans:wght@400;600&display=swap");

/* Custom font classes */
.font-electrolize {
    font-family: "Electrolize", sans-serif;
}

.font-open-sans {
    font-family: "Open Sans", sans-serif;
}

/* Overlay animation */
.overlay-enter-active,
.overlay-leave-active {
    transition: opacity 0.3s ease;
}
.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
}

/* Drawer animation - slide from right */
.drawer-enter-active,
.drawer-leave-active {
    transition: transform 0.3s ease-out;
}
.drawer-enter-from,
.drawer-leave-to {
    transform: translateX(100%);
}

/* Enhanced responsive design */
@media (max-width: 1024px) {
    /* Hide desktop nav on smaller screens */
    .desktop-nav {
        display: none;
    }
}

@media (max-width: 640px) {
    /* Adjust header padding on mobile */
    header {
        padding: 12px;
    }

    /* Smaller logo on mobile */
    .logo-container img {
        width: 40px;
        height: 40px;
    }

    /* Adjust text size on mobile */
    .logo-text {
        font-size: 16px;
    }
}

/* Smooth hover transitions */
nav a {
    transition: color 0.2s ease-in-out;
}

/* Ensure proper z-index for mobile menu */
.mobile-menu {
    z-index: 60;
}
</style>
