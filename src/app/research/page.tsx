"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Calendar,
  Copy,
  Check,
  Award,
  Filter,
  Tag,
  ArrowRight,
  BookMarked,
  Quote,
  ExternalLink,
  ShoppingBag,
} from "lucide-react";
import { PUBLICATIONS, PERSONAL_INFO, AMAZON_AUTHOR_PROFILE } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";

export default function ResearchPage() {
  const [filter, setFilter] = useState<"all" | "book" | "journal" | "conference" | "paper">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPublications = PUBLICATIONS.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  const copyCitation = (pub: (typeof PUBLICATIONS)[0]) => {
    const citation = `${PERSONAL_INFO.name}. (${pub.year}). "${pub.title}". ${pub.venue}. ${pub.details}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <div className="relative pb-20">
      {/* Header Banner */}
      <section className="bg-slate-950/70 pt-12 pb-14 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Scholarly Publications & Authorship"
            badgeIcon={BookOpen}
            title="Peer-Reviewed Research, Textbooks &"
            highlight="Conference Proceedings"
            description="Scholarly repository of peer-reviewed journals in Wireless Sensor Networks, published university textbooks, official state curriculum authorship, and national seminar proceedings."
          />

          {/* Research Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="academic-card p-4 rounded-xl border border-white/10">
              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-gold">9</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">CS Books Authored</div>
              <div className="text-[11px] text-slate-500">4 Amazon & 5 BBOSE Books</div>
            </div>
            <div className="academic-card p-4 rounded-xl border border-white/10">
              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-white">2024</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">Recent Journal Issues</div>
              <div className="text-[11px] text-slate-500">JETIR & IJFMR WSN Volumes</div>
            </div>
            <div className="academic-card p-4 rounded-xl border border-white/10">
              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-gold">WSN</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">Doctoral Research Core</div>
              <div className="text-[11px] text-slate-500">Energy Harvesting Protocols</div>
            </div>
            <div className="academic-card p-4 rounded-xl border border-white/10">
              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-white">UGC</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">Sponsored Seminars</div>
              <div className="text-[11px] text-slate-500">IT & Human Development</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Publications Stream */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Filter className="w-3.5 h-3.5 text-gold" />
            <span>Filter by Type:</span>
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
              All Works ({PUBLICATIONS.length})
            </button>
            <button
              onClick={() => setFilter("book")}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                filter === "book"
                  ? "bg-[#dfba73] text-slate-900 font-semibold"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/10"
              }`}
            >
              Books & State Textbooks
            </button>
            <button
              onClick={() => setFilter("journal")}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                filter === "journal"
                  ? "bg-[#dfba73] text-slate-900 font-semibold"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/10"
              }`}
            >
              Peer-Reviewed Journals
            </button>
            <button
              onClick={() => setFilter("conference")}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                filter === "conference"
                  ? "bg-[#dfba73] text-slate-900 font-semibold"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/10"
              }`}
            >
              Conferences & Seminars
            </button>
            <button
              onClick={() => setFilter("paper")}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                filter === "paper"
                  ? "bg-[#dfba73] text-slate-900 font-semibold"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/10"
              }`}
            >
              Research Papers
            </button>
          </div>
        </div>

        {/* Amazon Author Store Callout */}
        <div className="academic-card p-5 sm:p-6 rounded-xl border border-amber-500/30 bg-gradient-to-r from-amber-500/[0.08] via-slate-900 to-transparent mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold text-[#dfba73] bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                Official Amazon Author
              </span>
              <span className="text-xs text-slate-400">4 Published Volumes</span>
            </div>
            <h3 className="font-serif-academic text-base sm:text-lg font-bold text-white">
              Dr. Rajeev Kumar on Amazon Author Central
            </h3>
            <p className="text-xs text-slate-300">
              Access official Kindle & textbook editions covering Big Data Analytics, Blockchain Systems, Data Science, and Data Mining.
            </p>
          </div>
          <a
            href={AMAZON_AUTHOR_PROFILE.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#dfba73] hover:bg-[#ebd097] text-xs font-semibold text-slate-950 transition-all shadow-sm"
          >
            <span>Visit Amazon Author Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Publication Cards */}
        <div className="space-y-5">
          {filteredPublications.map((pub) => {
            const isCopied = copiedId === pub.id;
            return (
              <div
                key={pub.id}
                className="academic-card p-6 sm:p-7 rounded-xl border border-white/10 hover:border-amber-600/40 transition-all flex flex-col justify-between"
              >
                <div className={pub.coverImage ? "flex flex-col sm:flex-row gap-6" : ""}>
                  {/* Book Cover Image if available */}
                  {pub.coverImage && (
                    <div className="shrink-0 w-36 sm:w-40 flex flex-col gap-2">
                      <div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden border border-white/15 bg-slate-950 shadow-lg">
                        <Image
                          src={pub.coverImage}
                          alt={pub.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 144px, 160px"
                        />
                        <div className="absolute top-2 right-2 bg-slate-950/90 text-[#dfba73] text-[9px] font-bold px-1.5 py-0.5 rounded border border-amber-500/30 backdrop-blur-sm">
                          {pub.format || "Kindle"}
                        </div>
                      </div>

                      {pub.amazonUrl && (
                        <a
                          href={pub.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded text-xs font-semibold bg-[#dfba73] text-slate-950 hover:bg-[#ebd097] transition-all text-center"
                        >
                          <span>Buy on Amazon</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {pub.price && (
                        <div className="text-center text-[11px] text-slate-400">
                          {pub.price} • {pub.format || "Kindle"}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Publication Content Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="badge-academic-gold px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider">
                          {pub.type}
                        </span>
                        {pub.asin && (
                          <span className="text-[11px] font-mono text-[#dfba73] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                            ASIN: {pub.asin}
                          </span>
                        )}
                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-gold" />
                          <span>{pub.year}</span>
                        </span>
                      </div>

                      <button
                        onClick={() => copyCitation(pub)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-medium text-slate-300 hover:text-gold transition-colors"
                        title="Copy formatted citation"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-medium">Citation Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Citation</span>
                          </>
                        )}
                      </button>
                    </div>

                    <h3 className="font-serif-academic text-base sm:text-xl font-bold text-white mb-1.5 leading-snug">
                      {pub.title}
                    </h3>

                    <div className="text-xs sm:text-sm text-gold font-medium mb-3">
                      {pub.venue}
                      {pub.details && (
                        <span className="text-slate-400 block sm:inline sm:before:content-['•'] sm:before:mx-2 font-normal">
                          {pub.details}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                      {pub.abstract}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <Tag className="w-3 h-3 text-slate-500 mr-1" />
                      {pub.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Quote className="w-3.5 h-3.5 text-slate-500" />
                    <span className="italic">Principal Author: Dr. Rajeev Kumar</span>
                  </div>

                  <span className="text-[11px] text-slate-500 font-serif-academic">Patna University Faculty</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* State Curriculum Spotlight Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="academic-card p-6 sm:p-8 rounded-xl border border-white/10 bg-slate-950">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-lg bg-slate-900 border border-amber-600/30 text-gold flex items-center justify-center shrink-0">
              <BookMarked className="w-7 h-7" />
            </div>
            <div className="space-y-1.5 text-center md:text-left">
              <span className="badge-academic-gold px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider">
                State Government Authorship
              </span>
              <h3 className="font-serif-academic text-lg sm:text-xl font-bold text-white">
                Official Computer Science Textbooks for Bihar Open Schooling (BBOSE)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Authored five complete computer science textbooks covering digital literacy, programming logic, data
                structures, and office automation, commissioned and distributed by the Department of Education,
                Government of Bihar.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-900 bg-[#dfba73] hover:bg-[#ebd097] rounded shadow-sm transition-all"
          >
            <span>Proceed to Notable Project Work & Applied Systems</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
