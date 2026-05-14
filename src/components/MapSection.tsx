"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Navigation,
  Clock,
  Building2,
  PhoneCall,
} from "lucide-react";

/* ─── WhatsApp SVG ──────────────────────────────────────────── */
function WaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Bearing logo mark ─────────────────────────────────────── */
function BearingMark() {
  return (
    <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7 flex-shrink-0">
      <circle cx="18" cy="18" r="17" stroke="#e07532" strokeWidth="1.8" />
      <circle cx="18" cy="18" r="10" stroke="#e07532" strokeWidth="1.4" />
      <circle cx="18" cy="18" r="4"  fill="#e07532" />
      <circle cx="18" cy="5"  r="2"  fill="#e07532" />
      <circle cx="18" cy="31" r="2"  fill="#e07532" />
      <circle cx="5"  cy="18" r="2"  fill="#e07532" />
      <circle cx="31" cy="18" r="2"  fill="#e07532" />
    </svg>
  );
}

/* ─── Constants ─────────────────────────────────────────────── */
const MAPS_EMBED =
  "https://maps.google.com/maps?q=Sai+Road+Near+Vishal+Mega+Mart+Baddi+Himachal+Pradesh+173205&t=&z=16&ie=UTF8&iwloc=&output=embed";

const MAPS_LINK =
  "https://maps.google.com/?q=Shop+No+1+Near+Vishal+Mega+Mart+Sai+Road+Baddi+Himachal+Pradesh+173205";

const PHONES = [
  { number: "+91-6230126350", tel: "tel:+916230126350", label: "Primary" },
  { number: "+91-7683028581", tel: "tel:+917683028581", label: "Alternate" },
];

