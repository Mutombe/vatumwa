import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  SearchOverlay,
  CookieConsent,
  PolicyModal,
} from "./components/Overlays";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import GalleryPage from "./pages/Gallery";
import ContactPage from "./pages/Contact";

/* ─── Scroll to top on route change ─── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

/* ─── Page transition wrapper ─── */
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated Routes ─── */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/services"
          element={
            <PageTransition>
              <ServicesPage />
            </PageTransition>
          }
        />
        <Route
          path="/gallery"
          element={
            <PageTransition>
              <GalleryPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

/* ─── Main App ─── */
export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [policyModal, setPolicyModal] = useState(null);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setPolicyModal(null);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen relative pacaembu-font">
        <style jsx>{`
          /* Niveau Grotesk Font Face - Regular */

          /* Pacaembu Font Faces */
          @font-face {
            font-family: "Pacaembu";
            src: url("./fonts/Pacaembu-Thin-Trial.ttf") format("truetype");
            font-weight: 100;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Pacaembu";
            src: url("./fonts/Pacaembu-Light-Trial.ttf") format("truetype");
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Pacaembu";
            src: url("./fonts/Pacaembu-Regular-Trial.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Pacaembu";
            src: url("./fonts/Pacaembu-Medium-Trial.ttf") format("truetype");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Pacaembu";
            src: url("./fonts/Pacaembu-Bold-Trial.ttf") format("truetype");
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Pacaembu";
            src: url("./fonts/Pacaembu-Black-Trial.ttf") format("truetype");
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Pacaembu";
            src: url("./fonts/Pacaembu-Ultra-Trial.ttf") format("truetype");
            font-weight: 950;
            font-style: normal;
            font-display: swap;
          }

          .pacaembu-font {
            font-family:
              "Pacaembu", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
              sans-serif;
          }
        `}</style>
        <Navbar onSearchOpen={() => setSearchOpen(true)} />
        <SearchOverlay
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
        />

        <main>
          <AnimatedRoutes />
        </main>

        <Footer onPolicyOpen={(type) => setPolicyModal(type)} />
        <CookieConsent />
        <PolicyModal type={policyModal} onClose={() => setPolicyModal(null)} />
      </div>
    </BrowserRouter>
  );
}
