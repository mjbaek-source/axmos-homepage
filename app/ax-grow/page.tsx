import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AX Grow — Built with You, for Capability',
  description: 'In 16 days your team gains AI capability and builds the AI Agent themselves. An education-first model for organizations that want internalization.',
  keywords: ['AX Grow', 'AI training', 'AI capability building', 'AI internalization', 'business builderthon'],
};

export default function AXGrow() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative bg-bg-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/30 via-bg-dark/55 to-bg-dark/95"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
          <p className="section-eyebrow">Engagement Model — For Capability</p>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-8 max-w-4xl">
            AX Grow
          </h1>
          <p className="text-xl md:text-2xl text-text-light max-w-3xl leading-relaxed mb-10">
            Capability built with your team, not delivered to it.<br />
            The path to owning AI execution in-house.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-3xl border-t border-border-dark pt-12">
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">16 days</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Program Duration</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">Team</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Internal Capability</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">3</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Deliverables</p>
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
                The three commitments of AX Grow
              </h2>
              <div className="space-y-px bg-gray-200">
                {[
                  {
                    label: '01',
                    title: 'Domain-grounded training',
                    desc: 'Not generic AI 101. Intensive training built around your team’s real workflows.',
                  },
                  {
                    label: '02',
                    title: 'In-house builderthon',
                    desc: 'Your team designs, develops, and deploys a real AI Agent alongside our coaches. Learning IS the deliverable.',
                  },
                  {
                    label: '03',
                    title: 'Org-wide rollout blueprint',
                    desc: 'Not a one-off project. We co-design the roadmap and governance for company-wide AI adoption.',
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
                  { title: 'AI capability diagnostic', desc: 'Assessment of your current AI readiness and gaps' },
                  { title: 'Builderthon outcome', desc: 'A production-ready AI Agent built by your team' },
                  { title: 'AX rollout roadmap', desc: 'Company-wide AI adoption strategy, roadmap, and governance model' },
                  { title: 'Enablement training', desc: 'Tailored programs for ICs, managers, and executives' },
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
              Day 1 to Day 16,<br />
              5 stages, built with your team.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-border-dark">
            {[
              { day: 'Day 1', label: 'Design', title: 'Curriculum design', desc: 'Diagnose first, then tailor the curriculum to your team' },
              { day: 'Day 2–3', label: 'Setup', title: 'Operations setup', desc: 'Prepare the builderthon environment' },
              { day: 'Day 4–5', label: 'Train', title: 'AI applied training', desc: 'Intensive, domain-grounded sessions' },
              { day: 'Day 6–15', label: 'Build', title: 'In-house builderthon', desc: 'Your team builds the AI Agent end to end' },
              { day: 'Day 16', label: 'Share', title: 'Outcome readout', desc: 'Present results and share the rollout roadmap' },
            ].map((step, i) => (
              <div key={i} className="bg-bg-dark-2 p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-2">{step.label}</p>
                <p className="text-sm font-mono text-text-light mb-6">{step.day}</p>
                <h3 className="text-lg font-bold mb-3 leading-tight">{step.title}</h3>
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
            <h2 className="section-title text-bg-dark">When AX Grow is the right fit</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'You have an in-house IT team', desc: 'When a team with engineering capability wants to extend into AI.' },
              { title: 'You want AI internalized', desc: 'When you want lasting AI capability, not a one-off project.' },
              { title: 'You’re aiming for org-wide rollout', desc: 'When you need a successful pilot to anchor company-wide AI adoption.' },
              { title: 'Mid-to-large enterprises, finance, public sector', desc: 'When governance, security, and compliance requirements are high.' },
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
            In 16 days, AI capability<br />
            becomes institutional.
          </h2>
          <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto">
            Request a consultation. We begin with a diagnostic of your organization&apos;s AI capability — strengths and gaps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-bg-dark font-semibold py-4 px-10 hover:bg-gray-200 transition text-lg">
              Apply for AX Grow →
            </Link>
            <Link href="/ax-build" className="inline-flex items-center justify-center border border-white/30 text-white font-semibold py-4 px-10 hover:bg-white/10 transition text-lg">
              Compare with AX Build
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
