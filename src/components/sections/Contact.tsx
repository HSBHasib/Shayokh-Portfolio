"use client";

import { useState } from "react";
import { FiMail, FiSend, FiLoader, FiLink, FiMessageCircle } from "react-icons/fi";
import toast from "react-hot-toast";

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

export default function Contact({ email, linkedIn }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully! Check your email for confirmation.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Get in Touch
          </h2>
          <p className="text-muted text-sm font-medium italic mt-2">
            Contact Me
          </p>
          <p className="text-muted/70 text-sm mt-3 max-w-xl mx-auto">
            Feel free to reach out for collaborations, research opportunities, or academic inquiries.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-[35%] flex flex-col gap-5">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-4 p-5 bg-gradient-to-r from-primary/5 to-transparent border border-border rounded-2xl hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <FiMail size={20} />
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
              className="flex items-center gap-4 p-5 bg-gradient-to-r from-[#0077B5]/5 to-transparent border border-border rounded-2xl hover:shadow-md hover:border-[#0077B5]/30 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-[#0077B5]/10 text-[#0077B5] group-hover:bg-[#0077B5]/20 transition-colors">
                <FiLink size={20} />
              </div>
              <div>
                <p className="text-xs text-muted">LinkedIn</p>
                <p className="text-sm text-foreground font-medium">Md Shayokh Mondol</p>
              </div>
            </a>

            <a
              href="https://wa.me/8801725656293"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-gradient-to-r from-[#25D366]/5 to-transparent border border-border rounded-2xl hover:shadow-md hover:border-[#25D366]/30 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366]/20 transition-colors">
                <FiMessageCircle size={20} />
              </div>
              <div>
                <p className="text-xs text-muted">WhatsApp</p>
                <p className="text-sm text-foreground font-medium">+880 1725 656 293</p>
              </div>
            </a>
          </div>

          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-5 bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-6 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors text-sm"
                  placeholder="Your name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors text-sm"
                placeholder="Subject"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                placeholder="Your message..."
              />

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm w-full sm:w-auto"
                style={{ backgroundColor: "var(--button-bg)", color: "var(--button-text)" }}
              >
                {loading ? (
                  <>
                    <FiLoader size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
