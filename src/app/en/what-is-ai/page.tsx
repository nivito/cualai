import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "What is Artificial Intelligence? — cual.ai",
  description:
    "Understand what AI is, how it works, how we got here and what the future looks like. Explained simply, no jargon.",
  alternates: {
    canonical: "https://cual.ai/en/what-is-ai",
    languages: { es: "https://cual.ai/que-es-ia", en: "https://cual.ai/en/what-is-ai" },
  },
  openGraph: {
    title: "What is Artificial Intelligence? — cual.ai",
    description:
      "Understand what AI is, how it works, how we got here and what the future looks like. Explained simply, no jargon.",
    url: "https://cual.ai/en/what-is-ai",
  },
};

const timeline = [
  {
    year: "1950",
    title: "The question that started it all",
    description:
      "Alan Turing publishes his famous paper and poses the question: \"Can machines think?\" The idea that a machine could someday imitate human intelligence is born. Personal computers didn't even exist yet.",
  },
  {
    year: "1997",
    title: "A machine beats the chess champion",
    description:
      "Deep Blue, an IBM computer the size of a wardrobe, defeats world chess champion Garry Kasparov. The world is stunned: a machine can beat a human at a complex intellectual task. But it could only play chess — nothing else.",
  },
  {
    year: "2007",
    title: "The iPhone and the data explosion",
    description:
      "Apple launches the iPhone and kicks off the smartphone era. Suddenly, billions of people generate photos, texts, searches and data every day. Those oceans of data will become the fuel AI needs to learn.",
  },
  {
    year: "2012",
    title: "Neural networks wake up",
    description:
      "Deep neural networks (deep learning) start winning image recognition competitions with accuracy nobody expected. Researchers realize that with enough data and computing power, these networks can learn almost anything.",
  },
  {
    year: "2017",
    title: "Google invents the Transformer",
    description:
      "Google publishes a paper titled \"Attention Is All You Need\" and introduces the Transformer architecture. This revolutionary design is the foundation of everything that came after: GPT, Claude, Gemini, Llama. Without this invention, nothing you see today would exist.",
  },
  {
    year: "2022",
    title: "ChatGPT changes everything",
    description:
      "OpenAI launches ChatGPT in November and within five days it has one million users. For the first time, anyone can chat with an advanced AI from their browser. The world is never the same again. Companies, governments and schools scramble to figure out what to do.",
  },
  {
    year: "2024–today",
    title: "AI now reasons, creates and builds",
    description:
      "Models no longer just answer questions: they reason step by step, generate photorealistic images, write working code, compose music and hold voice conversations. AI agents are beginning to execute complete tasks autonomously. We are here.",
  },
];

