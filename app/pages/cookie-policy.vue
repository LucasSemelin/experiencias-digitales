<template>
    <div class="bg-background text-grey-100 min-h-screen">
        <!-- Header Section -->
        <div class="container mx-auto px-4 py-16 lg:py-24">
            <div class="max-w-4xl mx-auto">
                <!-- Title -->
                <h1
                    class="font-title text-3xl lg:text-5xl text-white text-center leading-normal mb-4"
                >
                    {{ t("title") }}
                </h1>

                <!-- Last Updated -->
                <p class="text-grey-400 text-center text-sm mb-12">
                    {{ t("lastUpdated") }}
                </p>

                <!-- Introduction -->
                <div class="prose prose-lg max-w-none mb-12">
                    <p class="text-grey-200 leading-relaxed text-lg">
                        {{ t("introduction") }}
                    </p>
                </div>

                <!-- Sections -->
                <div class="space-y-12">
                    <!-- Section 1: What are cookies -->
                    <section>
                        <h2
                            class="font-title text-2xl lg:text-3xl text-white mb-6"
                        >
                            {{ t("whatAreCookies.title") }}
                        </h2>
                        <p class="text-grey-200 leading-relaxed">
                            {{ t("whatAreCookies.content") }}
                        </p>
                    </section>

                    <!-- Section 2: Types of cookies -->
                    <section>
                        <h2
                            class="font-title text-2xl lg:text-3xl text-white mb-6"
                        >
                            {{ t("typesOfCookies.title") }}
                        </h2>

                        <!-- Cards Grid -->
                        <div
                            class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
                        >
                            <!-- Essential Cookies -->
                            <div
                                class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl p-6 lg:p-8 hover:border-grey-700/70 transition-all duration-300 group"
                            >
                                <AppH3 class="leading-tight mb-4 max-w-sm">
                                    {{ t("typesOfCookies.essential.title") }}
                                </AppH3>
                                <p
                                    class="text-grey-300 text-sm lg:text-base leading-relaxed mb-2"
                                >
                                    {{
                                        t(
                                            "typesOfCookies.essential.description"
                                        )
                                    }}
                                </p>
                                <p
                                    class="text-primary font-semibold text-sm lg:text-base"
                                >
                                    👉 {{ t("typesOfCookies.essential.note") }}
                                </p>
                            </div>

                            <!-- Performance Cookies -->
                            <div
                                class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl p-6 lg:p-8 hover:border-grey-700/70 transition-all duration-300 group"
                            >
                                <AppH3 class="leading-tight mb-4 max-w-sm">
                                    {{ t("typesOfCookies.performance.title") }}
                                </AppH3>
                                <p
                                    class="text-grey-300 text-sm lg:text-base leading-relaxed mb-2"
                                >
                                    {{
                                        t(
                                            "typesOfCookies.performance.description"
                                        )
                                    }}
                                </p>
                                <p
                                    class="text-grey-300 text-sm lg:text-base italic"
                                >
                                    {{
                                        t("typesOfCookies.performance.example")
                                    }}
                                </p>
                            </div>

                            <!-- Functionality Cookies -->
                            <div
                                class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl p-6 lg:p-8 hover:border-grey-700/70 transition-all duration-300 group"
                            >
                                <AppH3 class="leading-tight mb-4 max-w-sm">
                                    {{
                                        t("typesOfCookies.functionality.title")
                                    }}
                                </AppH3>
                                <p
                                    class="text-grey-300 text-sm lg:text-base leading-relaxed"
                                >
                                    {{
                                        t(
                                            "typesOfCookies.functionality.description"
                                        )
                                    }}
                                </p>
                            </div>

                            <!-- Third-party Cookies -->
                            <div
                                class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl p-6 lg:p-8 hover:border-grey-700/70 transition-all duration-300 group"
                            >
                                <AppH3 class="leading-tight mb-4 max-w-sm">
                                    {{ t("typesOfCookies.thirdParty.title") }}
                                </AppH3>
                                <p
                                    class="text-grey-300 text-sm lg:text-base leading-relaxed"
                                >
                                    {{
                                        t(
                                            "typesOfCookies.thirdParty.description"
                                        )
                                    }}
                                </p>
                            </div>
                        </div>
                    </section>

                    <!-- Section 3: Purpose -->
                    <section>
                        <h2
                            class="font-title text-2xl lg:text-3xl text-white mb-6"
                        >
                            {{ t("purpose.title") }}
                        </h2>
                        <p class="text-grey-200 leading-relaxed mb-4">
                            {{ t("purpose.intro") }}
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <span class="text-primary mr-3">•</span>
                                <span class="text-grey-200">{{
                                    t("purpose.items.preferences")
                                }}</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-primary mr-3">•</span>
                                <span class="text-grey-200">{{
                                    t("purpose.items.analytics")
                                }}</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-primary mr-3">•</span>
                                <span class="text-grey-200">{{
                                    t("purpose.items.functionality")
                                }}</span>
                            </li>
                        </ul>
                    </section>

                    <!-- Section 4: Cookie Management -->
                    <section>
                        <h2
                            class="font-title text-2xl lg:text-3xl text-white mb-6"
                        >
                            {{ t("management.title") }}
                        </h2>
                        <p class="text-grey-200 leading-relaxed mb-4">
                            {{ t("management.description") }}
                        </p>
                        <p class="text-grey-200 leading-relaxed mb-6">
                            {{ t("management.note") }}
                        </p>

                        <!-- Browser Links -->
                        <div class="bg-grey-900 rounded-lg p-6">
                            <p class="text-grey-200 mb-4 font-semibold">
                                {{ t("management.browserGuides") }}
                            </p>
                            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                <a
                                    href="https://support.google.com/chrome/answer/95647"
                                    target="_blank"
                                    rel="noopener"
                                    class="text-primary hover:text-white transition-colors duration-200"
                                >
                                    Google Chrome
                                </a>
                                <a
                                    href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                                    target="_blank"
                                    rel="noopener"
                                    class="text-primary hover:text-white transition-colors duration-200"
                                >
                                    Mozilla Firefox
                                </a>
                                <a
                                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                                    target="_blank"
                                    rel="noopener"
                                    class="text-primary hover:text-white transition-colors duration-200"
                                >
                                    Microsoft Edge
                                </a>
                                <a
                                    href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                                    target="_blank"
                                    rel="noopener"
                                    class="text-primary hover:text-white transition-colors duration-200"
                                >
                                    Safari
                                </a>
                            </div>
                        </div>
                    </section>

                    <!-- Section 5: Policy Changes -->
                    <section>
                        <h2
                            class="font-title text-2xl lg:text-3xl text-white mb-6"
                        >
                            {{ t("changes.title") }}
                        </h2>
                        <p class="text-grey-200 leading-relaxed">
                            {{ t("changes.description") }}
                        </p>
                    </section>

                    <!-- Section 6: Contact -->
                    <section class="bg-grey-900 rounded-lg p-8">
                        <h2
                            class="font-title text-2xl lg:text-3xl text-white mb-6"
                        >
                            {{ t("contact.title") }}
                        </h2>
                        <p class="text-grey-200 leading-relaxed mb-4">
                            {{ t("contact.description") }}
                        </p>
                        <div class="flex items-center">
                            <a
                                href="mailto:hi@lucassemelin.com"
                                class="text-primary hover:text-white transition-colors duration-200 text-lg"
                            >
                                hi@lucassemelin.com
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import AppH3 from "~/components/AppH3.vue";

