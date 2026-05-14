"use client";

import { motion } from "framer-motion";
import { Calendar, Truck, ShieldCheck, FlaskConical, Layers } from "lucide-react";

const ITEMS = [
  { icon: Calendar,     label: "Since 2008",                   sub: "16+ Years of Service" },
  { icon: Truck,        label: "Fast Delivery Support",        sub: "Urgent Order Handling" },
  { icon: ShieldCheck,  label: "Genuine Industrial Products",  sub: "OEM & Brand Certified" },
  { icon: FlaskConical, label: "Pharma & Manufacturing",       sub: "Industry Specialists" },
  { icon: Layers,       label: "Bulk Supply Capability",       sub: "Any Quantity, Any Time" },
];

export default function TrustBar() {
  return (
    <section id="trust" className="bg-[#132d4a] border-y border-white/[0.07] py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07]">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-3.5 px-5 py-5 hover:bg-white/[0.04] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#e07532]/10 group-hover:bg-[#e07532]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Icon className="w-4.5 h-4.5 text-[#e07532] w-[18px] h-[18px]" />
                </div>
                <div>
                  <div className="text-white text-[13px] font-bold leading-snug">{item.label}</div>
                  <div className="text-[#8a9ab0] text-[11px] mt-0.5">{item.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
