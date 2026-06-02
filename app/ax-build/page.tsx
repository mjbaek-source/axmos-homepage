import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AX Build — Built by AXMOS, for Speed',
  description: 'Get a custom AI Agent built in 20 days. The fastest path: AXMOS designs, develops, and deploys end to end.',
  keywords: ['AX Build', 'AI build', 'custom AI solution', 'workflow automation', 'AI Agent'],
};

export default function AXBuild() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative bg-bg-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/30 via-bg-dark/55 to-bg-dark/95"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
          <p className="section-eyebrow">Engagement Model — For Speed</p>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-8 max-w-4xl">
            AX Build
          </h1>
          <p className="text-xl md:text-2xl text-text-light max-w-3xl leading-relaxed mb-10">
            AXMOS designs, builds, and deploys — end to end.<br />
            The fastest path to a mission-critical AI agent in production.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-3xl border-t border-border-dark pt-12">
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">20 days</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Build Duration</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">100%</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Custom-built</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">3 mo</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Free Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-white py-32 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-eyebrow text-bg-dark/60">3 Commitments</p>
              <h2 className="section-title text-bg-dark mb-12">
                The three commitments of AX Build
              </h2>
              <div className="space-y-px bg-gray-200">
                {[
                  {
                    label: '01',
                    title: 'Fully custom-built',
                    desc: 'Not a template. We design from scratch around your workflows, data structures, and system environment.',
                  },
                  {
                    label: '02',
                    title: 'Live in 20 days',
                    desc: 'Plan, build, test, deploy — all in 20 days. See measurable ROI within the first month.',
                  },
                  {
                    label: '03',
                    title: 'Operational handover',
                    desc: 'After 3 months of free support, we hand over fully — with manuals, training, and ownership transfer.',
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white py-8">
                    <div className="flex gap-6">
                      <p className="text-text-muted font-mono text-sm pt-1">{item.label}</p>
                      <div>
                        <h3 className="text-xl font-bold text-bg-dark mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-bg-dark text-white p-12">
              <p className="section-eyebrow">Deliverables</p>
              <h3 className="text-3xl font-bold mb-10">What you get</h3>
              <div className="space-y-8">
                {[
                  { title: 'A custom AI Agent', desc: 'Operational AI integrated into your existing systems' },
                  { title: 'AI workflow automation', desc: 'End-to-end automation of your core business processes' },
                  { title: 'Manuals & training', desc: 'Operations guide and training for admins and end users' },
                  { title: '3 months of free support', desc: 'Bug fixes, improvements, and operational consulting' },
                ].map((item, i) => (
                  <div key={i} className="border-b border-border-dark pb-6 last:border-b-0">
                    <p className="font-bold text-white mb-2">{item.title}</p>
                    <p className="text-sm text-text-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="bg-bg-dark-2 text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="section-eyebrow">Process</p>
            <h2 className="section-title">
              Day 1 to Day 20,<br />
              a proven 4-step process.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border-dark">
            {[
              { day: 'Day 1–3', label: 'Discovery', title: 'Requirements analysis', desc: 'Map current workflows, systems, and data flows' },
              { day: 'Day 4–10', label: 'Build', title: 'Agent development', desc: 'Design and implement the custom AI Agent' },
              { day: 'Day 11–16', label: 'Test', title: 'Test & iterate', desc: 'Validate with real data, handle edge cases' },
              { day: 'Day 17–20', label: 'Deploy', title: 'Deploy & hand off', desc: 'Production deployment, manuals, training' },
            ].map((step, i) => (
              <div key={i} className="bg-bg-dark-2 p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-2">{step.label}</p>
                <p className="text-sm font-mono text-text-light mb-6">{step.day}</p>
                <h3 className="text-xl font-bold mb-4 leading-tight">{step.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="section-eyebrow text-bg-dark/60">Best Fit</p>
            <h2 className="section-title text-bg-dark">When AX Build is the right fit</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Speed is the priority', desc: 'When you need a production-ready result within 30 days.' },
              { title: 'Lean engineering team', desc: 'When you don&apos;t have internal devs — or they&apos;re heads-down on other priorities.' },
              { title: 'Quick ROI required', desc: 'When you need to show leadership short-term ROI fast.' },
              { title: 'Startups & SMBs', desc: 'When you want to roll out AI automation in a resource-efficient way.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-bg-dark pl-6 py-2">
                <h3 className="text-xl font-bold text-bg-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-dark text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/80 via-bg-dark/90 to-bg-dark"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="section-eyebrow">Get Started</p>
          <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight mb-8">
            A production AI agent,<br />
            operational in 20 days.
          </h2>
          <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto">
            Request a consultation. The first session maps your automation surface and defines the operational ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-bg-dark font-semibold py-4 px-10 hover:bg-gray-200 transition text-lg">
              Apply for AX Build →
            </Link>
            <Link href="/ax-grow" className="inline-flex items-center justify-center border border-white/30 text-white font-semibold py-4 px-10 hover:bg-white/10 transition text-lg">
              Compare with AX Grow
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
