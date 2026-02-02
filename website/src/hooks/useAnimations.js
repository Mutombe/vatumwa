import React from "react";
import { useState, useEffect, useRef } from "react";

export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (!options.repeat) obs.unobserve(el);
        } else if (options.repeat) {
          setIsInView(false);
        }
      },
      { threshold: options.threshold || 0.15, rootMargin: options.rootMargin || "0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, isInView];
}

export function useCounter(target, isActive, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isActive) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isActive, target, duration]);
  return count;
}

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}
