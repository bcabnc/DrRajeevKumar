import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  badgeIcon: BadgeIcon,
  title,
  highlight,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold badge-academic-gold mb-3.5 tracking-wider uppercase ${
            centered ? "mx-auto" : ""
          }`}
        >
          {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-gold-muted" />}
          <span>{badge}</span>
        </div>
      )}
      <h2 className="font-serif-academic text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
        {title} {highlight && <span className="text-gold font-normal italic">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
