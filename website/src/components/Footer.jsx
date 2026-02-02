import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Building2, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { COLORS, BRAND, SERVICES } from "../utils/constants";

export default function Footer({ onPolicyOpen }) {
  return (
    <footer style={{ background: COLORS.deepNavy, borderTop: "1px solid rgba(245,183,49,0.08)" }}>
      <div className="max-w-[1280px] mx-auto px-6" style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 no-underline mb-5">
              <div
                className="flex items-center justify-center"
                style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
                }}
              >
                <Building2 size={22} color={COLORS.deepNavy} strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display text-white font-bold" style={{ fontSize: 17 }}>VATUMWA</div>
                <div style={{ fontSize: 9, letterSpacing: 2.5, color: COLORS.gold, textTransform: "uppercase" }}>
                  Civils & Construction
                </div>
              </div>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>
              Building Africa's future with world-class construction, civil engineering, and gas infrastructure solutions.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center"
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.45)",
                    transition: "all 0.3s",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-5" style={{ color: COLORS.white, fontSize: 15 }}>Quick Links</h4>
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block"
                style={{
                  color: "rgba(255,255,255,0.4)", fontSize: 14,
                  padding: "5px 0", textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.gold)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-5" style={{ color: COLORS.white, fontSize: 15 }}>Services</h4>
            {SERVICES.map((s, i) => (
              <Link
                key={i}
                to="/services"
                className="block"
                style={{
                  color: "rgba(255,255,255,0.4)", fontSize: 14,
                  padding: "5px 0", textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.gold)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                {s.title}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5" style={{ color: COLORS.white, fontSize: 15 }}>Contact</h4>
            {[
              { icon: Phone, text: BRAND.phone },
              { icon: Mail, text: BRAND.email },
              { icon: MapPin, text: BRAND.address },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-3">
                <item.icon size={15} color={COLORS.gold} className="shrink-0 mt-0.5" />
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.5 }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "18px 24px" }}>
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13 }}>
            © 2026 Vatumwa Civils & Construction. All rights reserved.
          </p>
          <div className="flex gap-5">
            <button
              onClick={() => onPolicyOpen("privacy")}
              style={{
                background: "none", border: "none",
                color: "rgba(255,255,255,0.25)", fontSize: 13,
                cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onPolicyOpen("terms")}
              style={{
                background: "none", border: "none",
                color: "rgba(255,255,255,0.25)", fontSize: 13,
                cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
