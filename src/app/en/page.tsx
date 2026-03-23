import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import SearchBar from "@/components/search/SearchBar";
import ToolCard from "@/components/tools/ToolCard";
import NewsCard from "@/components/news/NewsCard";
import CourseCard from "@/components/courses/CourseCard";
import { getFeaturedTools, tools } from "@/data/tools";
import { getLatestNews } from "@/data/news";
import { getFeaturedCourses } from "@/data/courses";
import { getToolVotes, sortToolsByVotes } from "@/lib/votes";
import { getDict } from "@/i18n";

export default async function HomeEn() {
  const votes = await getToolVotes();
  const featured = sortToolsByVotes(getFeaturedTools(), votes);
  const latestNews = getLatestNews(3);
  const featuredCourses = getFeaturedCourses().slice(0, 3);
  const t = getDict("en");

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="en" />
      <div className="flex flex-1">
        <Sidebar locale="en" />
        <main className="flex-1 min-w-0">
          {/* Hero */}
          <section className="border-b border-border py-12 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-2xl font-bold mb-2">
                {t.home.title_prefix}{" "}
                <span className="text-accent">{t.home.title_accent}</span>{" "}
                {t.home.title_suffix}
              </h1>
              <p className="text-text-muted text-xs mb-6">
                {t.home.subtitle}
              </p>
              <SearchBar large autoFocus />
              <p className="text-text-muted text-[10px] mt-3">
                {t.home.tools_indexed(tools.length)}
              </p>
            </div>
          </section>

          {/* Featured */}
          <section className="py-8 px-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4 px-2">
              {t.home.featured}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {featured.map((tool) => (
                <ToolCard key={tool.id} tool={tool} locale="en" />
              ))}
            </div>
          </section>

          {/* Latest news */}
          <section className="py-8 px-4">
            <div className="flex items-center justify-between mb-4 px-2">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                {t.home.latest_news}
              </h2>
              <a
                href="/en/noticias"
                className="text-[10px] text-text-muted hover:text-accent transition-colors"
              >
                {t.home.see_all_news}
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {latestNews.map((item) => (
                <NewsCard key={item.id} item={item} locale="en" />
              ))}
            </div>
          </section>

          {/* Featured courses */}
          <section className="py-8 px-4">
            <div className="flex items-center justify-between mb-4 px-2">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                {t.home.learn_ai_free}
              </h2>
              <a
                href="/en/cursos"
                className="text-[10px] text-text-muted hover:text-accent transition-colors"
              >
                {t.home.see_all_courses}
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>

          {/* All tools */}
          <section className="py-8 px-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4 px-2">
              {t.home.all_tools}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {sortToolsByVotes([...tools], votes).map((tool) => (
                <ToolCard key={tool.id} tool={tool} locale="en" />
              ))}
            </div>
          </section>

          <Footer locale="en" />
        </main>
      </div>
    </div>
  );
}