export default function WhatIsAIPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="en" />
      <div className="flex flex-1">
        <Sidebar locale="en" />
        <main className="flex-1 min-w-0">
        <div className="max-w-3xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-text-muted text-xs mb-6">
            <Link href="/en" className="hover:text-accent transition-colors">
              cual.ai
            </Link>
            <span>/</span>
            <span>What is AI?</span>
          </div>

          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-text mb-4">
              What is Artificial Intelligence?
            </h1>
            <p className="text-sm text-text-muted leading-relaxed">
              Everything you need to know about the technology that is
              transforming the world — explained for normal humans, without
              jargon or exaggeration.
            </p>
          </div>

          {/* What is AI? */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-text mb-4">
              What is AI?
            </h2>
            <div className="bg-bg-card border border-border rounded-lg p-5 space-y-4">
              <p className="text-sm text-text leading-relaxed">
                Artificial intelligence is software that can do things that
                previously only humans could do: understand text, recognize
                images, make decisions, hold conversations and even write
                code. It&apos;s not magic, it&apos;s not a robot with feelings, and
                it&apos;s not science fiction. It&apos;s math + data + a lot of
                computing power.
              </p>
              <p className="text-sm text-text leading-relaxed">
                Imagine teaching a child to recognize dogs. You don&apos;t give
                them a dictionary definition with the full taxonomy. You show
                them thousands of photos of dogs: big ones, small ones, furry
                ones, spotted, unspotted. After seeing enough examples, the
                child can recognize a dog they&apos;ve never seen before. AI
                works similarly: it learns from examples, not from
                hand-written rules.
              </p>
              <p className="text-sm text-text leading-relaxed">
                The difference is that while a child needs to see a few
                hundred dogs, AI can process millions of examples in hours.
                And it&apos;s not limited to dogs: it can learn to detect diseases
                in X-rays, translate languages, predict the weather or write
                a professional email for you.
              </p>
            </div>
          </section>

          {/* How does it work? */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-text mb-4">
              How does it work?
            </h2>
            <div className="bg-bg-card border border-border rounded-lg p-5 space-y-4">
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  Step 1: Training data.
                </span>{" "}
                It all starts with data. Lots of data. Language models like
                ChatGPT or Claude were trained by reading a huge fraction of
                the internet: articles, books, conversations, code, Wikipedia,
                forums. It&apos;s as if someone read the world&apos;s largest library
                in a few weeks.
              </p>
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  Step 2: Finding patterns.
                </span>{" "}
                AI doesn&apos;t memorize everything it reads. What it does is find
                patterns: which words tend to go together, what follows a
                question, how a clear explanation is structured. It&apos;s like
                how after reading many professional emails, you instinctively
                know how to start one without thinking. AI does that, but at
                an incomprehensible scale.
              </p>
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  Step 3: Prediction.
                </span>{" "}
                When you ask AI a question, what it actually does is predict
                the most likely answer based on all the patterns it learned.
                Word by word, it generates the response that has the highest
                probability of being useful and correct. It&apos;s like an
                extremely sophisticated autocomplete.
              </p>
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  What about neural networks?
                </span>{" "}
                The internal engine of AI is called a neural network, inspired
                (loosely) by how the brain works. Imagine layers of filters:
                the first layer recognizes simple things (letters, basic shapes),
                the next combines those pieces into more complex concepts
                (words, phrases), and the deeper layers understand abstract
                ideas (intent, tone, context). Each layer builds on the
                previous one, like a building of understanding.
              </p>
            </div>
          </section>

          {/* How did we get here? */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-text mb-4">
              How did we get here?
            </h2>
            <p className="text-sm text-text-muted mb-6">
              AI didn&apos;t appear out of nowhere in 2022. It&apos;s the result of
              over 70 years of research, failures, unexpected breakthroughs
              and a lot of patience.
            </p>
            <div className="space-y-4">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="bg-bg-card border border-border rounded-lg p-5 flex gap-4"
                >
                  <div className="shrink-0 w-20 text-right">
                    <span className="text-sm font-bold text-accent">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-text mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What does the future look like? */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-text mb-4">
              What does the future look like?
            </h2>
            <div className="bg-bg-card border border-border rounded-lg p-5 space-y-4">
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  The opportunities are enormous.
                </span>{" "}
                In healthcare, AI is already helping detect cancers at early
                stages and design drugs faster. In education, it enables
                personalized tutors that adapt to each student&apos;s pace. In
                productivity, repetitive tasks that used to take hours now
                take minutes. A rural doctor with access to AI has the
                knowledge of thousands of specialists at their fingertips. An
                entrepreneur can launch a product with a team of three people
                that would have previously needed thirty.
              </p>
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  But the challenges are real.
                </span>{" "}
                Automation will transform the job market: some jobs will
                disappear, others will be transformed and new ones will
                emerge that we can&apos;t even imagine today. The transition won&apos;t
                be easy for everyone, and countries that don&apos;t invest in
                education and adaptation will fall behind. It&apos;s not
                alarmism — it&apos;s what happens with every technological
                revolution, only this one is moving faster.
              </p>
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  Privacy and misinformation are legitimate concerns.
                </span>{" "}
                AI models can generate text, images and videos
                indistinguishable from real ones. This opens the door to
                industrial-scale misinformation, convincing deepfakes and
                manipulation. At the same time, AI systems process enormous
                amounts of personal data, raising serious questions about who
                has access to your information and how they use it.
              </p>
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  What&apos;s clear is that AI is here to stay.
                </span>{" "}
                Ignoring it is not a strategy. The smartest thing is to
                understand it: what it can do, what it can&apos;t do, where it&apos;s
                useful and where you should be skeptical. You don&apos;t need to
                be an engineer to use AI to your advantage — you just need
                curiosity and a bit of judgment. That&apos;s why cual.ai exists:
                so you can explore the available tools and decide which ones
                work for you.
              </p>
            </div>
          </section>

          {/* AI Agents */}
          <section id="agents" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-bold text-text mb-4">
              What is an AI agent?
            </h2>

            <div className="bg-bg-card border border-border rounded-lg p-5 space-y-4 mb-6">
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  It&apos;s not a chatbot — it&apos;s a chatbot with hands.
                </span>{" "}
                A chatbot like ChatGPT or Claude answers questions. An AI
                agent goes further: it can search the internet, run code,
                send emails, read files, browse websites and make decisions
                on its own. It has a goal and uses tools to achieve it, step
                by step, without you having to guide it every moment.
              </p>
              <p className="text-sm text-text leading-relaxed">
                Think of the difference between asking someone &ldquo;how do
                you make a reservation?&rdquo; (chatbot) versus telling them
                &ldquo;make me a reservation for Friday at 8 at an Italian
                restaurant near my office&rdquo; (agent). The first one
                explains, the second one does it.
              </p>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-5 space-y-4 mb-6">
              <h3 className="text-sm font-bold text-text">
                What are agents for?
              </h3>
              <p className="text-sm text-text leading-relaxed">
                For automating complete tasks from start to finish. Not just
                one step, but the entire workflow. Concrete examples:
              </p>
              <ul className="text-sm text-text leading-relaxed space-y-2 ml-4">
                <li>
                  • Research a market, analyze competitors and deliver an
                  executive summary
                </li>
                <li>
                  • Monitor product prices and alert you when they drop
                  below a certain threshold
                </li>
                <li>
                  • Prepare a weekly report with data from multiple sources
                </li>
                <li>
                  • Manage your inbox: classify, respond to routine emails,
                  flag the important ones
                </li>
                <li>
                  • Write, test and fix code autonomously
                </li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-5 space-y-4 mb-6">
              <h3 className="text-sm font-bold text-text">
                How does an agent work?
              </h3>
              <p className="text-sm text-text leading-relaxed">
                An agent works in a loop that repeats until the goal is
                completed:
              </p>
              <div className="bg-bg rounded p-4 border border-border">
                <p className="text-xs text-text leading-relaxed font-mono">
                  Observe the environment → Decide what to do → Execute an
                  action (use a tool) → Observe the result → Repeat
                </p>
              </div>
              <p className="text-sm text-text leading-relaxed">
                The LLM (language model) is the agent&apos;s &ldquo;brain&rdquo;:
                it analyzes the situation and decides the next step. The
                tools are its &ldquo;hands&rdquo;: search Google, read a file,
                run code, send a message. The agent alternates between
                thinking and acting until the job is done.
              </p>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-5 space-y-4 mb-6">
              <h3 className="text-sm font-bold text-text">
                How are agents built?
              </h3>
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  Frameworks for developers:
                </span>{" "}
                LangChain, LangGraph, CrewAI and AutoGen are the most
                popular. They let you build custom agents with code, define
                tools, workflows and decision logic.
              </p>
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  No-code platforms:
                </span>{" "}
                n8n, Make and Zapier AI let you create agents and
                automations without writing code, by dragging blocks and
                connecting services. Ideal for non-programmers.
              </p>
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  Ready-to-use agents:
                </span>{" "}
                Claude Code (Anthropic), Manus, Devin and others come
                pre-configured as complete agents. You install or access
                them and they start working.
              </p>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-5 space-y-4 mb-6">
              <h3 className="text-sm font-bold text-text">
                Multi-agents
              </h3>
              <p className="text-sm text-text leading-relaxed">
                A single agent is fine for simple tasks. But for complex
                work, you can have multiple agents working together — in
                parallel or in sequence — each specialized in its own area.
                Like a team: one agent researches, another writes, another
                reviews, another publishes.
              </p>
              <p className="text-sm text-text leading-relaxed">
                It&apos;s more powerful, but also more complex to coordinate.
                Someone has to decide who does what and in what order.
              </p>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-5 space-y-4 mb-6">
              <h3 className="text-sm font-bold text-text">
                Sub-agents
              </h3>
              <p className="text-sm text-text leading-relaxed">
                It&apos;s a pattern where a main agent (the orchestrator)
                delegates subtasks to specialized agents. The orchestrator
                receives the big goal, breaks it down into parts, assigns
                each part to a sub-agent, and consolidates the results at
                the end.
              </p>
              <p className="text-sm text-text leading-relaxed">
                Imagine a project manager who doesn&apos;t do the work
                themselves, but knows exactly who to assign it to and how
                to put the pieces together at the end.
              </p>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-5 space-y-4">
              <h3 className="text-sm font-bold text-text">
                Key terms in the agent ecosystem
              </h3>
              <div className="space-y-4 mt-2">
                <div className="bg-bg rounded p-3 border border-border">
                  <p className="text-xs text-text leading-relaxed">
                    <span className="text-accent font-medium">
                      Orchestrator:
                    </span>{" "}
                    The main agent that coordinates the others. It decides
                    which task to assign to whom, in what order, and
                    consolidates the results.
                  </p>
                </div>
                <div className="bg-bg rounded p-3 border border-border">
                  <p className="text-xs text-text leading-relaxed">
                    <span className="text-accent font-medium">
                      Tool:
                    </span>{" "}
                    A function the agent can call to interact with the
                    world: search Google, run code, read a PDF, send an
                    email.
                  </p>
                </div>
                <div className="bg-bg rounded p-3 border border-border">
                  <p className="text-xs text-text leading-relaxed">
                    <span className="text-accent font-medium">
                      Memory:
                    </span>{" "}
                    How the agent remembers context between steps. Short-term
                    memory is the context window (what fits in the
                    conversation). Long-term memory uses vector databases to
                    remember information between sessions.
                  </p>
                </div>
                <div className="bg-bg rounded p-3 border border-border">
                  <p className="text-xs text-text leading-relaxed">
                    <span className="text-accent font-medium">
                      Reasoning loop:
                    </span>{" "}
                    How the agent &ldquo;thinks&rdquo; before acting. ReAct
                    (reason + act), Chain-of-Thought (think step by step),
                    Tree-of-Thought (explore several options in parallel) are
                    the most common approaches.
                  </p>
                </div>
                <div className="bg-bg rounded p-3 border border-border">
                  <p className="text-xs text-text leading-relaxed">
                    <span className="text-accent font-medium">
                      MCP (Model Context Protocol):
                    </span>{" "}
                    Open standard created by Anthropic to connect agents
                    with external tools in a standardized way. Like a
                    universal USB for AI: you build a connector once and any
                    compatible agent can use it.
                  </p>
                </div>
                <div className="bg-bg rounded p-3 border border-border">
                  <p className="text-xs text-text leading-relaxed">
                    <span className="text-accent font-medium">
                      A2A (Agent-to-Agent):
                    </span>{" "}
                    Google&apos;s protocol for agents from different vendors to
                    communicate with each other. It allows an agent from one
                    company to ask for help from an agent from another, as
                    if they spoke the same language.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <div className="border border-border rounded-lg p-5 text-center bg-bg-card">
            <p className="text-sm text-text mb-2">
              Ready to explore what AI can do for you?
            </p>
            <p className="text-xs text-text-muted mb-4">
              Discover the most useful AI tools, organized by category.
            </p>
            <Link
              href="/en"
              className="inline-block text-xs bg-accent text-bg px-4 py-2 rounded hover:bg-accent-hover transition-colors"
            >
              Explore the most useful AI tools on cual.ai →
            </Link>
          </div>
        </div>

        </main>
      </div>
      <Footer />
    </div>
  );
}
