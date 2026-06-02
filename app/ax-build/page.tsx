import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AX Build - Built by AXMOS, for Speed',
  description: '20일 안에 맞춤형 AI Agent를 구축해드립니다. AXMOS 팀이 직접 설계·개발·배포하는 가장 빠른 길.',
  keywords: ['AX Build', 'AI 구축', '맞춤형 솔루션', '업무 자동화', 'AI Agent'],
};

export default function AXBuild() {
  return (
    <main className="bg-white">
      {/* HERO — Cohere white canvas */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <p className="font-mono uppercase text-[11px] tracking-[0.28px] text-muted-slate mb-6">
            ENGAGEMENT MODEL · FOR SPEED
          </p>
          <h1
            className="font-display text-ink leading-[1.0] tracking-[-1.44px] mb-10 max-w-4xl"
            style={{ fontSize: 'clamp(56px, 7vw, 88px)' }}
          >
            AX Build
          </h1>
          <p className="text-xl md:text-2xl text-slate-text max-w-3xl mb-12 leading-relaxed">
            AXMOS 팀이 직접 설계·개발·배포합니다.<br />
            가장 빠르게 운영 가능한 AI Agent를 받는 길.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-3xl border-t border-hairline pt-10">
            <div>
              <p className="font-display text-4xl md:text-5xl text-ink leading-none tracking-[-0.96px] mb-3">20일</p>
              <p className="font-mono uppercase text-[11px] tracking-[0.28px] text-muted-slate">Build Duration</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl text-ink leading-none tracking-[-0.96px] mb-3">100%</p>
              <p className="font-mono uppercase text-[11px] tracking-[0.28px] text-muted-slate">Custom-built</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl text-ink leading-none tracking-[-0.96px] mb-3">3개월</p>
              <p className="font-mono uppercase text-[11px] tracking-[0.28px] text-muted-slate">Free Support</p>
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
                AX Build의 3가지 약속
              </h2>
              <div className="space-y-px bg-gray-200">
                {[
                  {
                    label: '01',
                    title: '완전 맞춤형 솔루션',
                    desc: '템플릿이 아닙니다. 당신의 업무 방식, 데이터 구조, 시스템 환경에 맞춰 처음부터 설계합니다.',
                  },
                  {
                    label: '02',
                    title: '20일 내 구축 완료',
                    desc: '기획·개발·테스트·배포까지 20일. 첫 달부터 가시적인 ROI를 확인할 수 있습니다.',
                  },
                  {
                    label: '03',
                    title: '운영 핸드오버',
                    desc: '3개월 무료 지원 후 자체 운영 가능하도록 매뉴얼·교육·이관까지 완벽하게 진행합니다.',
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
              <h3 className="text-3xl font-bold mb-10">받게 되는 것</h3>
              <div className="space-y-8">
                {[
                  { title: '조직 맞춤 AI Agent', desc: '당신의 시스템에 통합된 운영 가능한 AI' },
                  { title: 'AI Workflow 자동화', desc: '핵심 업무 프로세스의 end-to-end 자동화' },
                  { title: '운영 매뉴얼·교육', desc: '관리자·실무자 대상 운영 가이드 및 교육' },
                  { title: '3개월 무상 지원', desc: '버그 수정·개선·운영 컨설팅 포함' },
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
              Day 1부터 Day 20까지,<br />
              검증된 4단계 프로세스.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border-dark">
            {[
              { day: 'Day 1~3', label: 'Discovery', title: '요구사항 분석', desc: '현재 워크플로우, 시스템, 데이터 흐름 파악' },
              { day: 'Day 4~10', label: 'Build', title: 'Agent 개발', desc: '맞춤형 AI Agent 설계 및 구현' },
              { day: 'Day 11~16', label: 'Test', title: '테스트·수정', desc: '실제 데이터로 검증, 예외 케이스 처리' },
              { day: 'Day 17~20', label: 'Deploy', title: '배포·핸드오버', desc: '운영 환경 배포, 매뉴얼 전달, 교육' },
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
            <h2 className="section-title text-bg-dark">AX Build가 적합한 경우</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: '빠른 구축이 우선인 경우', desc: '30일 내 운영 가능한 결과물이 필요한 경우' },
              { title: '기술팀이 부족한 경우', desc: '내부 개발 인력이 없거나 다른 우선순위에 집중되어 있는 경우' },
              { title: '즉시 효과가 필요한 경우', desc: '경영진에게 단기 ROI를 보여줘야 하는 경우' },
              { title: '스타트업·중소기업', desc: '리소스 효율적으로 AI 자동화를 도입하고 싶은 경우' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-bg-dark pl-6 py-2">
                <h3 className="text-xl font-bold text-bg-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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
            20일 후, 운영 가능한<br />
            AI Agent를 받습니다.
          </h2>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            지금 무료 상담을 신청하세요. 첫 미팅에서 자동화 가능 영역과 예상 ROI를 분석해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-near-black font-medium px-7 py-3.5 rounded-pill hover:bg-soft-stone transition"
            >
              Apply for AX Build
            </Link>
            <Link
              href="/ax-grow"
              className="inline-flex items-center text-white font-medium border-b border-white pb-1 hover:opacity-60 transition"
            >
              Compare with AX Grow →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
