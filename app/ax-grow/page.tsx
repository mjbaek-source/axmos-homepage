import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AX Grow - Built with You, for Capability',
  description: '16일 동안 당신의 팀이 AI 역량을 갖추고 직접 AI Agent를 만듭니다. 내재화가 필요한 조직을 위한 교육형 솔루션.',
  keywords: ['AX Grow', 'AI 교육', 'AI 역량 강화', 'AI 내재화', '비즈니스 빌더톤'],
};

export default function AXGrow() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative bg-bg-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/60 via-bg-dark/80 to-bg-dark"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
          <p className="section-eyebrow">Engagement Model — For Capability</p>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-8 max-w-4xl">
            AX Grow
          </h1>
          <p className="text-xl md:text-2xl text-text-light max-w-3xl leading-relaxed mb-10">
            당신의 팀과 함께 만듭니다.<br />
            AI 역량을 조직 내부로 가져오는 길.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-3xl border-t border-border-dark pt-12">
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">16일</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Program Duration</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">팀</p>
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
                AX Grow의 3가지 약속
              </h2>
              <div className="space-y-px bg-gray-200">
                {[
                  {
                    label: '01',
                    title: '실무 도메인 기반 기술 교육',
                    desc: '일반론적 강의가 아닙니다. 당신 팀의 실제 업무 시나리오를 바탕으로 한 집중 교육.',
                  },
                  {
                    label: '02',
                    title: '사내 빌더톤으로 직접 구축',
                    desc: '팀이 강사와 함께 실제 AI Agent를 설계·개발·배포합니다. 학습이 곧 결과물.',
                  },
                  {
                    label: '03',
                    title: '조직 전체 확산 구조 설계',
                    desc: '한 번의 프로젝트가 아닌, 전사 AI 도입을 위한 로드맵과 거버넌스를 함께 설계합니다.',
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
                  { title: 'AI 역량 진단 리포트', desc: '조직의 현재 AI 역량과 갭(Gap) 분석' },
                  { title: '사내 빌더톤 결과물', desc: '팀이 직접 만든 운영 가능한 AI Agent' },
                  { title: 'AX 확산 로드맵', desc: '전사 AI 도입 전략·로드맵·거버넌스 모델' },
                  { title: '내재화 교육', desc: '실무자·매니저·임원 대상 맞춤 교육' },
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
              Day 1부터 Day 16까지,<br />
              팀과 함께 만드는 5단계.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-border-dark">
            {[
              { day: 'Day 1', label: 'Design', title: '교육 설계', desc: '진단 후 팀에 맞춘 교육 설계' },
              { day: 'Day 2~3', label: 'Setup', title: '운영 설계', desc: '빌더톤 운영 환경 준비' },
              { day: 'Day 4~5', label: 'Train', title: 'AI 실무 교육', desc: '도메인 기반 집중 교육' },
              { day: 'Day 6~15', label: 'Build', title: '사내 빌더톤', desc: '팀이 직접 AI Agent 구축' },
              { day: 'Day 16', label: 'Share', title: '성과 공유', desc: '결과물 발표 및 로드맵 공유' },
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
            <h2 className="section-title text-bg-dark">AX Grow가 적합한 경우</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: '자체 IT팀이 있는 조직', desc: '개발 역량을 보유한 팀이 AI 영역으로 확장하고자 할 때' },
              { title: 'AI 내재화가 필요한 경우', desc: '단발성이 아닌 지속적 AI 활용 역량을 조직에 구축하고자 할 때' },
              { title: '조직 확산을 목표로 하는 경우', desc: '전사 AI 도입을 위한 첫 시범 프로젝트가 필요한 경우' },
              { title: '중견·대기업, 금융·공공기관', desc: '거버넌스, 보안, 컴플라이언스 요구사항이 높은 조직' },
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
            16일 후, 팀의 AI 역량이<br />
            완전히 달라집니다.
          </h2>
          <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto">
            지금 무료 상담을 신청하세요. 조직의 AI 역량 진단부터 함께 시작합니다.
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
