"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

/* ─── Nav items ─────────────────────────────────────────────── */
const NAV = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Products",   href: "#products" },
  { label: "Brands",     href: "#brands" },
  { label: "Industries", href: "#industries" },
  { label: "Clients",    href: "#clients" },
  { label: "Contact",    href: "#contact" },
];

/* ─── Phone numbers ─────────────────────────────────────────── */
const PHONES = [
  { display: "+91-6230126350", tel: "tel:+916230126350" },
  { display: "+91-7683028581", tel: "tel:+917683028581" },
];

/* ─── WhatsApp SVG ──────────────────────────────────────────── */
function WaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Helper: smooth scroll to anchor ───────────────────────── */
function smoothScrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) {
    const offset = 70; // navbar height
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

/* ─── Mobile drawer item variants (stagger reveal) ──────────── */
const itemVariant = {
  closed: { opacity: 0, x: -16 },
  open:   { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

/* ─── Component ─────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  /* Scroll spy + scrolled flag */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = NAV.map((n) => n.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 100 >= el.offsetTop) {
          setActiveSection(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Close on Esc */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    // Small timeout lets drawer close animation finish before scroll
    setTimeout(() => smoothScrollTo(href), 180);
  };

  return (
    <>
      {/* ═══════ HEADER ═══════ */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-[#0b1f33]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px] md:h-20">

            {/* ── Logo ── */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
              className="group flex items-center gap-3 flex-shrink-0"
            >
              {/* Logo mark — clean white plate so white-bg PNGs blend cleanly */}
              <div
                className="
                  relative flex-shrink-0
                  w-10 h-10 md:w-12 md:h-12
                  rounded-lg
                  bg-white
                  ring-1 ring-white/20 group-hover:ring-[#e07532]/40
                  shadow-md shadow-black/30
                  transition-all duration-200
                  overflow-hidden
                "
              >
                <Image
                  src="/sidh-logo-new.png"
                  alt="SIDH SALES logo"
                  fill
                  sizes="48px"
                  className="object-contain scale-[1.15]"
                  priority
                />
              </div>

              <div>
                <div className="text-white font-extrabold text-[17px] leading-tight tracking-wide">
                  SIDH SALES
                </div>
                <div className="text-[#8a9ab0] text-[9px] uppercase tracking-[0.15em] leading-none mt-0.5">
                  Industrial Supply · Since 2008
                </div>
              </div>
            </a>

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`relative px-3.5 py-2 text-[13px] font-medium rounded transition-colors duration-150 ${
                    activeSection === link.href
                      ? "text-white"
                      : "text-[#8a9ab0] hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/8 rounded"
                      transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* ── Desktop right actions ── */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={PHONES[0].tel}
                className="flex items-center gap-1.5 text-[#8a9ab0] hover:text-white text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#e07532]" />
                {PHONES[0].display}
              </a>
              <button
                onClick={() => handleNav("#contact")}
                className="bg-[#e07532] hover:bg-[#c96428] text-white text-[13px] font-bold px-5 py-2.5 rounded-md transition-colors shadow-md shadow-[#e07532]/25"
              >
                Request Quote
              </button>
            </div>

            {/* ── Mobile toggle ── */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white rounded-md hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="m"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* ═══════ MOBILE DRAWER (full-screen overlay) ═══════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="
                lg:hidden fixed top-0 right-0 bottom-0 z-40
                w-[88%] max-w-sm
                bg-[#0b1f33]/98 backdrop-blur-xl
                border-l border-white/[0.07]
                shadow-2xl shadow-black/40
                flex flex-col
              "
              style={{
                paddingTop: "calc(68px + env(safe-area-inset-top, 0px))",
              }}
            >
              {/* Decorative grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px)," +
                    "linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />
              <div className="absolute top-1/3 -right-10 w-48 h-48 rounded-full bg-[#e07532]/[0.06] blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">

                {/* ── Eyebrow ── */}
                <div className="px-6 pt-6 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-px w-6 bg-[#e07532]" />
                    <span className="text-[#e07532] text-[9px] font-bold uppercase tracking-[0.22em]">
                      Navigation
                    </span>
                  </div>
                </div>

                {/* ── Nav links ── */}
                <motion.nav
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    open:   { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
                    closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
                  }}
                  className="flex-1 overflow-y-auto px-4 space-y-0.5"
                >
                  {NAV.map((link, i) => {
                    const active = activeSection === link.href;
                    return (
                      <motion.a
                        key={link.href}
                        variants={itemVariant}
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                        className={`
                          group flex items-center justify-between
                          px-4 py-3.5 rounded-lg
                          text-[15px] font-semibold
                          transition-all duration-200
                          ${
                            active
                              ? "bg-white/[0.07] text-white border-l-2 border-[#e07532]"
                              : "text-[#c8d3e0] hover:text-white hover:bg-white/[0.04] border-l-2 border-transparent"
                          }
                        `}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`text-[10px] font-mono font-bold ${
                              active ? "text-[#e07532]" : "text-[#8a9ab0]/60"
                            }`}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {link.label}
                        </span>
                        <ArrowRight
                          className={`
                            w-3.5 h-3.5 transition-all duration-200
                            ${
                              active
                                ? "opacity-100 text-[#e07532] translate-x-0"
                                : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#e07532]"
                            }
                          `}
                        />
                      </motion.a>
                    );
                  })}
                </motion.nav>

                {/* ── Bottom contact block ── */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.3 }}
                  className="
                    px-6 pt-5 pb-7
                    border-t border-white/[0.07]
                    bg-gradient-to-t from-[#071628] to-transparent
                  "
                >
                  {/* Phones */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Phone className="w-3 h-3 text-[#e07532]" />
                      <span className="text-[#8a9ab0] text-[9px] font-bold uppercase tracking-[0.22em]">
                        Call Us
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {PHONES.map((p) => (
                        <a
                          key={p.tel}
                          href={p.tel}
                          className="
                            group flex items-center gap-2.5
                            text-white text-[15px] font-bold tracking-wide
                            hover:text-[#e07532] transition-colors duration-150
                          "
                        >
                          <span className="w-1 h-1 rounded-full bg-[#e07532] flex-shrink-0" />
                          {p.display}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-2.5">
                    <button
                      onClick={() => handleNav("#contact")}
                      className="
                        w-full flex items-center justify-center gap-2
                        bg-[#e07532] hover:bg-[#c96428]
                        text-white font-bold text-sm
                        py-3.5 rounded-lg
                        shadow-md shadow-[#e07532]/25
                        transition-all duration-200
                      "
                    >
                      Request Quote
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href="https://wa.me/917683028581?text=Hi%20SIDH%20SALES%2C%20I%20need%20industrial%20supply%20information."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="
                        w-full flex items-center justify-center gap-2
                        bg-white/[0.06] hover:bg-white/[0.12]
                        border border-white/10 hover:border-white/20
                        text-white font-semibold text-sm
                        py-3.5 rounded-lg
                        transition-all duration-200
                      "
                    >
                      <WaIcon />
                      WhatsApp Us
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
