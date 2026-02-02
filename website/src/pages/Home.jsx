import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Phone, Shield, Award, CheckCircle,
  Clock, Heart, Star, Quote, ChevronLeft, ChevronRight,
} from "lucide-react";
import { COLORS, BRAND, IMAGES, SERVICES, STATS, TESTIMONIALS, FEATURED_PROJECTS } from "../utils/constants";
import { useInView } from "../hooks/useAnimations";
import { AnimateIn, SectionLabel, GoldButton, StatCard } from "../components/UI";

/* ═══════════════════════════════════════════
   HERO CAROUSEL DATA
   ═══════════════════════════════════════════ */
const HERO_SLIDES = [
  {
    img: IMAGES.heroMain,
    heading: (<>Building Africa's<br /><span className="text-gradient-gold">Future</span>, One<br />Foundation at a Time</>),
    sub: "Premier construction, civil engineering, and gas infrastructure solutions. From the ground up, we build with precision, safety, and vision.",
  },
  {
    img: IMAGES.heroAbout,
    heading: (<>Engineering<br /><span className="text-gradient-gold">Excellence</span> Across<br />Southern Africa</>),
    sub: "With over 250 completed projects, our team delivers infrastructure that transforms communities and drives economic growth.",
  },
  {
    img: IMAGES.heroServices,
    heading: (<>Precision.<br /><span className="text-gradient-gold">Safety.</span><br />Innovation.</>),
    sub: "ISO-certified processes, zero-incident commitment, and cutting-edge construction technology on every project we deliver.",
  },
];

/* ═══════════════════════════════════════════
   BENTO CARD OVERLAY THEMES
   ═══════════════════════════════════════════ */
const CARD_THEMES = [
  { overlay: "linear-gradient(170deg, rgba(180,90,10,0.10) 0%, rgba(140,65,5,0.92) 75%)", accent: "#F5A623", tag: "rgba(245,166,35,0.2)", tagText: "#F5A623" },
  { overlay: "linear-gradient(170deg, rgba(10,80,100,0.10) 0%, rgba(8,65,82,0.92) 75%)", accent: "#0FA5B8", tag: "rgba(15,165,184,0.2)", tagText: "#0FA5B8" },
  { overlay: "linear-gradient(170deg, rgba(25,45,90,0.10) 0%, rgba(20,35,72,0.92) 75%)", accent: "#5B8DEF", tag: "rgba(91,141,239,0.2)", tagText: "#5B8DEF" },
  { overlay: "linear-gradient(170deg, rgba(25,70,35,0.10) 0%, rgba(18,55,28,0.92) 75%)", accent: "#3BB54A", tag: "rgba(59,181,74,0.2)", tagText: "#3BB54A" },
];

const MARQUEE_ITEMS = ["Gas Refill & Exchange", "Civil Engineering", "Structural Construction", "Plant Hire", "Water Bowser Services", "Project Management", "Road Construction", "Steel Fabrication"];

export default function HomePage() {
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });
  const [activeTest, setActiveTest] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHeroSlide((p) => (p + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTest((p) => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const goHeroSlide = useCallback((dir) => {
    setHeroSlide((p) => dir === "next" ? (p + 1) % HERO_SLIDES.length : p === 0 ? HERO_SLIDES.length - 1 : p - 1);
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          HERO CAROUSEL
          ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{ minHeight: "100vh", background: `linear-gradient(135deg, ${COLORS.deepNavy} 0%, ${COLORS.navy} 40%, ${COLORS.navyMid} 100%)` }}
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={`hero-bg-${heroSlide}`}
            className="absolute inset-0"
            style={{ backgroundImage: `url(${HERO_SLIDES[heroSlide].img})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.55)" }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.22, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${COLORS.deepNavy} 0%, transparent 30%, transparent 65%, ${COLORS.deepNavy} 100%)` }} />
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 20% 50%, rgba(245,183,49,0.07) 0%, transparent 60%)` }} />

        <div className="anim-float absolute hidden lg:block" style={{ top: "15%", right: "8%", width: 200, height: 200, border: "1px solid rgba(245,183,49,0.12)", borderRadius: "50%" }} />
        <div className="anim-float absolute hidden lg:block" style={{ bottom: "18%", right: "18%", width: 120, height: 120, border: "1px solid rgba(245,183,49,0.08)", transform: "rotate(45deg)", animationDelay: "2s" }} />
        <div className="anim-float absolute hidden md:block" style={{ top: "40%", left: "5%", width: 80, height: 80, background: "rgba(245,183,49,0.04)", borderRadius: "50%", animationDelay: "4s" }} />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6" style={{ paddingTop: 160, paddingBottom: 100 }}>
          <div style={{ maxWidth: 760 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <SectionLabel light>Established {BRAND.founded}</SectionLabel>
            </motion.div>

            <div style={{ minHeight: "clamp(160px, 22vw, 260px)" }}>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`hero-h-${heroSlide}`}
                  className="font-display"
                  initial={{ opacity: 0, y: 40, skewY: 1.5 }}
                  animate={{ opacity: 1, y: 0, skewY: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontSize: "clamp(40px, 6.5vw, 76px)", fontWeight: 800, lineHeight: 1.04, color: COLORS.white, marginTop: 16 }}
                >
                  {HERO_SLIDES[heroSlide].heading}
                </motion.h1>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={`hero-p-${heroSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginTop: 26, maxWidth: 540 }}
              >
                {HERO_SLIDES[heroSlide].sub}
              </motion.p>
            </AnimatePresence>

            <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} style={{ marginTop: 40 }}>
              <Link to="/services"><GoldButton size="lg" icon={ArrowRight}>Our Services</GoldButton></Link>
              <Link to="/contact"><GoldButton size="lg" variant="outline" icon={Phone}>Contact Us</GoldButton></Link>
            </motion.div>

            <motion.div className="flex flex-wrap gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.1 }} style={{ marginTop: 56 }}>
              {[
                { icon: Shield, text: "Safety Certified" },
                { icon: Award, text: "ISO 9001:2015" },
                { icon: CheckCircle, text: "Licensed & Insured" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <b.icon size={15} color={COLORS.gold} />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>{b.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="absolute bottom-10 left-1/2 z-20 flex items-center gap-6" style={{ transform: "translateX(-50%)" }}>
          <button onClick={() => goHeroSlide("prev")} className="hidden sm:flex items-center justify-center cursor-pointer" style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: COLORS.white }}>
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2.5">
            {HERO_SLIDES.map((_, i) => (
              <button key={i} onClick={() => setHeroSlide(i)} style={{ width: heroSlide === i ? 36 : 10, height: 10, borderRadius: 5, background: heroSlide === i ? COLORS.gold : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)" }} />
            ))}
          </div>
          <button onClick={() => goHeroSlide("next")} className="hidden sm:flex items-center justify-center cursor-pointer" style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: COLORS.white }}>
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          MARQUEE BANNER — uses .anim-marquee CSS class for left scroll
          ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: COLORS.gold, padding: "14px 0", overflow: "hidden" }}>
        <div className="anim-marquee flex" style={{ whiteSpace: "nowrap", width: "max-content" }}>
          {[0, 1, 2].map((set) => (
            <div key={set} className="flex items-center shrink-0">
              {MARQUEE_ITEMS.map((item, i) => (
                <span key={i} className="flex items-center gap-3" style={{ fontSize: 13, fontWeight: 700, color: COLORS.deepNavy, textTransform: "uppercase", letterSpacing: 2, marginRight: 48 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.deepNavy, display: "inline-block", flexShrink: 0 }} />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section ref={statsRef} className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.deepNavy})`, padding: "80px 24px" }}>
        <div className="max-w-[1080px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((s, i) => <StatCard key={i} {...s} delay={i * 0.15} isActive={statsInView} />)}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SERVICES — BENTO GRID
          Layout: card-0 = tall left, card-1 = top right,
                  card-2 = bottom right, card-3 = full width bottom
          Each card has unique color overlay like the reference images
          ══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "clamp(60px, 10vw, 120px) 24px", background: COLORS.offWhite }}>
        <div className="max-w-[1280px] mx-auto">
          <AnimateIn>
            <div className="text-center mb-14">
              <SectionLabel center>What We Do</SectionLabel>
              <h2 className="font-display" style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: COLORS.navy, marginTop: 12 }}>
                Comprehensive Construction <br />
                <span className="text-gradient-gold">& Gas Solutions</span>
              </h2>
            </div>
          </AnimateIn>

          <div className="bento-services-grid">
            {SERVICES.map((service, i) => {
              const theme = CARD_THEMES[i];
              const Icon = service.icon;

              return (
                <div key={i} className={`bento-card bento-card-${i}`}>
                  <Link to="/services" className="no-underline block h-full">
                    <motion.div
                      className="relative h-full overflow-hidden group cursor-pointer"
                      style={{ borderRadius: 22 }}
                      whileHover={{ y: -5, boxShadow: `0 20px 50px rgba(0,0,0,0.18)` }}
                      transition={{ duration: 0.35 }}
                    >
                      {/* Full-bleed background image */}
                      <img
                        src={service.img}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Unique colored overlay */}
                      <div className="absolute inset-0" style={{ background: theme.overlay }} />

                      {/* Top row: icon badge + category tag */}
                      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-5 z-10">
                        <div
                          style={{
                            width: 48, height: 48, borderRadius: 14,
                            background: "rgba(255,255,255,0.12)",
                            backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
                            border: "1px solid rgba(255,255,255,0.18)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}
                        >
                          <Icon size={22} color="#fff" />
                        </div>
                        <span
                          className="font-mono"
                          style={{
                            fontSize: 10, fontWeight: 600, letterSpacing: 1.5,
                            textTransform: "uppercase",
                            padding: "6px 14px", borderRadius: 8,
                            background: theme.tag, color: theme.tagText,
                            backdropFilter: "blur(12px)",
                            border: `1px solid ${theme.tag}`,
                          }}
                        >
                          {service.slug.replace(/-/g, " ")}
                        </span>
                      </div>

                      {/* Arrow on hover — top right area */}
                      <div
                        className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-400"
                        style={{ transform: "translateY(6px)" }}
                      >
                      </div>

                      {/* Bottom content panel */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                        <div
                          style={{
                            background: "rgba(0,0,0,0.25)",
                            backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: 16,
                            padding: i === 0 || i === 3 ? "22px 24px" : "18px 20px",
                          }}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div style={{ flex: 1 }}>
                              <h3
                                className="font-display"
                                style={{
                                  fontSize: i === 0 || i === 3 ? 22 : 18,
                                  fontWeight: 700, color: "#fff", lineHeight: 1.2,
                                }}
                              >
                                {service.title}
                              </h3>
                              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.5, marginTop: 6 }}>
                                {service.short}
                              </p>
                            </div>

                            {/* Arrow button */}
                            <div
                              className="shrink-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all duration-300"
                              style={{
                                width: 40, height: 40, borderRadius: 12,
                                background: theme.accent, marginTop: 2,
                              }}
                            >
                              <ArrowUpRight size={18} color="#fff" />
                            </div>
                          </div>

                          {/* Feature chips on large cards */}
                          {(i === 0 || i === 3) && (
                            <div className="flex flex-wrap gap-2 mt-4">
                              {service.features.slice(0, i === 3 ? 4 : 3).map((f, fi) => (
                                <span
                                  key={fi}
                                  style={{
                                    fontSize: 11, fontWeight: 500,
                                    padding: "5px 12px", borderRadius: 8,
                                    background: "rgba(255,255,255,0.1)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    color: "rgba(255,255,255,0.75)",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {f}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Accent line */}
                          <div style={{ width: 36, height: 3, borderRadius: 2, background: theme.accent, marginTop: 14, opacity: 0.7 }} />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Bento grid CSS — placement + responsive */}
          <style>{`
            .bento-services-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 300px 300px 320px;
              gap: 20px;
            }
            .bento-card-0 {
              grid-column: 1;
              grid-row: 1 / 3;
            }
            .bento-card-1 {
              grid-column: 2;
              grid-row: 1;
            }
            .bento-card-2 {
              grid-column: 2;
              grid-row: 2;
            }
            .bento-card-3 {
              grid-column: 1 / 3;
              grid-row: 3;
            }

            /* Tablet */
            @media (max-width: 1024px) {
              .bento-services-grid {
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 280px 280px 260px;
                gap: 16px;
              }
            }

            /* Mobile — single column stack */
            @media (max-width: 640px) {
              .bento-services-grid {
                grid-template-columns: 1fr;
                grid-template-rows: repeat(4, 320px);
                gap: 16px;
              }
              .bento-card-0,
              .bento-card-1,
              .bento-card-2,
              .bento-card-3 {
                grid-column: 1 !important;
                grid-row: auto !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* ══════════ WHY CHOOSE US ══════════ */}
      <section className="relative overflow-hidden clip-diagonal-both noise" style={{ padding: "clamp(100px, 14vw, 160px) 24px", background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.navyMid})` }}>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn variant="fadeLeft">
              <SectionLabel light>Why Vatumwa</SectionLabel>
              <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: COLORS.white, marginTop: 12, lineHeight: 1.15 }}>
                The Trusted Name in <span className="text-gradient-gold">African Construction</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.8, marginTop: 20 }}>
                With over 15 years of experience and 250+ projects delivered, we bring unparalleled expertise to every build. Our commitment to safety, quality, and innovation has made us the preferred partner for major developments across Southern Africa.
              </p>
              <Link to="/about" className="inline-block mt-8">
                <GoldButton size="md" icon={ArrowRight}>About Us</GoldButton>
              </Link>
            </AnimateIn>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, title: "Safety First", desc: "Zero-incident commitment with rigorous safety protocols on every site." },
                { icon: Award, title: "Quality Assured", desc: "ISO-certified processes ensuring world-class construction standards." },
                { icon: Clock, title: "On Schedule", desc: "98% on-time delivery rate across all project categories." },
                { icon: Heart, title: "Community Focus", desc: "Building infrastructure that transforms communities and creates opportunity." },
              ].map((item, i) => (
                <AnimateIn key={i} delay={i * 0.1} variant="scaleIn">
                  <div className="glass rounded-2xl p-6 transition-all duration-300 hover:border-[rgba(245,183,49,0.3)]">
                    <item.icon size={24} color={COLORS.gold} />
                    <h4 className="font-semibold mt-3" style={{ color: COLORS.white, fontSize: 15 }}>{item.title}</h4>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.6, marginTop: 6 }}>{item.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FEATURED PROJECTS ══════════ */}
      <section style={{ padding: "clamp(60px, 10vw, 120px) 0", background: COLORS.white }}>
        <div className="max-w-[1280px] mx-auto px-6 mb-10">
          <AnimateIn>
            <div className="flex justify-between items-end flex-wrap gap-4">
              <div>
                <SectionLabel>Portfolio</SectionLabel>
                <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: COLORS.navy, marginTop: 12 }}>
                  Featured <span className="text-gradient-gold">Projects</span>
                </h2>
              </div>
              <Link to="/gallery"><GoldButton variant="ghost" icon={ArrowRight}>View All</GoldButton></Link>
            </div>
          </AnimateIn>
        </div>

        <div className="hide-scrollbar overflow-x-auto px-6 pb-4">
          <div className="flex gap-6" style={{ width: "max-content" }}>
            {FEATURED_PROJECTS.map((proj, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <Link to="/gallery" className="no-underline">
                  <div className="hover-lift img-zoom relative cursor-pointer" style={{ width: "clamp(280px, 28vw, 360px)", borderRadius: 20, overflow: "hidden" }}>
                    <img src={proj.img} alt={proj.title} className="w-full object-cover" style={{ height: 340 }} loading="lazy" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 35%, rgba(6,15,31,0.9))" }} />
                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono" style={{ fontSize: 11, color: COLORS.gold, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>{proj.cat}</span>
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>· {proj.year}</span>
                      </div>
                      <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: COLORS.white }}>{proj.title}</h3>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section style={{ padding: "clamp(60px, 10vw, 120px) 24px", background: `linear-gradient(180deg, ${COLORS.offWhite}, ${COLORS.gray100})` }}>
        <div className="max-w-[900px] mx-auto text-center">
          <AnimateIn>
            <SectionLabel center>Testimonials</SectionLabel>
            <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: COLORS.navy, marginTop: 12 }}>
              What Our <span className="text-gradient-gold">Clients</span> Say
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="mt-12" style={{ minHeight: 220 }}>
              <Quote size={48} style={{ color: COLORS.gold, opacity: 0.3, margin: "0 auto 16px" }} />
              <motion.p key={activeTest} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display" style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 500, fontStyle: "italic", color: COLORS.gray800, lineHeight: 1.7, maxWidth: 680, margin: "0 auto" }}>
                "{TESTIMONIALS[activeTest].text}"
              </motion.p>
              <motion.div key={`a-${activeTest}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-7">
                <div className="font-bold" style={{ fontSize: 16, color: COLORS.navy }}>{TESTIMONIALS[activeTest].name}</div>
                <div style={{ fontSize: 13, color: COLORS.gray400, marginTop: 4 }}>{TESTIMONIALS[activeTest].role}</div>
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={COLORS.gold} color={COLORS.gold} />)}
                </div>
              </motion.div>
              <div className="flex justify-center gap-2.5 mt-8">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setActiveTest(i)} style={{ width: activeTest === i ? 32 : 10, height: 10, borderRadius: 5, background: activeTest === i ? COLORS.gold : COLORS.gray200, border: "none", cursor: "pointer", transition: "all 0.3s" }} />
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="relative overflow-hidden text-center" style={{ padding: "clamp(80px, 12vw, 140px) 24px", background: `linear-gradient(135deg, ${COLORS.deepNavy}, ${COLORS.navy})` }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${IMAGES.heroServices})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.08 }} />
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, rgba(245,183,49,0.08) 0%, transparent 65%)` }} />
        <div className="relative z-10 max-w-[700px] mx-auto">
          <AnimateIn>
            <h2 className="font-display" style={{ fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 800, color: COLORS.white, lineHeight: 1.1 }}>
              Ready to Build <span className="text-gradient-gold">Something Extraordinary?</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 18, lineHeight: 1.7, marginTop: 20 }}>
              Let's discuss your project. From initial concept to final handover, we deliver excellence at every stage.
            </p>
            <div className="flex justify-center flex-wrap gap-4 mt-10">
              <Link to="/contact"><GoldButton size="lg" icon={ArrowRight}>Start Your Project</GoldButton></Link>
              <GoldButton size="lg" variant="outline" icon={Phone}>{BRAND.phone}</GoldButton>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}