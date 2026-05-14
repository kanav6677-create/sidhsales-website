"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ─── Brand list ────────────────────────────────────────────── */
const BRANDS = [
  { name: "SKF",      logo: "/brands/skf.png" },
  { name: "NTN",      logo: "/brands/ntn.png" },
  { name: "Bosch",    logo: "/brands/bosch.png" },
  { name: "DEWALT",   logo: "/brands/dewalt.png" },
  { name: "Stanley",  logo: "/brands/stanley.png" },
  { name: "Taparia",  logo: "/brands/taparia.png" },
  { name: "Pidilite", logo: "/brands/pidilite.png" },
  { name: "Addison",  logo: "/brands/addison.png" },
];

/* ─── Two rows split for variety ────────────────────────────── */
const ROW_A = [BRANDS[0], BRANDS[2], BRANDS[4], BRANDS[6]]; // SKF · Bosch · Stanley · Pidilite
const ROW_B = [BRANDS[1], BRANDS[3], BRANDS[5], BRANDS[7]]; // NTN · DEWALT · Taparia · Addison

/* ─── Logo cell — clean, no card, no border ─────────────────── */
function LogoCell({ brand }: { brand: typeof BRANDS[0] }) {
  return (
    <div
      className="
        group flex-shrink-0
        mx-8 sm:mx-12 lg:mx-16
        flex items-center justify-center
      "
    >
      <div
        className="
          relative w-28 sm:w-36 lg:w-40 h-16 sm:h-20
          grayscale opacity-55
          group-hover:grayscale-0 group-hover:opacity-100
          group-hover:scale-105
          transition-all duration-500 ease-out
        "
      >
        <Image
          src={brand.logo}
          alt={`${brand.name} logo`}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 25vw, (max-width: 1024px) 18vw, 12vw"
        />
      </div>
    </div>
  );
}

/* ─── Reusable row ──────────────────────────────────────────── */
function LogoRow({
  brands,
  direction,
}: {
  brands: typeof BRANDS;
  direction: "left" | "right";
}) {
  // duplicate the list (×3) to ensure seamless looping across wide screens
  const stream = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands];
  return (
    <div className="relative overflow-hidden">
      {/* Left/right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 lg:w-40 bg-gradient-to-r from-white via-white/95 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 lg:w-40 bg-gradient-to-l from-white via-white/95 to-transparent z-10 pointer-events-none" />

      <div
        className={`flex items-center py-8 ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        }`}
        style={{ width: "max-content" }}
      >
        {stream.map((b, i) => (
          <LogoCell key={`${b.name}-${i}`} brand={b} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main section ──────────────────────────────────────────── */
export default function Brands() {
  return (
    <section
      id="brands"
      className="relative bg-white py-24 lg:py-32 overflow-hidden"
    >
      {/* ── Super-subtle texture ── */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,31,51,1) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(11,31,51,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Soft top/bottom fades ── */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#e07532]" />
            <span className="text-[#e07532] text-[10px] font-bold uppercase tracking-[0.25em]">
              Trusted Partners
            </span>
            <div className="h-px w-8 bg-[#e07532]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1f33] tracking-tight leading-tight">
            Authorised Brands &amp; Trusted Partners
          </h2>
          <p className="mt-5 text-[#8a9ab0] text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            Supplying genuine industrial products from globally trusted brands.
          </p>
        </motion.div>

        {/* ── Two-row marquee ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-2"
        >
          <LogoRow brands={ROW_A} direction="left" />

          {/* Hairline divider between rows */}
          <div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-[#e2e8f0] to-transparent" />

          <LogoRow brands={ROW_B} direction="right" />
        </motion.div>
      </div>
    </section>
  );
}
