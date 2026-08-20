import type { APIRoute } from "astro";
import { CONTACT_EMAIL, RESEND_API_KEY, RESEND_FROM_EMAIL } from "astro:env/server";

const referralOptions = new Set(["Search engine", "Referral", "Social media", "Other"]);

const json = (body: { success: boolean }, status = 200) =>
    new Response(JSON.stringify(body), {
        status,
        headers: { "Content-Type": "application/json" },
    });

export const POST: APIRoute = async ({ request }) => {
    let form: FormData;

    try {
        form = await request.formData();
    } catch {
        return json({ success: false }, 400);
    }

    if (String(form.get("website") ?? "").trim()) {
        return json({ success: true });
    }

    const firstName = String(form.get("first-name") ?? "").trim();
    const lastName = String(form.get("last-name") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const workEmail = String(form.get("work-email") ?? "").trim();
    const referral = String(form.get("referral") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const valid =
        firstName.length > 0 && firstName.length <= 100 &&
        lastName.length > 0 && lastName.length <= 100 &&
        company.length > 0 && company.length <= 200 &&
        workEmail.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail) &&
        referralOptions.has(referral) &&
        message.length <= 5000;

    if (!valid) {
        return json({ success: false }, 400);
    }

    if (!CONTACT_EMAIL || !RESEND_API_KEY || !RESEND_FROM_EMAIL) {
        console.error("Contact form email settings are not configured");
        return json({ success: false }, 503);
    }

    const email = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: RESEND_FROM_EMAIL,
            to: [CONTACT_EMAIL],
            reply_to: workEmail,
            subject: `New Zhirena enquiry from ${firstName} ${lastName}`,
            text: [
                `Name: ${firstName} ${lastName}`,
                `Company: ${company}`,
                `Work email: ${workEmail}`,
                `How they found Zhirena: ${referral}`,
                "",
                "Message:",
                message || "No message provided.",
            ].join("\n"),
        }),
    });

    if (!email.ok) {
        console.error("Contact form email delivery failed", email.status);
        return json({ success: false }, 502);
    }

    return json({ success: true });
};
