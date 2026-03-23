import type { I18n } from "./es";

export const en: I18n = {
  header: {
    search_placeholder: "Search AI tools...",
    nav_news: "News",
    nav_courses: "Courses",
    nav_glossary: "Glossary",
    nav_models: "Models",
    tool_count: (n: number) => `${n} tools`,
  },
  home: {
    title_prefix: "Directory of",
    title_accent: "Artificial Intelligence",
    title_suffix: "tools",
    subtitle: "Describe your problem, find the perfect AI tool",
    tools_indexed: (n: number) =>
      `${n} tools indexed · for professionals in LATAM`,
    featured: "// Featured",
    latest_news: "// Latest news",
    see_all_news: "See all →",
    learn_ai_free: "// Learn AI for free",
    see_all_courses: "See all courses →",
    all_tools: "// All tools",
  },
  news: {
    title: "AI News",
    subtitle:
      "What's happening in artificial intelligence, explained for everyone",
    filtering: "Filtering:",
    clear_filter: "[clear filter]",
    no_news: "No news in this category yet.",
    reading_time: (min: number) => `${min} min read`,
    read_more: "Read more →",
    source: "Source:",
    what_means: "What does this mean for you?",
    related_tools: "// Related tools",
    prev: "← Previous",
    next: "Next →",
    not_found: "Article not found — cual.ai",
    article_in_spanish:
      "This article is only available in Spanish",
  },
  tool: {
    visit: "Visit tool →",
    use_cases: "// Use cases",
    faq: "// Frequently asked questions",
    similar: "// Similar tools",
    meta_title: (name: string) =>
      `${name}: what it is, how to use it and pricing — cual.ai`,
    meta_desc: (desc: string) =>
      `${desc} Discover use cases, pricing and alternatives on cual.ai.`,
    faq_what_for: (name: string) => `What is ${name} used for?`,
    faq_price: (name: string) => `How much does ${name} cost?`,
    faq_free: (name: string) => `Does ${name} have a free version?`,
    faq_free_yes: (name: string) =>
      `Yes, ${name} is completely free.`,
    faq_freemium: (name: string, label: string) =>
      `Yes, ${name} offers a free plan with limited features. ${label}`,
    faq_paid: (name: string, label: string) =>
      `${name} is a paid tool. ${label}`,
    faq_alternatives: (name: string, alts: string) =>
      `The main alternatives to ${name} are: ${alts}. You can compare them on cual.ai.`,
    faq_alternatives_q: (name: string) =>
      `What are the best alternatives to ${name}?`,
  },
  glossary: {
    title: "AI & Technology Glossary",
    breadcrumb: "Glossary",
    intro_1:
      "Welcome to the only AI glossary designed for people who attend meetings where someone says",
    intro_quote: '"we need to fine-tune the LLM with RAG"',
    intro_2: "and everyone nods as if they know what that means.",
    intro_3:
      "Here you'll find the most common AI terms explained in plain language, without assuming you have a PhD in math or spend your weekends reading Arxiv papers.",
    intro_4: "We promise to be accurate. We don't promise to be entirely serious.",
    terms_count: (n: number) =>
      `${n} terms · Alphabetical order · AI, models, infrastructure and key companies`,
    all_terms: "All terms — A–Z",
    example: "Example:",
    missing_term: "Missing a term?",
    missing_term_desc:
      "The AI world invents new words every week. If there's something you don't understand, it's probably not your fault.",
    explore_tools: "Explore AI tools →",
  },
  sidebar: {
    what_is_ai: "What is AI?",
    compare: "Compare tools",
    news: "AI News",
    courses: "Courses",
    models: "AI Models",
    glossary: "Glossary",
    feedback: "Feedback",
    categories: "Categories",
  },
  news_sidebar: {
    back: "← Back to tools",
    news: "News",
    all: "All",
    tools_section: "Tools",
    explore: "Explore tools",
  },
  footer: {
    newsletter_title: "Get the latest AI news for non-technical people",
    newsletter_desc:
      "A weekly email with the best AI tools and news, explained simply. No spam.",
    subscribe_success:
      "✓ Subscribed! We'll send you the best tools every week.",
    subscribe_button: "Subscribe",
    tagline: "cual.ai — Find the perfect AI tool",
  },
};
