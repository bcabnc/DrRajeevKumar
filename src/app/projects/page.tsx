import Link from "next/link";
import {
  FolderGit2,
  Calendar,
  Building,
  CheckCircle2,
  ArrowRight,
  Database,
  PhoneCall,
  BarChart3,
  ShieldCheck,
  Award,
} from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Notable Project Work | Dr. Rajeev Kumar, Ph.D.",
  description:
    "Real-world enterprise systems, university examination processing at NIT Patna, Beltron ICT software, BSNL telecom systems, and statistical research studies by Dr. Rajeev Kumar.",
};

export default function ProjectsPage() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Enterprise System":
        return Database;
      case "Software Development":
        return FolderGit2;
      case "Telecommunications":
        return PhoneCall;
      default:
        return BarChart3;
    }
  };

  return (
    <div className="relative pb-20">
      {/* Header Banner */}
      <section className="bg-slate-950/70 pt-12 pb-14 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Applied Systems & Field Research"
            badgeIcon={FolderGit2}
            title="Notable Project Work &"
            highlight="Institutional Systems"
            description="Engineering mission-critical examination automation at NIT Patna, state government software development, telecommunication workflows, and empirical statistical field research."
          />

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="academic-card p-4 rounded-xl border border-white/10">
              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-gold">1997</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">NIT Patna Exam Automation</div>
              <div className="text-[11px] text-slate-500">Patna University Honours</div>
            </div>
            <div className="academic-card p-4 rounded-xl border border-white/10">
              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-white">Beltron</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">Library System Dev</div>
              <div className="text-[11px] text-slate-500">Govt. of Bihar Enterprise</div>
            </div>
            <div className="academic-card p-4 rounded-xl border border-white/10">
              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-gold">BSNL</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">Fault Repair Engine</div>
              <div className="text-[11px] text-slate-500">Telecom Workflow System</div>
            </div>
            <div className="academic-card p-4 rounded-xl border border-white/10">
              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-white">Empirical</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">Socioeconomic Studies</div>
              <div className="text-[11px] text-slate-500">Bihar Workforce Analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {PROJECTS.map((project) => {
            const Icon = getCategoryIcon(project.category);

            return (
              <div
                key={project.id}
                className="academic-card p-6 sm:p-8 rounded-xl border border-white/10 hover:border-amber-600/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="badge-academic-gold px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-gold-muted" />
                      <span>{project.category}</span>
                    </span>

                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      <span>{project.year}</span>
                    </span>
                  </div>

                  <h3 className="font-serif-academic text-lg sm:text-xl font-bold text-white mb-1.5 leading-snug">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gold font-medium mb-3">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>{project.organization}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                    {project.description}
                  </p>

                  {/* Impact Highlight */}
                  <div className="p-4 rounded bg-slate-900 border border-white/10 mb-5">
                    <span className="text-xs font-semibold text-slate-200 block mb-1">
                      Institutional Scope & Result:
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      {project.impact}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Core Methodologies & Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2.5 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                  <span className="font-serif-academic italic">Supervised Technical Implementation</span>
                  <span className="text-slate-300 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                    <span>Deployed & Verified</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Guidance Notice */}
        <div className="mt-14 academic-card p-6 sm:p-8 rounded-xl border border-white/10 bg-slate-950 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h3 className="font-serif-academic text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gold" />
              <span>Postgraduate & MCA Capstone Supervision</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal">
              Dr. Rajeev Kumar provides academic advisory, algorithmic mentorship, and research design consultation
              for postgraduate theses in Wireless Sensor Networks, IoT, and Machine Learning.
            </p>
          </div>

          <Link
            href="/contact"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-900 bg-[#dfba73] hover:bg-[#ebd097] rounded shadow-sm shrink-0 transition-colors"
          >
            <span>Request Project Guidance</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
