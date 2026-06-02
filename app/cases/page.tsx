'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CasesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('전체');

  const cases = [
    {
      company: '트랜스링크 인베스트먼트',
      industry: '금융·VC',
      task: '거래처 실사 요청 정리',
      before: '3~5일',
      after: '1시간',
      reduction: '99%',
      effect: '월 30시간 단축',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    },
    {
      company: '체인로지스',
      industry: '물류·마케팅',
      task: '고객사 공지사항 분류·SNS 발행',
      before: '2~4시간',
      after: '3분',
      reduction: '97%',
      effect: '월 80시간 단축, 발행량 20배↑',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      company: '체인로지스',
      industry: '물류·CS',
      task: '배송 문의 자동 응대',
      before: '수동 2명',
      after: 'AI 90%',
      reduction: '24h 무중단',
      effect: '24시간 운영',
      image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1200&q=80',
    },
    {
      company: '동탄퍼스트안과',
      industry: '헬스케어',
      task: '환자 상담 자동화',
      before: '수동 응대',
      after: 'AI 90%',
      reduction: '24h 무중단',
      effect: '24시간 운영',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      company: '엑스퍼트 세무법인',
      industry: '회계',
      task: '월말 정산서 생성',
      before: '2~3시간',
      after: '10분',
      reduction: '90%',
      effect: '월 50시간 단축',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80',
    },
    {
      company: '엑스퍼트 세무법인',
      industry: '회계',
      task: '영수증 자동 분류',
      before: '10~20시간',
      after: '30분',
      reduction: '95%',
      effect: '월 40시간 단축',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    },
    {
      company: '우하컴퍼니',
      industry: '이커머스·정산',
      task: '주문 정산 자동화',
      before: '2~3시간',
      after: '30초',
      reduction: '99%',
      effect: '월 60시간 단축',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
    },
    {
      company: '부자테이프',
      industry: '콘텐츠·미디어',
      task: '블로그 콘텐츠 생성',
      before: '2~4시간',
      after: '5분',
      reduction: '95%',
      effect: '월 80시간 단축',
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=1200&q=80',
    },
    {
      company: '동탄퍼스트안과',
      industry: '헬스케어',
      task: '검사 결과 정리',
      before: '5~9분',
      after: '1.5~2분',
      reduction: '70%',
      effect: '월 15시간 단축',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const industries = ['전체', ...Array.from(new Set(cases.map(c => c.industry))).sort()];
  const filteredCases = selectedIndustry === '전체'
    ? cases
    : cases.filter(c => c.industry === selectedIndustry);

  return (
    <main className="bg-white">
      {/* HERO — Cohere editorial white canvas */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <p className="font-mono uppercase text-[11px] tracking-[0.28px] text-muted-slate mb-6 animate-slideUp">
            CUSTOMER STORIES
          </p>
          <h1
            className="font-display text-ink leading-[1.0] tracking-[-1.44px] mb-10 max-w-4xl animate-slideUp"
            style={{ fontSize: 'clamp(48px, 6vw, 80px)', animationDelay: '0.1s' }}
          >
            한국 기업이 AXMOS로<br />만든 실행 결과.
          </h1>
          <p className="text-xl md:text-2xl text-slate-text max-w-3xl leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
            금융·물류·헬스케어·회계·이커머스. 9가지 산업, 9개 기업이 검증한
            업무 자동화의 실질적 임팩트.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl border-t border-hairline pt-10 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <div>
              <p className="font-display text-4xl md:text-5xl text-ink leading-none tracking-[-0.96px] mb-3">9</p>
              <p className="font-mono uppercase text-[11px] tracking-[0.28px] text-muted-slate">Industries</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl text-ink leading-none tracking-[-0.96px] mb-3">90%+</p>
              <p className="font-mono uppercase text-[11px] tracking-[0.28px] text-muted-slate">Avg. Time Reduction</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl text-ink leading-none tracking-[-0.96px] mb-3">600h</p>
              <p className="font-mono uppercase text-[11px] tracking-[0.28px] text-muted-slate">Monthly Saved</p>
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
              <h2 className="section-title text-bg-dark">산업별 자동화 사례</h2>
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
              <p className="text-text-muted">해당 산업의 사례가 없습니다.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA — Cohere deep green band */}
      <section className="bg-deep-green text-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono uppercase text-[11px] tracking-[0.28px] text-coral mb-6">Get Started</p>
          <h2
            className="font-display text-white leading-[1.0] tracking-[-1.2px] mb-8"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            당신의 업무도 자동화 가능합니다.
          </h2>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            3주 안에 가시적인 결과를 만들어 드립니다. 무료 상담 후 자동화 가능 영역과
            예상 ROI를 함께 분석해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-near-black font-medium px-7 py-3.5 rounded-pill hover:bg-soft-stone transition"
            >
              Schedule a demo
            </Link>
            <Link
              href="/"
              className="inline-flex items-center text-white font-medium border-b border-white pb-1 hover:opacity-60 transition"
            >
              Back to Home →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
