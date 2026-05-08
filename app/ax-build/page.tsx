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
      {/* HERO */}
      <section className="relative bg-bg-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/60 via-bg-dark/80 to-bg-dark"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
          <p className="section-eyebrow">Engagement Model — For Speed</p>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-8 max-w-4xl">
            AX Build
          </h1>
          <p className="text-xl md:text-2xl text-text-light max-w-3xl leading-relaxed mb-10">
            AXMOS 팀이 직접 설계·개발·배포합니다.<br />
            가장 빠르게 운영 가능한 AI Agent를 받는 길.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-3xl border-t border-border-dark pt-12">
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">20일</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Build Duration</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">100%</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Custom-built</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">3개월</p>
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

      {/* CTA */}
      <section className="bg-bg-dark text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/80 via-bg-dark/90 to-bg-dark"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="section-eyebrow">Get Started</p>
          <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight mb-8">
            20일 후, 운영 가능한<br />
            AI Agent를 받습니다.
          </h2>
          <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto">
            지금 무료 상담을 신청하세요. 첫 미팅에서 자동화 가능 영역과 예상 ROI를 분석해 드립니다.
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
