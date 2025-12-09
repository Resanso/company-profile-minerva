"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="contact"
      className="bg-[#0B0F17] pt-20 pb-5 text-white border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Contact Form Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to transform your manufacturing operations? Let's discuss how MINERVA can help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:minervaenergyid@gmail.com" className="text-gray-400 hover:text-blue-400 transition">
                      minervaenergyid@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+6282217257007" className="text-gray-400 hover:text-blue-400 transition">
                      +62 822-1725-7007
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-400">
                      Jl. Telekomunikasi No.1, Sukapura,<br/>  
                      Kec. Dayeuhkolot,<br/>
                      Kabupaten Bandung, Jawa Barat 40257,<br/>
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-semibold mb-4">Why Partner with MINERVA?</h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Proven track record with industry leaders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Real-time digital twin technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>AI-powered energy optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Dedicated support and consultation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#151b29]/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0c1220] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0c1220] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition text-white"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0c1220] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition text-white"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0c1220] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition text-white"
                      placeholder="+62 XXX XXXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0c1220] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition text-white resize-none"
                    placeholder="Tell us about your project, challenges, or questions..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg text-sm">
                    Thank you! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm">
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Logo + Description */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo/MINERVA logo.png" alt="Minerva" className="w-40" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mt-6">
                Real-Time Digital Twin AI Optimization for
                Sustainable Manufacturing
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/#home" className="hover:text-blue-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#product" className="hover:text-blue-400 transition">
                    Product
                  </a>
                </li>
                <li>
                  <a href="/#portfolio" className="hover:text-blue-400 transition">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/#about" className="hover:text-blue-400 transition">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Request Demo */}
            <div>
              <h4 className="font-semibold mb-4">Ready to Get Started?</h4>
              <p className="text-gray-400 text-sm mb-4">
                Schedule a demo to see MINERVA in action
              </p>
              <a
                href="https://wa.me/6282217257007?text=Hi%20MINERVA%20team,%20I'd%20like%20to%20request%20a%20demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm transition-colors font-medium">
                  Request Demo
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-xs mt-10 border-t border-gray-700 pt-6">
          © Developed by MINERVA Team. 2025
        </div>
      </div>
    </footer>
  );
}
