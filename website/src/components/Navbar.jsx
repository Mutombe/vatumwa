import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Search, Building2 } from "lucide-react";
import { COLORS, BRAND } from "../utils/constants";
import { GoldButton } from "./UI";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ onSearchOpen }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[1000]"
        style={{
          background: scrolled ? "rgba(6,15,31,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(245,183,49,0.08)" : "none",
          padding: scrolled ? "10px 0" : "18px 0",
          transition: "all 0.4s ease",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div
              className="flex items-center justify-center"
              style={{
                width: 42,
                height: 42,
                borderRadius: 10,
              }}
            >
              <img src={BRAND.logo} alt="Vatumwa Logo" width={45} height={45} loading="eager" />
            </div>
            <div>
              <div className="font-display text-white font-bold" style={{ fontSize: 17, lineHeight: 1.2 }}>
                VATUMWA
              </div>
              <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: 2.5, color: COLORS.gold, textTransform: "uppercase" }}>
                Civils & Construction
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative"
                  style={{
                    background: "none",
                    padding: "8px 18px",
                    borderRadius: 6,
                    fontSize: 14,
                    fontWeight: 500,
                    color: isActive ? COLORS.gold : "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: "absolute",
                        bottom: 2,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 20,
                        height: 2,
                        background: COLORS.gold,
                        borderRadius: 1,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={onSearchOpen}
              className="flex items-center gap-2 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                padding: "8px 14px",
                color: "rgba(255,255,255,0.45)",
                fontSize: 13,
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.3s ease",
              }}
            >
              <Search size={15} />
              <span className="hidden sm:inline">Search...</span>
              <span
                className="hidden md:inline font-mono"
                style={{
                  fontSize: 10,
                  padding: "2px 6px",
                  borderRadius: 4,
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                ⌘K
              </span>
            </button>

            <Link to="/contact" className="hidden lg:inline-flex">
              <GoldButton size="sm">Get Quote</GoldButton>
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
              style={{ background: "none", border: "none", color: COLORS.white, cursor: "pointer", padding: 8 }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] flex flex-col justify-center items-center"
            style={{
              background: `linear-gradient(180deg, ${COLORS.deepNavy}, ${COLORS.navy})`,
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6"
              style={{ background: "none", border: "none", color: COLORS.white, cursor: "pointer" }}
            >
              <X size={28} />
            </button>

            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-display block"
                  style={{
                    fontSize: 32,
                    fontWeight: 600,
                    color: location.pathname === link.to ? COLORS.gold : COLORS.white,
                    padding: "14px 48px",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-2 mt-10"
              style={{ color: COLORS.gold }}
            >
              <Phone size={16} />
              <span className="font-mono text-base">{BRAND.phone}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
