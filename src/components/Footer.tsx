"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home",       href: "#home" },
  { label: "About Us",   href: "#about" },
  { label: "Products",   href: "#products" },
  { label: "Brands",     href: "#brands" },
  { label: "Industries", href: "#industries" },
  { label: "Clients",    href: "#clients" },
  { label: "Contact",    href: "#contact" },
];

const PRODUCTS = [
  "Industrial Bearings (SKF / NTN)",
  "Hydraulic Hose Pipes",
  "V-Belts",
  "Power Tools",
  "Industrial Fasteners",
  "SKF Grease",
  "Adhesives & Pidilite",
  "HSS Drill Bits (Addison)",
  "Taparia Hand Tools",
  "Maintenance Consumables",
];

const BRANDS = ["SKF", "NTN", "Bosch", "DEWALT", "Stanley", "Taparia", "Pidilite", "Addison"];

const INDUSTRIES = ["Pharmaceutical", "Packaging", "Manufacturing", "Power Plants", "Engineering"];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="bg-[#071628] text-white">

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 flex-shrink-0 rounded-lg bg-white ring-1 ring-white/15 shadow-md shadow-black/30 overflow-hidden">
                <Image
                  src="/sidh-logo-blue.png"
                  alt="SIDH SALES logo"
                  fill
                  sizes="40px"
                  className="object-contain scale-[1.15]"
                />
              </div>
              <div>
                <div className="text-white font-extrabold text-[17px] leading-tight">SIDH SALES</div>
                <div className="text-[#8a9ab0] text-[9px] uppercase tracking-[0.15em] leading-none mt-0.5">Industrial Supply · Since 2008</div>
              </div>
            </div>

            <p className="text-[#8a9ab0] text-sm leading-relaxed mb-5">
              Trusted industrial bearing &amp; maintenance supply partner. Serving pharma,
              packaging, and manufacturing industries from Baddi, H.P. since 2008.
            </p>

            <div className="space-y-2">
              {["+91-9805238350", "+91-9816612883"].map((n) => (
                <a key={n} href={`tel:${n.replace(/-/g,"")}`} className="flex items-center gap-2 text-[#8a9ab0] hover:text-white text-sm transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#e07532] flex-shrink-0" />
                  {n}
                </a>
              ))}
              {["sidhsalesparth@gmail.com", "sidhsalesbaddi@gmail.com"].map((e) => (
                <a key={e} href={`mailto:${e}`} className="flex items-center gap-2 text-[#8a9ab0] hover:text-white text-sm transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#e07532] flex-shrink-0" />
                  {e}
                </a>
              ))}
              <div className="flex items-start gap-2 text-[#8a9ab0] text-sm">
                <MapPin className="w-3.5 h-3.5 text-[#e07532] flex-shrink-0 mt-0.5" />
                <span>Sai Road, Baddi – 173205, H.P.</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-white text-[11px] uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }} className="text-[#8a9ab0] hover:text-[#e07532] text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-white text-[11px] uppercase tracking-widest mb-5">Products</h3>
            <ul className="space-y-2">
              {PRODUCTS.map((p) => (
                <li key={p}>
                  <a href="#products" onClick={(e) => { e.preventDefault(); scrollTo("#products"); }} className="text-[#8a9ab0] hover:text-[#e07532] text-sm transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands + Industries */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-white text-[11px] uppercase tracking-widest mb-4">Brands</h3>
              <div className="flex flex-wrap gap-2">
                {BRANDS.map((b) => (
                  <span key={b} className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/5 text-[#8a9ab0] border border-white/10">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white text-[11px] uppercase tracking-widest mb-4">Industries Served</h3>
              <ul className="space-y-1.5">
                {INDUSTRIES.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-[#8a9ab0] text-sm">
                    <span className="w-1 h-1 rounded-full bg-[#e07532] flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-1">
              <div className="text-[10px] text-[#8a9ab0] uppercase tracking-widest mb-1">GSTIN</div>
              <div className="text-white font-mono text-sm tracking-wide">02AANPG515H1Z0</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#8a9ab0] text-xs">
            © {new Date().getFullYear()} SIDH SALES. All rights reserved. | SKF &amp; NTN Bearing Supplier, Baddi H.P.
          </p>
          <div className="flex items-center gap-1.5 text-[#8a9ab0] text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e07532]" />
            Industrial Supply Partner Since 2008
          </div>
        </div>
      </div>
    </footer>
  );
}
