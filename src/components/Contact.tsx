"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Phone, Mail, Receipt, Send, ExternalLink, MapPin,
  Loader2, CheckCircle2, AlertTriangle, ChevronDown, RefreshCw,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/* ─── WhatsApp SVG ──────────────────────────────────────────── */
function WaIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Urgency options ───────────────────────────────────────── */
const URGENCY_OPTIONS = [
  { value: "normal",    label: "Normal Requirement"    },
  { value: "urgent",    label: "Urgent Requirement"    },
  { value: "emergency", label: "Emergency Supply"      },
];

/* ─── Location Hero Card (unchanged) ────────────────────────── */
function LocationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl bg-[#0b1f33] shadow-xl shadow-[#0b1f33]/20"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg, transparent, transparent 18px,
            rgba(255,255,255,1) 18px, rgba(255,255,255,1) 19px
          )`,
        }}
      />
      <div
        className="absolute top-0 right-0 w-40 h-40 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
      <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-[#e07532]/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 p-7">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-lg bg-[#e07532]/15 border border-[#e07532]/25 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-[#e07532]" />
          </div>
          <span className="text-[#e07532] text-[10px] font-bold uppercase tracking-[0.18em]">
            Base Location
          </span>
        </div>

        <h3 className="text-white font-extrabold text-[22px] leading-snug mb-1">
          Baddi, Himachal Pradesh
        </h3>
        <p className="text-[#8a9ab0] text-[13px] leading-relaxed mb-6">
          Supporting Pharma &amp; Manufacturing Industries Since 2008
        </p>

        <div className="h-px bg-gradient-to-r from-[#e07532]/40 via-white/10 to-transparent mb-6" />

        <div className="grid grid-cols-3 gap-3">
          {[
            { val: "16+", label: "Years Active" },
            { val: "50+", label: "Clients Served" },
            { val: "24h", label: "Emergency Supply" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-white font-extrabold text-lg">{s.val}</div>
              <div className="text-[#8a9ab0] text-[9px] uppercase tracking-widest mt-0.5 leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-5 border-t border-white/[0.08]">
          <p className="text-[#8a9ab0] text-xs leading-relaxed mb-3">
            Shop No. 1, Near Vishal Mega Mart,<br />
            Sai Road, Baddi – 173205 (H.P.)
          </p>
          <a
            href="https://maps.google.com/?q=Sai+Road+Baddi+Himachal+Pradesh+173205"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#e07532] text-xs font-bold hover:gap-2.5 transition-all duration-200"
          >
            Open in Google Maps
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#e07532] via-[#e07532]/60 to-transparent" />
    </motion.div>
  );
}

/* ─── Info tiles ────────────────────────────────────────────── */
const TILES = [
  {
    icon: Phone,
    label: "Call Us",
    items: [
      { text: "+91-6230126350", href: "tel:+916230126350" },
      { text: "+91-7683028581", href: "tel:+917683028581" },
    ],
  },
  {
    icon: Mail,
    label: "Email Us",
    items: [
      { text: "sidhsalesbaddi@gmail.com", href: "mailto:sidhsalesbaddi@gmail.com" },
      { text: "sidhsalesparth@gmail.com", href: "mailto:sidhsalesparth@gmail.com" },
    ],
  },
  {
    icon: Receipt,
    label: "GSTIN",
    items: [{ text: "02AANPG515H1Z0", href: undefined }],
  },
];

function InfoTile({ tile }: { tile: typeof TILES[0] }) {
  const Icon = tile.icon;
  return (
    <div className="group flex items-start gap-4 px-5 py-4 bg-white rounded-xl border border-[#e2e8f0] hover:border-[#1a3d64]/20 hover:shadow-md transition-all duration-250">
      <div className="w-9 h-9 rounded-lg bg-[#f4f6f9] group-hover:bg-[#e07532]/8 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-250">
        <Icon className="w-4 h-4 text-[#e07532]" />
      </div>
      <div className="min-w-0">
        <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8a9ab0] mb-1.5">
          {tile.label}
        </div>
        {tile.items.map((item) =>
          item.href ? (
            <a
              key={item.text}
              href={item.href}
              className="block text-[#0b1f33] text-sm font-semibold hover:text-[#e07532] transition-colors duration-150 truncate"
            >
              {item.text}
            </a>
          ) : (
            <span
              key={item.text}
              className="block text-[#0b1f33] text-sm font-mono font-semibold tracking-wide"
            >
              {item.text}
            </span>
          )
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════ */

type Status = "idle" | "sending" | "success" | "error";

const INITIAL = { name: "", company: "", phone: "", email: "", urgency: "normal", message: "" };

export default function Contact() {
  const [form, setForm]       = useState(INITIAL);
  const [status, setStatus]   = useState<Status>("idle");
  const [errMsg, setErrMsg]   = useState<string>("");
  const formRef               = useRef<HTMLFormElement>(null);

  const update = (k: keyof typeof INITIAL, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const reset = () => {
    setForm(INITIAL);
    setStatus("idle");
    setErrMsg("");
  };

  /* ── Submit handler ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Fallback: mailto if EmailJS keys aren't configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const urgencyLabel =
        URGENCY_OPTIONS.find((u) => u.value === form.urgency)?.label || form.urgency;
      const sub  = encodeURIComponent(
        `Industrial Supply Enquiry — ${form.name}${form.company ? " · " + form.company : ""} (${urgencyLabel})`
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nUrgency: ${urgencyLabel}\n\nRequirement:\n${form.message}`
      );
      window.open(`mailto:sidhsalesbaddi@gmail.com?subject=${sub}&body=${body}`);
      setStatus("success");
      return;
    }

    setStatus("sending");
    setErrMsg("");

    try {
      const urgencyLabel =
        URGENCY_OPTIONS.find((u) => u.value === form.urgency)?.label || form.urgency;

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:    form.name,
          from_company: form.company || "—",
          from_phone:   form.phone,
          from_email:   form.email || "—",
          urgency:      urgencyLabel,
          message:      form.message,
          reply_to:     form.email || "noreply@sidhsales.in",
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrMsg(
        err instanceof Error
          ? err.message
          : "Could not send right now. Please call or WhatsApp us directly."
      );
    }
  };

  /* ── Selected urgency option ── */
  const selectedUrgency = URGENCY_OPTIONS.find((u) => u.value === form.urgency)!;

  return (
    <section id="contact" className="bg-[#f4f6f9] py-20 lg:py-28 border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#e07532]" />
            <span className="text-[#e07532] text-[11px] font-bold uppercase tracking-widest">
              Get In Touch
            </span>
            <div className="h-px w-10 bg-[#e07532]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1f33] leading-tight">
            Request a Quote
          </h2>
          <p className="mt-4 text-[#8a9ab0] text-base max-w-xl mx-auto leading-relaxed">
            Share your requirement and we&apos;ll respond with pricing and
            availability within 24 hours. Emergency supply? Call us directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-7 lg:gap-10">

          {/* ── LEFT column ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <LocationCard />
            {TILES.map((tile) => <InfoTile key={tile.label} tile={tile} />)}

            <a
              href="https://wa.me/917683028581?text=Hi%20SIDH%20SALES%2C%20I%20need%20industrial%20supply%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center justify-between
                px-5 py-4 rounded-xl
                bg-[#25D366] hover:bg-[#1ebe57]
                text-white font-bold text-sm
                shadow-md shadow-[#25D366]/20
                hover:shadow-lg hover:shadow-[#25D366]/30
                transition-all duration-250
              "
            >
              <div className="flex items-center gap-3">
                <WaIcon />
                <div>
                  <div className="text-white font-bold text-sm leading-tight">Chat on WhatsApp</div>
                  <div className="text-white/70 text-[10px] font-normal mt-0.5">Fast response for urgent requirements</div>
                </div>
              </div>
              <svg className="w-4 h-4 text-white/60 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* ── RIGHT column: enquiry form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="relative bg-white rounded-2xl border border-[#e2e8f0] p-7 md:p-10 shadow-sm h-full overflow-hidden">

              {/* Top accent rule */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#0b1f33] via-[#e07532] to-[#0b1f33]" />

              <h3 className="font-extrabold text-[#0b1f33] text-xl mb-1">
                Send Your Requirement
              </h3>
              <p className="text-[#8a9ab0] text-sm mb-8 leading-relaxed">
                We respond to all enquiries within 24 hours. For emergency supply,
                call or WhatsApp us directly.
              </p>

              <AnimatePresence mode="wait">
                {/* ════ SUCCESS STATE ════ */}
                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45 }}
                    className="py-8"
                  >
                    {/* Premium check badge */}
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.1 }}
                        className="relative mb-5"
                      >
                        {/* Outer pulse ring */}
                        <span className="absolute inset-0 rounded-full bg-[#e07532]/20 blur-xl animate-pulse" />
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#0b1f33] to-[#1a3d64] flex items-center justify-center shadow-lg shadow-[#0b1f33]/20 border-2 border-[#e07532]/40">
                          <CheckCircle2 className="w-9 h-9 text-[#e07532]" strokeWidth={2.4} />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <div className="h-px w-6 bg-[#e07532]" />
                          <span className="text-[#e07532] text-[10px] font-bold uppercase tracking-[0.22em]">
                            Enquiry Received
                          </span>
                          <div className="h-px w-6 bg-[#e07532]" />
                        </div>
                        <h4 className="font-extrabold text-[#0b1f33] text-xl mb-2">
                          Submitted Successfully
                        </h4>
                        <p className="text-[#8a9ab0] text-sm leading-relaxed max-w-md mx-auto">
                          Your requirement has been submitted successfully. Our team will contact you shortly.
                        </p>
                      </motion.div>

                      {/* CTAs */}
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-7 w-full max-w-md flex flex-col sm:flex-row gap-3"
                      >
                        <a
                          href="https://wa.me/917683028581?text=Hi%20SIDH%20SALES%2C%20I%20just%20submitted%20an%20enquiry%20on%20your%20website."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold text-sm px-5 py-3 rounded-md transition-colors shadow-md shadow-[#25D366]/20"
                        >
                          <WaIcon className="w-4 h-4" />
                          Continue on WhatsApp
                        </a>
                        <button
                          onClick={reset}
                          className="flex-1 flex items-center justify-center gap-2 bg-[#f4f6f9] hover:bg-[#e2e8f0] text-[#0b1f33] border border-[#e2e8f0] font-semibold text-sm px-5 py-3 rounded-md transition-colors"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          Send Another
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* ════ FORM (idle / sending / error) ════ */}
                {status !== "success" && (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Row 1 */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField label="Full Name *">
                        <Input
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          disabled={status === "sending"}
                          className="h-11 border-[#e2e8f0] focus:border-[#1a3d64]"
                        />
                      </FormField>
                      <FormField label="Company Name">
                        <Input
                          placeholder="Company / Plant name"
                          value={form.company}
                          onChange={(e) => update("company", e.target.value)}
                          disabled={status === "sending"}
                          className="h-11 border-[#e2e8f0] focus:border-[#1a3d64]"
                        />
                      </FormField>
                    </div>

                    {/* Row 2 */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField label="Phone Number *">
                        <Input
                          required
                          type="tel"
                          inputMode="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          disabled={status === "sending"}
                          className="h-11 border-[#e2e8f0] focus:border-[#1a3d64]"
                        />
                      </FormField>
                      <FormField label="Email Address">
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          disabled={status === "sending"}
                          className="h-11 border-[#e2e8f0] focus:border-[#1a3d64]"
                        />
                      </FormField>
                    </div>

                    {/* Urgency dropdown */}
                    <FormField label="Urgency Level *">
                      <div className="relative">
                        <select
                          required
                          value={form.urgency}
                          onChange={(e) => update("urgency", e.target.value)}
                          disabled={status === "sending"}
                          className="
                            w-full h-11 pl-8 pr-10
                            text-sm font-medium text-[#0b1f33]
                            bg-white
                            border border-[#e2e8f0]
                            rounded-md
                            appearance-none cursor-pointer
                            focus:outline-none focus:border-[#1a3d64] focus:ring-2 focus:ring-[#1a3d64]/15
                            disabled:opacity-60 disabled:cursor-not-allowed
                            transition-colors
                          "
                        >
                          {URGENCY_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a9ab0] pointer-events-none" />
                        {/* Indicator dot */}
                        <span
                          className={`
                            absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full
                            ${
                              form.urgency === "emergency"
                                ? "bg-[#e07532] shadow-[0_0_8px_rgba(224,117,50,0.7)]"
                                : form.urgency === "urgent"
                                  ? "bg-[#e07532]/60"
                                  : "bg-[#8a9ab0]"
                            }
                          `}
                          aria-hidden="true"
                        />
                      </div>
                      {form.urgency === "emergency" && (
                        <p className="mt-1.5 text-[11px] text-[#e07532] flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#e07532] animate-pulse" />
                          For fastest response, also call <a href="tel:+916230126350" className="font-bold underline">+91-6230126350</a>
                        </p>
                      )}
                    </FormField>

                    {/* Requirement */}
                    <FormField label="Requirement Details *">
                      <Textarea
                        required
                        placeholder="Describe the product(s), quantities, specifications, and any urgent timelines…"
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        disabled={status === "sending"}
                        className="border-[#e2e8f0] focus:border-[#1a3d64] min-h-[140px] resize-none"
                      />
                    </FormField>

                    {/* Error banner */}
                    <AnimatePresence>
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className="flex items-start gap-3 px-4 py-3 rounded-lg border border-red-200 bg-red-50"
                        >
                          <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <div className="text-[12px] text-red-700 leading-relaxed">
                            <strong>Could not send.</strong> {errMsg || "Please try again or contact us directly."}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="
                        group relative w-full overflow-hidden
                        flex items-center justify-center gap-2.5
                        bg-[#0b1f33] text-white font-bold
                        rounded-xl text-[15px]
                        shadow-md shadow-[#0b1f33]/20
                        hover:shadow-xl hover:shadow-[#0b1f33]/30
                        hover:-translate-y-px
                        disabled:hover:translate-y-0 disabled:cursor-not-allowed disabled:opacity-90
                        transition-all duration-200
                      "
                      style={{ height: "52px" }}
                    >
                      <span
                        className="
                          absolute inset-0
                          bg-gradient-to-r from-transparent via-white/[0.06] to-transparent
                          -translate-x-full group-hover:translate-x-full
                          transition-transform duration-700
                        "
                      />
                      <span className="absolute inset-0 bg-[#132d4a] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />

                      {status === "sending" ? (
                        <>
                          <Loader2 className="relative z-10 w-4 h-4 animate-spin" />
                          <span className="relative z-10">Sending Enquiry…</span>
                        </>
                      ) : (
                        <>
                          <Send className="relative z-10 w-4 h-4" />
                          <span className="relative z-10">Send Enquiry</span>
                        </>
                      )}
                    </button>

                    {/* Emergency contact block */}
                    <div className="rounded-xl border border-[#e07532]/20 bg-[#e07532]/[0.04] px-5 py-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#e07532]/10 border border-[#e07532]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Phone className="w-3.5 h-3.5 text-[#e07532]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="relative flex-shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#e07532] block" />
                              <span className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-[#e07532] animate-ping opacity-60" />
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e07532]">
                              Emergency Supply Support
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                            {[
                              { num: "+91-6230126350", tel: "tel:+916230126350" },
                              { num: "+91-7683028581", tel: "tel:+917683028581" },
                            ].map(({ num, tel }) => (
                              <a
                                key={num}
                                href={tel}
                                className="text-[#0b1f33] font-bold text-[15px] tracking-wide hover:text-[#e07532] transition-colors duration-150"
                              >
                                {num}
                              </a>
                            ))}
                          </div>
                          <p className="mt-1.5 text-[#8a9ab0] text-[11px] leading-relaxed">
                            Available for urgent bearing replacements, hydraulic failures &amp; maintenance emergencies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Helper: form field wrapper ────────────────────────────── */
function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-bold text-[#0b1f33] uppercase tracking-wider">
        {label}
      </label>
      {children}
    </div>
  );
}
