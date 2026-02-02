import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { COLORS } from "../utils/constants";
import { useInView, useCounter } from "../hooks/useAnimations";

/* ═══════════════════════════════════════════
   AnimateIn — Intersection-triggered animations
   ═══════════════════════════════════════════ */
export function AnimateIn({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  className = "",
  style = {},
}) {
  const variants = {
    fadeUp: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    fadeDown: { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
    fadeLeft: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    fadeRight: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
    scaleIn: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
    rotateIn: { hidden: { opacity: 0, rotate: -5, scale: 0.95 }, visible: { opacity: 1, rotate: 0, scale: 1 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   SectionLabel — small category label with gold lines
   ═══════════════════════════════════════════ */
export function SectionLabel({ children, light = false, center = false }) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`} style={{ marginBottom: 12 }}>
      <div style={{ width: 40, height: 2, background: COLORS.gold, borderRadius: 2 }} />
      <span
        className="font-mono"
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: light ? COLORS.goldLight : COLORS.gold,
        }}
      >
        {children}
      </span>
      <div style={{ width: 40, height: 2, background: COLORS.gold, borderRadius: 2 }} />
    </div>
  );
}

/* ═══════════════════════════════════════════
   GoldButton — Primary CTA button
   ═══════════════════════════════════════════ */
export function GoldButton({
  children,
  onClick,
  variant = "filled",
  size = "md",
  icon: Icon,
  className = "",
  type = "button",
  fullWidth = false,
  style: extraStyle = {},
}) {
  const sizes = {
    sm: "px-5 py-2.5 text-[13px]",
    md: "px-8 py-3.5 text-sm",
    lg: "px-10 py-4 text-[15px]",
  };

  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    borderRadius: 10,
    cursor: "pointer",
    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
    textDecoration: "none",
    border: "none",
    letterSpacing: 0.3,
    width: fullWidth ? "100%" : undefined,
  };

  const variantStyles = {
    filled: {
      background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
      color: COLORS.deepNavy,
    },
    outline: {
      background: "transparent",
      color: COLORS.gold,
      border: `2px solid ${COLORS.gold}`,
    },
    white: {
      background: COLORS.white,
      color: COLORS.navy,
    },
    ghost: {
      background: "transparent",
      color: COLORS.gold,
    },
    dark: {
      background: COLORS.navy,
      color: COLORS.gold,
    },
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${sizes[size]} ${className}`}
      style={{ ...base, ...variantStyles[variant], ...extraStyle }}
      whileHover={{
        y: -2,
        boxShadow: variant === "filled" ? "0 10px 35px rgba(245,183,49,0.35)" : undefined,
      }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
      {Icon && <Icon size={size === "sm" ? 14 : 16} />}
    </motion.button>
  );
}

/* ═══════════════════════════════════════════
   StatCard — Animated counter card
   ═══════════════════════════════════════════ */
export function StatCard({ value, suffix, label, delay = 0, isActive }) {
  const count = useCounter(value, isActive);
  return (
    <AnimateIn variant="fadeUp" delay={delay} className="text-center" style={{ flex: 1 }}>
      <div
        className="font-display"
        style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 700,
          lineHeight: 1,
          color: COLORS.gold,
        }}
      >
        {count}
        {suffix}
      </div>
      <div
        style={{
          marginTop: 8,
          fontSize: 13,
          color: "rgba(255,255,255,0.55)",
          fontWeight: 500,
          letterSpacing: 1.5,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </AnimateIn>
  );
}

/* ═══════════════════════════════════════════
   PageHero — Reusable hero section
   ═══════════════════════════════════════════ */
export function PageHero({
  label,
  title,
  titleAccent,
  subtitle,
  bgImage,
  minHeight = "65vh",
  children,
  center = true,
  overlay = true,
}) {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight,
        background: `linear-gradient(135deg, ${COLORS.deepNavy}, ${COLORS.navy})`,
      }}
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          filter: "brightness(0.7)",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      {overlay && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${COLORS.deepNavy} 0%, transparent 40%, transparent 60%, ${COLORS.deepNavy} 100%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at 30% 50%, rgba(245,183,49,0.06) 0%, transparent 60%)`,
            }}
          />
        </>
      )}

      <div
        className={`relative z-10 w-full max-w-[1280px] mx-auto px-6 ${center ? "text-center" : ""}`}
        style={{ paddingTop: 140, paddingBottom: 80 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel light center={center}>
            {label}
          </SectionLabel>
        </motion.div>

        <motion.h1
          className="font-display"
          initial={{ opacity: 0, y: 40, skewY: 2 }}
          animate={{ opacity: 1, y: 0, skewY: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(36px, 5.5vw, 64px)",
            fontWeight: 800,
            color: COLORS.white,
            lineHeight: 1.08,
            marginTop: 12,
            maxWidth: center ? 800 : 640,
            marginLeft: center ? "auto" : undefined,
            marginRight: center ? "auto" : undefined,
          }}
        >
          {title} <span className="text-gradient-gold">{titleAccent}</span>
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: 1.7,
              marginTop: 24,
              maxWidth: 580,
              marginLeft: center ? "auto" : undefined,
              marginRight: center ? "auto" : undefined,
            }}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginTop: 36 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
