"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ── Client data ──────────────────────────────────────────── */
const CLIENTS = [
  {
    name: "Godrej Ltd.",
    sector: "Diversified Manufacturing",
    logo: "/clients/godrej.png",
    logoAlt: "Godrej logo",
    bg: "bg-white",
  },
  {
    name: "Marico Ltd.",
    sector: "FMCG",
    logo: "/clients/marico.png",
    logoAlt: "Marico logo",
    bg: "bg-white",
  },
  {
    name: "National Fertilizers Limited",
    sector: "Fertilizers & Chemicals",
    logo: "/clients/nfl.png",
    logoAlt: "National Fertilizers Limited logo",
    bg: "bg-white",
  },
  {
    name: "Livguard Energy Technology",
    sector: "Energy & Batteries",
    logo: "/clients/livguard.png",
    logoAlt: "Livguard logo",
    bg: "bg-[#0a0a0a]",   /* Livguard logo has dark background */
  },
  {
    name: "Aristo Pharmaceuticals",
    sector: "Pharmaceuticals",
    logo: "/clients/aristo.png",
    logoAlt: "Aristo Pharmaceuticals logo",
    bg: "bg-white",
  },
];

/* ── Stagger variants ────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ── Logo card ─────────────────────────────────────────────── */
function ClientCard({ client }: { client: typeof CLIENTS[0] }) {
  const isDark = client.bg !== "bg-white";
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className={`
        group relative flex flex-col items-center justify-between
        rounded-2xl border overflow-hidden
        ${isDark ? "border-white/10" : "border-[#e2e8f0]"}
        shadow-sm hover:shadow-xl hover:shadow-[#0b1f33]/10
        transition-shadow duration-300
      `}
    >
      {/* Logo area */}
      <div
        className={`
          w-full flex items-center justify-center px-10 py-10
          ${client.bg}
        `}
      >
        <div
          className="
            relative w-full aspect-[3/2]
            grayscale opacity-70
            group-hover:grayscale-0 group-hover:opacity-100
            transition-all duration-400 ease-out
          "
        >
          <Image
            src={client.logo}
            alt={client.logoAlt}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        </div>
      </div>

      {/* Name strip */}
      <div
        className="
          w-full px-5 py-4 bg-[#f8fafc] border-t border-[#e2e8f0]
          text-center
        "
      >
        <div className="font-bold text-[#0b1f33] text-[13px] leading-snug">
          {client.name}
        </div>
        <div className="text-[10px] text-[#8a9ab0] uppercase tracking-widest mt-0.5">
          {client.sector}
        </div>
      </div>

      {/* Hover accent line at bottom */}
      <div
        className="
          absolute bottom-0 inset-x-0 h-[3px]
          bg-[#e07532] scale-x-0 group-hover:scale-x-100
          transition-transform duration-300 origin-left
        "
      />
    </motion.div>
  );
}

/* ── Section ───────────────────────────────────────────────── */
export default function Clients() {
  return (
    <section id="clients" className="relative py-20 lg:py-28 overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#f4f6f9]">
        {/* Very subtle dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Top & bottom fade */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f4f6f9] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f4f6f9] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#e07532]" />
            <span className="text-[#e07532] text-[11px] font-bold uppercase tracking-widest">
              Our Clients
            </span>
            <div className="h-px w-10 bg-[#e07532]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1f33] leading-tight">
            Trusted By Leading Industries
          </h2>
          <p className="mt-4 text-[#8a9ab0] text-base max-w-xl mx-auto leading-relaxed">
            Serving reputed pharma, manufacturing, and industrial organisations
            across India since 2008.
          </p>
        </motion.div>

        {/* ── Logo grid ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="
            grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
            gap-4 sm:gap-5
          "
        >
          {CLIENTS.map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
        </motion.div>

        {/* ── Trust statement ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="
            mt-14
            bg-[#0b1f33] rounded-2xl
            px-8 py-10 md:px-14
            flex flex-col md:flex-row items-start md:items-center gap-8
          "
        >
          {/* Left: quote mark */}
          <div
            className="
              w-14 h-14 rounded-xl bg-[#e07532]/10 border border-[#e07532]/20
              flex items-center justify-center flex-shrink-0
            "
          >
            <svg
              viewBox="0 0 32 28"
              fill="none"
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 28V17.6C0 7.467 5.867 1.6 17.6 0l1.6 3.2C13.6 4.533 10.4 7.2 10.4 12H16V28H0Zm16 0V17.6C16 7.467 21.867 1.6 33.6 0l1.6 3.2C29.6 4.533 26.4 7.2 26.4 12H32V28H16Z"
                fill="#e07532"
                fillOpacity="0.7"
              />
            </svg>
          </div>

          {/* Right: text */}
          <div>
            <p className="text-white/80 text-[15px] leading-relaxed max-w-3xl font-medium">
              From pharma plants in Baddi to large-scale FMCG and fertilizer
              manufacturing units, SIDH SALES has delivered genuine industrial
              bearings, maintenance products, and emergency supply support —
              reliably, for over 16 years.
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              <div className="h-px w-8 bg-[#e07532]" />
              <span className="text-[#e07532] text-[11px] font-bold uppercase tracking-widest">
                SIDH SALES · Baddi, Himachal Pradesh · Since 2008
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
