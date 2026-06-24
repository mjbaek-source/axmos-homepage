'use client';
import { BRAND } from '@/lib/brand';

import Link from 'next/link';
import Cursor from '@/components/Cursor';

const members = [
  { name: '윌트벤처빌더', role: '컨소시엄 리드 · 글로벌', desc: '싱가포르 벤처 빌더. 글로벌 진출과 컨소시엄을 이끕니다.' },
  { name: '팝업스튜디오', role: 'AI 코어 · OS', desc: 'AI 프레임워크·운영체제(OS) 핵심 기술 개발.' },
  { name: '코드프레소', role: '교육 · AX', desc: 'AI 교육과 B2B 기반 기업 AX 서비스.' },
  { name: '드림에이스', role: '제조 · 실증', desc: '제조 현장 테스트베드·실증 지원.' },
  { name: '브리', role: '업무 에이전트', desc: 'AI 업무 에이전트 설계·자동화.' },
  { name: '트랜스링크인베스트먼트', role: '투자 · 진출', desc: '북미·동남아 시장 진출·투자 지원.' },
];

const fdeSteps = [
  { step: 'STEP 1', label: '진단', desc: '현장의 업무 흐름을 관찰해 진짜 문제를 찾습니다.' },
  { step: 'STEP 2', label: '설득', desc: '이해관계자와 신뢰를 쌓고 해결할 문제에 합의합니다.' },
  { step: 'STEP 3', label: '이식', desc: '표준 코어 위에서 솔루션을 빠르게 만들어 배포합니다.' },
  { step: 'STEP 4', label: '작동', desc: 'KPI로 임팩트를 증명하고 조직에 내재화합니다.' },
];

const goals = [
  { no: '01', title: '제조업 AX', desc: 'AI 도입이 1%에 머문 지방 제조 현장에 AI를 이식해 일하는 방식을 바꿉니다.' },
  { no: '02', title: '지역 인재 양성', desc: '현장 해결사(FDE)를 길러내 지역 청년이 지역 산업에서 일하는 선순환을 만듭니다.' },
  { no: '03', title: '글로벌 확장', desc: '한국에서 쌓은 AX 레퍼런스를 미국·싱가포르 등 글로벌 시장으로 확장합니다.' },
];

const media = [
  {
    title: 'K-제조에 AI 심는다… 6개사 ‘엑스모스(AXMOS)’ 컨소시엄 출범',
    outlet: '베타뉴스',
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
          <p className="section-eyebrow animate-slideUp">About {BRAND.name} — The Consortium</p>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8 max-w-4xl animate-slideUp" style={{ animationDelay: '0.1s' }}>
            현장에 AI를 심어<br />
            <span className="text-text-light">일하는 방식을 바꿉니다.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
            {BRAND.name}는 AI·제조·교육·투자 역량을 가진 6개사가 모인 컨소시엄입니다.
            제조 현장에 바로 적용 가능한 AI 역량을 결집해, 한국 산업의 실행 속도를 바꿉니다.
          </p>
        </div>
      </section>

      {/* MISSION / NEWS HOOK */}
      <section className="bg-bg-dark-2 text-white py-32 border-t border-border-dark">
        <div className="max-w-5xl mx-auto px-6">
          <p className="section-eyebrow mb-8">Our Mission</p>
          <blockquote className="text-2xl md:text-4xl font-bold leading-tight mb-10">
            “제조 현장에 바로 적용 가능한 AI 역량을 결집해,
            지방 제조업의 디지털 전환과 지역 인재 양성을 동시에 이끈다.”
          </blockquote>
          <p className="text-text-light leading-relaxed max-w-3xl">
            {BRAND.name}는 단일 제품이 아니라, 각 분야 최고의 역량을 가진 기업들이 모인 연합입니다.
            AI 코어 기술부터 제조 현장 실증, 인재 교육, 글로벌 진출까지 — 가치사슬 전체를 한 팀이 책임집니다.
          </p>
        </div>
      </section>

      {/* CONSORTIUM MEMBERS */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="section-eyebrow text-bg-dark/60">The Consortium</p>
            <h2 className="section-title text-bg-dark mb-6">{BRAND.name}를 만드는 6개사</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              리드부터 코어 기술, 제조 실증, 교육, 투자까지. 각자의 강점이 하나의 실행 단위로 모였습니다.
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
            <h2 className="section-title mb-6">현장에 직접 들어가는 사람, FDE</h2>
            <p className="text-lg text-text-light leading-relaxed">
              FDE(전방 배치 엔지니어)는 현장에 직접 들어가 문제를 진단하고,
              AI 솔루션을 설계·구축하여 작동시키는 사람입니다.
              {BRAND.name}의 모든 프로젝트는 FDE가 끝까지 책임집니다.
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
            <h2 className="section-title text-bg-dark">우리가 만들려는 변화</h2>
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
            <h2 className="section-title text-bg-dark">미디어 속 {BRAND.name}</h2>
          </div>

          {/* 대표 영상 */}
          <div className="relative aspect-video w-full mb-10 overflow-hidden bg-bg-dark border border-gray-200">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/y0ya0XKTZrc"
              title={`${BRAND.name} 소개 영상`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
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
            {BRAND.name}와 함께<br />현장을 바꿔보세요.
          </h2>
          <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto leading-relaxed">
            도입 상담부터 제조 현장 실증, 파트너십까지. 어떤 이야기든 환영합니다.
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
