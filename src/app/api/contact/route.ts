import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send notification email to portfolio owner
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || "hasibhsb19@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f08787;">New Contact Form Submission</h2>
          <hr style="border-color: #1e293b;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #0b0f17; padding: 15px; border-radius: 8px; color: #e2e8f0;">${message}</p>
          <hr style="border-color: #1e293b;" />
          <p style="color: #64748b; font-size: 12px;">Sent from your portfolio contact form</p>
        </div>
      `,
    });

    // Send confirmation email to the submitter
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: `Thank you for contacting Md Shayokh Mondol`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f08787;">Thank You, ${name}!</h2>
          <hr style="border-color: #1e293b;" />
          <p>I have received your message and will get back to you soon.</p>
          <p><strong>Your Message:</strong></p>
          <p style="background: #0b0f17; padding: 15px; border-radius: 8px; color: #e2e8f0;">${message}</p>
          <hr style="border-color: #1e293b;" />
          <p style="color: #64748b;">Best regards,<br/>Md Shayokh Mondol<br/>Energy & Electrical Engineering Researcher<br/>NUIST, Nanjing, China</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
