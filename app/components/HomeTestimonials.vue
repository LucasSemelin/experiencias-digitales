<template>
    <section class="py-16">
        <div class="container mx-auto px-6">
            <!-- <AppH2 class="text-center mb-16">{{ t("title") }}</AppH2> -->

            <!-- Testimonial Card -->
            <div class="max-w-4xl mx-auto">
                <div class="p-8 lg:p-12">
                    <!-- Quote Icon -->
                    <div class="mb-6">
                        <svg
                            class="w-8 h-8 text-primary/60"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"
                            />
                        </svg>
                    </div>

                    <!-- Quote Text -->
                    <blockquote
                        class="text-base lg:text-xl text-grey-200 leading-relaxed mb-8 font-light italic"
                    >
                        "{{ t("testimonial.quote") }}"
                    </blockquote>

                    <!-- Author Info -->
                    <div class="flex items-center">
                        <div class="w-12 h-12 mr-4">
                            <NuxtImg
                                src="/images/testimonials/carvalho.jpg"
                                alt="Valentín Muro"
                                class="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div>
                            <p class="text-grey-100 text-sm font-semibold">
                                {{ t("testimonial.author_name") }}
                            </p>
                            <p class="text-grey-400 text-xs">
                                {{ t("testimonial.author_title") }}
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

const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="yaml">
es:
    title: "Lo que dicen de mi trabajo"
    testimonial:
        quote: "Trabajar con Lucas fue un punto de inflexión para nuestro producto. Nos ayudó a entender por qué los usuarios abandonaban durante el onboarding y rediseñó la experiencia para que encontraran valor desde el primer uso. Su enfoque combina claridad, estrategia y datos. Hoy, nuestras métricas de activación y retención mejoraron notablemente."
        author_name: "Andrés Carvalho"
        author_title: "CTO, Eunoia Care"
        author_initial: "A"

en:
    title: "What they say about my work"
    testimonial:
        quote: "Working with Lucas was a turning point for our product. He helped us understand why users were dropping off during onboarding and redesigned the experience so they could find value from the very first use. His approach blends clarity, strategy, and data. Today, our activation and retention metrics have improved significantly."
        author_name: "Andrés Carvalho"
        author_title: "CTO, Eunoia Care"
        author_initial: "A"
</i18n>
