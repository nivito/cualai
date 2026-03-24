"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import { courses, getCourseCount } from "@/data/courses";

type PricingFilter = "todos" | "gratis" | "pago";
type LevelFilter = "todos" | "basico" | "intermedio" | "avanzado";

export default function CoursesPage() {
  const [pricingFilter, setPricingFilter] = useState<PricingFilter>("todos");
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("todos");

  const total = getCourseCount();

  const filtered = courses
    .filter((c) => {
      if (pricingFilter === "gratis") return c.pricing === "gratis";
      if (pricingFilter === "pago")
        return c.pricing === "pago" || c.pricing === "freemium";
      return true;
    })
    .filter((c) => {
      if (levelFilter === "todos") return true;
      return c.level === levelFilter;
    })
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

  const pricingOptions: { value: PricingFilter; label: string }[] = [
    { value: "todos", label: "All" },
    { value: "gratis", label: "Free" },
    { value: "pago", label: "Paid" },
  ];

  const levelOptions: { value: LevelFilter; label: string }[] = [
    { value: "todos", label: "All" },
    { value: "basico", label: "Beginner" },
    { value: "intermedio", label: "Intermediate" },
    { value: "avanzado", label: "Advanced" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="en" />
      <div className="flex flex-1">
        <Sidebar locale="en" />
        <main className="flex-1 min-w-0">
          {/* Header */}
          <section className="border-b border-border py-10 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-xl font-bold mb-2">AI Courses</h1>
              <p className="text-text-muted text-xs mb-2">
                Learn artificial intelligence regardless of your level —
                most are free
              </p>
              <p className="text-text-muted text-[10px]">
                {total} courses available
              </p>
            </div>
          </section>

          {/* Filters */}
          <div className="sticky top-12 z-20 bg-bg/95 backdrop-blur-sm border-b border-border px-4 py-3">
            <div className="flex flex-wrap items-center gap-4">
              {/* Pricing filters */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-text-muted mr-1">
                  Price:
                </span>
                {pricingOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setPricingFilter(opt.value)}
                    className={`text-[10px] px-2.5 py-1 rounded border transition-colors ${
                      pricingFilter === opt.value
                        ? "bg-[#1f6feb] border-[#1f6feb] text-white"
                        : "bg-bg-card border-border text-text-muted hover:text-accent hover:border-accent"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Level filters */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-text-muted mr-1">
                  Level:
                </span>
                {levelOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setLevelFilter(opt.value)}
                    className={`text-[10px] px-2.5 py-1 rounded border transition-colors ${
                      levelFilter === opt.value
                        ? "bg-[#1f6feb] border-[#1f6feb] text-white"
                        : "bg-bg-card border-border text-text-muted hover:text-accent hover:border-accent"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Counter */}
              <span className="text-[10px] text-text-muted ml-auto">
                Showing {filtered.length} of {total} courses
              </span>
            </div>
          </div>

          {/* Course grid */}
          <section className="py-8 px-4">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {filtered.map((course) => (
                  <CourseCard key={course.id} course={course} locale="en" />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-text-muted text-sm mb-2">
                  No courses match these filters
                </p>
                <button
                  onClick={() => {
                    setPricingFilter("todos");
                    setLevelFilter("todos");
                  }}
                  className="text-xs text-accent hover:text-accent-hover transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </section>

          <Footer locale="en" />
        </main>
      </div>
    </div>
  );
}
