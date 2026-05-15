"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, MapPin } from "lucide-react";

const POINTS = [
  "Specialists in Industrial Bearings — SKF & NTN",
  "Emergency industrial supply within 24 hours",
  "Serving pharma, packaging & manufacturing industries",
  "Genuine products from authorised distributors",
  "Competitive pricing for MRO & bulk procurement",
  "GSTIN: 02AANPG515H1Z0",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28 border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: visual ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* ── Brand showcase card ── */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#0b1f33] via-[#132d4a] to-[#1a3d64] shadow-2xl shadow-[#0b1f33]/30">

              {/* Layer 1: blueprint grid */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px)," +
                    "linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Layer 2: diagonal industrial stripes */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg, transparent, transparent 36px,
                    rgba(255,255,255,0.025) 36px, rgba(255,255,255,0.025) 37px
                  )`,
                }}
              />

              {/* Layer 3: soft radial spotlight behind logo */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div
                  className="w-[75%] h-[75%] rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(224,117,50,0.18) 0%, rgba(30,80,128,0.12) 40%, transparent 70%)",
                  }}
                />
              </div>

              {/* Layer 4: corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#e07532]/40 rounded-tl-md" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#e07532]/40 rounded-tr-md" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#e07532]/40 rounded-bl-md" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#e07532]/40 rounded-br-md" />

              {/* Layer 5: top eyebrow */}
              <div className="absolute top-7 inset-x-0 flex flex-col items-center gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e07532]" />
                  <span className="text-[#e07532] text-[9px] font-bold uppercase tracking-[0.25em]">
                    Established 2008
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e07532]" />
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#e07532]/60 to-transparent" />
              </div>

              {/* Layer 6: centered logo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 gap-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.25 }}
                  className="relative"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    {/* Outer soft orange aura */}
                    <div className="absolute -inset-8 rounded-full bg-[#e07532]/15 blur-3xl pointer-events-none" />
                    {/* Mid soft white halo */}
                    <div className="absolute -inset-2 rounded-full bg-white/[0.06] blur-md pointer-events-none" />

                    {/* Frosted-glass outer ring */}
                    <div
                      className="
                        relative rounded-full
                        bg-white/[0.06] backdrop-blur-sm
                        border border-white/[0.14]
                        p-3 sm:p-3.5
                        shadow-2xl shadow-black/40
                      "
                    >
                      {/* Inner white circular plate */}
                      <div
                        className="
                          relative
                          w-[140px] h-[140px]
                          sm:w-[160px] sm:h-[160px]
                          lg:w-[180px] lg:h-[180px]
                          rounded-full
                          bg-white
                          overflow-hidden
                          flex items-center justify-center
                          shadow-[inset_0_2px_8px_rgba(11,31,51,0.08)]
                        "
                      >
                        <Image
                          src="/sidh-logo-blue.png"
                          alt="SIDH SALES"
                          fill
                          sizes="(max-width: 640px) 140px, (max-width: 1024px) 160px, 180px"
                          className="object-contain scale-[1.18]"
                          priority
                        />
                      </div>

                      {/* Tiny orange dot accent at top of ring */}
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#e07532] shadow-[0_0_10px_rgba(224,117,50,0.9)]" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Supporting tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center"
                >
                  <p className="text-white text-[13px] sm:text-sm font-bold tracking-wide max-w-xs">
                    Trusted Industrial Supply Partner
                  </p>
                  <p className="text-[#8a9ab0] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] mt-1">
                    Pharma · Manufacturing · Industrial Operations
                  </p>
                </motion.div>
              </div>

              {/* Layer 7: bottom signature strip */}
              <div className="absolute bottom-0 inset-x-0">
                <div className="px-7 py-3 flex items-center justify-between bg-black/20 border-t border-white/[0.06] backdrop-blur-sm">
                  <span className="text-[#8a9ab0] text-[9px] font-bold uppercase tracking-[0.18em]">
                    Baddi · Himachal Pradesh
                  </span>
                  <span className="text-[#e07532] text-[9px] font-bold uppercase tracking-[0.2em]">
                    Since 2008
                  </span>
                </div>
                <div className="h-1 bg-gradient-to-r from-[#0b1f33] via-[#e07532] to-[#0b1f33]" />
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="absolute -bottom-6 -right-4 sm:right-4 bg-white border border-[#e2e8f0] rounded-xl shadow-xl px-5 py-4 flex items-center gap-3"
            >
              <Award className="w-7 h-7 text-[#e07532] flex-shrink-0" />
              <div>
                <div className="font-extrabold text-[#0b1f33] text-sm">Genuine Products</div>
                <div className="text-[#8a9ab0] text-xs">Brand Certified Supplier</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="absolute -top-5 -left-4 sm:left-4 bg-[#0b1f33] border border-white/10 rounded-xl shadow-xl px-5 py-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#e07532]" />
                <span className="text-[#8a9ab0] text-[10px] uppercase tracking-widest">Location</span>
              </div>
              <div className="text-white font-bold text-sm">Baddi, H.P.</div>
              <div className="text-[#8a9ab0] text-xs mt-0.5">Serving all of North India</div>
            </motion.div>
          </motion.div>

          {/* ── Right: copy ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#e07532]" />
              <span className="text-[#e07532] text-[11px] font-bold uppercase tracking-widest">
                About SIDH SALES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#0b1f33] leading-tight mb-6">
              Industrial Bearing &amp; <br />
              <span className="text-[#1a3d64]">Maintenance Supply Experts</span>
            </h2>

            <p className="text-[#4a5a6a] leading-relaxed mb-4 text-[15px]">
              <strong className="text-[#0b1f33]">SIDH SALES</strong> is a trusted Industrial
              Hardware &amp; Mill Store based in{" "}
              <strong className="text-[#0b1f33]">Baddi, Himachal Pradesh</strong>, serving
              industries since 2008.
            </p>
            <p className="text-[#4a5a6a] leading-relaxed mb-4 text-[15px]">
              We specialise in{" "}
              <strong className="text-[#0b1f33]">Industrial Bearings</strong>, Maintenance
              Products, Industrial Hardware, Fasteners, Power Tools, Hydraulic Products, and
              Industrial Consumables for pharma companies, manufacturing plants, packaging
              industries, and industrial units.
            </p>
            <p className="text-[#4a5a6a] leading-relaxed mb-8 text-[15px]">
              Known for fast delivery, emergency requirement support, genuine products, and
              reliable service, SIDH SALES proudly supports{" "}
              <strong className="text-[#0b1f33]">Godrej Ltd.</strong>,{" "}
              <strong className="text-[#0b1f33]">Marico Ltd.</strong>,{" "}
              <strong className="text-[#0b1f33]">National Fertilizers Ltd.</strong>,{" "}
              <strong className="text-[#0b1f33]">Livguard Energy Technology Pvt. Ltd.</strong>, and{" "}
              <strong className="text-[#0b1f33]">Aristo Pharmaceuticals</strong>.
            </p>

            <ul className="space-y-2.5">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#e07532] flex-shrink-0 mt-0.5" />
                  <span className="text-[#4a5a6a] text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
