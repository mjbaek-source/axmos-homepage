'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CasesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  const cases = [
    {
      company: 'TransLink Investment',
      industry: 'Finance · VC',
      task: 'Vendor due-diligence triage',
      before: '3–5 days',
      after: '1 hour',
      reduction: '99%',
      effect: '30 hrs/mo saved',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    },
    {
      company: 'ChainLogis',
      industry: 'Logistics · Marketing',
      task: 'Client announcement classification & social posting',
      before: '2–4 hours',
      after: '3 min',
      reduction: '97%',
      effect: '80 hrs/mo saved · 20× output',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      company: 'ChainLogis',
      industry: 'Logistics · CS',
      task: 'Delivery inquiry auto-response',
      before: '2 humans',
      after: 'AI 90%',
      reduction: '24/7 always-on',
      effect: '24-hour operation',
      image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1200&q=80',
    },
    {
      company: 'Dongtan First Eye Clinic',
      industry: 'Healthcare',
      task: 'Patient consultation automation',
      before: 'Manual',
      after: 'AI 90%',
      reduction: '24/7 always-on',
      effect: '24-hour operation',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      company: 'Expert Tax Firm',
      industry: 'Accounting',
      task: 'Month-end statement generation',
      before: '2–3 hours',
      after: '10 min',
      reduction: '90%',
      effect: '50 hrs/mo saved',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80',
    },
    {
      company: 'Expert Tax Firm',
      industry: 'Accounting',
      task: 'Receipt auto-classification',
      before: '10–20 hours',
      after: '30 min',
      reduction: '95%',
      effect: '40 hrs/mo saved',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    },
    {
      company: 'UHA Company',
      industry: 'E-commerce · Settlement',
      task: 'Order reconciliation automation',
      before: '2–3 hours',
      after: '30 sec',
      reduction: '99%',
      effect: '60 hrs/mo saved',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
    },
    {
      company: 'Buja Tape',
      industry: 'Content · Media',
      task: 'Blog content generation',
      before: '2–4 hours',
      after: '5 min',
      reduction: '95%',
      effect: '80 hrs/mo saved',
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=1200&q=80',
    },
    {
      company: 'Dongtan First Eye Clinic',
      industry: 'Healthcare',
      task: 'Exam result summarization',
      before: '5–9 min',
      after: '1.5–2 min',
      reduction: '70%',
      effect: '15 hrs/mo saved',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const industries = ['All', ...Array.from(new Set(cases.map(c => c.industry))).sort()];
  const filteredCases = selectedIndustry === 'All'
    ? cases
    : cases.filter(c => c.industry === selectedIndustry);

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative bg-bg-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/30 via-bg-dark/55 to-bg-dark/95"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
          <p className="section-eyebrow animate-slideUp">Customer Stories</p>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8 max-w-4xl animate-slideUp" style={{ animationDelay: '0.1s' }}>
            The results,<br />in their own numbers.
          </h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Finance, logistics, healthcare, accounting, e-commerce. Nine industries,
            nine deployments, one pattern — measurable operational impact.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl border-t border-border-dark pt-12 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">9</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Industries</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">90%+</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Avg. Time Reduction</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">600h</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Monthly Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & GRID */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
            <div>
              <p className="section-eyebrow text-bg-dark/60">All Cases</p>
              <h2 className="section-title text-bg-dark">Automation cases by industry</h2>
            </div>
            <p className="text-sm text-gray-600">
              {filteredCases.length} of {cases.length} cases
            </p>
          </div>

          {/* Industry filter */}
          <div className="flex flex-wrap gap-2 mb-12">
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

          {/* Cases grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((c, i) => (
              <article key={i} className="group">
                <div className="aspect-[4/3] bg-bg-dark relative overflow-hidden mb-6">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${c.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/30 to-transparent" />
                  <div className="absolute top-0 right-0 m-4">
                    <span className="inline-block bg-white text-bg-dark px-3 py-1 text-xs font-semibold">
                      {c.reduction}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">{c.industry}</p>
                    <p className="text-lg font-bold">{c.company}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-bg-dark mb-3 leading-tight">
                    {c.task}
                  </h3>
                  <div className="flex items-center gap-4 text-sm font-mono mb-3">
                    <span className="text-gray-500">{c.before}</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-bg-dark font-semibold">{c.after}</span>
                  </div>
                  <p className="text-sm text-gray-600 border-t border-gray-200 pt-3">
                    {c.effect}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-muted">No cases in this industry yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-dark text-white py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/55 via-bg-dark/75 to-bg-dark/95"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="section-eyebrow">Get Started</p>
          <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight mb-8">
            Your operations are next.
          </h2>
          <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Measurable results in three weeks. Book a demo and we&apos;ll map what&apos;s
            worth automating — and what it&apos;s worth to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-bg-dark font-semibold py-4 px-10 hover:bg-gray-200 transition text-lg">
              Book a demo →
            </Link>
            <Link href="/" className="inline-flex items-center justify-center border border-white/30 text-white font-semibold py-4 px-10 hover:bg-white/10 transition text-lg">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
