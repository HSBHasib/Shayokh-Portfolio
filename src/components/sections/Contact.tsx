"use client";

import { useState } from "react";
import { Mail, Link, MessageCircle, Send, Loader2, CheckCircle } from "lucide-react";

interface ContactProps {
  email: string;
  linkedIn: string;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

export default function Contact({ email, linkedIn }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: ContactResponse = await res.json();

      if (data.success) {
        setStatus("success");
        setResponseMessage(data.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setResponseMessage(data.message);
      }
    } catch {
      setStatus("error");
      setResponseMessage("Failed to send message. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="space-y-2 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Get in Touch
          </h2>
          <p className="text-muted text-sm font-medium italic">
            Contact Me
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-10">
          {/* Left - Contact Info */}
          <div className="w-full md:w-[35%] space-y-4">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-2xl hover:shadow-md transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="text-sm text-foreground font-medium">{email}</p>
              </div>
            </a>

            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-2xl hover:shadow-md transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Link size={20} />
              </div>
              <div>
                <p className="text-xs text-muted">LinkedIn</p>
                <p className="text-sm text-foreground font-medium">
                  Md Shayokh Mondol
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-2xl hover:shadow-md transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-xs text-muted">WhatsApp</p>
                <p className="text-sm text-foreground font-medium">
                  Message me
                </p>
              </div>
            </a>
          </div>

          {/* Right - Contact Form */}
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors text-sm"
                  placeholder="Your name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors text-sm"
                placeholder="Subject"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                placeholder="Your message..."
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium bg-primary text-white hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-green-50 text-green-600 text-sm border border-green-200">
                  <CheckCircle size={16} />
                  {responseMessage}
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 text-red-600 text-sm border border-red-200">
                  {responseMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
