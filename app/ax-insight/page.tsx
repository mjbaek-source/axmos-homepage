import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AX Insight — From the Field',
  description: 'Insights drawn from the front lines of AI adoption in Korean enterprises. Case studies, non-developer guides, tool reviews, AX perspective.',
  keywords: ['AX Insight', 'AI blog', 'AI adoption case studies', 'AI for non-developers', 'AX perspective', 'AXMOS blog'],
};

const TOPICS = [
  {
    label: 'Case Studies',
    title: 'Case Studies',
    desc: 'Which companies automated which workflows, and how. Including the field-level missteps, unedited.',
  },
  {
    label: 'For Non-Developers',
    title: 'For Non-Developers',
    desc: 'How to use ChatGPT, Claude, and no-code tools at work. No code required. Your job, as is.',
  },
  {
    label: 'AX Perspective',
    title: 'AX Perspective',
    desc: 'How organizations, operations, and roles shift in the AI era. Patterns we&apos;ve seen across 50+ Korean enterprises.',
  },
  {
    label: 'Tools & Tutorials',
    title: 'Tools & Tutorials',
    desc: 'Reviews of AI tools worth adopting, plus step-by-step workflows that work when you follow them.',
  },
];

const UPCOMING = [
  {
    category: 'Case Studies',
    title: 'How one FDE transformed a 30-person sales team',
    excerpt: 'Automation that worked without an engineering department. How it started, what got blocked, and what finally unblocked.',
  },
  {
    category: 'For Non-Developers',
    title: 'The first AI automation for teams who only used Excel and PDFs',
    excerpt: 'No-code starters for sales, strategy, and operations. Workflows you can run from next week&apos;s report onward.',
  },
  {
    category: 'AX Perspective',
    title: 'Why most Korean enterprise AI adoption stalls at PoC',
    excerpt: 'Common failure patterns from field interviews — and the shared traits of organizations that broke through.',
  },
  {
    category: 'Tools & Tutorials',
    title: 'Why you should use ChatGPT and Claude differently for Korean-language work',
    excerpt: 'Strengths and weaknesses compared across real workflow cases. Which jobs go to which model.',
  },
  {
    category: 'AX Perspective',
    title: 'The "printers" of the AI era — Field Deployment Experts',
    excerpt: 'Not the people who build AI, but the people who deploy it on the ground. How we define this new role.',
  },
  {
    category: 'Tools & Tutorials',
    title: 'A 30-minute setup for meeting-notes automation — from transcript to action items',
    excerpt: 'One setup gives you back 2 hours every week. Step-by-step, written so non-developers can follow.',
  },
];

export default function AXInsight() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative bg-bg-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/30 via-bg-dark/55 to-bg-dark/95"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
          <p className="section-eyebrow">From the Field</p>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-8 max-w-4xl">
            AX Insight
          </h1>
          <p className="text-xl md:text-2xl text-text-light max-w-3xl leading-relaxed mb-10">
            Insights drawn from the front lines of AI adoption in Korean enterprises.<br />
            Cases, guides, tool reviews — only what you can apply immediately.
          </p>
        </div>
      </section>

      {/* TOPICS */}
      <section className="bg-white py-32 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="section-eyebrow text-bg-dark/60">Topics</p>
            <h2 className="section-title text-bg-dark">What we cover</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
            {TOPICS.map((t, i) => (
              <div key={i} className="bg-white p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-bg-dark/60 mb-4">{t.label}</p>
                <h3 className="text-2xl font-bold text-bg-dark mb-4 leading-tight">{t.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING POSTS */}
      <section className="bg-bg-dark-2 text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="section-eyebrow">Coming First</p>
            <h2 className="section-title">What&apos;s coming first</h2>
            <p className="text-lg text-text-light mt-6 leading-relaxed">
              Titles and outlines first. The first article lands here soon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-dark">
            {UPCOMING.map((p, i) => (
              <article key={i} className="bg-bg-dark-2 p-10 flex flex-col">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-6">{p.category}</p>
                <h3 className="text-xl font-bold mb-4 leading-tight flex-grow-0">{p.title}</h3>
                <p className="text-sm text-text-light leading-relaxed mb-8 flex-grow">{p.excerpt}</p>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Coming Soon</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-dark text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/80 via-bg-dark/90 to-bg-dark"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="section-eyebrow">Suggest a Topic</p>
          <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight mb-8">
            Have a question?<br />
            We&apos;ll cover it first.
          </h2>
          <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto">
            Send us the automation, tool, or role question you&apos;re stuck on. We prioritize it as a written article.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-bg-dark font-semibold py-4 px-10 hover:bg-gray-200 transition text-lg">
              Suggest a topic →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
