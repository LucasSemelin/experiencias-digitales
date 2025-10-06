<template>
    <section id="contact" class="bg-dark py-16 px-4 lg:px-8">
        <div class="max-w-6xl mx-auto">
            <!-- Title Section -->
            <div class="mb-12">
                <AppH2>
                    {{ t("title") }}
                </AppH2>
                <AppSectionSubtitle>
                    {{ t("subtitle") }}
                </AppSectionSubtitle>
            </div>

            <!-- Contact Form -->
            <div class="max-w-2xl mx-auto">
                <div
                    class="bg-dark/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
                >
                    <form
                        class="grid grid-cols-1 gap-6"
                        @submit.prevent="submitForm"
                    >
                        <!-- Full Name -->
                        <div>
                            <label
                                for="name"
                                class="block text-sm font-medium text-slate-300 mb-2"
                            >
                                {{ t("fullNameLabel") }}
                            </label>
                            <input
                                id="name"
                                v-model="form.name"
                                type="text"
                                autocomplete="name"
                                class="block w-full rounded-xl border border-grey-800/50 bg-grey-900/30 text-white focus:ring-4 focus:ring-primary focus:outline-none sm:text-sm p-4"
                                :placeholder="t('fullNamePlaceholder')"
                                required
                            />
                        </div>

                        <!-- Email -->
                        <div>
                            <label
                                for="email"
                                class="block text-sm font-medium text-slate-300 mb-2"
                            >
                                {{ t("emailLabel") }}
                            </label>
                            <input
                                id="email"
                                v-model="form.email"
                                type="email"
                                autocomplete="email"
                                class="block w-full rounded-xl border border-grey-800/50 bg-grey-900/30 text-white focus:ring-4 focus:ring-primary focus:outline-none sm:text-sm p-4"
                                placeholder="example@domain.com"
                                required
                            />
                        </div>

                        <!-- Company / Organization -->
                        <div>
                            <label
                                for="company"
                                class="block text-sm font-medium text-slate-300 mb-2"
                            >
                                {{ t("companyLabel") }}
                            </label>
                            <input
                                id="company"
                                v-model="form.company"
                                type="text"
                                autocomplete="organization"
                                class="block w-full rounded-xl border border-grey-800/50 bg-grey-900/30 text-white focus:ring-4 focus:ring-primary focus:outline-none sm:text-sm p-4"
                                :placeholder="t('companyPlaceholder')"
                            />
                        </div>

                        <!-- Project Type -->
                        <!-- <div>
                            <label
                                for="projectType"
                                class="block text-sm font-medium text-slate-300 mb-2"
                            >
                                {{ t("projectTypeLabel") }}
                            </label>
                            <select
                                v-model="form.projectType"
                                id="projectType"
                                class="block w-full rounded-xl border-grey-800/50 bg-slate-800 text-white focus:ring-4 focus:ring-primary focus:outline-none sm:text-sm p-4"
                            >
                                <option value="">
                                    {{ t("projectTypeDefault") }}
                                </option>
                                <option value="ux-design">
                                    {{ t("projectTypeUx") }}
                                </option>
                                <option value="engineering">
                                    {{ t("projectTypeEngineering") }}
                                </option>
                                <option value="ai-integration">
                                    {{ t("projectTypeAi") }}
                                </option>
                                <option value="combined">
                                    {{ t("projectTypeCombined") }}
                                </option>
                                <option value="other">
                                    {{ t("projectTypeOther") }}
                                </option>
                            </select>
                        </div> -->

                        <!-- Budget Range -->
                        <!-- <div>
                            <label
                                for="budget"
                                class="block text-sm font-medium text-slate-300 mb-2"
                            >
                                {{ t("budgetLabel") }}
                            </label>
                            <select
                                v-model="form.budget"
                                id="budget"
                                class="block w-full rounded-xl border-grey-800/50 bg-slate-800 text-white focus:ring-4 focus:ring-primary focus:outline-none sm:text-sm p-4"
                            >
                                <option value="">
                                    {{ t("budgetDefault") }}
                                </option>
                                <option value="not-sure">
                                    {{ t("budgetNotSure") }}
                                </option>
                                <option value="under-2k">
                                    {{ t("budgetUnder2k") }}
                                </option>
                                <option value="2k-5k">
                                    {{ t("budget2k5k") }}
                                </option>
                                <option value="5k-10k">
                                    {{ t("budget5k10k") }}
                                </option>
                                <option value="over-10k">
                                    {{ t("budgetOver10k") }}
                                </option>
                            </select>
                        </div> -->

                        <!-- Message / Project Details -->
                        <div>
                            <label
                                for="message"
                                class="block text-sm font-medium text-slate-300 mb-2"
                            >
                                {{ t("messageLabel") }}
                            </label>
                            <textarea
                                id="message"
                                v-model="form.message"
                                rows="6"
                                class="block w-full rounded-xl border resize-none border-grey-800/50 bg-grey-900/30 text-white focus:ring-4 focus:ring-primary focus:outline-none sm:text-sm p-4"
                                :placeholder="t('messagePlaceholder')"
                                required
                            ></textarea>
                        </div>

                        <!-- File Upload -->
                        <div>
                            <label
                                for="files"
                                class="block text-sm font-medium text-slate-300 mb-2"
                            >
                                {{ t("fileUploadLabel") }}
                            </label>
                            <div class="relative">
                                <input
                                    @change="handleFileUpload"
                                    type="file"
                                    id="files"
                                    multiple
                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                                    class="hidden"
                                />
                                <label
                                    for="files"
                                    class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-grey-800/50 rounded-xl cursor-pointer bg-grey-900/30 hover:bg-slate-700/50 transition-all duration-300 group"
                                >
                                    <div
                                        class="flex flex-col items-center justify-center pt-5 pb-6"
                                    >
                                        <svg
                                            class="w-8 h-8 mb-4 text-slate-400 group-hover:text-primary transition-colors"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>
                                        <p
                                            class="mb-2 text-sm text-slate-400 group-hover:text-white transition-colors"
                                        >
                                            <span class="font-semibold">{{
                                                t("fileUploadClick")
                                            }}</span>
                                            {{ t("fileUploadDrag") }}
                                        </p>
                                        <p
                                            class="text-xs text-slate-500 group-hover:text-slate-400 transition-colors"
                                        >
                                            {{ t("fileUploadFormats") }}
                                        </p>
                                    </div>
                                </label>
                                <!-- File names display -->
                                <div
                                    v-if="form.files && form.files.length > 0"
                                    class="mt-3"
                                >
                                    <div class="flex flex-wrap gap-2">
                                        <div
                                            v-for="(file, index) in form.files"
                                            :key="index"
                                            class="flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-lg px-3 py-1 text-sm"
                                        >
                                            <svg
                                                class="w-4 h-4 text-primary"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span
                                                class="text-white text-xs truncate max-w-32"
                                                >{{ file.name }}</span
                                            >
                                            <button
                                                @click="removeFile(index)"
                                                type="button"
                                                class="text-primary hover:text-primary transition-colors"
                                            >
                                                <svg
                                                    class="w-4 h-4"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="text-xs text-slate-400 mt-2">
                                {{ t("fileUploadDescription") }}
                            </p>
                        </div>

                        <!-- Submit Button -->
                        <AppButton
                            type="submit"
                            :disabled="sendingForm === 'sending'"
                        >
                            <span v-if="sendingForm === 'success'">{{
                                t("submitSuccess")
                            }}</span>
                            <span v-else-if="sendingForm === 'sending'">{{
                                t("submitSending")
                            }}</span>
                            <span v-else>{{ t("submitButton") }}</span>
                        </AppButton>
                    </form>
                </div>
            </div>

            <!-- Alternative Contact Options -->
            <div class="py-12">
                <div class="max-w-2xl mx-auto text-center">
                    <div class="space-y-6">
                        <!-- Email -->
                        <div
                            class="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <span class="text-xl text-white font-body">
                                hi@myntropic.com
                            </span>
                            <button
                                class="px-4 py-2 text-xs flex items-center gap-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors hover:cursor-pointer"
                                @click="copy(email)"
                            >
                                <NuxtImg
                                    src="/images/icons/copy.svg"
                                    class="inline size-4"
                                />
                                <span
                                    class="text-sm text-white"
                                    v-if="copied"
                                    >{{ t("emailCopied") }}</span
                                >
                                <span class="text-xs text-white" v-else>{{
                                    t("emailCopy")
                                }}</span>
                            </button>
                        </div>

                        <!-- Social Links -->
                        <div class="flex justify-center gap-6">
                            <!-- LinkedIn -->
                            <NuxtLink
                                to="https://www.linkedin.com/company/myntropic/"
                                target="_blank"
                                class="flex items-center gap-3 px-4 py-3 bg-grey-900/30 rounded-xl hover:bg-slate-700/50 text-primary hover:text-primary transition-all duration-300 group"
                            >
                                <NuxtImg
                                    src="/images/icons/linkedin.svg"
                                    class="size-6 group-hover:scale-110 transition-transform duration-300"
                                />
                            </NuxtLink>

                            <!-- Twitter (X) -->
                            <NuxtLink
                                to="https://x.com/myntropic"
                                target="_blank"
                                class="flex items-center gap-3 px-4 py-3 bg-grey-900/30 rounded-xl hover:bg-slate-700/50 text-primary hover:text-primary transition-all duration-300 group"
                            >
                                <NuxtImg
                                    src="/images/icons/x.svg"
                                    class="size-6 group-hover:scale-110 transition-transform duration-300"
                                />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useClipboard } from "@vueuse/core";
