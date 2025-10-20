<template>
    <header
        class="fixed top-0 left-0 w-full p-4 z-40 transition-all duration-300"
        :class="{ 'pb-6': isMobileMenuOpen }"
    >
        <div
            class="bg-zinc-950/70 backdrop-blur-sm rounded-2xl px-4 py-2 transition-all duration-300"
            :class="{ 'pb-6': isMobileMenuOpen }"
        >
            <!-- Header Content Container -->
            <div class="flex items-center justify-between">
                <!-- Logo Section -->
                <NuxtLink to="/" class="flex items-center gap-2">
                    <div class="w-12 h-12">
                        <NuxtImg
                            src="/images/myntropic-logo.svg"
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
                            href="/solutions"
                            class="hover:text-emerald-400 transition-colors"
                        >
                            {{ t("nav.solutions") }}
                        </NuxtLink>
                        <NuxtLink
                            to="/services"
                            class="hover:text-emerald-400 transition-colors"
                        >
                            {{ t("nav.services") }}
                        </NuxtLink>
                        <NuxtLink
                            to="/case-studies"
                            class="hover:text-emerald-400 transition-colors"
                        >
                            {{ t("nav.portfolio") }}
                        </NuxtLink>
                        <NuxtLink
                            to="/about"
                            class="hover:text-emerald-400 transition-colors"
                        >
                            {{ t("nav.about") }}
                        </NuxtLink>
                    </div>

                    <!-- Contact Button -->
                    <AppButton destination="/contact">{{
                        t("nav.contact")
                    }}</AppButton>
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

            <!-- Mobile Menu Dropdown (within header) -->
            <Transition name="dropdown">
                <div
                    v-if="isMobileMenuOpen"
                    class="lg:hidden mt-6 pt-6 border-t border-gray-700/50"
                >
                    <nav class="flex flex-col space-y-4">
                        <NuxtLink
                            href="/solutions"
                            class="text-white text-base hover:text-emerald-400 transition-colors py-2 font-open-sans"
                            @click="closeMobileMenu"
                        >
                            {{ t("nav.solutions") }}
                        </NuxtLink>
                        <NuxtLink
                            href="#use-cases"
                            class="text-white text-base hover:text-emerald-400 transition-colors py-2 font-open-sans"
                            @click="closeMobileMenu"
                        >
                            {{ t("nav.services") }}
                        </NuxtLink>

                        <NuxtLink
                            to="/case-studies"
                            class="text-white text-base hover:text-emerald-400 transition-colors py-2 font-open-sans"
                            @click="closeMobileMenu"
                        >
                            {{ t("nav.portfolio") }}
                        </NuxtLink>
                        <NuxtLink
                            href="/about"
                            class="text-white text-base hover:text-emerald-400 transition-colors py-2 font-open-sans"
                            @click="closeMobileMenu"
                        >
                            {{ t("nav.about") }}
                        </NuxtLink>
                        <NuxtLink
                            to="/contact"
                            class="bg-primary w-full text-gray-900 px-6 py-3 rounded-lg text-sm font-semibold font-open-sans hover:bg-emerald-300 transition-colors text-center mt-4 self-start"
                            @click="closeMobileMenu"
                        >
                            {{ t("nav.contact") }}
                        </NuxtLink>
                    </nav>
                </div>
            </Transition>
        </div>
    </header>
</template>

<script setup>
const isMobileMenuOpen = ref(false);

const { t } = useI18n({ useScope: "local" });

useHead({
    title: computed(
        () => "About Us | Evolutionary & Contextual Software Engineering"
    ),
});

function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
    isMobileMenuOpen.value = false;
}
</script>

<i18n lang="yaml">
es:
    nav:
        solutions: "Nuestras Soluciones"
        services: "Nuestros Servicios"
        about: "Sobre Nosotros"
        portfolio: "Portfolio"
        contact: "Contactanos"

en:
    nav:
        solutions: "Our Solutions"
        services: "Our Services"
        about: "About Us"
        portfolio: "Case Studies"
        contact: "Contact Us"
</i18n>

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

/* Dropdown animation - slide down */
.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.3s ease-out;
}
.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-20px);
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
