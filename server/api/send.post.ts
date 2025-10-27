import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
    const formData = await readFormData(event);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    // const projectType = formData.get('projectType') as string;
    // const budget = formData.get('budget') as string;
    const message = formData.get("message") as string;

    // Extract files from FormData
    const files: Array<{ name: string; size: number; type: string }> = [];
    const attachments: Array<{
        filename: string;
        content: string;
        type: string;
    }> = [];

    console.log(
        "FormData entries:",
        Array.from(formData.entries()).map(([key, value]) => ({
            key,
            valueType: typeof value,
            isFile: value instanceof File,
        }))
    );

    for (const [key, value] of formData.entries()) {
        if (key.startsWith("file_") && value instanceof File) {
            files.push({
                name: value.name,
                size: value.size,
                type: value.type,
            });

            // Convert file to base64 for attachment
            const arrayBuffer = await value.arrayBuffer();
            const base64Content = Buffer.from(arrayBuffer).toString("base64");

            attachments.push({
                filename: value.name,
                content: base64Content,
                type: value.type,
            });
        }
    }
    // Helper function to safely display optional fields
    const displayField = (
        value: string | undefined | null,
        defaultText = "Not specified"
    ): string => {
        return value && value.trim() !== "" ? value : defaultText;
    };

    // Format project type for display
    // const formatProjectType = (type: string | undefined | null): string => {
    //     const typeMap: Record<string, string> = {
    //         "ux-design": "UX Design",
    //         "engineering": "Engineering",
    //         "ai-integration": "AI Integration",
    //         "other": "Other"
    //     };
    //     return (type && typeMap[type]) || displayField(type);
    // };

    // Format budget for display
    // const formatBudget = (budget: string | undefined | null): string => {
    //     const budgetMap: Record<string, string> = {
    //         "not-sure": "Not sure yet",
    //         "under-2k": "Under $2,000",
    //         "2k-5k": "$2,000 - $5,000",
    //         "5k-10k": "$5,000 - $10,000",
    //         "over-10k": "Over $10,000"
    //     };
    //     return (budget && budgetMap[budget]) || displayField(budget);
    // };

    // Format files list
    const formatFiles = (
        files:
            | Array<{ name: string; size: number; type: string }>
            | undefined
            | null
    ): string => {
        if (!files || !Array.isArray(files) || files.length === 0) {
            return "No files attached";
        }

        const validFiles = files.filter((file) => file && file.name);
        if (validFiles.length === 0) {
            return "No files attached";
        }

        return validFiles
            .map((file) => {
                const fileName = file.name;
                const fileSize =
                    file.size && !isNaN(file.size)
                        ? Math.round(file.size / 1024)
                        : 0;
                return `• ${fileName} (${
                    fileSize > 0 ? `${fileSize}KB` : "Unknown size"
                })`;
            })
            .join("\n");
    };

    // Helper function to get file icon based on type
    const getFileIcon = (type: string, name: string): string => {
        if (type.startsWith("image/")) return "🖼️";
        if (type.includes("pdf")) return "📄";
        if (
            type.includes("document") ||
            type.includes("word") ||
            name.endsWith(".doc") ||
            name.endsWith(".docx")
        )
            return "📝";
        if (
            type.includes("spreadsheet") ||
            type.includes("excel") ||
            name.endsWith(".xls") ||
            name.endsWith(".xlsx")
        )
            return "📊";
        if (
            type.includes("presentation") ||
            type.includes("powerpoint") ||
            name.endsWith(".ppt") ||
            name.endsWith(".pptx")
        )
            return "📺";
        if (type.includes("text/")) return "📄";
        if (type.includes("zip") || type.includes("archive")) return "🗜️";
        return "📎";
    };

    // Helper function to get readable file type
    const getFileTypeDisplay = (type: string): string => {
        if (type.startsWith("image/")) return "Image";
        if (type.includes("pdf")) return "PDF";
        if (type.includes("document") || type.includes("word"))
            return "Document";
        if (type.includes("spreadsheet") || type.includes("excel"))
            return "Spreadsheet";
        if (type.includes("presentation") || type.includes("powerpoint"))
            return "Presentation";
        if (type.includes("text/")) return "Text";
        if (type.includes("zip") || type.includes("archive")) return "Archive";
        return type.split("/")[1]?.toUpperCase() || "File";
    };

    const textContent = `New contact form submission from Myntropic Studio website.

-- CONTACT INFORMATION --
Name: ${name}
Email: ${email}
Company: ${displayField(company)}

-- MESSAGE --
${message}

-- ATTACHMENTS --
${formatFiles(files)}

---
This message was sent via the contact form on myntropic.com
Timestamp: ${new Date().toLocaleString()}
    `;

    try {
        const emailData: any = {
            from: "Contact Form | Lucas Semelin <hi@mail.lucassemelin.com>",
            to: ["hi@lucassemelin.com"],
            replyTo: email,
            subject: `Contact from Lucas Semelin: ${name}`,
            text: textContent,
        };

        // Add attachments if there are any
        if (attachments.length > 0) {
            emailData.attachments = attachments;
        }

        const data = await resend.emails.send(emailData);

        return data;
    } catch (error) {
        console.error("Error sending email:", error);
        return { error };
    }
});
