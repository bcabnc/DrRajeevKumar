"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  Filter,
  Users,
  Award,
  ChevronRight,
  FileDown,
} from "lucide-react";
import { EXPERIENCES, PERSONAL_INFO } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";

export default function ExperiencePage() {
  const [filter, setFilter] = useState<"all" | "current" | "visiting" | "early">("all");

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filter === "current") return exp.isCurrent && !exp.role.includes("Visiting");
    if (filter === "visiting") return exp.role.includes("Visiting");
    if (filter === "early") return !exp.isCurrent;
    return true;
  });

  return (
    <div className="relative pb-20">
      {/* Header Banner */}
      <section className="bg-slate-950/70 pt-12 pb-14 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Faculty Appointments & History"
            badgeIcon={Briefcase}
            title="University Teaching Experience &"
            highlight="Academic Chronology"
            description="Chronicle of 25 years of continuous university professorships, visiting faculty positions, and curriculum leadership across Patna University and state institutions since 1999."
          />

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="academic-card p-4 rounded-xl border border-white/10">
              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-gold">1999</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">Teaching Career Commenced</div>
              <div className="text-[11px] text-slate-500">25+ years pedagogical tenure</div>
            </div>
            <div className="academic-card p-4 rounded-xl border border-white/10">
              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-white">2002</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">Patna University Faculty</div>
              <div className="text-[11px] text-slate-500">Continuous senior faculty</div>
            </div>
            <div className="academic-card p-4 rounded-xl border border-white/10">
              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-gold">8+</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">Departments Instructed</div>
              <div className="text-[11px] text-slate-500">CS, MBA, Biotech, Stats, PMIR</div>
            </div>
            <div className="academic-card p-4 rounded-xl border border-white/10">
              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-white">2,500+</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">Scholars Mentored</div>
              <div className="text-[11px] text-slate-500">MCA & BCA Capstones</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Timeline Stream */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Filter className="w-3.5 h-3.5 text-gold" />
            <span>Filter Academic Appointments:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                filter === "all"
                  ? "bg-[#dfba73] text-slate-900 font-semibold"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/10"
              }`}
            >
              All Appointments ({EXPERIENCES.length})
            </button>
            <button
              onClick={() => setFilter("current")}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                filter === "current"
                  ? "bg-[#dfba73] text-slate-900 font-semibold"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/10"
              }`}
            >
              Senior & Adhoc Faculty
            </button>
            <button
              onClick={() => setFilter("visiting")}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                filter === "visiting"
                  ? "bg-[#dfba73] text-slate-900 font-semibold"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/10"
              }`}
            >
              Visiting Professorships
            </button>
            <button
              onClick={() => setFilter("early")}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                filter === "early"
                  ? "bg-[#dfba73] text-slate-900 font-semibold"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/10"
              }`}
            >
              Early Roles & Beltron ICT
            </button>
          </div>
        </div>

        {/* Chronological Timeline */}
        <div className="relative border-l border-white/10 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-9">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                  exp.isCurrent
                    ? "bg-[#dfba73] border-slate-950 shadow-sm"
                    : "bg-slate-700 border-slate-950 group-hover:bg-[#dfba73]"
                }`}
              />

              {/* Experience Card */}
              <div className="academic-card p-6 sm:p-7 rounded-xl border border-white/10 group-hover:border-amber-600/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="badge-academic-gold px-2.5 py-0.5 rounded text-xs font-semibold flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.institution}</span>
                    </span>
                    {exp.isCurrent && (
                      <span className="badge-academic-emerald px-2 py-0.5 rounded text-[10px] font-semibold">
                        Active Tenured Role
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="font-serif-academic text-base sm:text-lg font-bold text-white mb-0.5 group-hover:text-gold transition-colors">
                  {exp.role}
                </h3>

                <h4 className="text-xs sm:text-sm text-gold font-medium mb-3">
                  {exp.department}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                  {exp.description}
                </p>

                {/* Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-3 border-t border-white/[0.06]">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Academic Scope & Contributions:
                    </span>
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capstone Mentorship & Examination Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/[0.08]">
        <SectionHeader
          badge="Impact & Student Leadership"
          badgeIcon={Users}
          title="Academic Capstone Guidance &"
          highlight="Examination Evaluation Services"
          description="Upholding rigorous university standards through postgraduate capstone mentorship and confidential university examination panel setting."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="academic-card p-6 sm:p-7 rounded-xl border border-white/10">
            <div className="w-10 h-10 rounded bg-slate-900 border border-white/10 text-gold flex items-center justify-center mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-serif-academic text-base sm:text-lg font-bold text-white mb-2">
              MCA & BCA Final Year Capstone Guide
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
              Supervised hundreds of undergraduate and postgraduate students in developing comprehensive software
              systems, database applications, network simulation models, and algorithmic implementations over 25 years.
            </p>
            <ul className="space-y-2 text-xs text-slate-400 font-normal">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                <span>Industry capstone project architecture & algorithmic audits</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                <span>Mentorship in research paper drafting & technical writing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                <span>Career and software placement preparation for graduating scholars</span>
              </li>
            </ul>
          </div>

          <div className="academic-card p-6 sm:p-7 rounded-xl border border-white/10">
            <div className="w-10 h-10 rounded bg-slate-900 border border-white/10 text-gold flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif-academic text-base sm:text-lg font-bold text-white mb-2">
              Confidential Question Setter & Evaluator
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
              Entrusted by multiple state and autonomous universities with the confidential responsibility of setting
              computer science theory examination papers, conducting practical laboratory viva-voce examinations, and evaluating answer scripts.
            </p>
            <ul className="space-y-2 text-xs text-slate-400 font-normal">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                <span>Question paper setting for MCA, BCA, and B.Sc. IT examinations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                <span>External practical examiner & thesis evaluation judge</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                <span>Syllabus review committee member for modern computing courses</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/research"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-900 bg-[#dfba73] hover:bg-[#ebd097] rounded shadow-sm transition-all"
          >
            <span>Explore Scholarly Publications & Books</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-white/10 rounded transition-all"
          >
            <span>Faculty Office & Consultations</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