import AppButton from "./AppButton.vue";
import AppH2 from "./AppH2.vue";
import AppSectionSubtitle from "./AppSectionSubtitle.vue";

const { t } = useI18n({ useScope: "local" });

const email = ref("hi@myntropic.com");
const { copy, copied } = useClipboard({ email });

const form = ref({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
    files: [],
});

const sendingForm = ref("idle");

const submitForm = async () => {
    sendingForm.value = "sending";

    try {
        const formData = new FormData();
        formData.append("name", form.value.name);
        formData.append("email", form.value.email);
        formData.append("company", form.value.company || "");
        formData.append("projectType", form.value.projectType || "");
        formData.append("budget", form.value.budget || "");
        formData.append("message", form.value.message);

        // Add files to FormData
        if (form.value.files && form.value.files.length > 0) {
            form.value.files.forEach((file, index) => {
                formData.append(`file_${index}`, file);
            });
        }

        await $fetch("/api/send", {
            method: "POST",
            body: formData,
        });

        sendingForm.value = "success";
        // Reset form after successful submission
        setTimeout(() => {
            form.value = {
                name: "",
                email: "",
                company: "",
                projectType: "",
                budget: "",
                message: "",
                files: [],
            };
            sendingForm.value = "idle";
        }, 3000);
    } catch (error) {
        console.error("Error submitting form:", error);
        sendingForm.value = "idle";
    }
};

