import React from 'react';
import { motion } from "framer-motion";
import { Shield, Award, Target, Users, Globe, Linkedin, Twitter } from "lucide-react";
import { COLORS, IMAGES, TIMELINE, TEAM_MEMBERS, BRAND } from "../utils/constants";
import { AnimateIn, SectionLabel, PageHero, GoldButton } from "../components/UI";

export default function AboutPage() {
  return (
    <>
      {/* ══════════ HERO — staggered left-aligned ══════════ */}
      <PageHero
        label="Our Story"
        title="Forging Zimbabwe's"
        titleAccent="Infrastructure Legacy"
        subtitle="From our humble beginnings in 2018, Vatumwa Civils & Construction has grown into one of Zimbabwe's most trusted names in construction, civil engineering, and gas services."
        bgImage={IMAGES.heroAbout}
        minHeight="70vh"
        center={false}
      />

      {/* ══════════ COMPANY STORY — asymmetric two-column ══════════ */}
      <section style={{ padding: "clamp(60px, 10vw, 120px) 24px", background: COLORS.white }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn variant="fadeLeft">
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.1)" }}>
                {/* Vision: Team photo — diverse construction professionals in safety gear, standing in front of completed project */}
                <img src={IMAGES.team1} alt="Vatumwa Team" className="w-full object-cover" style={{ height: 500 }} loading="lazy" />
                <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
                  <div className="font-mono" style={{ fontSize: 32, fontWeight: 700, color: COLORS.gold }}>{BRAND.founded}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Year Established</div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeRight" delay={0.2}>
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="font-display" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, color: COLORS.navy, marginTop: 12, lineHeight: 1.2 }}>
                Pioneers in Civil Engineering & Construction Excellence
              </h2>
              <p style={{ color: COLORS.gray600, fontSize: 16, lineHeight: 1.8, marginTop: 20 }}>
                Vatumwa Civils & Construction was born from a passion to build — not just structures, but futures. Our founder envisioned a company that would bring world-class construction standards to Africa while empowering local communities through infrastructure development.
              </p>
              <p style={{ color: COLORS.gray600, fontSize: 16, lineHeight: 1.8, marginTop: 16 }}>
                Today, we stand as a comprehensive construction and gas services provider, with a diverse portfolio spanning commercial developments, road networks, water infrastructure, industrial facilities, and LPG gas supply chains.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { num: "250+", label: "Projects Delivered" },
                  { num: "50+", label: "Team Members" },
                  { num: "6", label: "Countries Served" },
                  { num: "98%", label: "On-Time Rate" },
                ].map((s, i) => (
                  <div key={i} className="rounded-xl p-4" style={{ background: COLORS.offWhite }}>
                    <div className="font-mono" style={{ fontSize: 24, fontWeight: 700, color: COLORS.gold }}>{s.num}</div>
                    <div style={{ fontSize: 13, color: COLORS.gray400, marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ══════════ TIMELINE — vertical with connected dots ══════════ */}
      <section style={{ padding: "clamp(60px, 10vw, 120px) 24px", background: `linear-gradient(180deg, ${COLORS.offWhite}, ${COLORS.white})` }}>
        <div className="max-w-[900px] mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <SectionLabel center>Our Journey</SectionLabel>
              <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: COLORS.navy, marginTop: 12 }}>
                Milestones That <span className="text-gradient-gold">Define Us</span>
              </h2>
            </div>
          </AnimateIn>

          <div className="relative">
            {/* Vertical line — desktop: center, mobile: left */}
            <div className="absolute top-0 bottom-0 left-5 md:left-1/2 w-0.5 md:-translate-x-1/2" style={{ background: `linear-gradient(180deg, ${COLORS.gold}, ${COLORS.gray200})` }} />

            {TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <AnimateIn key={i} variant="fadeUp" delay={i * 0.1}>
                  <div className={`relative mb-12 flex pl-12 pr-0 md:pl-0 md:pr-0 ${isLeft ? "md:justify-start md:pr-[calc(50%+40px)]" : "md:justify-end md:pl-[calc(50%+40px)]"}`}>
                    {/* Dot — mobile: left-aligned, desktop: center */}
                    <div
                      className="absolute left-3 md:left-1/2 top-2 md:-translate-x-1/2 z-10 w-4 h-4 rounded-full"
                      style={{
                        background: COLORS.gold,
                        border: `3px solid ${COLORS.white}`,
                        boxShadow: "0 0 0 4px rgba(245,183,49,0.2)",
                      }}
                    />

                    <div
                      className="w-full md:max-w-[400px] bg-white rounded-2xl p-6 md:p-7"
                      style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.04)" }}
                    >
                      <div className="font-mono" style={{ fontSize: 13, fontWeight: 700, color: COLORS.gold, letterSpacing: 2 }}>{item.year}</div>
                      <h4 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: COLORS.navy, marginTop: 8 }}>{item.title}</h4>
                      <p style={{ fontSize: 14, color: COLORS.gray600, lineHeight: 1.7, marginTop: 8 }}>{item.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ TEAM — Staggered cards ══════════ */}
      <section style={{ padding: "clamp(60px, 10vw, 120px) 24px", background: COLORS.white }}>
        <div className="max-w-[1100px] mx-auto">
          <AnimateIn>
            <div className="text-center mb-14">
              <SectionLabel center>Leadership</SectionLabel>
              <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: COLORS.navy, marginTop: 12 }}>
                Meet Our <span className="text-gradient-gold">Team</span>
              </h2>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <AnimateIn key={i} delay={i * 0.15} variant="fadeUp">
                <div className="hover-lift rounded-2xl overflow-hidden bg-white" style={{ border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}>
                  <div className="img-zoom" style={{ height: 320, overflow: "hidden" }}>
                    {/* Vision: Professional headshot or on-site portrait of team member */}
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: COLORS.navy }}>{member.name}</h4>
                    <p className="font-mono" style={{ fontSize: 12, color: COLORS.gold, marginTop: 4, fontWeight: 600, letterSpacing: 1 }}>{member.role}</p>
                    <p style={{ fontSize: 14, color: COLORS.gray600, marginTop: 10, lineHeight: 1.6 }}>{member.bio}</p>
                    <div className="flex gap-3 mt-4">
                      {[Linkedin, Twitter].map((Icon, j) => (
                        <a key={j} href="#" className="flex items-center justify-center" style={{ width: 34, height: 34, borderRadius: 8, background: COLORS.offWhite, color: COLORS.gray400, transition: "all 0.3s" }}>
                          <Icon size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ VALUES — glass cards on dark ══════════ */}
      <section className="relative overflow-hidden" style={{ padding: "clamp(60px, 10vw, 120px) 24px", background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.deepNavy})` }}>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <AnimateIn>
            <div className="text-center mb-14">
              <SectionLabel light center>Our Values</SectionLabel>
              <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: COLORS.white, marginTop: 12 }}>
                The Pillars of <span className="text-gradient-gold">Our Success</span>
              </h2>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {[
              { icon: Shield, title: "Safety", desc: "Zero-compromise safety culture on every site." },
              { icon: Award, title: "Excellence", desc: "ISO-certified quality management at every phase." },
              { icon: Target, title: "Innovation", desc: "Embracing modern construction technology." },
              { icon: Users, title: "Community", desc: "Building infrastructure that empowers people." },
              { icon: Globe, title: "Sustainability", desc: "Environmentally conscious in everything we do." },
            ].map((val, i) => (
              <AnimateIn key={i} delay={i * 0.08} variant="scaleIn">
                <div className="glass hover-lift rounded-2xl p-7 text-center cursor-default">
                  <div className="flex items-center justify-center mx-auto" style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(245,183,49,0.1)" }}>
                    <val.icon size={24} color={COLORS.gold} />
                  </div>
                  <h4 className="font-display mt-4" style={{ fontSize: 17, fontWeight: 700, color: COLORS.white }}>{val.title}</h4>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginTop: 6 }}>{val.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}