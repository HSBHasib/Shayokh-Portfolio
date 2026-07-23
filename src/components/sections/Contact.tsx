"use client";

import { useState } from "react";
import { Mail, Send, Loader2 } from "lucide-react";
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
              className="flex items-center gap-4 p-5 bg-gradient-to-r from-[#0077B5]/5 to-transparent border border-border rounded-2xl hover:shadow-md hover:border-[#0077B5]/30 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-[#0077B5]/10 text-[#0077B5] group-hover:bg-[#0077B5]/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.607H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
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
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium bg-gradient-to-r from-[#E8786B] to-[#f0877b] text-white hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm w-full sm:w-auto dark:bg-[#E8E8E8] dark:text-black dark:hover:bg-[#d4d4d4]"
              >
                {loading ? (
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
