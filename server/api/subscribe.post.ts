import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
    let email = "";
    if (event.method === "POST") {
        // Permitir tanto application/x-www-form-urlencoded como JSON
        if (
            event.headers
                .get("content-type")
                ?.includes("application/x-www-form-urlencoded")
        ) {
            const body = await readBody(event);
            email = body.email;
        } else {
            const formData = await readFormData(event);
            email = formData.get("email") as string;
        }
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
        return { error: "Invalid email" };
    }

    try {
        // Reemplaza con tu audienceId real de Resend
        const audienceId =
            process.env.RESEND_AUDIENCE_ID ||
            "d7018fdf-46e2-4780-9a25-7b4163c07cc8";
        const data = await resend.contacts.create({
            email,
            unsubscribed: false,
            audienceId,
        });
        return { success: true };
    } catch (error) {
        console.error("Error subscribing:", error);
        return { error: "Subscription failed" };
    }
});
