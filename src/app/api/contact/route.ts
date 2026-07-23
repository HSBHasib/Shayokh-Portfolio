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

const ownerEmailTemplate = (name: string, email: string, subject: string, message: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #e8786b 0%, #f5b8a4 100%);padding:40px 30px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:600;">New Message Received</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:14px;">From your portfolio contact form</p>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding:30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:16px;background-color:#f8fafc;border-radius:12px;margin-bottom:16px;">
                    <p style="margin:0 0 4px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:1px;">From</p>
                    <p style="margin:0;color:#1e293b;font-size:16px;font-weight:600;">${name}</p>
                    <p style="margin:4px 0 0;color:#e8786b;font-size:14px;">${email}</p>
                  </td>
                </tr>
                <tr><td style="height:12px;"></td></tr>
                <tr>
                  <td style="padding:16px;background-color:#f8fafc;border-radius:12px;">
                    <p style="margin:0 0 4px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Subject</p>
                    <p style="margin:0;color:#1e293b;font-size:16px;font-weight:600;">${subject}</p>
                  </td>
                </tr>
                <tr><td style="height:12px;"></td></tr>
                <tr>
                  <td style="padding:16px;background-color:#f8fafc;border-radius:12px;">
                    <p style="margin:0 0 4px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Message</p>
                    <p style="margin:0;color:#1e293b;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 30px;background-color:#f8fafc;border-top:1px solid #e2e8f0;">
              <p style="margin:0;color:#94a3b8;font-size:12px;text-align:center;">
                Sent from your portfolio • ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const confirmationEmailTemplate = (name: string, message: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #e8786b 0%, #f5b8a4 100%);padding:40px 30px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:600;">Thank You, ${name}!</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:14px;">Your message has been received</p>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding:30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:20px;background-color:#f0fdf4;border-radius:12px;border-left:4px solid #22c55e;">
                    <p style="margin:0;color:#166534;font-size:14px;line-height:1.6;">
                      Thank you for reaching out! I have received your message and will get back to you as soon as possible.
                    </p>
                  </td>
                </tr>
                <tr><td style="height:16px;"></td></tr>
                <tr>
                  <td style="padding:16px;background-color:#f8fafc;border-radius:12px;">
                    <p style="margin:0 0 8px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Your Message</p>
                    <p style="margin:0;color:#1e293b;font-size:14px;line-height:1.6;background-color:#ffffff;padding:12px;border-radius:8px;border:1px solid #e2e8f0;">${message}</p>
                  </td>
                </tr>
                <tr><td style="height:16px;"></td></tr>
                <tr>
                  <td style="padding:20px;background:linear-gradient(135deg, #fef7f0 0%, #fff5ee 100%);border-radius:12px;text-align:center;">
                    <p style="margin:0 0 12px;color:#64748b;font-size:13px;">Connect with me</p>
                    <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                      <tr>
                        <td style="padding:0 8px;">
                          <a href="https://www.linkedin.com/in/md-shayokh-mondol-471171358" style="display:inline-block;padding:10px 20px;background-color:#0077B5;color:#ffffff;text-decoration:none;border-radius:8px;font-size:13px;font-weight:600;">LinkedIn</a>
                        </td>
                        <td style="padding:0 8px;">
                          <a href="https://wa.me/" style="display:inline-block;padding:10px 20px;background-color:#25D366;color:#ffffff;text-decoration:none;border-radius:8px;font-size:13px;font-weight:600;">WhatsApp</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 30px;background-color:#f8fafc;border-top:1px solid #e2e8f0;">
              <p style="margin:0;color:#94a3b8;font-size:12px;text-align:center;">
                Md Shayokh Mondol • Energy & Electrical Engineering Researcher • NUIST, Nanjing, China
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

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
      subject: `New Contact: ${subject}`,
      html: ownerEmailTemplate(name, email, subject, message),
    });

    // Send confirmation email to the submitter
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: `Thank you for contacting Md Shayokh Mondol`,
      html: confirmationEmailTemplate(name, message),
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
