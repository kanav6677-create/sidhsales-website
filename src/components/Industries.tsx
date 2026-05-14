"use client";

import { motion } from "framer-motion";
import {
  FlaskConical, Package, Factory, Zap, Wrench, HardHat,
  ArrowRight, CheckCircle2,
} from "lucide-react";

/* ─── Industry data ─────────────────────────────────────────── */
const INDUSTRIES = [
  {
    icon: FlaskConical,
    title: "Pharmaceutical Industries",
    tagline: "Baddi Pharma Corridor",
    description:
      "Reliable industrial maintenance and bearing supply for continuous pharma production operations and plant uptime.",
    bullets: ["Plant Maintenance", "Production Support", "Maintenance Consumables"],
  },
  {
    icon: Package,
    title: "Packaging Industries",
    tagline: "High-Speed Lines",
    description:
      "Precision components and consumables for high-speed packaging machinery, conveyor systems, and automation lines.",
    bullets: ["Conveyor Bearings", "V-Belts & PU Fittings", "Maintenance Products"],
  },
  {
    icon: Factory,
    title: "Manufacturing Units",
    tagline: "MRO Supply Partner",
    description:
      "End-to-end industrial hardware and tooling supply for general manufacturing and engineering production plants.",
    bullets: ["Industrial Hardware", "Machine Maintenance", "Fasteners & Tools"],
  },
  {
    icon: Zap,
    title: "Power Plants",
    tagline: "Critical Operations",
    description:
      "High-grade industrial supply support for power generation and utility infrastructure requiring zero downtime.",
    bullets: ["Industrial Supply Support", "Emergency Maintenance", "Heavy-Duty Components"],
  },
  {
    icon: Wrench,
    title: "Automobile & Engineering",
    tagline: "OEM & Workshop Supply",
    description:
      "Bearings, cutting tools, and hydraulic components for automobile OEMs, fabrication shops, and engineering units.",
    bullets: ["Precision Bearings", "Cutting & Power Tools", "Hydraulic Products"],
  },
  {
    icon: HardHat,
    title: "Heavy Industrial Operations",
    tagline: "Bulk MRO & Consumables",
    description:
      "Large-scale MRO supply, industrial consumables, and bulk component procurement for heavy industrial sites.",
    bullets: ["MRO Supply", "Industrial Consumables", "Bulk Supply Support"],
  },
];

/* ─── Footer credentials ────────────────────────────────────── */
const CREDENTIALS = [
  { val: "16+",  lbl: "Years in Industry" },
  { val: "50+",  lbl: "Industrial Clients" },
  { val: "6",    lbl: "Major Sectors" },
  { val: "24h",  lbl: "Emergency Support" },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item    = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

/* ─── Component ─────────────────────────────────────────────── */
export default function Industries() {
  return (
    <section
      id="industries"
      className="relative bg-[#f4f6f9] py-16 lg:py-20 border-t border-[#e2e8f0] overflow-hidden"
    >
      {/* ── Background: blueprint-style ── */}
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.6] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        }}
      />
      {/* Blueprint diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg, transparent, transparent 22px,
            rgba(11,31,51,1) 22px, rgba(11,31,51,1) 23px
          )`,
        }}
      />
      {/* Soft top/bottom fades */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#f4f6f9] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#f4f6f9] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═════ Header — compact ═════ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10 lg:mb-12 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#e07532]" />
            <span className="text-[#e07532] text-[10px] font-bold uppercase tracking-[0.22em]">
              Sectors We Serve
            </span>
            <div className="h-px w-8 bg-[#e07532]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-[#0b1f33] leading-[1.1]">
            Industries We Serve
          </h2>
          <p className="mt-3 text-[#8a9ab0] text-[15px] leading-relaxed">
            Trusted industrial supply support across six major sectors — from pharma corridors
            to heavy industrial sites — keeping critical operations running.
          </p>
        </motion.div>

        {/* ═════ 3 × 2 Industry grid ═════ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-fr"
        >
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                variants={item}
                className="
                  group relative h-full flex flex-col
                  bg-white rounded-xl border border-[#e2e8f0]
                  p-6 lg:p-7
                  hover:shadow-lg hover:shadow-[#0b1f33]/[0.08]
                  hover:border-[#1a3d64]/15 hover:-translate-y-0.5
                  transition-all duration-300
                  overflow-hidden
                "
              >
                {/* Watermark number */}
                <div className="absolute top-4 right-5 text-[#0b1f33]/[0.04] text-6xl font-extrabold leading-none select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Top: icon + chevron */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="
                      w-12 h-12 rounded-xl
                      bg-gradient-to-br from-[#0b1f33] to-[#1a3d64]
                      flex items-center justify-center
                      shadow-md shadow-[#0b1f33]/20
                      group-hover:shadow-lg group-hover:shadow-[#0b1f33]/30
                      transition-shadow duration-300
                    "
                  >
                    <Icon className="w-5 h-5 text-[#e07532]" />
                  </div>
                </div>

                {/* Tagline */}
                <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#e07532] mb-1.5">
                  {ind.tagline}
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-[#0b1f33] text-[17px] leading-tight mb-2.5">
                  {ind.title}
                </h3>

                {/* Description */}
                <p className="text-[#8a9ab0] text-[13px] leading-relaxed mb-4">
                  {ind.description}
                </p>

                {/* Bullets */}
                <ul className="mt-auto space-y-1.5 pt-3 border-t border-[#f1f4f8]">
                  {ind.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[#e07532] flex-shrink-0" />
                      <span className="text-[#4a5a6a] text-[12px] font-medium">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Orange accent line — bottom on hover */}
                <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#e07532] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ═════ Credentials strip ═════ */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 lg:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#e2e8f0] rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-sm"
        >
          {CREDENTIALS.map((c) => (
            <div key={c.lbl} className="bg-white px-6 py-5 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0b1f33] leading-none">
                {c.val}
              </div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#8a9ab0]">
                {c.lbl}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ═════ Bottom CTA ═════ */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="
            mt-6 flex flex-col sm:flex-row items-center justify-between gap-5
            bg-[#0b1f33] rounded-xl px-6 py-5
            relative overflow-hidden
          "
        >
          {/* Subtle BG accent */}
          <div className="absolute top-0 right-0 w-64 h-full opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg, transparent, transparent 16px,
                rgba(255,255,255,1) 16px, rgba(255,255,255,1) 17px
              )`,
            }}
          />

          <div className="relative z-10 text-center sm:text-left">
            <div className="text-white font-bold text-[15px]">
              Don&apos;t see your industry?
            </div>
            <div className="text-[#8a9ab0] text-xs mt-0.5">
              We supply to all industrial sectors requiring genuine hardware &amp; maintenance products.
            </div>
          </div>

          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="
              relative z-10 group flex items-center gap-2 flex-shrink-0
              bg-[#e07532] hover:bg-[#c96428]
              text-white font-bold text-[13px]
              px-5 py-3 rounded-md
              shadow-md shadow-[#e07532]/20
              transition-all duration-200
            "
          >
            Talk to Our Team
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
