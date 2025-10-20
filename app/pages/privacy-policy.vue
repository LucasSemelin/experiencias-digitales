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
                    <!-- Section 1: Information we collect -->
                    <section>
                        <h2
                            class="font-title text-2xl lg:text-3xl text-white mb-6"
                        >
                            {{ t("informationWeCollect.title") }}
                        </h2>
                        <p class="text-grey-200 leading-relaxed mb-6">
                            {{ t("informationWeCollect.intro") }}
                        </p>

                        <div class="space-y-6">
                            <div
                                class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl p-6"
                            >
                                <h3
                                    class="bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent text-xl font-semibold mb-3"
                                >
                                    {{
                                        t(
                                            "informationWeCollect.contactData.title"
                                        )
                                    }}
                                </h3>
                                <p class="text-grey-300 leading-relaxed">
                                    {{
                                        t(
                                            "informationWeCollect.contactData.description"
                                        )
                                    }}
                                </p>
                            </div>

                            <div
                                class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl p-6"
                            >
                                <h3
                                    class="bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent text-xl font-semibold mb-3"
                                >
                                    {{
                                        t(
                                            "informationWeCollect.navigationData.title"
                                        )
                                    }}
                                </h3>
                                <p class="text-grey-300 leading-relaxed">
                                    {{
                                        t(
                                            "informationWeCollect.navigationData.description"
                                        )
                                    }}
                                </p>
                            </div>

                            <div
                                class="bg-grey-900/30 backdrop-blur-sm border border-grey-800/50 rounded-xl p-6"
                            >
                                <h3
                                    class="bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent text-xl font-semibold mb-3"
                                >
                                    {{
                                        t(
                                            "informationWeCollect.communicationData.title"
                                        )
                                    }}
                                </h3>
                                <p class="text-grey-300 leading-relaxed">
                                    {{
                                        t(
                                            "informationWeCollect.communicationData.description"
                                        )
                                    }}
                                </p>
                            </div>
                        </div>

                        <p class="text-primary font-semibold mt-6">
                            {{ t("informationWeCollect.sensitiveDataNote") }}
                        </p>
                    </section>

                    <!-- Section 2: Purpose of processing -->
                    <section>
                        <h2
                            class="font-title text-2xl lg:text-3xl text-white mb-6"
                        >
                            {{ t("purposeOfProcessing.title") }}
                        </h2>
                        <p class="text-grey-200 leading-relaxed mb-4">
                            {{ t("purposeOfProcessing.intro") }}
                        </p>
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-start">
                                <span class="text-primary mr-3">•</span>
                                <span class="text-grey-200">{{
                                    t("purposeOfProcessing.items.respond")
                                }}</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-primary mr-3">•</span>
                                <span class="text-grey-200">{{
                                    t("purposeOfProcessing.items.maintain")
                                }}</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-primary mr-3">•</span>
                                <span class="text-grey-200">{{
                                    t("purposeOfProcessing.items.analyze")
                                }}</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-primary mr-3">•</span>
                                <span class="text-grey-200">{{
                                    t("purposeOfProcessing.items.comply")
                                }}</span>
                            </li>
                        </ul>
                        <p class="text-grey-300 italic">
                            {{ t("purposeOfProcessing.advertisingNote") }}
                        </p>
                    </section>

                    <!-- Section 3: Legal basis -->
                    <section>
                        <h2
                            class="font-title text-2xl lg:text-3xl text-white mb-6"
                        >
                            {{ t("legalBasis.title") }}
                        </h2>
                        <p class="text-grey-200 leading-relaxed mb-6">
                            {{ t("legalBasis.intro") }}
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <span class="text-primary mr-3">•</span>
                                <span class="text-grey-200">
                                    <strong class="text-white"
                                        >{{
                                            t("legalBasis.items.consent.title")
                                        }}:</strong
                                    >
                                    {{
                                        t(
                                            "legalBasis.items.consent.description"
                                        )
                                    }}
                                </span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-primary mr-3">•</span>
                                <span class="text-grey-200">
                                    <strong class="text-white"
                                        >{{
                                            t(
                                                "legalBasis.items.contract.title"
                                            )
                                        }}:</strong
                                    >
                                    {{
                                        t(
                                            "legalBasis.items.contract.description"
                                        )
                                    }}
                                </span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-primary mr-3">•</span>
                                <span class="text-grey-200">
                                    <strong class="text-white"
                                        >{{
                                            t(
                                                "legalBasis.items.legitimateInterest.title"
                                            )
                                        }}:</strong
                                    >
                                    {{
                                        t(
                                            "legalBasis.items.legitimateInterest.description"
                                        )
                                    }}
                                </span>
                            </li>
                        </ul>
                    </section>

                    <!-- Section 4: Cookies -->
                    <section>
                        <h2
                            class="font-title text-2xl lg:text-3xl text-white mb-6"
                        >
                            {{ t("cookies.title") }}
                        </h2>
                        <p class="text-grey-200 leading-relaxed">
                            {{ t("cookies.description") }}
                            <NuxtLink
                                to="/cookie-policy/"
                                class="text-primary hover:text-white transition-colors duration-200 underline"
                            >
                                {{ t("cookies.link") }} </NuxtLink
                            >{{ t("cookies.suffix") }}
                        </p>
                    </section>

                    <!-- Section 5: Data retention -->
                    <section>
                        <h2
                            class="font-title text-2xl lg:text-3xl text-white mb-6"
                        >
                            {{ t("dataRetention.title") }}
                        </h2>
                        <p class="text-grey-200 leading-relaxed">
                            {{ t("dataRetention.description") }}
                        </p>
                    </section>

                    <!-- Section 6: Data sharing -->
                    <section>
                        <h2
                            class="font-title text-2xl lg:text-3xl text-white mb-6"
                        >
                            {{ t("dataSharing.title") }}
                        </h2>
                        <p class="text-grey-200 leading-relaxed mb-4">
                            {{ t("dataSharing.intro") }}
                        </p>
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-start">
                                <span class="text-primary mr-3">•</span>
                                <span class="text-grey-200">{{
                                    t("dataSharing.items.services")
                                }}</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-primary mr-3">•</span>
                                <span class="text-grey-200">{{
                                    t("dataSharing.items.legal")
                                }}</span>
                            </li>
                        </ul>
                        <p class="text-grey-300 italic">
                            {{ t("dataSharing.providersNote") }}
                        </p>
                    </section>

                    <!-- Section 7: Data security -->
                    <section>
                        <h2
                            class="font-title text-2xl lg:text-3xl text-white mb-6"
                        >
                            {{ t("dataSecurity.title") }}
                        </h2>
                        <p class="text-grey-200 leading-relaxed">
                            {{ t("dataSecurity.description") }}
                        </p>
                    </section>

                    <!-- Section 8: User rights -->
                    <section>
                        <h2
                            class="font-title text-2xl lg:text-3xl text-white mb-6"
                        >
                            {{ t("userRights.title") }}
                        </h2>
                        <p class="text-grey-200 leading-relaxed mb-4">
                            {{ t("userRights.intro") }}
                        </p>
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-start">
                                <span class="text-primary mr-3">•</span>
                                <span class="text-grey-200">{{
                                    t("userRights.items.access")
                                }}</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-primary mr-3">•</span>
                                <span class="text-grey-200">{{
                                    t("userRights.items.erasure")
                                }}</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-primary mr-3">•</span>
                                <span class="text-grey-200">{{
                                    t("userRights.items.restriction")
                                }}</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-primary mr-3">•</span>
                                <span class="text-grey-200">{{
                                    t("userRights.items.portability")
                                }}</span>
                            </li>
                        </ul>
                        <div class="bg-grey-900 rounded-lg p-6">
                            <p class="text-grey-200 mb-4">
                                {{ t("userRights.contact.description") }}
                                <a
                                    href="mailto:privacy@myntropic.studio"
                                    class="text-primary hover:text-white transition-colors duration-200"
                                >
                                    {{
                                        t("userRights.contact.email").replace(
                                            "{at}",
                                            "@"
                                        )
                                    }}
                                </a>
                                {{
                                    t("userRights.contact.descriptionContinue")
                                }}
                            </p>
                            <div class="flex items-center">
                                <a
                                    href="mailto:privacy@myntropic.studio"
                                    class="text-primary hover:text-white transition-colors duration-200 text-lg"
                                >
                                    privacy@myntropic.studio
                                </a>
                            </div>
                            <p class="text-grey-300 text-sm mt-2">
                                {{ t("userRights.contact.subject") }}
                            </p>
                        </div>
                    </section>

                    <!-- Section 9: External links -->
                    <section>
                        <h2
                            class="font-title text-2xl lg:text-3xl text-white mb-6"
                        >
                            {{ t("externalLinks.title") }}
                        </h2>
                        <p class="text-grey-200 leading-relaxed">
                            {{ t("externalLinks.description") }}
                        </p>
                    </section>

                    <!-- Section 10: Policy changes -->
                    <section>
                        <h2
                            class="font-title text-2xl lg:text-3xl text-white mb-6"
                        >
                            {{ t("policyChanges.title") }}
                        </h2>
                        <p class="text-grey-200 leading-relaxed">
                            {{ t("policyChanges.description") }}
                        </p>
                    </section>

                    <!-- Section 11: Contact -->
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
        title: "Política de Privacidad — Myntropic Studio"
    title: "Política de Privacidad — Myntropic Studio"
    lastUpdated: "Última actualización: 16 de octubre de 2025"
    introduction: "En Myntropic Studio respetamos y protegemos la privacidad de todas las personas que visitan nuestro sitio web o utilizan nuestros servicios. Esta Política de Privacidad explica qué información recopilamos, cómo la utilizamos y cuáles son tus derechos respecto a tus datos personales."

    informationWeCollect:
        title: "1. Información que recopilamos"
        intro: "Podemos recopilar los siguientes tipos de información:"
        contactData:
            title: "Datos de contacto"
            description: "nombre, correo electrónico o cualquier información que proporciones al completar formularios de contacto o suscripción."
        navigationData:
            title: "Datos de navegación"
            description: "dirección IP, tipo de dispositivo, sistema operativo, navegador, páginas visitadas y tiempo de permanencia, recopilados mediante cookies o herramientas analíticas."
        communicationData:
            title: "Datos de comunicación"
            description: "mensajes, solicitudes o comentarios que envíes por correo electrónico o a través del sitio."
        sensitiveDataNote: "No solicitamos ni almacenamos información sensible (por ejemplo, datos financieros, de salud o biométricos)."

    purposeOfProcessing:
        title: "2. Finalidad del tratamiento"
        intro: "Utilizamos los datos recopilados para:"
        items:
            respond: "Responder consultas, solicitudes o mensajes que nos envíes."
            maintain: "Mantener la comunicación comercial con clientes y colaboradores."
            analyze: "Analizar el uso del sitio web y mejorar su funcionalidad y experiencia de usuario."
            comply: "Cumplir con obligaciones legales o contractuales derivadas de nuestra actividad."
        advertisingNote: "No utilizamos tus datos con fines publicitarios sin tu consentimiento explícito."

    legalBasis:
        title: "3. Base legal para el tratamiento"
        intro: "Tratamos la información personal sobre las siguientes bases legales:"
        items:
            consent:
                title: "Consentimiento"
                description: "cuando completás un formulario o aceptás cookies analíticas."
            contract:
                title: "Ejecución de un contrato o relación comercial"
                description: "en caso de clientes o colaboradores."
            legitimateInterest:
                title: "Interés legítimo"
                description: "para mantener la seguridad, mejorar los servicios o prevenir fraudes."

    cookies:
        title: "4. Uso de cookies y tecnologías similares"
        description: "Este sitio utiliza cookies propias y de terceros para su funcionamiento, análisis de tráfico y mejora continua. Podés conocer más en detalle cómo las usamos en nuestra "
        link: "Política de Cookies"
        suffix: "."

    dataRetention:
        title: "5. Conservación de los datos"
        description: "Conservamos los datos personales solo durante el tiempo necesario para cumplir con las finalidades descritas o mientras exista una relación activa (por ejemplo, cliente o suscriptor). Una vez cumplido ese plazo, los datos se eliminan o se anonimizan de manera segura."

    dataSharing:
        title: "6. Comunicación de datos a terceros"
        intro: "No vendemos, alquilamos ni compartimos tus datos personales con terceros, salvo en los siguientes casos:"
        items:
            services: "Cuando sea necesario para prestar un servicio (por ejemplo, hosting, analítica o mantenimiento)."
            legal: "Cuando exista una obligación legal o requerimiento de autoridad competente."
        providersNote: "Todos los proveedores que colaboran con Myntropic Studio están sujetos a acuerdos de confidencialidad y protección de datos."

    dataSecurity:
        title: "7. Seguridad de la información"
        description: "Implementamos medidas técnicas y organizativas adecuadas para proteger tus datos frente a accesos no autorizados, pérdida, alteración o divulgación. Aun así, ningún sistema es completamente invulnerable; por eso, trabajamos constantemente para mantener los más altos estándares de seguridad."

    userRights:
        title: "8. Derechos de los usuarios"
        intro: "Podés ejercer en cualquier momento tus derechos de:"
        items:
            access: "Acceso, rectificación o actualización de tus datos."
            erasure: 'Supresión ("derecho al olvido").'
            restriction: "Limitación u oposición al tratamiento."
            portability: "Portabilidad de tus datos a otro responsable."
        contact:
            description: "Para hacerlo, escribinos a "
            email: "privacy{at}myntropic.studio"
            descriptionContinue: ' con el asunto "Ejercicio de derechos de privacidad". Responderemos a tu solicitud lo antes posible.'
            subject: 'Asunto: "Ejercicio de derechos de privacidad"'

    externalLinks:
        title: "9. Enlaces a otros sitios"
        description: "Nuestro sitio puede contener enlaces a sitios externos. Myntropic Studio no se hace responsable de las prácticas de privacidad ni del contenido de dichos sitios de terceros."

    policyChanges:
        title: "10. Cambios en esta política"
        description: "Podemos actualizar esta Política de Privacidad en cualquier momento para adaptarla a cambios legales, técnicos o en nuestros servicios. La versión vigente será siempre la publicada en esta página, indicando la fecha de la última actualización."

    contact:
        title: "11. Contacto"
        description: "Si tenés preguntas sobre esta política o sobre el tratamiento de tus datos personales, podés contactarnos en:"

