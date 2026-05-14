"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, CheckCircle2, ChevronDown } from "lucide-react";

/* ── SVG bearing illustration ─────────────────────────────── */
function BearingIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer race */}
      <circle cx="200" cy="200" r="185" stroke="#1e5080" strokeWidth="22" />
      {/* Cage */}
      <circle cx="200" cy="200" r="145" stroke="#132d4a" strokeWidth="3" strokeDasharray="8 5" />
      {/* Inner race */}
      <circle cx="200" cy="200" r="110" stroke="#1e5080" strokeWidth="18" />
      {/* Core */}
      <circle cx="200" cy="200" r="60"  fill="#132d4a" />
      <circle cx="200" cy="200" r="38"  fill="#0b1f33" />
      <circle cx="200" cy="200" r="14"  fill="#e07532" />

      {/* 8 rolling elements */}
      {[0,45,90,135,180,225,270,315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const cx  = 200 + 145 * Math.cos(rad);
        const cy  = 200 + 145 * Math.sin(rad);
        return (
          <g key={deg}>
            <circle cx={cx} cy={cy} r="22" fill="#1a3d64" stroke="#1e5080" strokeWidth="2" />
            <circle cx={cx} cy={cy} r="8"  fill="#2a5a8a" />
          </g>
        );
      })}

      {/* Keyway slot */}
      <rect x="188" y="14" width="24" height="28" rx="3" fill="#1a3d64" />
      <rect x="188" y="358" width="24" height="28" rx="3" fill="#1a3d64" />

      {/* Accent glow ring */}
      <circle cx="200" cy="200" r="185" stroke="#e07532" strokeWidth="1" strokeOpacity="0.25" />
    </svg>
  );
}

/* ── Highlight pill ─────────────────────────────────────────── */
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-3.5 py-1.5 text-[11px] font-medium text-[#c8d3e0] tracking-wide">
      <span className="w-1.5 h-1.5 rounded-full bg-[#e07532] flex-shrink-0" />
      {children}
    </div>
  );
}

export default function Hero() {
  const goto = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b1f33]"
    >
      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* ── Gradient overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1f33] via-[#132d4a]/80 to-[#0b1f33]" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0b1f33] to-transparent" />

      {/* ── Orange glow ── */}
      <div className="absolute top-1/4 right-[15%] w-96 h-96 rounded-full bg-[#e07532]/[0.07] blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-[10%]  w-80 h-80 rounded-full bg-[#1e5080]/40 blur-[80px] pointer-events-none" />

      {/* ── Left accent line ── */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#e07532]/30 to-transparent" />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#e07532]/10 border border-[#e07532]/30 rounded-full px-4 py-1.5 mb-8"
            >
              <Zap className="w-3.5 h-3.5 text-[#e07532]" />
              <span className="text-[#e07532] text-[11px] font-bold uppercase tracking-widest">
                Trusted Industrial Partner — Baddi, H.P.
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-[2.6rem] sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.06] tracking-tight"
            >
              Powering Industries
              <br />
              With Reliable
              <br />
              <span className="text-[#e07532]">Supply Solutions</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="mt-6 text-[#8a9ab0] text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Trusted Industrial Bearing &amp; Maintenance Supply Partner Since 2008.
              Serving pharma, packaging, and manufacturing industries with{" "}
              <strong className="text-[#c8d3e0]">SKF &amp; NTN Bearings</strong>,
              fast delivery, and emergency supply support.
            </motion.p>

            {/* Highlight pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-7 flex flex-wrap gap-2"
            >
              <Pill>SKF &amp; NTN Bearings</Pill>
              <Pill>Fast Delivery Support</Pill>
              <Pill>Emergency Industrial Supply</Pill>
              <Pill>Pharma &amp; Manufacturing</Pill>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.46 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={() => goto("#contact")}
                className="flex items-center gap-2 bg-[#e07532] hover:bg-[#c96428] text-white font-bold text-sm px-8 py-3.5 rounded-md transition-colors shadow-lg shadow-[#e07532]/25"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => goto("#contact")}
                className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-sm px-8 py-3.5 rounded-md transition-colors hover:bg-white/5"
              >
                Contact Us
              </button>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex items-center gap-3 text-[#8a9ab0] text-xs"
            >
              <CheckCircle2 className="w-4 h-4 text-[#e07532] flex-shrink-0" />
              Genuine products · Competitive pricing · Bulk supply capability
            </motion.div>
          </div>

          {/* Right — bearing visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative flex items-center justify-center"
          >
            {/* Outer glow ring */}
            <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full border border-[#1e5080]/30 animate-spin-slow pointer-events-none" />
            <div className="absolute w-[290px] h-[290px] sm:w-[340px] sm:h-[340px] rounded-full border border-[#e07532]/10 animate-spin-reverse pointer-events-none" />

            {/* Bearing SVG */}
            <div className="relative w-[260px] h-[260px] sm:w-[310px] sm:h-[310px] animate-spin-slow">
              <BearingIllustration />
            </div>

            {/* Floating label cards */}
            <div className="absolute top-4 -right-2 sm:right-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 border border-[#e2e8f0] min-w-[150px]">
              <div className="w-9 h-9 bg-[#0b1f33] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-[#e07532] font-extrabold text-xs">SKF</span>
              </div>
              <div>
                <div className="font-bold text-[#0b1f33] text-xs">SKF Bearings</div>
                <div className="text-[#8a9ab0] text-[10px]">Authorised Supplier</div>
              </div>
            </div>

            <div className="absolute bottom-4 -left-2 sm:left-4 bg-[#0b1f33] rounded-xl shadow-xl px-4 py-3 border border-white/10 min-w-[150px]">
              <div className="text-white font-extrabold text-sm">NTN Bearings</div>
              <div className="text-[#8a9ab0] text-[10px] mt-0.5">Premium Distributor</div>
              <div className="mt-1.5 flex gap-1">
                {[1,2,3,4,5].map((s) => (
                  <div key={s} className="w-1.5 h-1.5 rounded-full bg-[#e07532]" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]"
        >
          {[
            { val: "16+",  label: "Years of Service" },
            { val: "500+", label: "Products Stocked" },
            { val: "50+",  label: "Industry Clients" },
            { val: "24h",  label: "Emergency Supply" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/[0.03] hover:bg-white/[0.06] transition-colors px-6 py-5 text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white">{s.val}</div>
              <div className="text-[10px] text-[#8a9ab0] uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => goto("#trust")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#8a9ab0] hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[9px] uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
