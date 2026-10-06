"use client";

import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  BookOpen,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/[0.08] pt-14 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Faculty Overview */}
          <div className="space-y-3.5 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-slate-900 border border-amber-600/30 flex items-center justify-center text-gold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-academic font-bold text-base text-white">Dr. Rajeev Kumar</h3>
                <p className="text-xs text-gold font-medium">Patna University Faculty</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Senior Faculty in the Department of Computer Applications, B.N. College, Patna University. Over 25 years
              of multi-disciplinary scholarship spanning Wireless Sensor Networks, Operations Research, AI/ML, and Cybersecurity.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900 border border-white/10 px-3 py-1.5 rounded w-fit">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              <span>CSI Member & State BBOSE Author</span>
            </div>
          </div>

          {/* Site Directory */}
          <div>
            <h4 className="font-serif-academic text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-gold" />
              <span>Academic Directory</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-gold transition-colors">
                  Academic Profile & Credentials
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-slate-400 hover:text-gold transition-colors">
                  25-Year Teaching Experience
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-slate-400 hover:text-gold transition-colors">
                  Publications, Textbooks & Journals
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-gold transition-colors">
                  Notable Institutional Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-gold transition-colors">
                  Contact & Office Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* Research & Pedagogy Pillars */}
          <div>
            <h4 className="font-serif-academic text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-gold" />
              <span>Core Fields</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>Wireless Sensor Networks (WSN)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>Dynamic Power Management & IoT</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>Artificial Intelligence & ML (TDSP)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>Cyber Security Defense Protocols</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>Statistical Modeling & Op Research</span>
              </li>
            </ul>
          </div>

          {/* Direct Address & Contact */}
          <div>
            <h4 className="font-serif-academic text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>Office & Study</span>
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span>
                  Flat No. 203, B-Block, Amitabh Kunj, Main Road, Buddha Colony, Patna - 800001, Bihar
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-gold transition-colors font-serif-academic">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-gold transition-colors break-all">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-gold hover:underline"
                >
                  <span>Request Academic Appointment</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Rajeev Kumar. All academic, intellectual, and curriculum rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500 font-serif-academic">Patna University • B.N. College</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-gold border border-white/10 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
