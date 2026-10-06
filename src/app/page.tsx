import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Award,
  Cpu,
  ShieldCheck,
  Binary,
  Radio,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Building2,
  Phone,
  Mail,
  ChevronRight,
  BookMarked,
  Layers,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { PERSONAL_INFO, PUBLICATIONS, EXPERIENCES, AMAZON_AUTHOR_PROFILE } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";

export default function HomePage() {
  const amazonBooks = PUBLICATIONS.filter((p) => p.isAmazonBook);
  const recentJournals = PUBLICATIONS.filter((p) => p.type === "journal");

  const corePillars = [
    {
      title: "Wireless Sensor Networks (WSN)",
      tag: "Doctoral Research",
      desc: "Specialized in Dynamic Power Management, energy harvesting protocols, and packet routing optimization in energy-constrained sensor networks.",
      modules: "Dynamic Power Throttling, Cluster Heads, Packet Delivery Ratio, IoT Sensing",
    },
    {
      title: "Artificial Intelligence & ML",
      tag: "Certified Program 2026",
      desc: "Bridging statistical theory with the Team Data Science Process (TDSP), sentiment analysis NLP, and practical machine learning lifecycles.",
      modules: "Supervised Learning, TF-IDF Vectorization, Sentiment Classification, TDSP",
    },
    {
      title: "Cyber Security & Defensive Systems",
      tag: "Certified Professional 2026",
      desc: "Architecting secure client-server workflows, access control models, network security protocols, and vulnerability analysis.",
      modules: "Defensive Security, Integrity Audits, Protocol Hardening, Fault Logging",
    },
    {
      title: "Computer Architecture & Systems",
      tag: "25 Years Pedagogy",
      desc: "Mastery in 8085/8086 microprocessors, system bus design, modern operating systems, and memory hierarchy optimization.",
      modules: "Microprocessor 8085/8086, Modern OS, System Bus Architecture, Assembly",
    },
    {
      title: "Statistics & Operations Research",
      tag: "M.Phil & M.Sc. Honors",
      desc: "Mathematical optimization, numerical computational methods, linear programming, and multivariate statistical forecasting.",
      modules: "Operations Research, Linear Programming, Numerical Analysis, Probability",
    },
    {
      title: "State Curriculum & Textbook Authorship",
      tag: "BBOSE & State Govt.",
      desc: "Author of five official state Computer Science textbooks for the Bihar Open Schooling Board and academic textbook on Big Data Analytics (2025).",
      modules: "5 BBOSE CS Textbooks, Big Data Analytics (2025), University Course Syllabi",
    },
  ];

  return (
    <div className="relative pb-16">
      {/* Editorial Faculty Masthead */}
      <section className="border-b border-white/[0.08] bg-[#0b0e14] pt-8 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Scholarly Portrait & Faculty Directory Card */}
            <div className="lg:col-span-4 space-y-5">
              <div className="rounded-lg overflow-hidden border border-white/10 bg-slate-900 shadow-lg">
                <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-950">
                  <Image
                    src={PERSONAL_INFO.avatarUrl}
                    alt="Dr. Rajeev Kumar - Senior Faculty, Patna University"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-4 bg-[#0d121c] border-t border-white/10 text-center">
                  <div className="font-serif-academic font-bold text-base text-slate-100">
                    Dr. Rajeev Kumar
                  </div>
                  <div className="text-xs text-[#dfba73] font-medium mt-0.5">
                    Senior Faculty in Computer Science
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    B.N. College, Patna University
                  </div>
                </div>
              </div>

              {/* Faculty Directory Information */}
              <div className="p-4 rounded-lg bg-slate-900/80 border border-white/10 text-xs space-y-2.5 text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#dfba73] shrink-0 mt-0.5" />
                  <span className="text-[11px] text-slate-300 leading-relaxed">
                    Flat No. 203, B-Block, Amitabh Kunj, Main Road, Buddha Colony, Patna - 800001
                  </span>
                </div>
                <div className="flex items-center gap-2.5 pt-1 border-t border-white/[0.06]">
                  <Mail className="w-3.5 h-3.5 text-[#dfba73] shrink-0" />
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-[11px] text-slate-200 hover:text-[#dfba73] transition-colors truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 pt-1 border-t border-white/[0.06]">
                  <Phone className="w-3.5 h-3.5 text-[#dfba73] shrink-0" />
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-[11px] text-slate-200 hover:text-[#dfba73] transition-colors font-medium"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 pt-1 border-t border-white/[0.06] text-[11px] text-slate-400">
                  <Building2 className="w-3.5 h-3.5 text-[#dfba73] shrink-0" />
                  <span>Patna University Faculty since 2002</span>
                </div>
              </div>
            </div>

            {/* Right Column: Authoritative Scholar Biography & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2 border-b border-white/[0.08] pb-5">
                <div className="text-xs uppercase tracking-widest text-[#dfba73] font-semibold">
                  Faculty of Science • Department of Computer Applications
                </div>
                <h1 className="font-serif-academic text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  Dr. Rajeev Kumar
                </h1>
                <p className="font-serif-academic text-base sm:text-lg text-slate-300 font-normal italic">
                  Ph.D. (Computer Science & IT), M.Phil. (Statistics), MCA, M.Sc.
                </p>
                <div className="text-xs text-slate-400 pt-1">
                  Senior Faculty (Computer Science), B.N. College, Patna University • 25+ Years Academic Tenure
                </div>
              </div>

              {/* Scholar Bio Narrative */}
              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                <p>
                  I am a senior academician and computer scientist with over 25 years of multi-disciplinary experience
                  in Computer Science, Statistics, and Information Technology. My doctoral research focuses on{" "}
                  <strong className="text-white font-medium">Wireless Sensor Networks (WSN)</strong>, with specialized
                  investigation into Dynamic Power Management and Energy Harvesting protocols.
                </p>
                <p>
                  My pedagogical philosophy bridges foundational mathematical and statistical principles—rooted in
                  Operations Research and optimization theory—with frontier computing frameworks, including the Team
                  Data Science Process (TDSP), Machine Learning lifecycles, and Cybersecurity defensive architectures.
                </p>
                <p>
                  Beyond university classroom pedagogy at Patna University and distance education counseling at IGNOU,
                  I have served as official textbook author for the{" "}
                  <strong className="text-white font-medium">
                    Bihar Open Schooling and Examination Board (BBOSE, Department of Education, Government of Bihar)
                  </strong>
                  , authoring five Computer Science textbooks, and authored the 2025 academic book{" "}
                  <strong className="text-[#dfba73] font-medium">
                    &apos;The Introduction to Big Data Analytics&apos;
                  </strong>
                  .
                </p>
              </div>

              {/* Verified Higher Degrees Register */}
              <div className="space-y-2 pt-2">
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Key Academic Credentials
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded bg-slate-900/90 border border-white/10 flex items-center justify-between">
                    <span className="font-medium text-slate-200">Ph.D. in Computer Science & IT</span>
                    <span className="text-[11px] text-[#dfba73]">WSN Specialization</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900/90 border border-white/10 flex items-center justify-between">
                    <span className="font-medium text-slate-200">M.Phil. in Statistics</span>
                    <span className="text-[11px] text-slate-400">Periyar University (64%)</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900/90 border border-white/10 flex items-center justify-between">
                    <span className="font-medium text-slate-200">M.Sc. in Statistics (Op. Research)</span>
                    <span className="text-[11px] text-slate-400">Patna University (69%)</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900/90 border border-white/10 flex items-center justify-between">
                    <span className="font-medium text-slate-200">PGDCA (Systems Engineering)</span>
                    <span className="text-[11px] text-[#dfba73] font-medium">NIT Patna (76% Distinction)</span>
                  </div>
                </div>
              </div>

              {/* Action Links (NO CV Download) */}
              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/[0.08]">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-[#dfba73] hover:bg-[#ebd097] rounded transition-all shadow-sm"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Publications & Textbooks</span>
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-white/10 rounded transition-colors"
                >
                  <span>Full Academic Background</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  <span>Office Hours & Inquiries</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Career Metrics */}
      <section className="border-b border-white/[0.08] bg-[#0d111a] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="border-l-2 border-[#dfba73] pl-4">
              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-white">25+ Years</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">Continuous Pedagogy</div>
              <div className="text-[11px] text-slate-500">Patna University & Institutions</div>
            </div>

            <div className="border-l-2 border-white/20 pl-4">
              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-white">7 Degrees</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">Higher Qualifications</div>
              <div className="text-[11px] text-slate-500">Ph.D., M.Phil, MCA, NIT PGDCA</div>
            </div>

            <div className="border-l-2 border-[#dfba73] pl-4">
              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-white">6 Textbooks</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">Authored & Published</div>
              <div className="text-[11px] text-slate-500">BBOSE & Big Data Analytics (2025)</div>
            </div>

            <div className="border-l-2 border-white/20 pl-4">
              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-white">2,500+</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">Scholars Mentored</div>
              <div className="text-[11px] text-slate-500">MCA & BCA Capstone Theses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Academic & Research Disciplines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          badge="Disciplines & Pedagogy"
          badgeIcon={Layers}
          title="Areas of Specialization &"
          highlight="Computational Research"
          description="Syllabus architecture, theoretical foundations, and laboratory coursework supervised across university faculties."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-lg bg-slate-900/70 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-[11px] font-semibold text-[#dfba73] uppercase tracking-wider">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="font-serif-academic text-base sm:text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mb-4">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[11px] text-slate-400">
                <span className="text-slate-500 font-medium">Core Topics: </span>
                <span className="text-slate-300">{pillar.modules}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Scholarly Publications & Amazon Books */}
      <section className="border-t border-white/[0.08] bg-[#0b0e14] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/[0.08]">
            <SectionHeader
              badge="Published Books & Authorship"
              badgeIcon={BookOpen}
              title="Official Amazon Author Books &"
              highlight="Academic Volumes"
              description="Authored textbooks available internationally on Amazon Kindle & Direct Publishing, alongside state curriculum series."
            />
            <a
              href={AMAZON_AUTHOR_PROFILE.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-[#dfba73] hover:bg-amber-500/20 transition-all shrink-0"
            >
              <span>Official Amazon Author Store</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 4 Amazon Books Grid with Covers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {amazonBooks.map((book) => (
              <div
                key={book.id}
                className="academic-card p-4 rounded-xl border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between bg-slate-900/80 group"
              >
                <div>
                  <div className="relative aspect-[2/3] w-full mb-3 rounded-lg overflow-hidden bg-slate-950 border border-white/10 shadow-md">
                    {book.coverImage && (
                      <Image
                        src={book.coverImage}
                        alt={book.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    )}
                    <div className="absolute top-2 right-2 bg-slate-950/90 text-[#dfba73] text-[10px] font-bold px-2 py-0.5 rounded border border-amber-500/30 backdrop-blur-sm">
                      Kindle
                    </div>
                  </div>

                  <div className="text-[10px] uppercase font-bold text-[#dfba73] tracking-wider mb-1">
                    ASIN: {book.asin}
                  </div>
                  <h4 className="font-serif-academic text-sm sm:text-base font-bold text-white mb-1.5 leading-snug line-clamp-2">
                    {book.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-3 mb-3 leading-relaxed">
                    {book.abstract}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-semibold text-white">{book.price || "₹449.00"}</div>
                    <div className="text-[10px] text-slate-500">Kindle Edition</div>
                  </div>
                  {book.amazonUrl && (
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-[#dfba73] text-slate-950 hover:bg-[#ebd097] transition-all shrink-0"
                    >
                      <span>Buy on Amazon</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {/* Book 2: BBOSE Textbooks */}
            <div className="p-5 sm:p-6 rounded-lg bg-slate-900/70 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1 max-w-3xl">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold text-slate-300 bg-white/[0.06] px-2 py-0.5 rounded border border-white/10">
                    State Government Curriculum
                  </span>
                  <span className="text-xs text-slate-400">Series of 5 Volumes</span>
                </div>
                <h4 className="font-serif-academic text-base sm:text-lg font-bold text-white">
                  Computer Science Textbook Series (5 Books) — Bihar Open Schooling & Examination Board (BBOSE)
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Commissioned by the Department of Education, Government of Bihar. Authored five complete Computer
                  Science textbooks covering programming logic, digital literacy, and database systems.
                </p>
              </div>

              <Link
                href="/research"
                className="shrink-0 text-xs font-medium text-[#dfba73] hover:underline"
              >
                <span>Curriculum Details →</span>
              </Link>
            </div>

            {/* Journal Publications */}
            {recentJournals.map((pub) => (
              <div
                key={pub.id}
                className="p-5 rounded-lg bg-slate-900/50 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1 max-w-3xl">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-[10px] uppercase font-bold text-slate-300 bg-white/[0.06] px-2 py-0.5 rounded border border-white/10">
                      Journal Article
                    </span>
                    <span>{pub.year}</span>
                  </div>
                  <h4 className="font-serif-academic text-sm sm:text-base font-bold text-white">
                    {pub.title}
                  </h4>
                  <div className="text-xs text-[#dfba73] font-medium">
                    {pub.venue} • {pub.details}
                  </div>
                </div>

                <Link
                  href="/research"
                  className="shrink-0 text-xs font-medium text-slate-300 hover:text-[#dfba73] transition-colors"
                >
                  <span>View Paper Details →</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/research"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dfba73] hover:underline"
            >
              <span>View Full Research Publications Archive & Citation Formats</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* University Appointments Register */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          badge="Academic Appointments"
          badgeIcon={Building2}
          title="University Teaching Appointments &"
          highlight="Faculty History"
          description="Chronological summary of teaching assignments across Patna University departments and state institutions."
        />

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border border-white/10 rounded-lg overflow-hidden">
            <thead className="bg-slate-900 border-b border-white/10 text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4">Period</th>
                <th className="py-3 px-4">Designation / Role</th>
                <th className="py-3 px-4">Department & Faculty</th>
                <th className="py-3 px-4">University / Institution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-slate-300">
              {EXPERIENCES.slice(0, 6).map((exp) => (
                <tr key={exp.id} className="hover:bg-slate-900/60 transition-colors">
                  <td className="py-3 px-4 font-medium text-[#dfba73] whitespace-nowrap">
                    {exp.period}
                  </td>
                  <td className="py-3 px-4 font-semibold text-white">
                    {exp.role}
                  </td>
                  <td className="py-3 px-4 text-slate-300">
                    {exp.department}
                  </td>
                  <td className="py-3 px-4 text-slate-400">
                    {exp.institution}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
          <span>Showing primary faculty appointments</span>
          <Link href="/experience" className="text-[#dfba73] hover:underline font-medium">
            <span>View Complete 25-Year Chronology →</span>
          </Link>
        </div>
      </section>

      {/* Office & Consultation Desk Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="rounded-lg bg-slate-900 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif-academic text-lg sm:text-xl font-bold text-white">
              Academic Inquiries & Student Advisory
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-normal leading-relaxed">
              Dr. Rajeev Kumar is available for thesis consultation, guest academic lectures, university syllabus
              evaluations, and postgraduate capstone guidance.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-[#dfba73] hover:bg-[#ebd097] rounded transition-all shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Faculty Office</span>
            </Link>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#dfba73]" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
