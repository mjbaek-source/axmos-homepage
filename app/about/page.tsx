'use client';

import Link from 'next/link';
import Cursor from '@/components/Cursor';

const members = [
  { name: 'Wilt VentureBuilder', role: 'Consortium Lead · Global', desc: 'Singapore-based venture builder leading the consortium and global expansion.' },
  { name: 'PopupStudio', role: 'AI Core · OS', desc: 'Builds the core AI framework and operating system (OS).' },
  { name: 'CodePresso', role: 'Education · AX', desc: 'AI education and B2B enterprise AX services.' },
  { name: 'DreamAce', role: 'Manufacturing · Pilots', desc: 'Manufacturing-floor testbeds and field validation.' },
  { name: 'Brii', role: 'Work Agents', desc: 'Design and automation of AI work agents.' },
  { name: 'TransLink Investment', role: 'Investment · Expansion', desc: 'Market-entry and investment support across North America and Southeast Asia.' },
];

const fdeSteps = [
  { step: 'STEP 1', label: 'Diagnose', desc: 'Observe the workflow on the ground to find the real problem.' },
  { step: 'STEP 2', label: 'Align', desc: 'Build trust with stakeholders and agree on what to solve.' },
  { step: 'STEP 3', label: 'Deploy', desc: 'Build and ship the solution fast on a standard core.' },
  { step: 'STEP 4', label: 'Operate', desc: 'Prove impact with KPIs and embed it into the organization.' },
];

const goals = [
  { no: '01', title: 'Manufacturing AX', desc: 'Bring AI to regional factory floors — where adoption sits at just 1% — and change how work gets done.' },
  { no: '02', title: 'Local Talent', desc: 'Cultivate field problem-solvers (FDEs) so local talent works in local industry — a virtuous cycle.' },
  { no: '03', title: 'Global Expansion', desc: 'Extend the AX references built in Korea to global markets including the US and Singapore.' },
];

const media = [
  {
    title: 'Planting AI in K-manufacturing — six companies launch the ‘AXMOS’ consortium',
    outlet: 'BetaNews',
    date: '2026.03.23',
  },
];

export default function About() {
  return (
    <main className="bg-white">
      <Cursor />

      {/* HERO */}
      <section className="relative bg-bg-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/40 via-bg-dark/60 to-bg-dark/95" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(34,211,238,0.25), transparent 55%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-44">
          <p className="section-eyebrow animate-slideUp">About AXMOS — The Consortium</p>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8 max-w-4xl animate-slideUp" style={{ animationDelay: '0.1s' }}>
            Planting AI on the floor,<br />
            <span className="text-text-light">changing how work gets done.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
            AXMOS is a consortium of six companies spanning AI, manufacturing, education, and investment.
            We pool manufacturing-ready AI capabilities to change the execution speed of Korean industry.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-bg-dark-2 text-white py-32 border-t border-border-dark">
        <div className="max-w-5xl mx-auto px-6">
          <p className="section-eyebrow mb-8">Our Mission</p>
          <blockquote className="text-2xl md:text-4xl font-bold leading-tight mb-10">
            “Pool manufacturing-ready AI capabilities to drive the digital transformation
            of regional industry and cultivate local talent — at the same time.”
          </blockquote>
          <p className="text-text-light leading-relaxed max-w-3xl">
            AXMOS is not a single product. It is an alliance of companies, each the best at what they do —
            from core AI technology to factory-floor validation, talent education, and global expansion.
            One team owns the entire value chain.
          </p>
        </div>
      </section>

      {/* CONSORTIUM MEMBERS */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="section-eyebrow text-bg-dark/60">The Consortium</p>
            <h2 className="section-title text-bg-dark mb-6">The six companies behind AXMOS</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              From lead to core technology, manufacturing pilots, education, and investment —
              each strength converges into a single unit of execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {members.map((m, i) => (
              <div key={i} className="bg-white p-10 hover:bg-bg-light transition">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-5">{m.role}</p>
                <h3 className="text-2xl font-bold text-bg-dark mb-4">{m.name}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FDE */}
      <section className="bg-bg-dark text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <p className="section-eyebrow">Forward Deployed Engineer</p>
            <h2 className="section-title mb-6">The people who go to the floor — FDEs</h2>
            <p className="text-lg text-text-light leading-relaxed">
              A Forward Deployed Engineer (FDE) goes directly into the field to diagnose the problem,
              then designs, builds, and makes the AI solution work.
              Every AXMOS project is owned end to end by an FDE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-dark">
            {fdeSteps.map((s, i) => (
              <div key={i} className="bg-bg-dark p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-6">{s.step}</p>
                <h3 className="text-2xl font-bold mb-4">{s.label}</h3>
                <p className="text-sm text-text-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="bg-white py-32 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="section-eyebrow text-bg-dark/60">Our Goals</p>
            <h2 className="section-title text-bg-dark">The change we are building</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {goals.map((g, i) => (
              <div key={i} className="bg-white p-10">
                <p className="text-5xl font-black text-bg-dark mb-6">{g.no}</p>
                <h3 className="text-xl font-bold text-bg-dark mb-4">{g.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section className="bg-bg-light py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <p className="section-eyebrow text-bg-dark/60">In the Media</p>
            <h2 className="section-title text-bg-dark">AXMOS in the press</h2>
          </div>

          <div className="space-y-px bg-gray-200 border border-gray-200">
            {media.map((m, i) => (
              <div key={i} className="bg-white px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-bg-light transition">
                <p className="text-lg font-bold text-bg-dark leading-snug pr-6">{m.title}</p>
                <div className="flex items-center gap-4 text-sm text-text-muted flex-shrink-0">
                  <span className="font-semibold text-bg-dark">{m.outlet}</span>
                  <span>{m.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-dark text-white py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-eyebrow">Work with us</p>
          <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight mb-8">
            Let&rsquo;s change<br />the floor together.
          </h2>
          <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto leading-relaxed">
            From deployment consulting to factory-floor pilots and partnerships — every conversation is welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-bg-dark font-semibold py-4 px-10 hover:bg-gray-200 transition text-lg">
              Get in touch →
            </Link>
            <Link href="/cases" className="inline-flex items-center justify-center border border-white/30 text-white font-semibold py-4 px-10 hover:bg-white/10 transition text-lg">
              See AX Cases
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
