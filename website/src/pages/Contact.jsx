import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "sonner";
import {
  Phone, Mail, MapPin, Send, ArrowUpRight, CheckCircle,
  Clock, MessageSquare,
} from "lucide-react";
import { COLORS, BRAND, IMAGES, SERVICES } from "../utils/constants";
import { AnimateIn, SectionLabel, GoldButton, PageHero } from "../components/UI";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      toast.success("Message sent! We'll respond within 24 hours.");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const inputStyle = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: 10,
    border: `1px solid ${COLORS.gray200}`,
    fontSize: 14,
    fontFamily: "'DM Sans', sans-serif",
    color: COLORS.gray800,
    background: COLORS.offWhite,
    outline: "none",
    transition: "border-color 0.3s",
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: COLORS.deepNavy,
            color: COLORS.white,
            border: `1px solid rgba(245,183,49,0.2)`,
            fontFamily: "'DM Sans', sans-serif",
          },
        }}
      />

      {/* ══════════ HERO ══════════ */}
      <PageHero
        label="Get In Touch"
        title="Let's Build"
        titleAccent="Together"
        subtitle="Tell us about your project and our team will craft a solution that exceeds your expectations."
        bgImage={IMAGES.heroContact}
        minHeight="50vh"
      />

      {/* ══════════ FLOATING CONTACT CARDS ══════════ */}
      <section className="relative z-20" style={{ padding: "0 24px", marginTop: -40 }}>
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { icon: Phone, title: "Call Us", info: BRAND.phone, sub: "Mon–Sat, 7AM–6PM" },
            { icon: Mail, title: "Email", info: BRAND.email, sub: "24hr response time" },
            { icon: MapPin, title: "Visit Us", info: "12 Industrial Road", sub: "Harare, Zimbabwe" },
          ].map((item, i) => (
            <AnimateIn key={i} delay={i * 0.1} variant="fadeUp">
              <div className="hover-lift bg-white rounded-2xl p-7 text-center" style={{ border: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}>
                <div className="flex items-center justify-center mx-auto" style={{ width: 52, height: 52, borderRadius: 14, background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})` }}>
                  <item.icon size={22} color={COLORS.deepNavy} />
                </div>
                <h4 className="font-semibold mt-4" style={{ fontSize: 16, color: COLORS.navy }}>{item.title}</h4>
                <p className="font-semibold mt-2" style={{ fontSize: 14, color: COLORS.gray800 }}>{item.info}</p>
                <p style={{ fontSize: 12, color: COLORS.gray400, marginTop: 4 }}>{item.sub}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ══════════ CONTACT FORM + SIDEBAR ══════════ */}
      <section style={{ padding: "clamp(60px, 8vw, 100px) 24px", background: COLORS.offWhite }}>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column — info */}
          <AnimateIn variant="fadeLeft">
            <div>
              <h2 className="font-display" style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, color: COLORS.navy, lineHeight: 1.2 }}>
                Request a <span className="text-gradient-gold">Free Quote</span>
              </h2>
              <p style={{ color: COLORS.gray600, fontSize: 16, lineHeight: 1.8, marginTop: 16 }}>
                Tell us about your project and our team will respond with a detailed proposal within 24 hours. No commitment, no obligation — just expert advice.
              </p>

              {/* Office hours */}
              <div className="mt-8 bg-white rounded-2xl p-7" style={{ border: "1px solid rgba(0,0,0,0.04)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={18} color={COLORS.gold} />
                  <h4 className="font-display" style={{ fontSize: 18, fontWeight: 700, color: COLORS.navy }}>Office Hours</h4>
                </div>
                {[
                  { day: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
                  { day: "Saturday", time: "8:00 AM – 2:00 PM" },
                  { day: "Sunday", time: "Closed" },
                  { day: "Emergency", time: "24/7 Available" },
                ].map((h, i) => (
                  <div key={i} className="flex justify-between py-2.5" style={{ borderBottom: i < 3 ? `1px solid ${COLORS.gray100}` : "none" }}>
                    <span style={{ fontSize: 14, color: COLORS.gray600 }}>{h.day}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: h.day === "Emergency" ? COLORS.gold : COLORS.gray800 }}>{h.time}</span>
                  </div>
                ))}
              </div>

              {/* Quick contact */}
              <div className="mt-6 bg-white rounded-2xl p-7" style={{ border: "1px solid rgba(0,0,0,0.04)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare size={18} color={COLORS.gold} />
                  <h4 className="font-display" style={{ fontSize: 18, fontWeight: 700, color: COLORS.navy }}>Quick Contact</h4>
                </div>
                <p style={{ fontSize: 14, color: COLORS.gray600, lineHeight: 1.7 }}>
                  For urgent inquiries, reach us directly by phone or WhatsApp. Our team typically responds within 30 minutes during business hours.
                </p>
                <div className="flex gap-3 mt-4">
                  <GoldButton size="sm" icon={Phone}>Call Now</GoldButton>
                  <GoldButton size="sm" variant="outline">WhatsApp</GoldButton>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Right column — form */}
          <AnimateIn variant="fadeRight" delay={0.2}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-16 text-center"
                style={{ border: `2px solid ${COLORS.gold}`, boxShadow: "0 20px 60px rgba(245,183,49,0.12)" }}
              >
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
                  <CheckCircle size={60} color={COLORS.gold} className="mx-auto" />
                </motion.div>
                <h3 className="font-display mt-5" style={{ fontSize: 24, fontWeight: 700, color: COLORS.navy }}>Message Sent!</h3>
                <p style={{ color: COLORS.gray600, marginTop: 12, lineHeight: 1.6 }}>
                  Thank you for reaching out. Our team will review your project details and respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl" style={{ padding: "36px 32px", boxShadow: "0 12px 40px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.04)" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1.5 font-semibold" style={{ fontSize: 13, color: COLORS.gray800 }}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="John Moyo" style={inputStyle} required />
                  </div>
                  <div>
                    <label className="block mb-1.5 font-semibold" style={{ fontSize: 13, color: COLORS.gray800 }}>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.co.zw" style={inputStyle} required />
                  </div>
                  <div>
                    <label className="block mb-1.5 font-semibold" style={{ fontSize: 13, color: COLORS.gray800 }}>Phone Number</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+263 78 000 0000" style={inputStyle} />
                  </div>
                  <div>
                    <label className="block mb-1.5 font-semibold" style={{ fontSize: 13, color: COLORS.gray800 }}>Service Needed</label>
                    <select name="service" value={form.service} onChange={handleChange} style={inputStyle}>
                      <option value="">Select a service</option>
                      {SERVICES.map((s, j) => <option key={j} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-1.5 font-semibold" style={{ fontSize: 13, color: COLORS.gray800 }}>Project Details *</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project requirements, location, timeline, and budget range..."
                    required
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  className="w-full mt-5 flex items-center justify-center gap-2.5 cursor-pointer"
                  style={{
                    padding: "16px 32px",
                    borderRadius: 12,
                    background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
                    color: COLORS.deepNavy,
                    fontWeight: 700,
                    fontSize: 15,
                    border: "none",
                    fontFamily: "'DM Sans', sans-serif",
                    opacity: sending ? 0.7 : 1,
                  }}
                  whileHover={{ y: -2, boxShadow: "0 10px 35px rgba(245,183,49,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  {sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        style={{ width: 18, height: 18, border: `2px solid ${COLORS.deepNavy}`, borderTopColor: "transparent", borderRadius: "50%" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-center mt-4" style={{ fontSize: 12, color: COLORS.gray400 }}>
                  By submitting, you agree to our privacy policy. We'll never share your data.
                </p>
              </form>
            )}
          </AnimateIn>
        </div>
      </section>

      {/* ══════════ MAP CTA ══════════ */}
      <section className="relative flex items-center justify-center text-center" style={{ height: 420, background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.deepNavy})` }}>
        {/* Vision: Subtle map pattern or satellite imagery as background */}
        <div className="absolute inset-0" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80)`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.06 }} />
        <div className="relative z-10">
          <AnimateIn>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
              <MapPin size={52} color={COLORS.gold} className="mx-auto" />
            </motion.div>
            <h3 className="font-display mt-5" style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: COLORS.white }}>
              Find Us in <span className="text-gradient-gold">Harare</span>
            </h3>
            <p style={{ color: "rgba(255,255,255,0.45)", marginTop: 8, fontSize: 16 }}>{BRAND.address}</p>
            <div className="mt-6">
              <GoldButton
                size="md"
                icon={ArrowUpRight}
                onClick={() => window.open("https://maps.google.com/?q=Harare+Zimbabwe+Industrial+Road", "_blank")}
              >
                Open in Google Maps
              </GoldButton>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
