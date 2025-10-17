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
                                href="mailto:privacy@myntropic.studio"
                                class="text-primary hover:text-white transition-colors duration-200 text-lg"
                            >
                                privacy@myntropic.studio
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
    lastUpdated: "Última actualización: 16 de octubre de 2025"
    introduction: "En Myntropic Studio utilizamos cookies y tecnologías similares para mejorar la experiencia de navegación, analizar el tráfico del sitio y optimizar nuestros servicios. Esta Política explica qué son las cookies, qué tipos utilizamos, y cómo podés gestionarlas."

    whatAreCookies:
        title: "1. ¿Qué son las cookies?"
        content: "Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitás un sitio web. Sirven para recordar tus preferencias, registrar actividad de navegación o reconocer tu dispositivo en futuras visitas."

    typesOfCookies:
        title: "2. Tipos de cookies que utilizamos"
        essential:
            title: "a. Cookies esenciales"
            description: "Son necesarias para el funcionamiento básico del sitio y permiten navegar y utilizar sus funciones principales (por ejemplo, acceder a secciones seguras)."
            note: "Estas cookies no pueden desactivarse desde nuestros sistemas."
        performance:
            title: "b. Cookies de rendimiento o analíticas"
            description: "Nos permiten recopilar información anónima sobre cómo los visitantes utilizan el sitio, para mejorar su funcionamiento y contenido."
            example: "Por ejemplo, usamos herramientas como Google Analytics o Plausible Analytics para medir tráfico y patrones de uso."
        functionality:
            title: "c. Cookies de funcionalidad"
            description: "Guardan tus preferencias (idioma, tema oscuro, configuración de región, etc.) y ofrecen una experiencia más personalizada."
        thirdParty:
            title: "d. Cookies de terceros"
            description: "En ocasiones, servicios externos como YouTube, Vimeo, Figma o OpenAI pueden insertar cookies propias si integran contenido o componentes embebidos en el sitio."

    purpose:
        title: "3. Finalidad del uso de cookies"
        intro: "Usamos cookies para:"
        items:
            preferences: "Recordar tus preferencias de idioma y configuración."
            analytics: "Analizar el comportamiento de navegación y mejorar la experiencia del usuario."
            functionality: "Asegurar el correcto funcionamiento técnico del sitio web."

    management:
        title: "4. Gestión y desactivación de cookies"
        description: "Podés configurar tu navegador para aceptar, rechazar o eliminar cookies en cualquier momento."
        note: "Tené en cuenta que, si desactivás ciertas cookies, algunas funciones del sitio podrían no estar disponibles o no funcionar correctamente."
        browserGuides: "A continuación te dejamos enlaces a las guías de configuración de los navegadores más comunes:"

    changes:
        title: "5. Cambios en esta política"
        description: "Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en la normativa o en el uso de tecnologías en nuestro sitio. Las modificaciones entrarán en vigencia en el momento de su publicación."

    contact:
        title: "6. Contacto"
        description: "Si tenés dudas sobre el uso de cookies o sobre esta política, podés escribirnos a:"

en:
    seo:
        title: "Cookie Policy"
    title: "Cookie Policy"
    lastUpdated: "Last updated: October 16, 2025"
    introduction: "At Myntropic Studio we use cookies and similar technologies to improve browsing experience, analyze site traffic and optimize our services. This Policy explains what cookies are, what types we use, and how you can manage them."

    whatAreCookies:
        title: "1. What are cookies?"
        content: "Cookies are small text files that are stored in your browser when you visit a website. They serve to remember your preferences, record browsing activity or recognize your device on future visits."

    typesOfCookies:
        title: "2. Types of cookies we use"
        essential:
            title: "a. Essential cookies"
            description: "They are necessary for the basic functioning of the site and allow you to navigate and use its main functions (for example, access secure sections)."
            note: "These cookies cannot be disabled from our systems."
        performance:
            title: "b. Performance or analytics cookies"
            description: "They allow us to collect anonymous information about how visitors use the site, to improve its operation and content."
            example: "For example, we use tools like Google Analytics or Plausible Analytics to measure traffic and usage patterns."
        functionality:
            title: "c. Functionality cookies"
            description: "They save your preferences (language, dark theme, region settings, etc.) and offer a more personalized experience."
        thirdParty:
            title: "d. Third-party cookies"
            description: "Sometimes, external services like YouTube, Vimeo, Figma or OpenAI can insert their own cookies if they integrate embedded content or components on the site."

    purpose:
        title: "3. Purpose of using cookies"
        intro: "We use cookies to:"
        items:
            preferences: "Remember your language and configuration preferences."
            analytics: "Analyze browsing behavior and improve user experience."
            functionality: "Ensure proper technical functioning of the website."

    management:
        title: "4. Cookie management and deactivation"
        description: "You can configure your browser to accept, reject or delete cookies at any time."
        note: "Keep in mind that if you disable certain cookies, some site functions may not be available or may not work properly."
        browserGuides: "Below are links to configuration guides for the most common browsers:"

    changes:
        title: "5. Changes to this policy"
        description: "We may update this Cookie Policy occasionally to reflect changes in regulations or in the use of technologies on our site. Modifications will take effect at the time of publication."

    contact:
        title: "6. Contact"
        description: "If you have questions about the use of cookies or about this policy, you can write to us at:"
</i18n>