en:
    seo:
        title: "Privacy Policy — Myntropic Studio"
    title: "Privacy Policy — Myntropic Studio"
    lastUpdated: "Last updated: October 16, 2025"
    introduction: "At Myntropic Studio we respect and protect the privacy of all people who visit our website or use our services. This Privacy Policy explains what information we collect, how we use it and what your rights are regarding your personal data."

    informationWeCollect:
        title: "1. Information we collect"
        intro: "We may collect the following types of information:"
        contactData:
            title: "Contact data"
            description: "name, email or any information you provide when completing contact or subscription forms."
        navigationData:
            title: "Navigation data"
            description: "IP address, device type, operating system, browser, pages visited and time spent, collected through cookies or analytical tools."
        communicationData:
            title: "Communication data"
            description: "messages, requests or comments you send by email or through the site."
        sensitiveDataNote: "We do not request or store sensitive information (for example, financial, health or biometric data)."

    purposeOfProcessing:
        title: "2. Purpose of processing"
        intro: "We use the collected data to:"
        items:
            respond: "Respond to inquiries, requests or messages you send us."
            maintain: "Maintain commercial communication with clients and collaborators."
            analyze: "Analyze website usage and improve its functionality and user experience."
            comply: "Comply with legal or contractual obligations arising from our activity."
        advertisingNote: "We do not use your data for advertising purposes without your explicit consent."

    legalBasis:
        title: "3. Legal basis for processing"
        intro: "We process personal information on the following legal bases:"
        items:
            consent:
                title: "Consent"
                description: "when you complete a form or accept analytical cookies."
            contract:
                title: "Contract execution or commercial relationship"
                description: "in case of clients or collaborators."
            legitimateInterest:
                title: "Legitimate interest"
                description: "to maintain security, improve services or prevent fraud."

    cookies:
        title: "4. Use of cookies and similar technologies"
        description: "This site uses own and third-party cookies for its operation, traffic analysis and continuous improvement. You can learn more about how we use them in our "
        link: "Cookie Policy"
        suffix: "."

    dataRetention:
        title: "5. Data retention"
        description: "We retain personal data only for the time necessary to fulfill the described purposes or while an active relationship exists (for example, client or subscriber). Once that period is fulfilled, the data is deleted or anonymized securely."

    dataSharing:
        title: "6. Data sharing with third parties"
        intro: "We do not sell, rent or share your personal data with third parties, except in the following cases:"
        items:
            services: "When necessary to provide a service (for example, hosting, analytics or maintenance)."
            legal: "When there is a legal obligation or requirement from competent authority."
        providersNote: "All providers that collaborate with Myntropic Studio are subject to confidentiality and data protection agreements."

    dataSecurity:
        title: "7. Information security"
        description: "We implement adequate technical and organizational measures to protect your data against unauthorized access, loss, alteration or disclosure. Even so, no system is completely invulnerable; therefore, we work constantly to maintain the highest security standards."

    userRights:
        title: "8. User rights"
        intro: "You can exercise your rights at any time:"
        items:
            access: "Access, rectification or updating of your data."
            erasure: 'Erasure ("right to be forgotten").'
            restriction: "Limitation or opposition to processing."
            portability: "Portability of your data to another controller."
        contact:
            description: "To do so, write to us at "
            email: "privacy{at}myntropic.studio"
            descriptionContinue: ' with the subject "Exercise of privacy rights". We will respond to your request as soon as possible.'
            subject: 'Subject: "Exercise of privacy rights"'

    externalLinks:
        title: "9. Links to other sites"
        description: "Our site may contain links to external sites. Myntropic Studio is not responsible for the privacy practices or content of such third-party sites."

    policyChanges:
        title: "10. Changes to this policy"
        description: "We may update this Privacy Policy at any time to adapt it to legal, technical or service changes. The current version will always be the one published on this page, indicating the date of the last update."

    contact:
        title: "11. Contact"
        description: "If you have questions about this policy or about the processing of your personal data, you can contact us at:"
</i18n>
