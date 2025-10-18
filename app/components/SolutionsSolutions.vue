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
        </div>
    </section>
</template>

<script setup lang="ts">
import AppH2 from "./AppH2.vue";
import AppH3 from "./AppH3.vue";
import AppSectionSubtitle from "./AppSectionSubtitle.vue";

const { t } = useI18n({ useScope: "local" });
</script>

<i18n lang="yaml">
es:
    title: "Cómo Los Resolvemos"
    subtitle: "Convertimos desafíos recurrentes en oportunidades de evolución continua. Cada solución conecta estrategia empresarial, experiencia de usuario y tecnología adaptativa — transformando la complejidad en flujo inteligente."
    solution1:
        title: "De la ineficiencia → a operaciones inteligentes"
        problem: "Los procesos dependen de personas, no de sistemas. Las tareas se repiten, los errores se acumulan y los equipos pierden tiempo corrigiendo en lugar de mejorar."
        solution: "Rediseñamos y automatizamos operaciones usando lógica adaptativa, datos contextuales y coordinación inteligente. Cada proceso se vuelve más inteligente, rápido y confiable con cada ciclo."
        outcome: "Menos errores, menos trabajo manual y operaciones que aprenden y se auto-optimizan con el tiempo."
    solution2:
        title: "De puntos ciegos → a visibilidad total"
        problem: "La información clave vive en hojas de cálculo, correos electrónicos o herramientas desconectadas. Los líderes no pueden ver lo que realmente está pasando hasta que es demasiado tarde."
        solution: "Creamos plataformas contextuales que unifican datos, acciones e insights en un solo lugar — haciendo visible el rendimiento y el contexto en tiempo real."
        outcome: "Visibilidad clara, decisiones confiadas y la capacidad de actuar antes de que los problemas escalen."
    solution3:
        title: "De la rigidez → a software adaptativo"
        problem: "Cada cambio en el negocio se siente como empezar desde cero. El sistema no puede evolucionar sin fricción o costo extra."
        solution: "Construimos sistemas modulares, escalables y listos para IA que se adaptan dinámicamente a nuevos datos, contextos y comportamiento del usuario."
        outcome: "Un ecosistema de software vivo que crece con tu negocio en lugar de limitarlo."
    solution4:
        title: "De la fricción → a experiencias de usuario fluidas"
        problem: "Los usuarios luchan con interfaces confusas y flujos rotos. La participación cae y los equipos de soporte cargan con la carga."
        solution: "Diseñamos experiencias centradas en humanos que se alinean con cómo las personas realmente piensan y actúan. La inteligencia guía las interacciones sutilmente, reduciendo la fricción y aumentando la claridad."
        outcome: "Usuarios más felices, menos errores y una experiencia que se siente sin esfuerzo e intuitiva."
    solution5:
        title: "De silos → a inteligencia conectada"
        problem: "Los equipos de diseño, ingeniería y negocio operan por separado, y las iniciativas de IA no se integran con el producto principal."
        solution: "Conectamos sistemas, datos y personas a través de una arquitectura cognitiva unificada — donde la información y la inteligencia fluyen libremente entre equipos y herramientas."
        outcome: "Una organización sincronizada donde cada capa — humana y digital — trabaja junta de manera inteligente."
    solution6:
        title: "Del estancamiento → a evolución continua"
        problem: "Después del lanzamiento, los productos dejan de mejorar. No hay un proceso estructurado para aprender de los usuarios o el contexto."
        solution: "Implementamos marcos de evolución continua que miden, analizan y refinan productos a lo largo del tiempo — transformando la retroalimentación en mejora adaptativa."
        outcome: "Un sistema que se auto-mejora y se vuelve más inteligente con cada interacción y ciclo de negocio."

en:
    title: "How We Solve Them"
    subtitle: "We turn recurring challenges into opportunities for continuous evolution. Each solution connects business strategy, user experience, and adaptive technology, transforming complexity into intelligent flow."
    solution1:
        title: "From inefficiency → to intelligent operations"
        problem: "Processes depend on people, not systems. Tasks are repeated, errors pile up, and teams waste time fixing instead of improving."
        solution: "We redesign and automate operations using adaptive logic, contextual data, and intelligent coordination. Each process becomes smarter, faster, and more reliable with every cycle."
        outcome: "Fewer errors, less manual work, and operations that learn and self-optimize over time."
    solution2:
        title: "From blind spots → to full visibility"
        problem: "Key information lives in spreadsheets, emails, or disconnected tools. Leaders can't see what's really happening until it's too late."
        solution: "We create contextual platforms that unify data, actions, and insights in one place — making performance and context visible in real time."
        outcome: "Clear visibility, confident decisions, and the ability to act before problems scale."
    solution3:
        title: "From rigidity → to adaptive software"
        problem: "Every change in the business feels like starting from scratch. The system can't evolve without friction or extra cost."
        solution: "We build modular, scalable, and AI-ready systems that adapt dynamically to new data, contexts, and user behavior."
        outcome: "A living software ecosystem that grows with your business instead of holding it back."
    solution4:
        title: "From friction → to fluid user experiences"
        problem: "Users struggle with confusing interfaces and broken flows. Engagement drops, and support teams carry the burden."
        solution: "We design human-centered experiences that align with how people actually think and act. Intelligence guides interactions subtly, reducing friction and increasing clarity."
        outcome: "Happier users, fewer errors, and an experience that feels effortless and intuitive."
    solution5:
        title: "From silos → to connected intelligence"
        problem: "Design, engineering, and business teams operate separately, and AI initiatives don't integrate with the core product."
        solution: "We connect systems, data, and people through a unified cognitive architecture — where information and intelligence flow freely between teams and tools."
        outcome: "A synchronized organization where every layer — human and digital — works together intelligently."
    solution6:
        title: "From stagnation → to continuous evolution"
        problem: "After launch, products stop improving. There's no structured process for learning from users or context."
        solution: "We implement continuous evolution frameworks that measure, analyze, and refine products over time — transforming feedback into adaptive improvement."
        outcome: "A self-improving system that grows smarter with every interaction and business cycle."
</i18n>
