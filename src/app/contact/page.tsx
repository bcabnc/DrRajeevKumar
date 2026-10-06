"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building2,
  Calendar,
  CheckCircle2,
  FileDown,
  Sparkles,
  HelpCircle,
  Copy,
  Check,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import SectionHeader from "@/components/SectionHeader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    affiliation: "",
    purpose: "Academic Collaboration & Research",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`Academic Inquiry: ${formData.purpose} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nAffiliation: ${formData.affiliation}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPurpose: ${formData.purpose}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, "_blank");
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.location);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const purposes = [
    "Academic Collaboration & Research",
    "Guest Lecture / Keynote Speaker",
    "MCA / BCA Capstone Guidance",
    "University Examination / Syllabus Review",
    "Curriculum Design Consultation",
    "General Scholarly Inquiry",
  ];

  const faqs = [
    {
      q: "Where is Dr. Rajeev Kumar currently faculty?",
      a: "Dr. Rajeev Kumar is Senior Faculty in the Department of Computer Applications at B.N. College, Patna University, where he has been serving continuously since February 2002. He also instructs across multiple university departments including PMIR, Rural Studies, Biotechnology, and IGNOU.",
    },
    {
      q: "How can academic institutions invite Dr. Kumar for guest lectures or seminars?",
      a: "Institutions may send formal invitations directly via email to rajeevk.patna@gmail.com or by calling +91 9431432291 with event dates, topics (WSN, AI/ML, Cyber Security, or Statistical Operations Research), and session details.",
    },
    {
      q: "Are prospective research scholars able to seek thesis guidance?",
      a: "Yes. Dr. Kumar actively guides postgraduate students and researchers in Wireless Sensor Networks (WSN), dynamic power protocols, sentiment analysis with machine learning, and computational statistics.",
    },
  ];

  return (
    <div className="relative pb-20">
      {/* Header Banner */}
      <section className="bg-slate-950/70 pt-12 pb-14 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Communication & Consultations"
            badgeIcon={Mail}
            title="Faculty Office &"
            highlight="Academic Correspondence"
            description="Formal channels for research collaboration, university examination inquiries, postgraduate capstone guidance, and guest speaking invitations."
          />
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="academic-card p-6 sm:p-7 rounded-xl border border-white/10 space-y-5">
              <h3 className="font-serif-academic text-xl font-bold text-white">
                Direct Contact Information
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded bg-slate-900 border border-white/10 hover:border-amber-600/40 transition-colors">
                <div className="w-10 h-10 rounded bg-slate-800 border border-white/10 text-gold flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                    Mobile & Office Telephone
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-base font-bold text-white hover:text-gold transition-colors font-serif-academic"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Available for academic queries</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded bg-slate-900 border border-white/10 hover:border-amber-600/40 transition-colors">
                <div className="w-10 h-10 rounded bg-slate-800 border border-white/10 text-gold flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-gold transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Official correspondence address</p>
                </div>
              </div>

              {/* Address */}
              <div className="p-4 rounded bg-slate-900 border border-white/10 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>Official Residence & Study</span>
                  </div>
                  <button
                    onClick={copyAddress}
                    className="text-xs text-slate-400 hover:text-gold flex items-center gap-1"
                    title="Copy full address"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {PERSONAL_INFO.location}
                </p>
              </div>

              {/* Department */}
              <div className="p-4 rounded bg-slate-900 border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5 text-gold" />
                  <span>University Department</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Dept. of Computer Applications, B.N. College, Patna University, Patna - 800004, Bihar, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="academic-card p-6 sm:p-8 rounded-xl border border-white/10">
              <div className="mb-6">
                <span className="badge-academic-gold px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider">
                  Formal Correspondence
                </span>
                <h3 className="font-serif-academic text-xl sm:text-2xl font-bold text-white mt-2">
                  Request Academic Consultation or Collaboration
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-normal">
                  Please provide your institutional affiliation and the nature of your inquiry.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded bg-slate-900 border border-white/10 text-center space-y-3">
                  <div className="w-10 h-10 rounded bg-slate-800 text-gold flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-academic text-lg font-bold text-white">Inquiry Prepared & Dispatched</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-normal">
                    Your email client has been opened with your pre-formatted consultation memo. Dr. Rajeev Kumar will review your correspondence promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-medium text-gold hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Prof. / Dr. / Scholar Name"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@institution.ac.in"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Contact Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        University / Institution Affiliation
                      </label>
                      <input
                        type="text"
                        value={formData.affiliation}
                        onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                        placeholder="College, University or Research Lab"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Purpose of Inquiry *
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-amber-500/60"
                    >
                      {purposes.map((p) => (
                        <option key={p} value={p} className="bg-slate-900 text-white">
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Detailed Message / Inquiries *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please state the agenda, prospective event dates, or thesis topic..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 text-xs sm:text-sm font-semibold text-slate-900 bg-[#dfba73] hover:bg-[#ebd097] rounded transition-all shadow-sm active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Academic Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Academic FAQs */}
        <div className="mt-16 pt-14 border-t border-white/[0.08]">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif-academic text-xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5 text-gold" />
              <span>Frequently Asked Academic Inquiries</span>
            </h3>

            <div className="space-y-3.5">
              {faqs.map((faq, idx) => (
                <div key={idx} className="academic-card p-5 rounded-xl border border-white/10">
                  <h4 className="font-serif-academic text-sm sm:text-base font-bold text-white mb-1.5">
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
