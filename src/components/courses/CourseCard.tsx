import type { Course } from "@/data/courses";

const levelColors = {
  basico: "text-green",
  intermedio: "text-yellow",
  avanzado: "text-red",
};

const levelIcons = {
  basico: "🟢",
  intermedio: "🟡",
  avanzado: "🔴",
};

const priceBgColors = {
  gratis: "text-green",
  freemium: "text-accent",
  pago: "text-yellow",
};

const levelLabelEN: Record<string, string> = {
  "Básico": "Beginner",
  "Intermedio": "Intermediate",
  "Avanzado": "Advanced",
};

const pricingLabelEN: Record<string, string> = {
  "GRATIS": "FREE",
  "FREEMIUM": "FREEMIUM",
  "DE PAGO": "PAID",
};

export default function CourseCard({ course, locale = "es" }: { course: Course; locale?: "es" | "en" }) {
  return (
    <a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-border rounded bg-bg-card hover:border-accent hover:shadow-[0_0_12px_rgba(88,166,255,0.1)] transition-all"
    >
      <div className="p-4">
        {/* Header: institution + level */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-widest text-accent font-semibold truncate">
            {course.institution}
          </span>
          <span
            className={`text-[10px] font-semibold shrink-0 ml-2 ${levelColors[course.level]}`}
          >
            {levelIcons[course.level]} {locale === "en" ? levelLabelEN[course.levelLabel] ?? course.levelLabel : course.levelLabel}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-sm font-semibold leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2">
          {course.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-3">
          {course.description}
        </p>

        {/* Duration + Language */}
        <div className="flex items-center gap-3 text-[10px] text-text-muted mb-3">
          <span>⏱ {course.duration}</span>
          <span>🌐 {course.languageLabel}</span>
          {course.hasCertificate && <span>📜 {locale === "en" ? "Certificate" : "Certificado"}</span>}
        </div>

        {/* Footer: price + CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div>
            <span
              className={`text-xs font-semibold ${priceBgColors[course.pricing]}`}
            >
              {locale === "en"
                ? course.pricing === "gratis"
                  ? "FREE"
                  : course.pricing === "freemium"
                    ? "FREEMIUM"
                    : "PAID"
                : course.pricing === "gratis"
                  ? "GRATIS"
                  : course.pricing === "freemium"
                    ? "FREEMIUM"
                    : "DE PAGO"}
            </span>
            {course.priceLabel !== "Gratis" &&
              course.pricing === "gratis" && (
                <span className="block text-[10px] text-text-muted">
                  {course.priceLabel}
                </span>
              )}
            {course.pricing !== "gratis" && (
              <span className="block text-[10px] text-text-muted">
                {course.priceLabel}
              </span>
            )}
          </div>
          <span className="text-[10px] text-text-muted group-hover:text-accent transition-colors">
            {locale === "en" ? "Go to course →" : "Ir al curso →"}
          </span>
        </div>
      </div>

      {/* Featured badge */}
      {course.featured && (
        <div className="border-t border-accent/30 px-4 py-1.5 bg-accent/5">
          <span className="text-[10px] text-accent font-semibold">
            ⭐ {locale === "en" ? "Featured" : "Destacado"}
          </span>
        </div>
      )}
    </a>
  );
}
