"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ─── Product data ─────────────────────────────────────────────
   "fit"  : "contain" keeps clean studio shots / packaging proportional,
            "cover"   crops lifestyle/photographic shots edge-to-edge.
   "tone" : background tone behind the image area.
   ────────────────────────────────────────────────────────────── */
type Product = {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  fit?: "contain" | "cover";
  tone?: "light" | "white";
  featured?: boolean;
};

const PRODUCTS: Product[] = [
  {
    title: "Industrial Bearings",
    desc: "SKF & NTN bearings — deep groove, taper roller, spherical, angular contact, and needle bearings for industrial applications.",
    tags: ["SKF", "NTN", "Roller"],
    image: "/products/bearings.png",
    fit: "cover",
    tone: "light",
    featured: true,
  },
  {
    title: "Hydraulic Hose Pipes",
    desc: "High-pressure hydraulic hoses, fittings, and assemblies for industrial machinery and heavy equipment.",
    tags: ["High Pressure", "Fittings"],
    image: "/products/hydraulic-hose-pipes.png",
    fit: "cover",
    tone: "light",
  },
  {
    title: "V-Belts",
    desc: "Classical, narrow-section, and timing belts for industrial power transmission across packaging and manufacturing lines.",
    tags: ["Classical", "Narrow V"],
    image: "/products/v-belts.png",
    fit: "contain",
    tone: "white",
  },
  {
    title: "Power Tools",
    desc: "Bosch, Stanley, and DEWALT professional-grade drills, grinders, and impact tools for industrial workshops.",
    tags: ["Bosch", "Stanley", "DEWALT"],
    image: "/products/power-tools.png",
    fit: "contain",
    tone: "white",
  },
  {
    title: "Industrial Fasteners",
    desc: "High-tensile bolts, nuts, anchor bolts, washers, and studs for structural and machine-mounting applications.",
    tags: ["Hex Bolts", "Nuts", "Studs"],
    image: "/products/industrial-fasteners.png",
    fit: "cover",
    tone: "light",
  },
  {
    title: "SKF Grease",
    desc: "LGMT, LGEP, and LGHB series bearing greases formulated for extreme load and temperature conditions.",
    tags: ["LGMT2", "LGEP2", "LGHB2"],
    image: "/products/skf-grease.png",
    fit: "contain",
    tone: "white",
  },
  {
    title: "Adhesives & Pidilite",
    desc: "Fevicol, M-Seal, Fevibond, Araldite, and Loctite thread-lockers for industrial assembly and maintenance.",
    tags: ["Fevicol", "M-Seal", "Loctite"],
    image: "/products/adhesives-pidilite.png",
    fit: "contain",
    tone: "white",
  },
  {
    title: "PU Fittings — Techno",
    desc: "Pneumatic push-in fittings, tubes, and valves for automation lines and pneumatic control systems.",
    tags: ["Push-in", "Pneumatic"],
    image: "/products/pu-fittings-techno.png",
    fit: "contain",
    tone: "white",
  },
  {
    title: "HSS Drill Bits",
    desc: "Addison HSS drill bits, taps, dies, and precision cutting tools for engineering and fabrication shops.",
    tags: ["Addison", "HSS", "Taps"],
    image: "/products/hss-drill-bits.png",
    fit: "contain",
    tone: "white",
  },
  {
    title: "Maintenance Consumables",
    desc: "MRO essentials — abrasives, lubricants, safety PPE, and industrial cleaning materials.",
    tags: ["Abrasives", "PPE", "Lubricants"],
    image: "/products/maintenance-consumables.png",
    fit: "cover",
    tone: "light",
  },
  {
    title: "Taparia Tools",
    desc: "Full range of Taparia spanners, pliers, screwdrivers, hex keys, and professional hand tools.",
    tags: ["Spanners", "Pliers", "Files"],
    image: "/products/taparia-tools.png",
    fit: "cover",
    tone: "light",
  },
  {
    title: "Welding Materials",
    desc: "Electrodes, MIG/TIG wire, flux, and complete welding consumables for fabrication operations.",
    tags: ["Electrodes", "MIG Wire"],
    image: "/products/welding-materials.png",
    fit: "cover",
    tone: "light",
  },
];

/* ─── Animation variants ───────────────────────────────────── */
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const card    = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

/* ─── Component ────────────────────────────────────────────── */
export default function Products() {
  return (
    <section id="products" className="bg-[#f4f6f9] py-20 lg:py-24 border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12 lg:mb-14 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#e07532]" />
            <span className="text-[#e07532] text-[10px] font-bold uppercase tracking-[0.22em]">
              Product Range
            </span>
            <div className="h-px w-8 bg-[#e07532]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-[#0b1f33] leading-[1.1]">
            Industrial Products &amp; Supplies
          </h2>
          <p className="mt-3 text-[#8a9ab0] text-[15px] leading-relaxed">
            From precision bearings to maintenance consumables — everything your plant needs,
            from authorised distributors.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5"
        >
          {PRODUCTS.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Card ─────────────────────────────────────────────────── */
function ProductCard({ product }: { product: Product }) {
  const imgBg = product.tone === "light" ? "bg-[#f1f4f8]" : "bg-white";

  return (
    <motion.article
      variants={card}
      className="
        group relative flex flex-col
        bg-white rounded-2xl overflow-hidden
        border border-[#e2e8f0]
        shadow-sm hover:shadow-lg hover:shadow-[#0b1f33]/[0.08]
        hover:border-[#1a3d64]/15
        hover:-translate-y-0.5
        transition-all duration-300
      "
    >
      {/* Image area — fixed aspect for visual consistency */}
      <div className={`relative aspect-[4/3] overflow-hidden ${imgBg}`}>
        {/* Subtle dot texture so contain-fit images don't look flat */}
        <div
          className="absolute inset-0 opacity-[0.45] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #d6dde6 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className={`
            ${product.fit === "cover" ? "object-cover" : "object-contain p-6"}
            transition-transform duration-500 ease-out
            group-hover:scale-[1.05]
          `}
        />

        {/* Featured ribbon (only for the main bearings card) */}
        {product.featured && (
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-[#0b1f33] text-white px-2.5 py-1 rounded-md shadow-md">
            <span className="w-1 h-1 rounded-full bg-[#e07532]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
              Core Specialisation
            </span>
          </div>
        )}

        {/* Soft bottom fade so text below feels connected */}
        <div className="absolute bottom-0 inset-x-0 h-6 bg-gradient-to-b from-transparent to-black/[0.04] pointer-events-none" />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Orange accent line */}
        <div className="h-[2px] w-7 bg-[#e07532] mb-4 group-hover:w-12 transition-all duration-300" />

        {/* Title */}
        <h3 className="font-extrabold text-[#0b1f33] text-[15px] leading-snug mb-2">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-[#8a9ab0] text-[12.5px] leading-relaxed mb-4 flex-1">
          {product.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-[#f1f4f8]">
          {product.tags.map((t) => (
            <span
              key={t}
              className="
                text-[9px] font-semibold uppercase tracking-wider
                px-2 py-0.5 rounded-full
                bg-[#f4f6f9] text-[#4a5a6a]
                border border-[#e2e8f0]
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom hover accent line */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#e07532] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.article>
  );
}
