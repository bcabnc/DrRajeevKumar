"use client";

import { Phone, Mail, BookOpen, MessageSquare } from "lucide-react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function MobileQuickBar() {
  return (
    <div className="md:hidden fixed bottom-3 left-4 right-4 z-40 mobile-quick-bar">
      <div className="bg-[#0b0e14]/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl shadow-black/80 flex items-center justify-around">
        <a
          href={`tel:${PERSONAL_INFO.phone}`}
          className="flex flex-col items-center gap-1 py-1 px-3 text-slate-300 hover:text-[#dfba73] transition-colors"
          aria-label="Call Office"
        >
          <div className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-[#dfba73]">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium text-slate-400">Call</span>
        </a>

        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="flex flex-col items-center gap-1 py-1 px-3 text-slate-300 hover:text-[#dfba73] transition-colors"
          aria-label="Send email"
        >
          <div className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300">
            <Mail className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium text-slate-400">Email</span>
        </a>

        <Link
          href="/research"
          className="flex flex-col items-center gap-1 py-1 px-3 text-slate-300 hover:text-[#dfba73] transition-colors"
          aria-label="Publications"
        >
          <div className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-[#dfba73]">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium text-slate-400">Papers</span>
        </Link>

        <Link
          href="/contact"
          className="flex flex-col items-center gap-1 py-1 px-3 text-slate-300 hover:text-[#dfba73] transition-colors"
          aria-label="Contact Office"
        >
          <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#dfba73]">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium text-slate-400">Contact</span>
        </Link>
      </div>
    </div>
  );
}
