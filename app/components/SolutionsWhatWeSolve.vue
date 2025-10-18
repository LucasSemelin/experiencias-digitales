<template>
    <section class="py-16">
        <div class="container mx-auto px-6">
            <AppH2 class="text-center mb-16">{{ t("title") }}</AppH2>

            <!-- Problems List -->
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <!-- Problem 1: Inefficient processes -->
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
                            <svg
                                class="w-full h-full text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <AppH3 class="text-lg">{{
                                t("problem1.title")
                            }}</AppH3>
                            <p class="mt-2 text-text-secondary leading-relaxed">
                                {{ t("problem1.description") }}
                            </p>
                        </div>
                    </div>

                    <!-- Problem 2: Lack of visibility -->
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
                            <svg
                                class="w-full h-full text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <AppH3 class="text-lg">{{
                                t("problem2.title")
                            }}</AppH3>
                            <p class="mt-2 text-text-secondary leading-relaxed">
                                {{ t("problem2.description") }}
                            </p>
                        </div>
                    </div>

                    <!-- Problem 3: Rigid systems -->
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
                            <svg
                                class="w-full h-full text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M21 7.5l-2.25-1.313L15 4.41l-2.25 1.313L9 7.5l-2.25-1.313L3 4.41v15.75l3.75-2.063L9 16.5l2.25 1.313L15 19.5l2.25-1.313L21 16.5V7.5zM15 10.875L15 7.5M9 10.875L9 7.5"
                                />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <AppH3 class="text-lg">{{
                                t("problem3.title")
                            }}</AppH3>
                            <p class="mt-2 text-text-secondary leading-relaxed">
                                {{ t("problem3.description") }}
                            </p>
                        </div>
                    </div>

                    <!-- Problem 4: User experience friction -->
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
                            <svg
                                class="w-full h-full text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <AppH3 class="text-lg">{{
                                t("problem4.title")
                            }}</AppH3>
                            <p class="mt-2 text-text-secondary leading-relaxed">
                                {{ t("problem4.description") }}
                            </p>
                        </div>
                    </div>

                    <!-- Problem 5: Disconnected teams -->
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
                            <svg
                                class="w-full h-full text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <AppH3 class="text-lg">{{
                                t("problem5.title")
                            }}</AppH3>
                            <p class="mt-2 text-text-secondary leading-relaxed">
                                {{ t("problem5.description") }}
                            </p>
                        </div>
                    </div>

                    <!-- Problem 6: No continuous improvement -->
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
                            <svg
                                class="w-full h-full text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <AppH3 class="text-lg">{{
                                t("problem6.title")
                            }}</AppH3>
                            <p class="mt-2 text-text-secondary leading-relaxed">
                                {{ t("problem6.description") }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import AppH2 from "./AppH2.vue";
import AppH3 from "./AppH3.vue";

const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="yaml">
es:
    title: "Los problemas que resolvemos"
    problem1:
        title: "Procesos ineficientes y propensos a errores"
        description: "Trabajo manual, reprocesos y dependencia de personas clave."
    problem2:
        title: "Falta de visibilidad"
        description: "Decisiones basadas en suposiciones en lugar de contexto real."
    problem3:
        title: "Sistemas rígidos"
        description: "El producto no puede adaptarse al cambio."
    problem4:
        title: "Fricción en la experiencia de usuario"
        description: "Las personas luchan para completar acciones básicas."
    problem5:
        title: "Equipos y datos desconectados"
        description: "Diseño, desarrollo e IA no comparten la misma visión."
    problem6:
        title: "Sin mejora continua"
        description: "Los productos dejan de evolucionar después del lanzamiento."
en:
    title: "The Problems We Solve"
    problem1:
        title: "Inefficient and error-prone processes"
        description: "Manual work, rework, and dependency on key people."
    problem2:
        title: "Lack of visibility"
        description: "Decisions based on assumptions instead of real context."
    problem3:
        title: "Rigid systems"
        description: "The product can't adapt to change."
    problem4:
        title: "Friction in user experience"
        description: "People struggle to complete basic actions."
    problem5:
        title: "Disconnected teams and data"
        description: "Design, dev, and AI don't share the same vision."
    problem6:
        title: "No continuous improvement"
        description: "Products stop evolving after launch."
</i18n>
