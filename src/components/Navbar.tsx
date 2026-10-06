"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  GraduationCap,
  Menu,
  X,
  Phone,
  Mail,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Overview", href: "/" },
    { label: "Academic Profile", href: "/about" },
    { label: "Teaching & Service", href: "/experience" },
    { label: "Publications & Books", href: "/research" },
    { label: "Notable Projects", href: "/projects" },
    { label: "Office & Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-[#0b0e14]/95 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-lg shadow-black/40"
            : "bg-[#0b0e14]/85 backdrop-blur-sm border-b border-white/[0.06] py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Faculty Identity Lockup */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-[#dfba73] group-hover:border-amber-400/50 transition-colors">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <div className="font-serif-academic text-base sm:text-lg font-bold text-slate-100 group-hover:text-[#dfba73] transition-colors flex items-center gap-2">
                  <span>Dr. Rajeev Kumar</span>
                  <span className="text-[11px] font-sans font-medium text-[#dfba73] bg-amber-500/10 border border-amber-500/25 px-1.5 py-0.5 rounded">
                    Ph.D.
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 font-sans tracking-normal">
                  Senior Faculty • Patna University
                </div>
              </div>
            </Link>

            {/* Clean Editorial Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-xs xl:text-sm font-medium transition-colors relative py-1 ${
                      isActive
                        ? "text-[#dfba73] font-semibold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#dfba73] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Understated Contact Button (NO CV Download) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-900 bg-[#dfba73] hover:bg-[#ebd097] rounded transition-all shadow-sm active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Contact Office</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2 text-[#dfba73] bg-slate-900 border border-white/10 rounded sm:hidden"
                aria-label="Direct Telephone"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-white/10 rounded focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#0b0e14] border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-[#dfba73]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-academic font-bold text-sm text-white">Dr. Rajeev Kumar</h3>
                  <p className="text-xs text-slate-400">Patna University</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-900"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-1">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3.5 py-2.5 rounded text-sm font-medium transition-all ${
                      isActive
                        ? "bg-slate-900 text-[#dfba73] font-semibold border-l-2 border-[#dfba73]"
                        : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3 mt-6">
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-[#dfba73] rounded shadow-sm transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call Office: {PERSONAL_INFO.phone}</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center justify-center gap-2 w-full py-2 px-4 text-xs font-medium text-slate-300 bg-slate-900 border border-white/10 rounded hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#dfba73]" />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <p className="text-center text-[11px] text-slate-500 pt-1 font-serif-academic italic">
              Patna, Bihar • Senior Faculty & Researcher
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