const { t } = useI18n({
    useScope: "local",
});

// Dynamic title based on locale
useHead({
    title: computed(() => t("seo.title")),
});
</script>

<i18n lang="yaml">
es:
    seo:
        title: "Política de Cookies"
    title: "Política de Cookies"
    lastUpdated: "Última actualización: 26 de octubre de 2025"
    introduction: "En este sitio utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación, analizar el tráfico y optimizar el rendimiento general del sitio. Esta Política explica qué son las cookies, qué tipos usamos y cómo podés gestionarlas."

    whatAreCookies:
        title: "1. ¿Qué son las cookies?"
        content: "Las cookies son pequeños archivos de texto que los sitios web almacenan en tu navegador o dispositivo. Sirven para recordar tus preferencias, reconocer tu visita y ayudar a que el sitio funcione de manera más eficiente."

    typesOfCookies:
        title: "2. Tipos de cookies que utilizamos"
        essential:
            title: "a. Cookies esenciales"
            description: "Son necesarias para el funcionamiento básico del sitio y te permiten navegar, iniciar sesión o acceder a secciones seguras."
            note: "Estas cookies no pueden desactivarse desde nuestros sistemas."
        performance:
            title: "b. Cookies de rendimiento o analíticas"
            description: "Nos permiten recopilar información anónima sobre cómo las personas usan el sitio para mejorar su contenido y funcionalidad."
            example: "Por ejemplo, usamos herramientas como Plausible Analytics o Google Analytics para analizar tráfico y comportamiento de navegación."
        functionality:
            title: "c. Cookies de funcionalidad"
            description: "Almacenan tus preferencias (como idioma, tema oscuro o región) para ofrecerte una experiencia más personalizada."
        thirdParty:
            title: "d. Cookies de terceros"
            description: "Algunos servicios externos como YouTube, Vimeo, Figma o OpenAI pueden utilizar sus propias cookies cuando se integran contenidos o componentes embebidos."

    purpose:
        title: "3. Finalidad del uso de cookies"
        intro: "Usamos cookies para:"
        items:
            preferences: "Recordar tus preferencias de idioma y configuración."
            analytics: "Analizar la navegación y mejorar la experiencia del usuario."
            functionality: "Asegurar el correcto funcionamiento técnico del sitio web."

    management:
        title: "4. Cómo gestionar o desactivar las cookies"
        description: "Podés configurar tu navegador para aceptar, rechazar o eliminar cookies en cualquier momento."
        note: "Tené en cuenta que, si desactivás ciertas cookies, algunas funciones del sitio podrían verse afectadas o no funcionar correctamente."
        browserGuides: "A continuación, podés acceder a las guías de configuración de los navegadores más utilizados:"

    changes:
        title: "5. Actualizaciones de esta política"
        description: "Podemos actualizar esta Política de Cookies para reflejar cambios legales o técnicos en nuestro sitio. Cualquier modificación se publicará en esta misma página con la fecha de actualización correspondiente."

    contact:
        title: "6. Contacto"
        description: "Si tenés dudas sobre el uso de cookies o sobre esta política, podés escribirnos a:"

