import nodemailer from 'nodemailer';

interface ContactRequest {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function POST(req: Request): Promise<Response> {
    const { name, email, subject, message }: ContactRequest = await req.json();

    if (!name || !email || !subject || !message) {
        return new Response(JSON.stringify({ error: "All fields are required" }), {
            status: 400,
        });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail", // or use another SMTP provider
            auth: {
                user: process.env.EMAIL_USER as string,
                pass: process.env.EMAIL_PASS as string,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER as string,
            subject: `[Portfolio Contact] ${subject}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        console.error("Email error:", err);
        return new Response(JSON.stringify({ error: "Failed to send message" }), {
            status: 500,
        });
    }
}
