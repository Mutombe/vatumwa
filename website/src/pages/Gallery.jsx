import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { COLORS, IMAGES, GALLERY_ITEMS } from "../utils/constants";
import { AnimateIn, SectionLabel, PageHero } from "../components/UI";

const CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "construction", label: "Construction" },
  { key: "civils", label: "Civil Engineering" },
  { key: "gas", label: "Gas & Fuel" },
  { key: "planning", label: "Planning" },
  { key: "logistics", label: "Logistics" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const filtered = filter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === filter);
  const lightboxItem = lightboxIdx !== null ? filtered[lightboxIdx] : null;

  const goPrev = () => setLightboxIdx((p) => (p > 0 ? p - 1 : filtered.length - 1));
  const goNext = () => setLightboxIdx((p) => (p < filtered.length - 1 ? p + 1 : 0));

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <PageHero
        label="Our Work"
        title="Project"
        titleAccent="Gallery"
        subtitle="Explore our portfolio of completed and ongoing projects across Southern Africa."
        bgImage={IMAGES.heroGallery}
        minHeight="55vh"
      />

      {/* ══════════ FILTER + GRID ══════════ */}
      <section style={{ padding: "clamp(40px, 6vw, 80px) 24px", background: COLORS.offWhite }}>
        <div className="max-w-[1280px] mx-auto">
          {/* Filters */}
          <AnimateIn>
            <div className="flex gap-2 justify-center flex-wrap mb-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setFilter(cat.key)}
                  className="cursor-pointer"
                  style={{
                    background: filter === cat.key ? `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})` : COLORS.white,
                    color: filter === cat.key ? COLORS.deepNavy : COLORS.gray600,
                    border: `1px solid ${filter === cat.key ? COLORS.gold : COLORS.gray200}`,
                    borderRadius: 50,
                    padding: "10px 24px",
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "all 0.3s",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimateIn>

          {/* Gallery Grid — varied heights for masonry feel */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={`${item.title}-${item.category}`}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="hover-lift img-zoom relative cursor-pointer group"
                  style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    background: COLORS.white,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  }}
                  onClick={() => setLightboxIdx(i)}
                >
                  {/* Vision: Each gallery image is a high-quality construction/project photo */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full object-cover"
                    style={{
                      height: i % 5 === 0 || i % 7 === 0 ? 420 : 280,
                    }}
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(180deg, transparent 40%, rgba(6,15,31,0.85))",
                      transition: "opacity 0.35s ease",
                    }}
                  >
                    <h4 className="font-semibold" style={{ color: COLORS.white, fontSize: 16 }}>{item.title}</h4>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginTop: 4 }}>{item.desc}</p>
                    <div className="absolute top-4 right-4">
                      <Maximize2 size={20} color={COLORS.gold} />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full font-mono"
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                      background: "rgba(6,15,31,0.7)",
                      color: COLORS.gold,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {item.category}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center py-20" style={{ color: COLORS.gray400, fontSize: 16 }}>
              No projects found in this category.
            </p>
          )}
        </div>
      </section>

      {/* ══════════ LIGHTBOX ══════════ */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex flex-col justify-center items-center p-6"
            style={{
              background: "rgba(6,15,31,0.95)",
              backdropFilter: "blur(30px)",
            }}
            onClick={() => setLightboxIdx(null)}
          >
            {/* Close */}
            <button className="absolute top-6 right-6 cursor-pointer" style={{ background: "none", border: "none" }}>
              <X size={28} color={COLORS.white} />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 md:left-8 cursor-pointer"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              style={{ background: "rgba(255,255,255,0.08)", border: "none", borderRadius: 12, padding: 12 }}
            >
              <ChevronLeft size={24} color={COLORS.white} />
            </button>
            <button
              className="absolute right-4 md:right-8 cursor-pointer"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              style={{ background: "rgba(255,255,255,0.08)", border: "none", borderRadius: 12, padding: 12 }}
            >
              <ChevronRight size={24} color={COLORS.white} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxItem.img}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={lightboxItem.img.replace("w=800", "w=1400")}
              alt={lightboxItem.title}
              className="rounded-xl"
              style={{ maxWidth: "85vw", maxHeight: "70vh", objectFit: "contain" }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-5"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: COLORS.white }}>
                {lightboxItem.title}
              </h3>
              <p style={{ color: COLORS.gray400, fontSize: 14, marginTop: 6 }}>
                {lightboxItem.desc}
              </p>
              <p className="font-mono mt-2" style={{ fontSize: 11, color: COLORS.gold }}>
                {lightboxIdx + 1} / {filtered.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