en:
    seo:
        title: "Cookie Policy"
    title: "Cookie Policy"
    lastUpdated: "Last updated: October 26, 2025"
    introduction: "We use cookies and similar technologies to improve your browsing experience, analyze traffic, and optimize overall site performance. This Policy explains what cookies are, which types we use, and how you can manage them."

    whatAreCookies:
        title: "1. What are cookies?"
        content: "Cookies are small text files stored by websites in your browser or device. They help remember your preferences, recognize your visit, and make the site work more efficiently."

    typesOfCookies:
        title: "2. Types of cookies we use"
        essential:
            title: "a. Essential cookies"
            description: "These are necessary for the website’s basic operation and allow you to navigate, log in, or access secure sections."
            note: "These cookies cannot be disabled from our systems."
        performance:
            title: "b. Performance or analytics cookies"
            description: "They help us collect anonymous data about how visitors use the site so we can improve its content and usability."
            example: "For instance, we use tools like Plausible Analytics or Google Analytics to measure traffic and browsing patterns."
        functionality:
            title: "c. Functionality cookies"
            description: "They store your preferences (like language, dark theme, or region) to provide a more personalized experience."
        thirdParty:
            title: "d. Third-party cookies"
            description: "Some external services such as YouTube, Vimeo, Figma, or OpenAI may use their own cookies when embedding content or components."

    purpose:
        title: "3. Purpose of using cookies"
        intro: "We use cookies to:"
        items:
            preferences: "Remember your language and configuration preferences."
            analytics: "Analyze browsing behavior and improve user experience."
            functionality: "Ensure the technical functionality of the website."

    management:
        title: "4. How to manage or disable cookies"
        description: "You can configure your browser to accept, reject, or delete cookies at any time."
        note: "Please note that disabling certain cookies may affect some site functions or features."
        browserGuides: "Here are links to cookie management guides for common browsers:"

    changes:
        title: "5. Updates to this policy"
        description: "We may update this Cookie Policy to reflect legal or technical changes on our site. Any modifications will be published here with the corresponding update date."

    contact:
        title: "6. Contact"
        description: "If you have questions about our use of cookies or about this policy, you can contact us at:"
</i18n>
