import React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Cookie, XCircle } from "lucide-react";
import { COLORS, BRAND, SEARCHABLE_CONTENT } from "../utils/constants";
import { GoldButton } from "./UI";

/* ═══════════════════════════════════════════
   Search Overlay
   ═══════════════════════════════════════════ */
export function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!isOpen) setQuery("");
  }, [isOpen]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return SEARCHABLE_CONTENT.filter((item) =>
      item.text.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSelect = (result) => {
    navigate(result.page);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[2000] flex flex-col items-center"
          style={{
            background: "rgba(6,15,31,0.92)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            paddingTop: "15vh",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 cursor-pointer"
            style={{ background: "none", border: "none", color: COLORS.white }}
          >
            <X size={28} />
          </button>

          <div className="w-[90%] max-w-[640px]">
            <div
              className="flex items-center gap-4"
              style={{
                borderBottom: `2px solid ${COLORS.gold}`,
                paddingBottom: 16,
              }}
            >
              <Search size={24} color={COLORS.gold} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, projects, contact..."
                className="font-display"
                style={{
                  flex: 1,
                  background: "none",
                  border: "none",
                  outline: "none",
                  fontSize: "clamp(20px, 4vw, 30px)",
                  color: COLORS.white,
                  fontWeight: 500,
                }}
              />
            </div>

            {results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 space-y-2"
              >
                {results.map((r, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleSelect(r)}
                    className="flex items-center gap-3 w-full text-left cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 12,
                      padding: "16px 20px",
                      color: COLORS.white,
                      fontFamily: "'DM Sans', sans-serif",
                      transition: "all 0.3s ease",
                    }}
                    whileHover={{
                      backgroundColor: "rgba(245,183,49,0.08)",
                      borderColor: "rgba(245,183,49,0.25)",
                    }}
                  >
                    <ArrowRight size={16} color={COLORS.gold} />
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 500 }}>
                        {r.text.split(" ").slice(0, 6).join(" ")}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: COLORS.gray400,
                          marginTop: 2,
                          textTransform: "capitalize",
                        }}
                      >
                        {r.page === "/" ? "Home" : r.page.slice(1)} →{" "}
                        {r.section.replace(/-/g, " ")}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}

            {query && results.length === 0 && (
              <p
                className="mt-10 text-center"
                style={{ color: COLORS.gray400 }}
              >
                No results found for "{query}"
              </p>
            )}

            <p
              className="mt-8 text-center font-mono"
              style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}
            >
              Press ESC to close
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════
   Cookie Consent
   ═══════════════════════════════════════════ */
export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-6 left-6 right-6 z-[1500] max-w-[480px]"
          style={{
            borderRadius: 18,
            padding: "24px 28px",
            background: COLORS.deepNavy,
            border: "1px solid rgba(245,183,49,0.15)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          }}
        >
          <div className="flex items-start gap-3">
            <Cookie size={20} color={COLORS.gold} className="shrink-0 mt-0.5" />
            <div>
              <div
                className="font-semibold"
                style={{ color: COLORS.white, fontSize: 15, marginBottom: 6 }}
              >
                Cookie Notice
              </div>
              <div
                style={{
                  color: COLORS.gray400,
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                We use cookies to enhance your browsing experience, serve
                personalized content, and analyze our traffic.
              </div>
              <div className="flex gap-3 mt-4">
                <GoldButton size="sm" onClick={() => setShow(false)}>
                  Accept All
                </GoldButton>
                <GoldButton
                  size="sm"
                  variant="outline"
                  onClick={() => setShow(false)}
                >
                  Decline
                </GoldButton>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════
   Privacy / Terms Modal
   ═══════════════════════════════════════════ */
export function PolicyModal({ type, onClose }) {
  const isPrivacy = type === "privacy";

  return (
    <AnimatePresence>
      {type && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[2000] flex justify-center items-center p-6"
          style={{
            background: "rgba(6,15,31,0.85)",
            backdropFilter: "blur(20px)",
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-[640px] max-h-[80vh] overflow-auto"
            style={{ padding: "40px 36px", boxShadow: "0 30px 80px rgba(0,0,0,0.3)" }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2
                className="font-display"
                style={{ fontSize: 24, fontWeight: 700, color: COLORS.navy }}
              >
                {isPrivacy ? "Privacy Policy" : "Terms of Service"}
              </h2>
              <button
                onClick={onClose}
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <XCircle size={24} color={COLORS.gray400} />
              </button>
            </div>

            <div style={{ color: COLORS.gray600, fontSize: 14, lineHeight: 1.8 }}>
              <p className="mb-4">
                <strong>Effective Date:</strong> January 1, 2026
              </p>

              {isPrivacy ? (
                <>
                  <p className="mb-4">
                    Vatumwa Civils & Construction ("we", "us", or "our") is
                    committed to protecting your personal information and your
                    right to privacy. This Privacy Policy explains how we
                    collect, use, and share information when you visit our
                    website or use our services.
                  </p>
                  <h3 className="font-semibold mb-2" style={{ color: COLORS.navy }}>
                    Information We Collect
                  </h3>
                  <p className="mb-4">
                    We collect personal information that you voluntarily provide
                    when you express interest in our services, request a quote,
                    or contact us. This includes your name, phone number, email
                    address, and project details.
                  </p>
                  <h3 className="font-semibold mb-2" style={{ color: COLORS.navy }}>
                    How We Use Your Information
                  </h3>
                  <p className="mb-4">
                    We use personal information to respond to inquiries, provide
                    quotes, deliver services, communicate about projects, and
                    improve our website experience. We do not sell your personal
                    data to third parties.
                  </p>
                  <h3 className="font-semibold mb-2" style={{ color: COLORS.navy }}>
                    Data Security
                  </h3>
                  <p className="mb-4">
                    We implement appropriate technical and organizational
                    measures to protect your personal information against
                    unauthorized access, alteration, or destruction.
                  </p>
                  <h3 className="font-semibold mb-2" style={{ color: COLORS.navy }}>
                    Contact Us
                  </h3>
                  <p>
                    For questions about this policy, contact us at{" "}
                    {BRAND.email} or call {BRAND.phone}.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-4">
                    By accessing the Vatumwa Civils & Construction website, you
                    agree to these Terms of Service. If you disagree with any
                    part, please do not use our website.
                  </p>
                  <h3 className="font-semibold mb-2" style={{ color: COLORS.navy }}>
                    Use of Services
                  </h3>
                  <p className="mb-4">
                    Our website provides information about our construction,
                    civil engineering, and gas services. All quotes and project
                    estimates are subject to on-site assessment and formal
                    agreement.
                  </p>
                  <h3 className="font-semibold mb-2" style={{ color: COLORS.navy }}>
                    Intellectual Property
                  </h3>
                  <p className="mb-4">
                    All content on this website, including logos, images, text,
                    and design, is owned by Vatumwa Civils & Construction and
                    protected by intellectual property laws.
                  </p>
                  <h3 className="font-semibold mb-2" style={{ color: COLORS.navy }}>
                    Limitation of Liability
                  </h3>
                  <p className="mb-4">
                    Information provided on this website is for general purposes
                    only. We make no warranties about completeness or accuracy of
                    information on this site.
                  </p>
                  <h3 className="font-semibold mb-2" style={{ color: COLORS.navy }}>
                    Contact
                  </h3>
                  <p>
                    Questions about these terms can be directed to{" "}
                    {BRAND.email}.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
