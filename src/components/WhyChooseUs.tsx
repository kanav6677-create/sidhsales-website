"use client";

import { motion } from "framer-motion";
import {
  Truck, AlertCircle, ShieldCheck, TrendingDown, Layers, Calendar, ArrowRight,
} from "lucide-react";

/* ─── WhatsApp SVG ──────────────────────────────────────────── */
function WaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Reasons ──────────────────────────────────────────────── */
const REASONS = [
  { icon: Truck,         title: "Fast Delivery Support",          highlight: "Same / Next Day",
    description: "Production downtime costs money. Our team prioritises fast dispatch to get critical supplies to you quickly." },
  { icon: AlertCircle,   title: "Emergency Requirement Handling", highlight: "24h Emergency",
    description: "Urgent bearing replacement? Hydraulic hose failure? We handle emergency industrial supply requirements with speed." },
  { icon: ShieldCheck,   title: "Genuine Products Only",          highlight: "Brand Certified",
    description: "Every SKF, NTN, Bosch, or Pidilite product we supply is 100% genuine, sourced through authorised channels." },
  { icon: TrendingDown,  title: "Competitive Pricing",            highlight: "Best Market Price",
    description: "Best market pricing for both individual orders and large-scale MRO procurement contracts." },
  { icon: Layers,        title: "Bulk Supply Capability",         highlight: "Any Quantity",
    description: "Equipped to fulfil bulk orders for large manufacturing units, AMCs, and OEM supply requirements." },
  { icon: Calendar,      title: "Experienced Since 2008",         highlight: "16+ Years",
    description: "Deep industrial knowledge and a strong supplier network built over 16+ years of consistent service." },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item    = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

/* ─── Component ─────────────────────────────────────────────── */
export default function WhyChooseUs() {
  return (
    <section className="bg-[#0b1f33] py-16 lg:py-20 relative overflow-hidden border-t border-white/[0.05]">

      {/* ── Backgrounds ── */}
      <div
        className="absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute top-1/4 right-1/4 w-[460px] h-[460px] rounded-full bg-[#e07532]/[0.05] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full bg-[#1a3d64]/40 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ═════ Header — compact ═════ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-12 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#e07532]" />
            <span className="text-[#e07532] text-[10px] font-bold uppercase tracking-[0.22em]">
              Our Advantage
            </span>
            <div className="h-px w-8 bg-[#e07532]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-white leading-[1.1]">
            Why Choose SIDH SALES?
          </h2>
          <p className="mt-3 text-[#8a9ab0] text-[15px] leading-relaxed">
            Six reasons industries trust us as their long-term industrial supply partner.
          </p>
        </motion.div>

        {/* ═════ Cards grid — auto-rows-fr for equal heights ═════ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-fr"
        >
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                variants={item}
                className="
                  group relative h-full flex flex-col
                  bg-white/[0.035] hover:bg-white/[0.07]
                  border border-white/[0.07] hover:border-white/[0.15]
                  rounded-xl p-6
                  transition-all duration-300
                "
              >
                {/* Watermark number */}
                <div className="absolute top-4 right-5 text-white/[0.035] text-5xl font-extrabold leading-none select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Top row: icon + highlight pill */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-white/[0.06] group-hover:bg-[#e07532]/15 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-4.5 h-4.5 text-[#e07532] w-[18px] h-[18px]" />
                  </div>
                </div>

                {/* Highlight badge */}
                <div className="inline-flex self-start items-center gap-1.5 bg-[#e07532]/10 border border-[#e07532]/20 rounded-full px-2.5 py-0.5 mb-3">
                  <span className="w-1 h-1 rounded-full bg-[#e07532]" />
                  <span className="text-[#e07532] text-[9px] font-bold uppercase tracking-widest">
                    {r.highlight}
                  </span>
                </div>

                <h3 className="font-bold text-white text-[15px] mb-1.5 leading-snug">{r.title}</h3>
                <p className="text-[#8a9ab0] text-[13px] leading-relaxed flex-1">{r.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ═════ Support statement strip ═════ */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 lg:mt-10 flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-7 px-6 py-5 rounded-xl border border-white/[0.07] bg-gradient-to-r from-white/[0.03] via-white/[0.05] to-white/[0.03]"
        >
          {/* Left: quote mark accent */}
          <div className="flex-shrink-0 w-1 self-stretch bg-gradient-to-b from-[#e07532] via-[#e07532]/40 to-transparent rounded-full" />

          {/* Statement */}
          <p className="text-[#c8d3e0] text-[14px] lg:text-[15px] leading-relaxed flex-1">
            Supporting pharma, manufacturing, and industrial operations with reliable
            supply solutions, genuine products, competitive pricing, and fast delivery
            support since 2008.
          </p>

          {/* Right: inline credentials */}
          <div className="flex flex-wrap gap-x-5 gap-y-1 flex-shrink-0">
            {[
              { val: "16+",  lbl: "Years" },
              { val: "500+", lbl: "Products" },
              { val: "24h",  lbl: "Emergency" },
            ].map((s) => (
              <div key={s.lbl} className="flex items-baseline gap-1.5">
                <span className="text-white font-extrabold text-base">{s.val}</span>
                <span className="text-[#8a9ab0] text-[10px] uppercase tracking-widest">{s.lbl}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ═════ Bottom CTA ═════ */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-xl bg-[#e07532]/[0.06] border border-[#e07532]/15"
        >
          <div className="text-center sm:text-left">
            <div className="text-white font-bold text-[15px]">
              Ready to place an order or enquire?
            </div>
            <div className="text-[#8a9ab0] text-xs mt-0.5">
              Fast quotes within 24 hours · Emergency supply support available
            </div>
          </div>

          <div className="flex gap-2.5 flex-shrink-0">
            <a
              href="https://wa.me/917683028581?text=Hi%20SIDH%20SALES%2C%20I%20need%20industrial%20supply%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                bg-white/[0.08] hover:bg-white/[0.14]
                border border-white/10 hover:border-white/20
                text-white font-semibold text-[13px]
                px-4 py-2.5 rounded-md
                transition-all duration-200
              "
            >
              <WaIcon className="w-3.5 h-3.5" />
              WhatsApp
            </a>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="
                group flex items-center gap-2
                bg-[#e07532] hover:bg-[#c96428]
                text-white font-bold text-[13px]
                px-4 py-2.5 rounded-md
                shadow-md shadow-[#e07532]/20
                transition-all duration-200
              "
            >
              Request Quote
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
