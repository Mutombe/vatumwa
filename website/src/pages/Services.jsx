import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle, FileText, PenTool, Hammer,
  Truck, Building2, Box, Layers, Fuel,
} from "lucide-react";
import { COLORS, IMAGES, SERVICES, BRAND } from "../utils/constants";
import { AnimateIn, SectionLabel, GoldButton, PageHero } from "../components/UI";

export default function ServicesPage() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <PageHero
        label="Our Expertise"
        title="Services Built on"
        titleAccent="Precision"
        subtitle="Comprehensive construction, civil engineering, and gas solutions delivered with world-class standards and African heart."
        bgImage={IMAGES.heroServices}
      />

      {/* ══════════ SERVICE TABS + DETAIL ══════════ */}
      <section style={{ padding: "clamp(60px, 10vw, 100px) 24px", background: COLORS.white }}>
        <div className="max-w-[1280px] mx-auto">
          <AnimateIn>
            <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar mb-12" style={{ borderBottom: `2px solid ${COLORS.gray100}` }}>
              {SERVICES.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-2 whitespace-nowrap cursor-pointer"
                  style={{
                    background: active === i ? `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})` : "transparent",
                    color: active === i ? COLORS.deepNavy : COLORS.gray600,
                    border: active === i ? "none" : `1px solid ${COLORS.gray200}`,
                    borderRadius: 10,
                    padding: "12px 24px",
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "all 0.3s",
                  }}
                >
                  <s.icon size={16} />
                  {s.title}
                </button>
              ))}
            </div>
          </AnimateIn>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}>
                {/* Vision: High-quality service-specific image */}
                <img src={SERVICES[active].img} alt={SERVICES[active].title} className="w-full object-cover" style={{ height: 440 }} loading="lazy" />
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-2 rounded-xl px-4 py-2.5" style={{ background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})` }}>
                    {(() => { const Icon = SERVICES[active].icon; return <Icon size={18} color={COLORS.deepNavy} />; })()}
                    <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.deepNavy }}>{SERVICES[active].title}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display" style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: COLORS.navy, lineHeight: 1.2 }}>
                  {SERVICES[active].title}
                </h3>
                <div style={{ width: 60, height: 3, background: COLORS.gold, borderRadius: 2, marginTop: 16 }} />
                <p style={{ color: COLORS.gray600, fontSize: 16, lineHeight: 1.8, marginTop: 20 }}>
                  {SERVICES[active].desc}
                </p>

                <div className="mt-7">
                  {SERVICES[active].features.map((f, i) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3"
                      style={{ padding: "12px 0", borderBottom: `1px solid ${COLORS.gray100}` }}
                    >
                      <CheckCircle size={18} color={COLORS.gold} />
                      <span style={{ fontSize: 15, color: COLORS.gray800, fontWeight: 500 }}>{f}</span>
                    </motion.div>
                  ))}
                </div>

                <Link to="/contact" className="inline-block mt-8">
                  <GoldButton size="md" icon={ArrowRight}>Request a Quote</GoldButton>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════ OUR PROCESS — numbered steps ══════════ */}
      <section className="relative overflow-hidden" style={{ padding: "clamp(60px, 10vw, 120px) 24px", background: `linear-gradient(135deg, ${COLORS.deepNavy}, ${COLORS.navy})` }}>
        <div className="max-w-[1100px] mx-auto relative z-10">
          <AnimateIn>
            <div className="text-center mb-14">
              <SectionLabel light center>How We Work</SectionLabel>
              <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: COLORS.white, marginTop: 12 }}>
                Our <span className="text-gradient-gold">Process</span>
              </h2>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: FileText, title: "Consultation", desc: "We assess your needs, visit the site, and develop a comprehensive project brief." },
              { step: "02", icon: PenTool, title: "Design & Planning", desc: "Our engineers create detailed plans, timelines, and cost estimates for your approval." },
              { step: "03", icon: Hammer, title: "Construction", desc: "Skilled teams execute the build with rigorous safety and quality control standards." },
              { step: "04", icon: CheckCircle, title: "Handover", desc: "Final inspection, full documentation, and seamless handover with warranty support." },
            ].map((item, i) => (
              <AnimateIn key={i} delay={i * 0.12} variant="fadeUp">
                <div className="glass hover-lift rounded-2xl p-8 text-center relative overflow-hidden">
                  <div className="font-mono absolute -top-3 right-3" style={{ fontSize: 80, fontWeight: 800, color: "rgba(245,183,49,0.05)", lineHeight: 1 }}>
                    {item.step}
                  </div>
                  <div className="flex items-center justify-center mx-auto" style={{ width: 52, height: 52, borderRadius: 16, background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})` }}>
                    <item.icon size={24} color={COLORS.deepNavy} />
                  </div>
                  <h4 className="font-display mt-5" style={{ fontSize: 18, fontWeight: 700, color: COLORS.white }}>{item.title}</h4>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginTop: 8 }}>{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ EQUIPMENT FLEET ══════════ */}
      <section style={{ padding: "clamp(60px, 10vw, 100px) 24px", background: COLORS.offWhite }}>
        <div className="max-w-[1280px] mx-auto">
          <AnimateIn>
            <div className="text-center mb-12">
              <SectionLabel center>Our Fleet</SectionLabel>
              <h2 className="font-display" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, color: COLORS.navy, marginTop: 12 }}>
                Heavy Equipment & <span className="text-gradient-gold">Machinery</span>
              </h2>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Truck, name: "Water Bowsers", count: "8 Units" },
              { icon: Building2, name: "Tower Cranes", count: "4 Units" },
              { icon: Box, name: "Excavators", count: "12 Units" },
              { icon: Layers, name: "Graders & Rollers", count: "6 Units" },
              { icon: Fuel, name: "Gas Tankers", count: "5 Units" },
            ].map((eq, i) => (
              <AnimateIn key={i} delay={i * 0.08} variant="scaleIn">
                <div className="hover-lift bg-white rounded-xl p-6 text-center" style={{ border: "1px solid rgba(0,0,0,0.04)" }}>
                  <eq.icon size={28} color={COLORS.gold} />
                  <div className="font-semibold mt-3" style={{ fontSize: 14, color: COLORS.navy }}>{eq.name}</div>
                  <div className="font-mono mt-1" style={{ fontSize: 13, color: COLORS.gold }}>{eq.count}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BOTTOM CTA ══════════ */}
      <section className="text-center" style={{ padding: "80px 24px", background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.deepNavy})` }}>
        <AnimateIn>
          <h2 className="font-display" style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 700, color: COLORS.white }}>
            Need a <span className="text-gradient-gold">Custom Solution?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, marginTop: 12 }}>Our engineering team is ready to discuss your unique project requirements.</p>
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <Link to="/contact"><GoldButton size="lg" icon={ArrowRight}>Get a Free Quote</GoldButton></Link>
            <GoldButton size="lg" variant="outline">{BRAND.phone}</GoldButton>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
