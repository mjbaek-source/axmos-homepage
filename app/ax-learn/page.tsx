import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AX Learn — AI Literacy for Non-Developers',
  description: 'Applied AI workshops for non-developer employees. No code, role-tailored scenarios, ready to apply the next day.',
  keywords: ['AX Learn', 'AI workshop', 'AI training for non-developers', 'AI literacy', 'employee AI training', 'corporate AI workshop'],
};

export default function AXLearn() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative bg-bg-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/30 via-bg-dark/55 to-bg-dark/95"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
          <p className="section-eyebrow">Engagement Model — For Literacy</p>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-8 max-w-4xl">
            AX Learn
          </h1>
          <p className="text-xl md:text-2xl text-text-light max-w-3xl leading-relaxed mb-10">
            No code. Your job, as is.<br />
            A workshop program that helps non-developer employees actually use AI at work.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-3xl border-t border-border-dark pt-12">
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">1–2 days</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Workshop Duration</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">Non-devs</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Target Audience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">100%</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Hands-on</p>
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
                The three commitments of AX Learn
              </h2>
              <div className="space-y-px bg-gray-200">
                {[
                  {
                    label: '01',
                    title: 'Start with AI — without code',
                    desc: 'No programming background required. Apply ChatGPT, Claude, and no-code AI tools to your work right away.',
                  },
                  {
                    label: '02',
                    title: 'Role-tailored scenarios',
                    desc: 'We build real workflows and prompts together — calibrated to each participant&apos;s function: strategy, marketing, sales, HR, operations.',
                  },
                  {
                    label: '03',
                    title: 'Use it the next day',
                    desc: 'Not theory — hands-on. Participants leave with workflows they can run on their own desk the morning after.',
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
                  { title: 'Role-tailored AI playbook', desc: 'Workflows and prompts organized by participant function' },
                  { title: 'Workshop output kit', desc: 'Templates and automation scenarios ready for production use' },
                  { title: 'Lecture videos and materials', desc: 'Reusable for internal sharing and new-hire onboarding' },
                  { title: 'Follow-up Q&A session', desc: 'Coaching two weeks later on the friction points you hit in practice' },
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
              From pre-diagnostic to post-coaching,<br />
              a 4-step path that sticks.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border-dark">
            {[
              { day: 'Pre', label: 'Diagnose', title: 'Role & needs scan', desc: 'Pre-interviews to map participant roles and current pain points' },
              { day: 'Day 1', label: 'Lecture', title: 'AI core workshop', desc: 'How generative AI works, prompt fundamentals, live tool demos' },
              { day: 'Day 2', label: 'Workshop', title: 'Role-tailored practice', desc: 'Build automation and productivity workflows on each participant&apos;s actual cases' },
              { day: 'Post', label: 'Coach', title: '2-week coaching', desc: 'Q&A on real-world adoption blockers, plus additional scenario coaching' },
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
            <h2 className="section-title text-bg-dark">When AX Learn is the right fit</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Non-developer functions', desc: 'When your strategy, marketing, sales, HR, and ops teams need to use AI directly — not just hear about it.' },
              { title: 'Pre-work before org-wide rollout', desc: 'When you want a literacy baseline across employees before kicking off an AX Build or AX Grow project.' },
              { title: 'Corporate workshops & training', desc: 'When you want to slot an AI module into existing leadership programs or new-hire onboarding.' },
              { title: 'Immediate, applied use cases', desc: 'When the team needs AI they can use next Monday — not abstract theory.' },
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
            In two days, non-developers<br />
            start using AI as a work tool.
          </h2>
          <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto">
            Request an in-company workshop. We&apos;ll tailor the curriculum to participant roles and team size.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-bg-dark font-semibold py-4 px-10 hover:bg-gray-200 transition text-lg">
              Apply for AX Learn →
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
