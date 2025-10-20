<template>
    <section class="py-8">
        <div class="container mx-auto px-6">
            <!-- Service 1: Software Engineering -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-28"
            >
                <!-- Mobile order: title first -->
                <div class="lg:order-2 order-1">
                    <div class="flex items-center mb-4">
                        <AppH3>{{ t("service1.title") }}</AppH3>
                    </div>
                    <p
                        class="text-zinc-500 mb-4 text-base lg:text-xl font-semibold"
                    >
                        {{ t("service1.subtitle") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed mb-4"
                    >
                        {{ t("service1.description") }}
                    </p>

                    <div class="mb-4">
                        <p class="text-zinc-400 text-sm font-semibold mb-2">
                            {{ t("service1.includesLabel") }}
                        </p>
                        <ul
                            class="text-zinc-200 text-sm lg:text-base leading-relaxed space-y-1"
                        >
                            <li>• {{ t("service1.includes.item1") }}</li>
                            <li>• {{ t("service1.includes.item2") }}</li>
                            <li>• {{ t("service1.includes.item3") }}</li>
                            <li>• {{ t("service1.includes.item4") }}</li>
                            <li>• {{ t("service1.includes.item5") }}</li>
                        </ul>
                    </div>

                    <p class="text-sm mt-4 text-gradient-from">
                        Outcome: {{ t("service1.outcome") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop left, Mobile middle -->
                <div class="lg:order-1 order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/page-services/services1.jpg"
                            class="w-full h-full object-cover"
                            :alt="t('service1.title')"
                        />
                    </div>
                </div>
            </div>

            <!-- Service 2: Context Engineering -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-28"
            >
                <!-- Mobile order: title first -->
                <div class="order-1">
                    <div class="flex items-center mb-4">
                        <AppH3>{{ t("service2.title") }}</AppH3>
                    </div>
                    <p
                        class="text-zinc-500 mb-4 text-base lg:text-xl font-semibold"
                    >
                        {{ t("service2.subtitle") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed mb-4"
                    >
                        {{ t("service2.description") }}
                    </p>

                    <div class="mb-4">
                        <p class="text-zinc-400 text-sm font-semibold mb-2">
                            {{ t("service2.includesLabel") }}
                        </p>
                        <ul
                            class="text-zinc-200 text-sm lg:text-base leading-relaxed space-y-1"
                        >
                            <li>• {{ t("service2.includes.item1") }}</li>
                            <li>• {{ t("service2.includes.item2") }}</li>
                            <li>• {{ t("service2.includes.item3") }}</li>
                            <li>• {{ t("service2.includes.item4") }}</li>
                            <li>• {{ t("service2.includes.item5") }}</li>
                        </ul>
                    </div>

                    <p class="text-sm mt-4 text-gradient-from">
                        Outcome: {{ t("service2.outcome") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop right, Mobile middle -->
                <div class="order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/page-services/services2.jpg"
                            class="w-full h-full object-cover"
                            :alt="t('service2.title')"
                        />
                    </div>
                </div>
            </div>

            <!-- Service 3: UX Design -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-28"
            >
                <!-- Mobile order: title first -->
                <div class="lg:order-2 order-1">
                    <div class="flex items-center mb-4">
                        <AppH3>{{ t("service3.title") }}</AppH3>
                    </div>
                    <p
                        class="text-zinc-500 mb-4 text-base lg:text-xl font-semibold"
                    >
                        {{ t("service3.subtitle") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed mb-4"
                    >
                        {{ t("service3.description") }}
                    </p>

                    <div class="mb-4">
                        <p class="text-zinc-400 text-sm font-semibold mb-2">
                            {{ t("service3.includesLabel") }}
                        </p>
                        <ul
                            class="text-zinc-200 text-sm lg:text-base leading-relaxed space-y-1"
                        >
                            <li>• {{ t("service3.includes.item1") }}</li>
                            <li>• {{ t("service3.includes.item2") }}</li>
                            <li>• {{ t("service3.includes.item3") }}</li>
                            <li>• {{ t("service3.includes.item4") }}</li>
                            <li>• {{ t("service3.includes.item5") }}</li>
                        </ul>
                    </div>

                    <p class="text-sm mt-4 text-gradient-from">
                        Outcome: {{ t("service3.outcome") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop left, Mobile middle -->
                <div class="lg:order-1 order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/page-services/services3.jpg"
                            class="w-full h-full object-cover"
                            :alt="t('service3.title')"
                        />
                    </div>
                </div>
            </div>

            <!-- Service 4: Consulting & Strategy -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-28"
            >
                <!-- Mobile order: title first -->
                <div class="order-1">
                    <div class="flex items-center mb-4">
                        <AppH3>{{ t("service4.title") }}</AppH3>
                    </div>
                    <p
                        class="text-zinc-500 mb-4 text-base lg:text-xl font-semibold"
                    >
                        {{ t("service4.subtitle") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed mb-4"
                    >
                        {{ t("service4.description") }}
                    </p>

                    <div class="mb-4">
                        <p class="text-zinc-400 text-sm font-semibold mb-2">
                            {{ t("service4.includesLabel") }}
                        </p>
                        <ul
                            class="text-zinc-200 text-sm lg:text-base leading-relaxed space-y-1"
                        >
                            <li>• {{ t("service4.includes.item1") }}</li>
                            <li>• {{ t("service4.includes.item2") }}</li>
                            <li>• {{ t("service4.includes.item3") }}</li>
                            <li>• {{ t("service4.includes.item4") }}</li>
                            <li>• {{ t("service4.includes.item5") }}</li>
                        </ul>
                    </div>

                    <p class="text-sm mt-4 text-gradient-from">
                        Outcome: {{ t("service4.outcome") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop right, Mobile middle -->
                <div class="order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/page-services/services4.jpg"
                            class="w-full h-full object-cover"
                            :alt="t('service4.title')"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import AppH3 from "./AppH3.vue";

const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="yaml">
es:
    title: "Soluciones diseñadas para evolucionar con tu negocio"
    service1:
        title: "Software Engineering"
        subtitle: "Escalable, sostenible y construido para evolucionar."
        description: "Diseñamos y desarrollamos bases técnicas sólidas que se adaptan al cambio. Desde la arquitectura hasta la implementación, nos enfocamos en flexibilidad, rendimiento y sostenibilidad a largo plazo — permitiendo que los sistemas evolucionen en lugar de volverse obsoletos."
        includesLabel: "Incluye:"
        includes:
            item1: "Software personalizado y arquitecturas basadas en APIs"
            item2: "Diseño de backend e infraestructura escalables"
            item3: "Integración con plataformas existentes y capas de IA"
            item4: "Modernización de sistemas legacy"
            item5: "Optimización de seguridad, rendimiento y confiabilidad"
        outcome: "Software que evoluciona con tu negocio — no en su contra."
    service2:
        title: "Context Engineering"
        subtitle: "Haciendo que los sistemas sean verdaderamente inteligentes por diseño."
        description: "La inteligencia sin contexto es ruido. Ayudamos a los sistemas a entender su entorno — procesos, datos y personas — para que cada decisión, automatización o función de IA opere con propósito. Así es como la tecnología se alinea con la realidad del negocio."
        includesLabel: "Incluye:"
        includes:
            item1: "Modelado de contexto y arquitectura de datos"
            item2: "Mapeo de conocimiento y comprensión de procesos"
            item3: "Integración de IA basada en datos organizacionales"
            item4: "APIs contextuales y capas de datos adaptativas"
            item5: "Marcos de decisión para aprendizaje continuo"
        outcome: "Sistemas que piensan y actúan en contexto — no en aislamiento."
    service3:
        title: "UX Design"
        subtitle: "Diseñando interacciones significativas entre personas y sistemas inteligentes."
        description: "Creamos experiencias que conectan complejidad con claridad. Desde la investigación hasta el diseño de interfaces, nuestro enfoque es hacer que los sistemas inteligentes sean intuitivos, confiables y centrados en el ser humano."
        includesLabel: "Incluye:"
        includes:
            item1: "Investigación UX y arquitectura de experiencia"
            item2: "Diseño de interfaces e interacciones"
            item3: "Patrones de colaboración humano-IA"
            item4: "Sistemas de diseño adaptativos"
            item5: "Pruebas de usabilidad y mejora continua"
        outcome: "Interfaces que hacen la inteligencia utilizable y humana."
    service4:
        title: "Consulting & Strategy"
        subtitle: "Desde la visión hasta la evolución continua."
        description: "Ayudamos a las organizaciones a definir cómo deben evolucionar sus sistemas — estratégica y técnicamente. Nuestra consultoría conecta objetivos de negocio con arquitectura, asegurando que cada paso apoye el crecimiento y adaptabilidad a largo plazo."
        includesLabel: "Incluye:"
        includes:
            item1: "Definición de hoja de ruta y estrategia de evolución"
            item2: "Consultoría técnica y arquitectónica"
            item3: "Estrategia de IA y diseño contextual"
            item4: "Optimización de procesos y alineación de equipos"
            item5: "Evaluación de mejora continua y evolución"
        outcome: "Claridad, alineación y un camino claro hacia la evolución sostenible."

en:
    title: "Solutions designed to evolve with your business"
    service1:
        title: "Software Engineering"
        subtitle: "Scalable, sustainable, and built to evolve."
        description: "We design and develop solid technical foundations that adapt to change. From architecture to implementation, we focus on flexibility, performance, and long-term sustainability — enabling systems to evolve instead of becoming obsolete."
        includesLabel: "Includes:"
        includes:
            item1: "Custom software and API-driven architectures"
            item2: "Scalable backend and infrastructure design"
            item3: "Integration with existing platforms and AI layers"
            item4: "Modernization of legacy systems"
            item5: "Security, performance, and reliability optimization"
        outcome: "Software that evolves with your business — not against it."
    service2:
        title: "Context Engineering"
        subtitle: "Making systems truly intelligent by design."
        description: "Intelligence without context is noise. We help systems understand their environment — processes, data, and people — so that every decision, automation, or AI feature operates with purpose. This is how technology becomes aligned with business reality."
        includesLabel: "Includes:"
        includes:
            item1: "Context modeling and data architecture"
            item2: "Knowledge mapping and process understanding"
            item3: "AI integration based on organizational data"
            item4: "Contextual APIs and adaptive data layers"
            item5: "Decision frameworks for continuous learning"
        outcome: "Systems that think and act in context — not in isolation."
    service3:
        title: "UX Design"
        subtitle: "Designing meaningful interactions between people and intelligent systems."
        description: "We create experiences that bridge complexity and clarity. From research to interface design, our focus is to make intelligent systems intuitive, trustworthy, and human-centered."
        includesLabel: "Includes:"
        includes:
            item1: "UX research and experience architecture"
            item2: "Interface and interaction design"
            item3: "Human–AI collaboration patterns"
            item4: "Adaptive design systems"
            item5: "Usability testing and continuous improvement"
        outcome: "Interfaces that make intelligence usable and human."
    service4:
        title: "Consulting & Strategy"
        subtitle: "From vision to continuous evolution."
        description: "We help organizations define how their systems should evolve — strategically and technically. Our consulting connects business goals with architecture, ensuring every step supports long-term growth and adaptability."
        includesLabel: "Includes:"
        includes:
            item1: "Evolution roadmap and strategy definition"
            item2: "Technical and architectural consulting"
            item3: "AI and contextual design strategy"
            item4: "Process optimization and team alignment"
            item5: "Continuous improvement and evolution assessment"
        outcome: "Clarity, alignment, and a clear path toward sustainable evolution."
</i18n>
