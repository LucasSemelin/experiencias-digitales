<template>
    <section class="py-16">
        <div class="container mx-auto px-6">
            <AppH2 class="text-center mb-8">{{ t("title") }}</AppH2>
            <AppSectionSubtitle>{{ t("subtitle") }}</AppSectionSubtitle>

            <!-- Solution 1: From inefficiency → to intelligent operations -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-28"
            >
                <!-- Mobile order: title first -->
                <div class="lg:order-2 order-1">
                    <AppH3 class="mb-4">{{ t("solution1.title") }}</AppH3>
                    <p
                        class="text-zinc-500 mb-4 text-base lg:text-xl font-semibold"
                    >
                        {{ t("solution1.problem") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-2 mb-4"
                    >
                        {{ t("solution1.solution") }}
                    </p>
                    <p class="text-sm mt-4 text-gradient-from">
                        🟢 {{ t("solution1.outcome") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop left, Mobile middle -->
                <div class="lg:order-1 order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/page-solutions/solutions1.jpg"
                            class="w-full h-full object-cover"
                            :alt="t('solution1.title')"
                        />
                    </div>
                </div>
            </div>

            <!-- Solution 2: From blind spots → to full visibility -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-28"
            >
                <!-- Mobile order: title first -->
                <div class="order-1">
                    <AppH3 class="mb-4">{{ t("solution2.title") }}</AppH3>
                    <p
                        class="text-zinc-500 mb-4 text-base lg:text-xl font-semibold"
                    >
                        {{ t("solution2.problem") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-1 mb-4"
                    >
                        {{ t("solution2.solution") }}
                    </p>
                    <p class="text-sm mt-4 text-gradient-from">
                        🟢 {{ t("solution2.outcome") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop right, Mobile middle -->
                <div class="order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/page-solutions/solutions2.jpg"
                            class="w-full h-full object-cover"
                            :alt="t('solution2.title')"
                        />
                    </div>
                </div>
            </div>

            <!-- Solution 3: From rigidity → to adaptive software -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-28"
            >
                <!-- Mobile order: title first -->
                <div class="lg:order-2 order-1">
                    <AppH3 class="mb-4">{{ t("solution3.title") }}</AppH3>
                    <p
                        class="text-zinc-500 mb-4 text-base lg:text-xl font-semibold"
                    >
                        {{ t("solution3.problem") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-2 mb-4"
                    >
                        {{ t("solution3.solution") }}
                    </p>
                    <p class="text-sm mt-4 text-gradient-from">
                        🟢 {{ t("solution3.outcome") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop left, Mobile middle -->
                <div class="lg:order-1 order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/page-solutions/solutions3.jpg"
                            class="w-full h-full object-cover"
                            :alt="t('solution3.title')"
                        />
                    </div>
                </div>
            </div>

            <!-- Solution 4: From friction → to fluid user experiences -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-28"
            >
                <!-- Mobile order: title first -->
                <div class="order-1">
                    <AppH3 class="mb-4">{{ t("solution4.title") }}</AppH3>
                    <p
                        class="text-zinc-500 mb-4 text-base lg:text-xl font-semibold"
                    >
                        {{ t("solution4.problem") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-1 mb-4"
                    >
                        {{ t("solution4.solution") }}
                    </p>
                    <p class="text-sm mt-4 text-gradient-from">
                        🟢 {{ t("solution4.outcome") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop right, Mobile middle -->
                <div class="order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/page-solutions/solutions4.jpg"
                            class="w-full h-full object-cover"
                            :alt="t('solution4.title')"
                        />
                    </div>
                </div>
            </div>

            <!-- Solution 5: From silos → to connected intelligence -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-28"
            >
                <!-- Mobile order: title first -->
                <div class="lg:order-2 order-1">
                    <AppH3 class="mb-4">{{ t("solution5.title") }}</AppH3>
                    <p
                        class="text-zinc-500 mb-4 text-base lg:text-xl font-semibold"
                    >
                        {{ t("solution5.problem") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-2 mb-4"
                    >
                        {{ t("solution5.solution") }}
                    </p>
                    <p class="text-sm mt-4 text-gradient-from">
                        🟢 {{ t("solution5.outcome") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop left, Mobile middle -->
                <div class="lg:order-1 order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/page-solutions/solutions5.jpg"
                            class="w-full h-full object-cover"
                            :alt="t('solution5.title')"
                        />
                    </div>
                </div>
            </div>

            <!-- Solution 6: From stagnation → to continuous evolution -->
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-28"
            >
                <!-- Mobile order: title first -->
                <div class="order-1">
                    <AppH3 class="mb-4">{{ t("solution6.title") }}</AppH3>
                    <p
                        class="text-zinc-500 mb-4 text-base lg:text-xl font-semibold"
                    >
                        {{ t("solution6.problem") }}
                    </p>
                    <p
                        class="text-zinc-200 text-sm lg:text-base leading-relaxed order-3 lg:order-1 mb-4"
                    >
                        {{ t("solution6.solution") }}
                    </p>
                    <p class="text-sm mt-4 text-gradient-from">
                        🟢 {{ t("solution6.outcome") }}
                    </p>
                </div>
                <!-- Image placeholder - Desktop right, Mobile middle -->
                <div class="order-2 flex justify-center">
                    <div
                        class="w-full lg:max-w-xl h-64 lg:h-80 rounded-4xl overflow-hidden"
                    >
                        <NuxtImg
                            src="/images/page-solutions/solutions6.jpg"
                            class="w-full h-full object-cover"
                            :alt="t('solution6.title')"
                        />
                    </div>
                </div>
            </div>

            <!-- Closing Section -->
            <div class="text-center mt-16 lg:mt-24">
                <div class="max-w-4xl mx-auto">
                    <h3 class="text-2xl lg:text-3xl font-bold text-white mb-6">
                        {{ t("closing.title") }}
                    </h3>
                    <p
                        class="text-lg lg:text-xl text-zinc-300 mb-8 leading-relaxed"
                    >
                        {{ t("closing.subtitle") }}
                    </p>
                    <p
                        class="text-base lg:text-lg text-zinc-400 mb-8 leading-relaxed"
                    >
                        {{ t("closing.description") }}
                    </p>
                    <AppButton
                        destination="/contact"
                        class="inline-flex items-center"
                    >
                        {{ t("closing.cta.text") }}
                    </AppButton>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import AppH2 from "./AppH2.vue";
import AppH3 from "./AppH3.vue";
import AppSectionSubtitle from "./AppSectionSubtitle.vue";
import AppButton from "./AppButton.vue";

const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="yaml">
es:
    title: "Cómo Los Resolvemos"
    subtitle: "Convertimos desafíos recurrentes en oportunidades de evolución continua. Cada solución conecta estrategia empresarial, experiencia de usuario y tecnología adaptativa — transformando la complejidad en flujo inteligente."
    solution1:
        title: "De la ineficiencia → a operaciones inteligentes"
        problem: "Los procesos dependen de personas, no de sistemas. Los errores se repiten, las tareas se duplican y se pierde tiempo arreglando lo que no debería romperse."
        solution: "A través de la Ingeniería de Contexto, mapeamos flujos de trabajo reales y lógica de decisiones. A través de la Ingeniería de Software, los automatizamos y orquestamos con arquitecturas adaptativas. A través del Diseño UX, hacemos el proceso intuitivo para cada usuario."
        outcome: "Menos errores, menos trabajo manual y operaciones que aprenden y se auto-optimizan con el tiempo."
    solution2:
        title: "De puntos ciegos → a visibilidad contextual"
        problem: "La información está dispersa, los equipos carecen de claridad y las decisiones se toman en la oscuridad."
        solution: "Con la Ingeniería de Contexto, definimos las métricas y señales que importan. Con la Ingeniería de Software, unificamos sistemas y flujos de datos en una capa contextual. Con el Diseño UX, visualizamos insights — para que todos puedan ver, entender y actuar en tiempo real."
        outcome: "Visibilidad en tiempo real, decisiones confiadas y control basado en contexto, no en suposiciones."
    solution3:
        title: "De la rigidez → a software adaptativo"
        problem: "La tecnología no puede seguir el ritmo de la evolución empresarial — los sistemas se vuelven obsoletos tan pronto como se lanzan."
        solution: "Construimos sistemas modulares y escalables usando fundamentos de Ingeniería de Software que soportan el cambio. Incorporamos lógica de Ingeniería de Contexto que les permite adaptarse dinámicamente. Y aplicamos principios de Diseño UX para asegurar flexibilidad sin complejidad."
        outcome: "Software que evoluciona naturalmente con tu negocio, en lugar de romperse con cada cambio."
    solution4:
        title: "De la fricción → a experiencias humanas fluidas"
        problem: "Los usuarios enfrentan confusión, fricción e ineficiencia en cómo interactúan con los sistemas."
        solution: "Aplicamos Diseño UX para crear experiencias que se sientan naturales y coherentes. Usamos Ingeniería de Contexto para alinear el comportamiento del sistema con flujos de trabajo humanos reales. E incorporamos Ingeniería de Software que soporta interacción adaptativa y responsiva."
        outcome: "Usuarios más felices, mayor adopción y productos que se sienten sin esfuerzo e inteligentes."
    solution5:
        title: "De silos → a inteligencia conectada"
        problem: "Los equipos y tecnologías no se comunican. Diseño, ingeniería e IA viven en mundos separados."
        solution: "Arquitecturamos sistemas integrados donde Contexto, Software y UX coexisten bajo un modelo evolutivo único. La información fluye continuamente entre personas y sistemas — creando alineación e inteligencia compartida."
        outcome: "Visión unificada, colaboración sincronizada y sistemas que aprenden a través de la organización."
    solution6:
        title: "De proyectos fallidos → a resultados reales e iterativos"
        problem: "Has invertido en proveedores y consultores que nunca entregaron. Plazos largos, costos altos, cero resultados."
        solution: "Trabajamos a través de ciclos cortos y validados: 1. Descubrimiento + Prototipo – Un prototipo funcional en el primer mes. 2. Desarrollo Central – Software funcionando en operación limitada. 3. Despliegue – Sistema de producción completo con entrenamiento y monitoreo. 4. Evolución – Mejoras mensuales continuas y expansión. Ves progreso, usas software real temprano y evolucionas basado en evidencia — no en promesas."
        outcome: "Resultados funcionando cada mes. Menor riesgo. Mayor confianza. Evolución medible."
    closing:
        title: "La Ingeniería de Evolución es cómo hacemos que el software realmente funcione."
        subtitle: "No se trata de reemplazar tecnología — se trata de diseñar sistemas que aprenden, se adaptan y crecen con tu organización."
        description: "En Myntropic Studio, construimos la próxima generación de sistemas inteligentes: sistemas que entienden el contexto, conectan personas y tecnología, y evolucionan con propósito."
        cta:
            text: "Descubrí qué significa la evolución para tu negocio"
            link: "/contact"

en:
    title: "How We Solve Them"
    subtitle: "We turn recurring challenges into opportunities for continuous evolution. Each solution connects business strategy, user experience, and adaptive technology, transforming complexity into intelligent flow."
    solution1:
        title: "From inefficiency → to intelligent operations"
        problem: "Processes rely on people, not systems. Errors repeat, tasks are duplicated, and time is lost fixing what shouldn't break."
        solution: "Through Context Engineering, we map real workflows and decision logic. Through Software Engineering, we automate and orchestrate them with adaptive architectures. Through UX Design, we make the process intuitive for every user."
        outcome: "Fewer errors, less manual work, and operations that learn and self-optimize over time."
    solution2:
        title: "From blind spots → to contextual visibility"
        problem: "Information is scattered, teams lack clarity, and decisions are made in the dark."
        solution: "With Context Engineering, we define the metrics and signals that matter. With Software Engineering, we unify systems and data streams into one contextual layer. With UX Design, we visualize insight — so everyone can see, understand, and act in real time."
        outcome: "Real-time visibility, confident decisions, and control grounded in context, not assumptions."
    solution3:
        title: "From rigidity → to adaptive software"
        problem: "Technology can't keep up with business evolution — systems grow outdated as soon as they're launched."
        solution: "We build modular, scalable systems using Software Engineering foundations that support change. We embed Context Engineering logic that allows them to adapt dynamically. And we apply UX Design principles to ensure flexibility without complexity."
        outcome: "Software that evolves naturally with your business, instead of breaking with every change."
    solution4:
        title: "From friction → to fluid human experiences"
        problem: "Users face confusion, friction, and inefficiency in how they interact with systems."
        solution: "We apply UX Design to craft experiences that feel natural and coherent. We use Context Engineering to align the system's behavior with real human workflows. And we embed Software Engineering that supports adaptive, responsive interaction."
        outcome: "Happier users, higher adoption, and products that feel effortless and intelligent."
    solution5:
        title: "From silos → to connected intelligence"
        problem: "Teams and technologies don't communicate. Design, engineering, and AI live in separate worlds."
        solution: "We architect integrated systems where Context, Software, and UX coexist under a single evolutionary model. Information flows continuously between people and systems — creating alignment and shared intelligence."
        outcome: "Unified vision, synchronized collaboration, and systems that learn across the organization."
    solution6:
        title: "From failed projects → to real, iterative results"
        problem: "You've invested in vendors and consultants who never delivered. Long timelines, high costs, zero outcomes."
        solution: "We work through short, validated cycles: 1. Discovery + Prototype – A functional prototype in the first month. 2. Core Development – Working software in limited operation. 3. Rollout – Full production system with training and monitoring. 4. Evolution – Continuous monthly improvements and expansion. You see progress, use real software early, and evolve based on evidence — not promises."
        outcome: "Working results every month. Lower risk. Higher trust. Measurable evolution."
    closing:
        title: "Evolution Engineering is how we make software truly work."
        subtitle: "It's not about replacing technology — it's about designing systems that learn, adapt, and grow with your organization."
        description: "At Myntropic Studio, we build the next generation of intelligent systems: systems that understand context, connect people and technology, and evolve with purpose."
        cta:
            text: "Discover what evolution means for your business"
            link: "/contact"
</i18n>