/* ═══════════════════════════════════════════════════════════════
   TOP CONTACT BAR
═══════════════════════════════════════════════════════════════ */
function ContactBar() {
  return (
    <div className="relative bg-[#071628] border-b border-white/[0.07] overflow-hidden">
      {/* Subtle diagonal stripe */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -55deg, transparent, transparent 24px,
            rgba(255,255,255,1) 24px, rgba(255,255,255,1) 25px
          )`,
        }}
      />
      <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-[#e07532]/[0.04] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        >
          {/* Left: label */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#e07532]/12 border border-[#e07532]/20 flex items-center justify-center flex-shrink-0">
              <PhoneCall className="w-3.5 h-3.5 text-[#e07532]" />
            </div>
            <div>
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8a9ab0]">
                Call Us Directly
              </div>
              <div className="text-white text-xs font-semibold mt-0.5">
                Emergency supply &amp; quotation enquiries
              </div>
            </div>
          </div>

          {/* Right: phone pills */}
          <div className="flex flex-wrap gap-3">
            {PHONES.map((p) => (
              <a
                key={p.number}
                href={p.tel}
                className="
                  group relative flex items-center gap-3
                  bg-white/[0.06] hover:bg-[#e07532]
                  border border-white/[0.1] hover:border-[#e07532]
                  rounded-xl px-4 py-2.5
                  transition-all duration-200
                  shadow-sm hover:shadow-md hover:shadow-[#e07532]/20
                "
              >
                {/* Pulse dot */}
                <span className="relative flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#e07532] group-hover:bg-white block" />
                  <span className="absolute inset-0 w-2 h-2 rounded-full bg-[#e07532] group-hover:bg-white animate-ping opacity-50" />
                </span>

                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#8a9ab0] group-hover:text-white/70 leading-none mb-0.5 transition-colors">
                    {p.label}
                  </div>
                  <div className="text-white font-bold text-[15px] leading-tight tracking-wide">
                    {p.number}
                  </div>
                </div>

                <Phone className="w-4 h-4 text-[#8a9ab0] group-hover:text-white ml-1 transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN MAP SECTION
═══════════════════════════════════════════════════════════════ */
export default function MapSection() {
  return (
    <section className="bg-[#0b1f33] relative overflow-hidden">

      {/* ── Grid texture ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-[#e07532]/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#1a3d64]/60 blur-[80px] pointer-events-none" />

      {/* ── Contact bar ── */}
      <ContactBar />

      {/* ── Section header ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-[#e07532]" />
              <span className="text-[#e07532] text-[10px] font-bold uppercase tracking-widest">
                Our Location
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-white leading-tight">
              Visit SIDH SALES
            </h2>
            <p className="mt-2 text-[#8a9ab0] text-sm max-w-md leading-relaxed">
              Industrial bearing &amp; hardware store in Baddi&apos;s pharma &amp;
              manufacturing corridor, Himachal Pradesh.
            </p>
          </div>

          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden sm:inline-flex items-center gap-2
              border border-white/15 hover:border-[#e07532]/50
              text-[#8a9ab0] hover:text-[#e07532]
              text-[11px] font-bold uppercase tracking-widest
              px-5 py-2.5 rounded-md transition-all duration-200 flex-shrink-0
            "
          >
            <Navigation className="w-3.5 h-3.5" />
            Get Directions
          </a>
        </motion.div>
      </div>

      {/* ── Map + info card ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/[0.08]">

          {/* ── Map iframe (3/5) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] bg-[#132d4a]"
          >
            {/* Floating address badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-[#0b1f33]/90 backdrop-blur-sm border border-white/[0.12] rounded-lg px-3.5 py-2 shadow-lg pointer-events-none">
              <MapPin className="w-3.5 h-3.5 text-[#e07532] flex-shrink-0" />
              <div>
                <div className="text-white text-[11px] font-bold leading-tight">Sai Road, Baddi</div>
                <div className="text-[#8a9ab0] text-[9px]">Himachal Pradesh – 173205</div>
              </div>
            </div>

            {/* Live map */}
            <iframe
              src={MAPS_EMBED}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SIDH SALES location — Sai Road, Baddi"
            />

            {/* Right-edge fade into info panel */}
            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#132d4a] to-transparent lg:block hidden pointer-events-none" />
          </motion.div>

          {/* ── Info panel (2/5) ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="
              lg:col-span-2 bg-[#132d4a]
              flex flex-col justify-between
              p-7 lg:p-8
              border-t lg:border-t-0 lg:border-l border-white/[0.07]
            "
          >
            {/* Brand mark */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <BearingMark />
                <div>
                  <div className="text-white font-extrabold text-[15px] leading-tight">SIDH SALES</div>
                  <div className="text-[#8a9ab0] text-[9px] uppercase tracking-[0.18em] leading-none mt-0.5">
                    Industrial Supply · Since 2008
                  </div>
                </div>
              </div>

              {/* Orange divider */}
              <div className="h-px bg-gradient-to-r from-[#e07532]/50 via-white/10 to-transparent mb-6" />

              {/* Info rows */}
              {[
                {
                  icon: Building2,
                  label: "Address",
                  lines: [
                    { text: "Shop No. 1, Near Vishal Mega Mart", weight: "font-semibold text-white" },
                    { text: "Sai Road, Baddi – 173205",           weight: "text-[#c8d3e0]" },
                    { text: "Himachal Pradesh, India",            weight: "text-[#8a9ab0]" },
                  ],
                  href: undefined,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  lines: [
                    { text: "+91-6230126350", weight: "font-semibold text-white hover:text-[#e07532]", href: "tel:+916230126350" },
                    { text: "+91-7683028581", weight: "text-[#c8d3e0] hover:text-[#e07532]",           href: "tel:+917683028581" },
                  ],
                  href: undefined,
                },
                {
                  icon: Mail,
                  label: "Email",
                  lines: [
                    { text: "sidhsalesparth@gmail.com", weight: "font-semibold text-white hover:text-[#e07532] truncate", href: "mailto:sidhsalesparth@gmail.com" },
                    { text: "sidhsalesbaddi@gmail.com",  weight: "text-[#c8d3e0] hover:text-[#e07532] truncate",           href: "mailto:sidhsalesbaddi@gmail.com" },
                  ],
                  href: undefined,
                },
                {
                  icon: Clock,
                  label: "Working Hours",
                  lines: [
                    { text: "Mon – Sat: 9:00 AM – 7:00 PM", weight: "font-semibold text-white" },
                    { text: "Emergency supply: call anytime",  weight: "text-[#8a9ab0]" },
                  ],
                  href: undefined,
                },
              ].map(({ icon: Icon, label, lines }) => (
                <div key={label} className="flex gap-3 mb-5 last:mb-0">
                  <div className="w-8 h-8 rounded-lg bg-[#e07532]/10 border border-[#e07532]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-[#e07532]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8a9ab0] mb-1.5">
                      {label}
                    </div>
                    {lines.map((line) =>
                      "href" in line && line.href ? (
                        <a
                          key={line.text}
                          href={line.href}
                          className={`block text-sm leading-relaxed transition-colors ${line.weight}`}
                        >
                          {line.text}
                        </a>
                      ) : (
                        <div
                          key={line.text}
                          className={`text-sm leading-relaxed ${line.weight}`}
                        >
                          {line.text}
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-7 space-y-3">
              {/* Google Maps */}
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group w-full flex items-center justify-between
                  bg-[#e07532] hover:bg-[#c96428]
                  text-white font-bold text-sm
                  px-5 py-3.5 rounded-xl
                  shadow-md shadow-[#e07532]/20
                  hover:shadow-lg hover:shadow-[#e07532]/30
                  transition-all duration-200
                "
              >
                <div className="flex items-center gap-2.5">
                  <ExternalLink className="w-4 h-4" />
                  Open in Google Maps
                </div>
                <svg
                  className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917683028581?text=Hi%20SIDH%20SALES%2C%20I%20need%20industrial%20supply%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group w-full flex items-center justify-between
                  bg-white/[0.06] hover:bg-white/[0.12]
                  border border-white/10 hover:border-white/20
                  text-white font-semibold text-sm
                  px-5 py-3.5 rounded-xl
                  transition-all duration-200
                "
              >
                <div className="flex items-center gap-2.5">
                  <WaIcon className="w-4 h-4" />
                  WhatsApp Us
                </div>
                <svg
                  className="w-4 h-4 text-white/40 group-hover:translate-x-0.5 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent rule */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#e07532]/25 to-transparent" />
    </section>
  );
}
