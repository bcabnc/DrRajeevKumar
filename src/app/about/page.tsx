import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  BookOpen,
  FileCheck2,
  Calendar,
  Building,
  CheckCircle2,
  Cpu,
  Binary,
  Radio,
  ShieldCheck,
  FileDown,
  ArrowRight,
  Layers,
  MapPin,
  FileText,
} from "lucide-react";
import {
  PERSONAL_INFO,
  QUALIFICATIONS,
  TEACHING_SPECIALIZATIONS,
  CERTIFICATIONS,
  PROFESSIONAL_MEMBERSHIPS,
} from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Academic Profile & Qualifications | Dr. Rajeev Kumar, Ph.D.",
  description:
    "Curriculum Vitae, doctoral research in WSN, statistical degrees, NIT Patna distinction, and 25 years university teaching specializations of Dr. Rajeev Kumar.",
};

export default function AboutPage() {
  const specializationIcons = [Cpu, Binary, Layers, Radio];

  return (
    <div className="relative pb-20">
      {/* Header Banner */}
      <section className="bg-slate-950/70 pt-12 pb-14 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Curriculum Vitae"
            badgeIcon={GraduationCap}
            title="Academic Background &"
            highlight="Pedagogical Philosophy"
            description="Bridging pure mathematical optimization and statistics with microprocessor architecture, wireless sensor networks, and modern artificial intelligence."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl">
                  <Image
                    src={PERSONAL_INFO.avatarUrl}
                    alt="Dr. Rajeev Kumar - Scholar Portrait"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-slate-950 border-t border-white/10">
                    <h3 className="font-serif-academic font-bold text-base text-white">Dr. Rajeev Kumar</h3>
                    <p className="text-xs text-gold font-medium">Senior Faculty, Patna University</p>
                    <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>Buddha Colony, Patna - 800001</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="academic-card p-6 sm:p-7 rounded-xl border border-white/10">
                <h3 className="font-serif-academic text-lg font-bold text-white mb-3">
                  The Scholarly Foundation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                  For over 25 years, my pedagogical and research endeavor has been centered at the intersection of
                  <strong className="text-white"> Mathematical Rigor and Applied Computer Science</strong>. Beginning
                  with foundational postgraduate degrees in Statistics (specializing in Operations Research) from Patna University,
                  I recognized that high-performance computing systems and distributed networks require both rigorous probabilistic modeling
                  and hardware-aware systems engineering.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  This philosophy culminated in doctoral research dedicated to <strong className="text-white">Wireless Sensor Networks (WSN)</strong>,
                  specifically tackling <strong className="text-slate-100">Dynamic Power Management and Energy Harvesting Protocols</strong>.
                  As Senior Faculty at B.N. College, Patna University since 2002, I have mentored generations of computer application scholars, authored 5 official
                  state computer science textbooks for the Bihar Open Schooling Board, authored the 2025 volume &apos;The Introduction to Big Data Analytics&apos;,
                  and contributed to state-level administrative computing architectures.
                </p>

                <div className="pt-5 mt-5 border-t border-white/[0.08] flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-gold font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                      <span>7 Higher Degrees & Diplomas</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                      <span>25 Years University Teaching</span>
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-900 bg-[#dfba73] hover:bg-[#ebd097] rounded transition-colors"
                  >
                    <span>Contact Faculty Office</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formal Degrees & Academic Qualifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          badge="Credentials & Degrees"
          badgeIcon={GraduationCap}
          title="Formal Academic"
          highlight="Qualifications"
          description="Complete chronological and graded record of doctoral, postgraduate, and professional diplomas with university distinctions."
        />

        <div className="space-y-3.5">
          {QUALIFICATIONS.map((qual, idx) => (
            <div
              key={qual.degree + idx}
              className={`academic-card p-5 sm:p-6 rounded-xl border transition-all ${
                qual.highlight
                  ? "border-amber-600/40 bg-slate-900/90"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-serif-academic text-base sm:text-lg font-bold text-white">
                      {qual.degree}
                    </h3>
                    {qual.highlight && (
                      <span className="badge-academic-gold px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider">
                        Core Credential
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gold font-medium">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>{qual.institution}</span>
                  </div>

                  {qual.specialization && (
                    <p className="text-xs text-slate-400 pt-0.5">
                      <span className="text-slate-500 font-medium">Specialization: </span>
                      <span className="text-slate-300">{qual.specialization}</span>
                    </p>
                  )}
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 pt-2 md:pt-0 border-white/10">
                  {qual.gradeOrScore ? (
                    <span className="px-3 py-1 rounded bg-slate-900 border border-white/10 text-slate-200 text-xs font-semibold">
                      {qual.gradeOrScore}
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-gold text-xs font-semibold">
                      Doctor of Philosophy (Ph.D.)
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching Specialization Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/[0.08]">
        <SectionHeader
          badge="Curriculum Disciplines"
          badgeIcon={BookOpen}
          title="Specialization of"
          highlight="Teaching & Pedagogy"
          description="Syllabus development, laboratory instruction, and university examination setting across core computing domains."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEACHING_SPECIALIZATIONS.map((spec, index) => {
            const Icon = specializationIcons[index % specializationIcons.length];
            return (
              <div
                key={spec.category}
                className="academic-card p-6 rounded-xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded bg-slate-900 border border-white/10 text-gold flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif-academic text-base sm:text-lg font-bold text-white">
                      {spec.category}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 font-normal">
                    {spec.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Key Modules Instructed:
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {spec.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Advanced Certifications & 2026 Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/[0.08]">
        <SectionHeader
          badge="Professional Badges"
          badgeIcon={Award}
          title="Advanced Certifications &"
          highlight="Methodological Workshops"
          description="Continuous academic elevation in modern artificial intelligence, cybersecurity defense, and systematic literature review."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="academic-card p-5 rounded-xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] mb-3">
                  <span className="badge-academic-gold px-2 py-0.5 rounded font-medium">
                    {cert.type}
                  </span>
                  <span className="text-slate-400 font-medium">{cert.date}</span>
                </div>

                <h3 className="font-serif-academic text-sm font-bold text-white mb-1.5 line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-xs text-gold font-medium mb-1">
                  {cert.issuer}
                </p>

                {cert.accreditation && (
                  <p className="text-[11px] text-slate-400">
                    {cert.accreditation}
                  </p>
                )}
              </div>

              <div className="pt-3 mt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-slate-300 text-xs font-medium">
                <FileCheck2 className="w-3.5 h-3.5 text-gold" />
                <span>Verified Achievement</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Memberships & Academic Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/[0.08]">
        <SectionHeader
          badge="Institutional Service"
          badgeIcon={ShieldCheck}
          title="Professional Memberships &"
          highlight="Board Appointments"
          description="National computing society fellowship, confidential examination setter roles, and capstone project guidance."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROFESSIONAL_MEMBERSHIPS.map((mem) => (
            <div
              key={mem.organization}
              className="academic-card p-6 rounded-xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                <span className="badge-academic-gold px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider mb-3 inline-block">
                  {mem.role}
                </span>

                <h3 className="font-serif-academic text-base font-bold text-white mb-2">
                  {mem.organization}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {mem.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.06] text-xs font-medium text-gold flex items-center gap-1">
                <span>Honored Role</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-900 bg-[#dfba73] hover:bg-[#ebd097] rounded transition-colors"
          >
            <span>Proceed to 25-Year Teaching Experience Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
