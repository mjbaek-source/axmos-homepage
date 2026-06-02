'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Cursor from '@/components/Cursor';

interface Case {
  company: string;
  industry: string;
  task: string;
  before: string;
  after: string;
  reduction: string;
  effect: string;
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    const defaultCases: Case[] = [
      { company: 'TransLink Investment', industry: 'Finance · VC', task: 'Vendor due-diligence triage', before: '3–5 days', after: '1 hour', reduction: '90–99%', effect: '30 hrs/mo saved' },
      { company: 'ChainLogis', industry: 'Logistics · Marketing', task: 'Client announcement classification', before: '2–4 hours', after: '3 min', reduction: '97%', effect: '40 hrs/mo saved' },
      { company: 'ChainLogis', industry: 'Logistics', task: 'Delivery inquiry auto-response', before: '2 humans', after: 'AI 90%', reduction: '24/7 always-on', effect: '24-hour ops' },
      { company: 'Dongtan First Eye Clinic', industry: 'Healthcare', task: 'Patient consultation automation', before: 'manual', after: 'AI 90%', reduction: '24/7 always-on', effect: '24-hour ops' },
      { company: 'Expert Tax Firm', industry: 'Accounting', task: 'Month-end statement generation', before: '2–3 hours', after: '10 min', reduction: '90%', effect: '50 hrs/mo saved' },
      { company: 'Expert Tax Firm', industry: 'Accounting', task: 'Receipt auto-classification', before: '10–20 hours', after: '30 min', reduction: '95%', effect: '40 hrs/mo saved' },
      { company: 'UHA Company', industry: 'Retail · Marketing', task: 'Order reconciliation automation', before: '2–3 hours', after: '30 sec', reduction: '99%', effect: '60 hrs/mo saved' },
      { company: 'Buja Tape', industry: 'Content · Media', task: 'Blog content generation', before: '2–4 hours', after: '5 min', reduction: '95%', effect: '80 hrs/mo saved' },
      { company: 'Dongtan First Eye Clinic', industry: 'Healthcare', task: 'Exam result summarization', before: '5–9 min', after: '1.5–2 min', reduction: '70%', effect: '15 hrs/mo saved' },
    ];
    setCases(defaultCases);
  }, []);

  const industries = cases.length > 0
    ? ['All', ...Array.from(new Set(cases.map(c => c.industry))).sort()]
    : ['All'];

  const filteredCases = selectedIndustry === 'All'
    ? cases
    : cases.filter(c => c.industry === selectedIndustry);

  return (
    <main className="bg-white">
      <Cursor />
      {/* HERO — Dark, large typography, image background + radial accent */}
      <section className="relative bg-bg-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/25 via-bg-dark/50 to-bg-dark/95"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 78% 22%, rgba(34,211,238,0.28), transparent 55%), radial-gradient(circle at 15% 85%, rgba(46,117,182,0.12), transparent 50%)',
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-44">
          <p className="section-eyebrow animate-slideUp">The Enterprise AI Operating System</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8 max-w-5xl animate-slideUp" style={{ animationDelay: '0.1s' }}>
            Keep your systems.<br />
            <span className="text-text-light">Change everything else.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl mb-10 leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
            AXMOS connects the systems you already run — Slack, Gmail, Excel, ERP, CRM — into one
            execution layer, and puts AI agents to work across them. In production in weeks,
            with nothing ripped out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-bg-dark font-semibold py-4 px-8 hover:bg-gray-200 transition">
              Book a demo →
            </Link>
            <Link href="/cases" className="inline-flex items-center justify-center border border-white/30 text-white font-semibold py-4 px-8 hover:bg-white/10 transition">
              See AX Cases
            </Link>
          </div>

          {/* Stats inline */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <div>
              <p className="text-3xl md:text-4xl font-black mb-2">3 wks</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Avg. Implementation</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black mb-2">99%</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Max Time Reduction</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black mb-2">9+</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Enterprise Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY — Customer logos */}
      <section className="bg-bg-dark border-t border-border-dark py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-eyebrow text-center mb-12">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-10 items-center justify-items-center">
            {[
              { name: 'TransLink Investment', logo: '/logos/translink.png', height: 28 },
              { name: 'ChainLogis', logo: '/logos/chainlogis.png', height: 32 },
              { name: 'Expert Tax Firm', logo: '/logos/taxexpert.png', height: 36 },
              { name: 'Dongtan First Eye Clinic', logo: '/logos/firsteye.png', height: 28 },
              { name: 'Buja Tape', logo: '/logos/bujatape.png', height: 40 },
              { name: 'UHA Company', logo: null, height: 28 },
            ].map((company, i) => (
              <div key={i} className="flex items-center justify-center h-12 opacity-60 hover:opacity-100 transition" title={company.name}>
                {company.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={company.logo}
                    alt={company.name}
                    style={{ height: `${company.height}px`, width: 'auto' }}
                    className="brightness-0 invert max-w-[140px] object-contain"
                  />
                ) : (
                  <p className="text-text-light text-sm md:text-base font-semibold tracking-wide">
                    {company.name}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN POINTS — Dark section, professional cards */}
      <section className="bg-bg-dark-2 text-white py-32 border-t border-border-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <p className="section-eyebrow">The Problem</p>
            <h2 className="section-title mb-6">
              The bottleneck is no longer data.<br />
              It is execution.
            </h2>
            <p className="text-lg text-text-light leading-relaxed">
              The data already exists. It just sits in ten different tools, and someone still has to
              read it, move it, and act on it by hand. That gap — between knowing and doing — is where
              the time goes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-dark">
            <div className="bg-bg-dark-2 p-10">
              <p className="text-5xl font-black text-white mb-4">01</p>
              <h3 className="text-xl font-bold mb-4">Manual operations consume your workforce</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Reconciliation, classification, cleanup, reporting. Repetitive operational load
                absorbs your most valuable capacity and keeps skilled teams off high-leverage work.
              </p>
            </div>
            <div className="bg-bg-dark-2 p-10">
              <p className="text-5xl font-black text-white mb-4">02</p>
              <h3 className="text-xl font-bold mb-4">Critical data is fragmented across systems</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Slack, Gmail, Excel, CRM, ERP — siloed and disconnected.
                Decisions are made on partial information, with no unified operational view.
              </p>
            </div>
            <div className="bg-bg-dark-2 p-10">
              <p className="text-5xl font-black text-white mb-4">03</p>
              <h3 className="text-xl font-bold mb-4">Traditional AI delivery is too slow to matter</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Plan, build, validate, deploy — 6 to 12 months. Operating conditions shift before launch,
                and the system reaches production already misaligned with the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION — White section with image */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-eyebrow text-bg-dark/60">The Solution</p>
              <h2 className="section-title text-bg-dark mb-8">
                AI that meets your business where it is.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                No rip-and-replace. No data migration. AXMOS deploys directly onto the tools and
                workflows you already operate, with AI agents executing where the work actually happens.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                It reads across Slack, classifies Gmail, structures Excel, and keeps your CRM
                current — connected as one execution layer. <strong>In production within three weeks.</strong>
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Integrate', desc: 'Map systems, data, and operational workflows — Week 1' },
                  { label: 'Deploy', desc: 'Build and configure mission-critical AI agents — Week 2' },
                  { label: 'Operate', desc: 'Validate, deploy to production, monitor — Week 3' },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 border-l-2 border-bg-dark pl-6 py-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">{step.label}</p>
                      <p className="text-bg-dark font-semibold">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/5] bg-bg-dark overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-80">Live Dashboard</p>
                <p className="text-2xl font-bold">Operational impact, measured in real time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL 1 — Quote with photo placeholder */}
      <section className="bg-bg-dark text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <div className="aspect-square bg-bg-dark-3 relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('/people/heedeok-park.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">Customer</p>
                  <p className="text-xl font-bold">Heedeok Park</p>
                  <p className="text-sm text-text-light">CEO, TransLink Investment</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="section-eyebrow">Customer Voice</p>
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
                &ldquo;Due diligence across 100+ portfolio vendors took 3 to 5 days.
                It now completes in under an hour. This is not incremental efficiency —
                it is a structural change in how fast we operate.&rdquo;
              </blockquote>
              <div className="flex items-center gap-6 pt-8 border-t border-border-dark">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">Industry</p>
                  <p className="text-white font-semibold">Finance · VC</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">Result</p>
                  <p className="text-white font-semibold">99% time reduction</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">Time saved</p>
                  <p className="text-white font-semibold">30 hrs/mo</p>
                </div>
              </div>
              <p className="text-xs text-text-muted mt-6 italic">
                💬 Interview text — placeholder. To be replaced after the actual interview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER STORIES — Deep dive cards with images */}
      <section className="bg-white py-32 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
            <div className="max-w-2xl">
              <p className="section-eyebrow text-bg-dark/60">Customer Stories</p>
              <h2 className="section-title text-bg-dark">
                Already running,<br />
                in production.
              </h2>
            </div>
            <Link href="/cases" className="text-bg-dark text-sm font-semibold border-b-2 border-bg-dark pb-1 hover:opacity-60 transition">
              View all customer stories →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: 'TransLink Investment',
                industry: 'Finance · VC',
                title: 'Automated due diligence — 99% faster decision cycles',
                metric: '3–5 days → 1 hour',
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
              },
              {
                company: 'ChainLogis',
                industry: 'Logistics · Marketing',
                title: 'Automated classification and publishing — 20× throughput',
                metric: '2–4 hours → 3 min',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
              },
              {
                company: 'UHA Company',
                industry: 'E-commerce · Settlement',
                title: 'Automated order reconciliation — 60 operational hours recovered monthly',
                metric: '2–3 hours → 30 sec',
                image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
              },
            ].map((story, i) => (
              <Link key={i} href="/cases" className="group">
                <div className="aspect-[4/3] bg-bg-dark relative overflow-hidden mb-6">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${story.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">{story.industry}</p>
                    <p className="text-lg font-bold">{story.company}</p>
                  </div>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">{story.metric}</p>
                <h3 className="text-xl font-bold text-bg-dark leading-tight group-hover:opacity-60 transition">
                  {story.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION — Dark, minimal cards */}
      <section className="bg-bg-dark text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <p className="section-eyebrow">Why AXMOS</p>
            <h2 className="section-title mb-6">
              Built for the way enterprises actually operate.
            </h2>
            <p className="text-lg text-text-light leading-relaxed">
              Not generic SaaS bolted on at the edge. AXMOS runs where the real work happens —
              engineered for the messy workflows, the security reviews, and the compliance
              requirements that come with running a real business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-dark">
            {[
              {
                label: 'Integration',
                title: 'Deploys onto your existing stack',
                desc: 'Slack, Gmail, Excel, ERP, CRM — unified into one execution layer. No infrastructure replacement required.',
              },
              {
                label: 'Speed',
                title: 'Production in 3 weeks',
                desc: 'From integration to deployment in three weeks, on average. Measurable operational ROI within the first month.',
              },
              {
                label: 'Intelligence',
                title: 'Context-aware execution',
                desc: 'Beyond brittle RPA. AI agents that model business context and resolve the edge cases that break rule-based automation.',
              },
              {
                label: 'Security',
                title: 'Enterprise-grade by default',
                desc: 'Data processed in sovereign, region-isolated cloud — never pooled or shared. Operated to your security and compliance posture.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-bg-dark p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-6">{item.label}</p>
                <h3 className="text-xl font-bold mb-4 leading-tight">{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL 2 — Second customer voice */}
      <section className="bg-bg-light py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="section-eyebrow text-bg-dark/60">Customer Voice</p>
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-bg-dark mb-12 max-w-4xl mx-auto">
            &ldquo;We got 80 hours back in the first month.
            That&apos;s a full-time hire we didn&apos;t have to make.&rdquo;
          </blockquote>

          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 bg-bg-dark rounded-full overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
            <div>
              <p className="text-bg-dark font-semibold">[Customer Name]</p>
              <p className="text-sm text-gray-600">CEO, ChainLogis (DoobleHero)</p>
            </div>
            <p className="text-xs text-text-muted italic mt-4">📷 Interview photo + text placeholder</p>
          </div>
        </div>
      </section>

      {/* RESULTS TABLE */}
      <section className="bg-white py-32 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="section-eyebrow text-bg-dark/60">Results</p>
            <h2 className="section-title text-bg-dark">Measured operational outcomes</h2>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Production results from enterprises operating on AXMOS.
            </p>
          </div>

          {/* Industry filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2 text-sm font-medium transition border ${
                  selectedIndustry === ind
                    ? 'bg-bg-dark text-white border-bg-dark'
                    : 'bg-white border-gray-300 text-gray-700 hover:border-bg-dark'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-bg-dark">
                  <th className="text-left py-4 px-4 font-bold text-bg-dark uppercase text-xs tracking-wider">Company</th>
                  <th className="text-left py-4 px-4 font-bold text-bg-dark uppercase text-xs tracking-wider">Industry</th>
                  <th className="text-left py-4 px-4 font-bold text-bg-dark uppercase text-xs tracking-wider">Workflow</th>
                  <th className="text-center py-4 px-4 font-bold text-bg-dark uppercase text-xs tracking-wider">Before → After</th>
                  <th className="text-center py-4 px-4 font-bold text-bg-dark uppercase text-xs tracking-wider">Reduction</th>
                </tr>
              </thead>
              <tbody>
                {filteredCases.map((c, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-bg-light transition">
                    <td className="py-5 px-4 font-semibold text-bg-dark">{c.company}</td>
                    <td className="py-5 px-4 text-gray-700">{c.industry}</td>
                    <td className="py-5 px-4 text-gray-700">{c.task}</td>
                    <td className="py-5 px-4 text-center text-gray-700 font-mono text-xs">
                      <span className="text-gray-500">{c.before}</span>
                      <span className="text-gray-400 mx-2">→</span>
                      <span className="text-bg-dark font-semibold">{c.after}</span>
                    </td>
                    <td className="py-5 px-4 text-center">
                      <span className="inline-block bg-bg-dark text-white px-3 py-1 text-xs font-semibold">
                        {c.reduction}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TWO PATHS — AX Build vs AX Grow */}
      <section className="bg-bg-dark-2 text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="section-eyebrow">Engagement Models</p>
            <h2 className="section-title">Three ways to get started</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/ax-build" className="group bg-bg-dark p-10 border border-border-dark hover:border-white transition">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-6">For Speed</p>
              <h3 className="text-3xl font-bold mb-4">AX Build</h3>
              <p className="text-text-light mb-8 leading-relaxed">
                AXMOS builds it for you. The fastest path.
              </p>
              <div className="space-y-3 mb-10">
                <div className="flex justify-between text-sm border-b border-border-dark pb-3">
                  <span className="text-text-muted">Duration</span>
                  <span className="font-semibold">20 days</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border-dark pb-3">
                  <span className="text-text-muted">Deliverable</span>
                  <span className="font-semibold">Production-ready AI Agent</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border-dark pb-3">
                  <span className="text-text-muted">Best for</span>
                  <span className="font-semibold">Speed-first teams</span>
                </div>
              </div>
              <p className="text-sm font-semibold border-b border-white pb-1 inline-block group-hover:opacity-60 transition">
                Learn more →
              </p>
            </Link>

            <Link href="/ax-grow" className="group bg-bg-dark p-10 border border-border-dark hover:border-white transition">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-6">For Capability</p>
              <h3 className="text-3xl font-bold mb-4">AX Grow</h3>
              <p className="text-text-light mb-8 leading-relaxed">
                Build it with your team. The path to internal capability.
              </p>
              <div className="space-y-3 mb-10">
                <div className="flex justify-between text-sm border-b border-border-dark pb-3">
                  <span className="text-text-muted">Duration</span>
                  <span className="font-semibold">16 days</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border-dark pb-3">
                  <span className="text-text-muted">Deliverable</span>
                  <span className="font-semibold">Diagnostic + Agent + Roadmap</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border-dark pb-3">
                  <span className="text-text-muted">Best for</span>
                  <span className="font-semibold">Internal team enablement</span>
                </div>
              </div>
              <p className="text-sm font-semibold border-b border-white pb-1 inline-block group-hover:opacity-60 transition">
                Learn more →
              </p>
            </Link>

            <Link href="/ax-learn" className="group bg-bg-dark p-10 border border-border-dark hover:border-white transition">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-6">For Literacy</p>
              <h3 className="text-3xl font-bold mb-4">AX Learn</h3>
              <p className="text-text-light mb-8 leading-relaxed">
                Help non-developer employees use AI at work. The literacy path.
              </p>
              <div className="space-y-3 mb-10">
                <div className="flex justify-between text-sm border-b border-border-dark pb-3">
                  <span className="text-text-muted">Duration</span>
                  <span className="font-semibold">1–2 days</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border-dark pb-3">
                  <span className="text-text-muted">Deliverable</span>
                  <span className="font-semibold">Role-tailored AI playbook</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border-dark pb-3">
                  <span className="text-text-muted">Best for</span>
                  <span className="font-semibold">Non-developers · Company-wide enablement</span>
                </div>
              </div>
              <p className="text-sm font-semibold border-b border-white pb-1 inline-block group-hover:opacity-60 transition">
                Learn more →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-32 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <p className="section-eyebrow text-bg-dark/60">FAQ</p>
            <h2 className="section-title text-bg-dark">Frequently asked questions</h2>
          </div>
          <div className="space-y-px bg-gray-200">
            {[
              {
                q: 'Can our workflows be automated?',
                a: 'In most cases, yes. Any operation with a repeatable pattern is a candidate for AI execution. We define precise scope after an initial assessment — no speculative claims.',
              },
              {
                q: 'Do we have to replace our existing systems?',
                a: 'No. AXMOS deploys on top of your existing infrastructure. Slack, Gmail, Excel, ERP, CRM — all retained. AI agents connect the data and execute across them as one operational layer.',
              },
              {
                q: 'Do we need our own engineering team?',
                a: 'Not necessarily. With AX Build, the AXMOS team delivers everything end to end. With AX Grow, your team learns and builds alongside us. If you want to raise AI literacy across employees before any build project, AX Learn workshops can come first. You can ship operational results without an internal tech team.',
              },
              {
                q: 'What does it cost?',
                a: 'We provide a custom quote based on scope and complexity. After a free consultation, we share a clear, fixed-fee proposal. In most cases the cost covers the full 3-week build period — no surprise add-ons.',
              },
              {
                q: 'How is data security handled?',
                a: 'AXMOS follows a strict data-sovereignty principle: customer data is processed in sovereign, region-isolated cloud infrastructure — never pooled or shared. We operate to each enterprise’s security and compliance requirements, and execute NDAs and data-processing agreements as part of onboarding.',
              },
              {
                q: 'What about post-launch support?',
                a: 'We include 3 months of free maintenance. Extensions are arranged through a separate contract. Operations manuals and user training are included.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-bg-light transition"
                >
                  <span className="font-bold text-bg-dark text-lg pr-8">{faq.q}</span>
                  <span className={`text-bg-dark text-2xl transition-transform duration-300 flex-shrink-0 ${openFAQ === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFAQ === i && (
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed animate-slideUp">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — Dark, strong */}
      <section className="bg-bg-dark text-white py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/80 via-bg-dark/90 to-bg-dark"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="section-eyebrow">Get Started</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-8">
            From AI strategy<br />
            to AI in production.
          </h2>
          <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Book a demo — we respond within 2 business days. The first session maps what&apos;s
            worth automating, and what it&apos;s worth to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-bg-dark font-semibold py-4 px-10 hover:bg-gray-200 transition text-lg">
              Book a demo →
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
