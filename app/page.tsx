'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

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
  const [selectedIndustry, setSelectedIndustry] = useState<string>('전체');
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    const defaultCases: Case[] = [
      { company: '트랜스링크 인베스트먼트', industry: '금융·VC', task: '거래처 실사 요청 정리', before: '3~5일', after: '1시간', reduction: '90~99%', effect: '월 30시간 단축' },
      { company: '체인로지스', industry: '물류·마케팅', task: '고객사 공지사항 분류', before: '2~4시간', after: '3분', reduction: '97%', effect: '월 40시간 단축' },
      { company: '체인로지스', industry: '물류', task: '배송 문의 자동 응대', before: '수동 2명', after: 'AI 90%', reduction: '24h 무중단', effect: '24시간 운영' },
      { company: '동탄퍼스트안과', industry: '헬스케어', task: '환자 상담 자동화', before: '수동 응대', after: 'AI 90%', reduction: '24h 무중단', effect: '24시간 운영' },
      { company: '엑스퍼트 세무법인', industry: '회계', task: '월말 정산서 생성', before: '2~3시간', after: '10분', reduction: '90%', effect: '월 50시간 단축' },
      { company: '엑스퍼트 세무법인', industry: '회계', task: '영수증 자동 분류', before: '10~20시간', after: '30분', reduction: '95%', effect: '월 40시간 단축' },
      { company: '우하컴퍼니', industry: '유통·마케팅', task: '주문 정산 자동화', before: '2~3시간', after: '30초', reduction: '99%', effect: '월 60시간 단축' },
      { company: '부자테이프', industry: '콘텐츠·미디어', task: '블로그 콘텐츠 생성', before: '2~4시간', after: '5분', reduction: '95%', effect: '월 80시간 단축' },
      { company: '동탄퍼스트안과', industry: '헬스케어', task: '검사 결과 정리', before: '5~9분', after: '1.5~2분', reduction: '70%', effect: '월 15시간 단축' },
    ];
    setCases(defaultCases);
  }, []);

  const industries = cases.length > 0
    ? ['전체', ...Array.from(new Set(cases.map(c => c.industry))).sort()]
    : ['전체'];

  const filteredCases = selectedIndustry === '전체'
    ? cases
    : cases.filter(c => c.industry === selectedIndustry);

  return (
    <main className="bg-white">
      {/* HERO — Dark, large typography, image background */}
      <section className="relative bg-bg-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/60 via-bg-dark/80 to-bg-dark"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-44">
          <p className="section-eyebrow animate-slideUp">The AI Operating System for Korean Enterprises</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8 max-w-5xl animate-slideUp" style={{ animationDelay: '0.1s' }}>
            업무는 그대로,<br />
            <span className="text-text-light">실행만 더 빠르게.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl mb-10 leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
            기존 시스템과 도구는 그대로. AXMOS가 연결하고, 자동화하고, 가속합니다.
            3주 안에 가시적인 결과를 만듭니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-bg-dark font-semibold py-4 px-8 hover:bg-gray-200 transition">
              Schedule a Demo →
            </Link>
            <Link href="/cases" className="inline-flex items-center justify-center border border-white/30 text-white font-semibold py-4 px-8 hover:bg-white/10 transition">
              See Customer Stories
            </Link>
          </div>

          {/* Stats inline */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <div>
              <p className="text-3xl md:text-4xl font-black mb-2">3주</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Average Implementation</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black mb-2">99%</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Time Reduction</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black mb-2">9+</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Enterprise Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY — Minimal logo bar */}
      <section className="bg-bg-dark border-t border-border-dark py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-eyebrow text-center mb-10">Trusted by Korean Enterprises</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-8 items-center justify-items-center">
            {['트랜스링크', '체인로지스', '우하컴퍼니', '엑스퍼트 세무법인', '동탄퍼스트안과', '부자테이프'].map((name, i) => (
              <p key={i} className="text-text-light text-sm md:text-base font-semibold tracking-wide opacity-60 hover:opacity-100 transition">
                {name}
              </p>
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
              한국 기업의 실행 속도는<br />
              여전히 수십 년 전 그대로입니다.
            </h2>
            <p className="text-lg text-text-light leading-relaxed">
              이메일을 한 통씩 읽고, 엑셀에 데이터를 옮기고, 메신저로 보고를 주고받는 동안
              경쟁사는 이미 한 발 앞서 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-dark">
            <div className="bg-bg-dark-2 p-10">
              <p className="text-5xl font-black text-white mb-4">01</p>
              <h3 className="text-xl font-bold mb-4">반복 업무가 사람을 갉아먹습니다</h3>
              <p className="text-text-light text-sm leading-relaxed">
                정산, 분류, 정리, 보고. 매일 반복되는 비효율이 인재의 시간을
                갉아먹고 핵심 업무에 집중하지 못하게 만듭니다.
              </p>
            </div>
            <div className="bg-bg-dark-2 p-10">
              <p className="text-5xl font-black text-white mb-4">02</p>
              <h3 className="text-xl font-bold mb-4">시스템이 흩어져 있습니다</h3>
              <p className="text-text-light text-sm leading-relaxed">
                Slack, Gmail, Excel, CRM, ERP. 데이터는 도구마다 흩어져 있고,
                연결이 끊어진 채로 의사결정이 이뤄집니다.
              </p>
            </div>
            <div className="bg-bg-dark-2 p-10">
              <p className="text-5xl font-black text-white mb-4">03</p>
              <h3 className="text-xl font-bold mb-4">AI 도입은 너무 멉니다</h3>
              <p className="text-text-light text-sm leading-relaxed">
                기획·개발·검증·배포를 거치면 6개월~1년. 그 사이 비즈니스 환경은
                바뀌고, 도입한 AI는 이미 낡아 있습니다.
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
                The AI OS that adapts to your business—not the other way around.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AXMOS는 기존 시스템을 교체하지 않습니다. 데이터를 옮기지도 않습니다.
                대신, 당신의 도구와 워크플로우 위에 AI Agent를 얹어 자동화합니다.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                Slack 메시지를 분석하고, Gmail을 분류하고, Excel을 정리하고,
                CRM을 업데이트합니다. <strong>3주 안에 운영 가능한 결과물</strong>을 받게 됩니다.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Install', desc: '기존 시스템 분석 — 1주차' },
                  { label: 'Build', desc: 'AI Agent 설계 및 개발 — 2주차' },
                  { label: 'Operate', desc: '검증·배포·운영 — 3주차' },
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
                <p className="text-2xl font-bold">실시간으로 자동화 성과를 확인합니다.</p>
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
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">Customer</p>
                  <p className="text-xl font-bold">[고객사 대표명]</p>
                  <p className="text-sm text-text-light">CEO, 트랜스링크 인베스트먼트</p>
                </div>
              </div>
              <p className="text-xs text-text-muted mt-3 italic">📷 인터뷰 사진 placeholder</p>
            </div>

            <div className="md:col-span-2">
              <p className="section-eyebrow">Customer Voice</p>
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
                &ldquo;100개사 거래처 실사 요청을 3~5일이 걸리던 작업이
                AXMOS 도입 후 1시간 만에 끝납니다. 단순한 시간 절감이 아니라,
                의사결정 속도 자체가 달라졌습니다.&rdquo;
              </blockquote>
              <div className="flex items-center gap-6 pt-8 border-t border-border-dark">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">Industry</p>
                  <p className="text-white font-semibold">금융 · VC</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">Result</p>
                  <p className="text-white font-semibold">99% 시간 단축</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">Time saved</p>
                  <p className="text-white font-semibold">월 30시간</p>
                </div>
              </div>
              <p className="text-xs text-text-muted mt-6 italic">
                💬 인터뷰 텍스트 — placeholder. 실제 인터뷰 후 교체 예정.
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
                업계 최고의 기업들이<br />
                AXMOS로 실행을 가속합니다.
              </h2>
            </div>
            <Link href="/cases" className="text-bg-dark text-sm font-semibold border-b-2 border-bg-dark pb-1 hover:opacity-60 transition">
              View all customer stories →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: '트랜스링크 인베스트먼트',
                industry: '금융 · VC',
                title: '거래처 실사 요청 자동화로 의사결정 속도를 99% 가속',
                metric: '3~5일 → 1시간',
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
              },
              {
                company: '체인로지스',
                industry: '물류 · 마케팅',
                title: '공지사항 분류·발행 자동화로 발행량 20배 증가',
                metric: '2~4시간 → 3분',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
              },
              {
                company: '우하컴퍼니',
                industry: '이커머스 · 정산',
                title: '주문 정산 자동화로 월 60시간 운영 효율 확보',
                metric: '2~3시간 → 30초',
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
              Built for the speed<br />
              and complexity of Korean business.
            </h2>
            <p className="text-lg text-text-light leading-relaxed">
              AXMOS는 글로벌 SaaS가 아닙니다. 한국 기업의 실제 워크플로우, 보안 요구사항,
              규제 환경에 맞춰 설계되었습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-dark">
            {[
              {
                label: 'Integration',
                title: '기존 시스템 위에 얹는 AI',
                desc: 'Slack, Gmail, Excel, ERP, CRM. 새로운 시스템 없이 기존 도구 위에서 작동합니다.',
              },
              {
                label: 'Speed',
                title: '3주 만에 운영 시작',
                desc: '기획·개발·배포까지 평균 3주. 첫 달부터 가시적인 ROI를 확인할 수 있습니다.',
              },
              {
                label: 'Intelligence',
                title: 'Semantic 비즈니스 이해',
                desc: '단순 RPA가 아닙니다. 업무 맥락과 예외 상황까지 학습하는 AI Agent입니다.',
              },
              {
                label: 'Security',
                title: '엔터프라이즈 보안',
                desc: 'ISO 27001, SOC 2 인증. 데이터는 한국 클라우드에서 처리됩니다.',
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
            &ldquo;도입 첫 달에 월 80시간을 회수했습니다.
            그건 한 명의 풀타임 직원을 더 채용한 것과 같은 효과였습니다.&rdquo;
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
              <p className="text-bg-dark font-semibold">[고객사 대표명]</p>
              <p className="text-sm text-gray-600">CEO, 체인로지스 (두발히어로)</p>
            </div>
            <p className="text-xs text-text-muted italic mt-4">📷 인터뷰 사진 + 텍스트 placeholder</p>
          </div>
        </div>
      </section>

      {/* RESULTS TABLE */}
      <section className="bg-white py-32 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="section-eyebrow text-bg-dark/60">Results</p>
            <h2 className="section-title text-bg-dark">검증된 성과 데이터</h2>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              실제 고객사가 AXMOS와 함께 만들어낸 결과입니다.
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
            <h2 className="section-title">두 가지 시작 방법</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/ax-build" className="group bg-bg-dark p-12 border border-border-dark hover:border-white transition">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-6">For Speed</p>
              <h3 className="text-3xl font-bold mb-4">AX Build</h3>
              <p className="text-text-light mb-8 leading-relaxed">
                AXMOS 팀이 직접 구축합니다. 가장 빠른 길.
              </p>
              <div className="space-y-3 mb-10">
                <div className="flex justify-between text-sm border-b border-border-dark pb-3">
                  <span className="text-text-muted">기간</span>
                  <span className="font-semibold">20일</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border-dark pb-3">
                  <span className="text-text-muted">산출물</span>
                  <span className="font-semibold">완성된 AI Agent</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border-dark pb-3">
                  <span className="text-text-muted">추천 대상</span>
                  <span className="font-semibold">빠른 구축 우선</span>
                </div>
              </div>
              <p className="text-sm font-semibold border-b border-white pb-1 inline-block group-hover:opacity-60 transition">
                Learn more →
              </p>
            </Link>

            <Link href="/ax-grow" className="group bg-bg-dark p-12 border border-border-dark hover:border-white transition">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-6">For Capability</p>
              <h3 className="text-3xl font-bold mb-4">AX Grow</h3>
              <p className="text-text-light mb-8 leading-relaxed">
                당신의 팀과 함께 만듭니다. 내재화의 길.
              </p>
              <div className="space-y-3 mb-10">
                <div className="flex justify-between text-sm border-b border-border-dark pb-3">
                  <span className="text-text-muted">기간</span>
                  <span className="font-semibold">16일</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border-dark pb-3">
                  <span className="text-text-muted">산출물</span>
                  <span className="font-semibold">진단 + Agent + 로드맵</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border-dark pb-3">
                  <span className="text-text-muted">추천 대상</span>
                  <span className="font-semibold">팀 역량 강화</span>
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
            <h2 className="section-title text-bg-dark">자주 묻는 질문</h2>
          </div>
          <div className="space-y-px bg-gray-200">
            {[
              {
                q: '우리 회사 업무도 자동화 가능한가요?',
                a: '대부분 가능합니다. 예측 가능한 패턴이 있고 반복되는 업무라면 AI로 자동화할 수 있습니다. 무료 진단 후 정확히 판단해 드립니다.',
              },
              {
                q: '기존 시스템을 교체해야 하나요?',
                a: '아닙니다. AXMOS는 기존 시스템 위에 얹어 작동합니다. Slack, Gmail, Excel, ERP, CRM 등 현재 사용하시는 도구를 그대로 두고 AI Agent가 데이터를 연결하고 자동화합니다.',
              },
              {
                q: '개발 인력이 없어도 되나요?',
                a: 'AX Build는 AXMOS 팀이 모두 구축합니다. AX Grow를 선택하시면 당신 팀이 함께 배우면서 만듭니다. 기술팀이 없어도 운영 가능한 결과물을 받을 수 있습니다.',
              },
              {
                q: '비용은 얼마나 되나요?',
                a: '요구사항과 복잡도에 따라 맞춤 견적을 드립니다. 무료 상담 후 명확한 비용을 안내해 드립니다. 일반적으로 3주 구축 기간 내 비용이 전부이며, 추가 비용은 발생하지 않습니다.',
              },
              {
                q: '데이터 보안은 어떻게 보장되나요?',
                a: 'ISO 27001, SOC 2 인증을 보유하고 있으며, 데이터는 한국 클라우드에서 처리됩니다. 금융, 의료 등 규제 산업의 보안 기준을 충족합니다.',
              },
              {
                q: '구축 후 유지보수는?',
                a: '3개월간 무료 유지보수를 제공합니다. 이후 연장은 별도 계약으로 진행됩니다. 운영 매뉴얼과 사용 교육이 포함됩니다.',
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
            3주 후, 당신의 팀은<br />
            완전히 다른 속도로 일합니다.
          </h2>
          <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto leading-relaxed">
            지금 무료 상담을 신청하세요. 2영업일 내에 답변드립니다.
            첫 미팅에서 자동화 가능 영역과 예상 ROI를 함께 분석해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-bg-dark font-semibold py-4 px-10 hover:bg-gray-200 transition text-lg">
              Schedule a Demo →
            </Link>
            <Link href="/cases" className="inline-flex items-center justify-center border border-white/30 text-white font-semibold py-4 px-10 hover:bg-white/10 transition text-lg">
              See Customer Stories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