const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    form.value.files = files;
};

const removeFile = (index) => {
    form.value.files.splice(index, 1);
};
</script>

<i18n lang="yaml">
es:
    title: "Hagamos experiencias inteligentes que potencien a las personas."
    subtitle: "Cada proyecto es único. Queremos entender tu contexto para diseñar la mejor solución juntos."
    fullNameLabel: "Nombre completo *"
    fullNamePlaceholder: "Tu nombre completo"
    emailLabel: "Correo electrónico *"
    companyLabel: "Empresa / Organización"
    companyPlaceholder: "Tu empresa u organización"
    projectTypeLabel: "Tipo de proyecto"
    projectTypeDefault: "Seleccioná las áreas que necesitás"
    projectTypeUx: "Diseño UX"
    projectTypeEngineering: "Ingeniería de software"
    projectTypeAi: "Integración y automatización con IA"
    projectTypeCombined: "Combinación de varias"
    projectTypeOther: "Otro / No estoy seguro"
    budgetLabel: "Rango de presupuesto"
    budgetDefault: "Seleccioná el rango de presupuesto"
    budgetNotSure: "No estoy seguro"
    budgetUnder2k: "Menos de USD 2.000"
    budget2k5k: "USD 2.000 - USD 5.000"
    budget5k10k: "USD 5.000 - USD 10.000"
    budgetOver10k: "Más de USD 10.000"
    messageLabel: "Mensaje / Detalles del proyecto *"
    messagePlaceholder: "Contanos sobre tu proyecto, objetivos, plazos o cualquier requerimiento específico..."
    fileUploadLabel: "Subir archivos (opcional)"
    fileUploadClick: "Hacé clic para subir"
    fileUploadDrag: "o arrastrá y soltá"
    fileUploadFormats: "PDF, DOC, DOCX, JPG, PNG, GIF (MAX. 10MB)"
    fileUploadDescription: "Subí briefs, RFPs, capturas de pantalla u otros archivos relevantes"
    submitButton: "Enviar mensaje"
    submitSending: "Enviando..."
    submitSuccess: "¡Mensaje enviado!"
    alternativeTitle: "¿Preferís otra forma de contacto?"
    emailCopy: "Copiar email"
    emailCopied: "¡Copiado!"

en:
    title: "Let's Build What's Next"
    subtitle: "Have an idea for a smarter product? Whether you're planning something new or evolving a live platform, we can help you design and build intelligent web software, where AI feels seamless, UX feels intuitive, and engineering stands the test of time."
    fullNameLabel: "Full Name *"
    fullNamePlaceholder: "Your full name"
    emailLabel: "Email *"
    companyLabel: "Company / Organization"
    companyPlaceholder: "Your company or organization"
    projectTypeLabel: "Project Type"
    projectTypeDefault: "Select the areas you need"
    projectTypeUx: "UX Design"
    projectTypeEngineering: "Software Engineering"
    projectTypeAi: "AI Integration & Automation"
    projectTypeCombined: "Combination of Services"
    projectTypeOther: "Other / Not Sure Yet"
    budgetLabel: "Budget Range"
    budgetDefault: "Select budget range"
    budgetNotSure: "Not sure yet"
    budgetUnder2k: "Under $2,000"
    budget2k5k: "$2,000 - $5,000"
    budget5k10k: "$5,000 - $10,000"
    budgetOver10k: "Over $10,000"
    messageLabel: "Message / Project Details *"
    messagePlaceholder: "Tell us about your project, goals, timeline, or any specific requirements..."
    fileUploadLabel: "File Upload (optional)"
    fileUploadClick: "Click to upload"
    fileUploadDrag: "or drag and drop"
    fileUploadFormats: "PDF, DOC, DOCX, JPG, PNG, GIF (MAX. 10MB)"
    fileUploadDescription: "Upload briefs, RFPs, screenshots, or other relevant files"
    submitButton: "Send Message"
    submitSending: "Sending..."
    submitSuccess: "Message Sent!"
    alternativeTitle: "Prefer a different way to connect?"
    emailCopy: "Copy email"
    emailCopied: "Copied!"
</i18n>
