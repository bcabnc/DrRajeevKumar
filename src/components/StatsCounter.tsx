import { Award, BookOpen, Clock, Users, Building2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function StatsCounter() {
  const icons = [Clock, Award, BookOpen, Building2, Users];

  return (
    <div className="w-full relative">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {PERSONAL_INFO.stats.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div
              key={item.label}
              className="academic-card p-4 sm:p-5 rounded-xl border border-white/10 relative overflow-hidden group hover:border-amber-600/40 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-7 h-7 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-gold">
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="font-serif-academic text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-gold transition-colors">
                {item.value}
              </div>

              <div className="text-xs font-semibold text-slate-200 mt-1 line-clamp-1">
                {item.label}
              </div>

              <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 font-normal">
                {item.subtitle}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
