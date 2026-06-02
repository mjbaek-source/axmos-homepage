import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AX Learn - AI Literacy for Non-Developers',
  description: '비개발자 임직원을 위한 AI 실무 특강. 코드 없이, 직무별 시나리오 중심으로 다음 날 바로 적용 가능한 AI 활용법을 익힙니다.',
  keywords: ['AX Learn', 'AI 특강', '비개발자 AI 교육', 'AI 리터러시', '임직원 AI 교육', '사내 AI 워크샵'],
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
            코드 없이, 직무 그대로.<br />
            비개발자 임직원이 AI를 실제 업무에 쓰게 만드는 특강 프로그램.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-3xl border-t border-border-dark pt-12">
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">1~2일</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Lecture Duration</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">비개발자</p>
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
                AX Learn의 3가지 약속
              </h2>
              <div className="space-y-px bg-gray-200">
                {[
                  {
                    label: '01',
                    title: '코드 없이 시작하는 AI',
                    desc: '프로그래밍 지식 없이도 ChatGPT·Claude·노코드 AI 도구를 업무에 바로 적용하는 법을 배웁니다.',
                  },
                  {
                    label: '02',
                    title: '직무별 실무 시나리오',
                    desc: '기획·마케팅·영업·HR·운영 등 참가자 직무에 맞춘 실제 워크플로우와 프롬프트를 함께 만듭니다.',
                  },
                  {
                    label: '03',
                    title: '다음 날 바로 적용',
                    desc: '이론 강의가 아닌 실습 중심. 강의가 끝난 다음 날부터 본인 업무에 그대로 쓸 수 있는 결과물을 가지고 돌아갑니다.',
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
                  { title: '직무 맞춤 AI 활용 가이드북', desc: '참가자 직무별로 정리된 워크플로우·프롬프트 모음' },
                  { title: '실습 결과물 패키지', desc: '현업 업무에 바로 쓸 수 있는 템플릿·자동화 시나리오' },
                  { title: '강의 영상·자료', desc: '사내 공유 및 신규 입사자 교육에 재활용 가능' },
                  { title: '후속 Q&A 세션', desc: '특강 2주 후, 적용 과정에서 막힌 부분 코칭' },
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
              사전 진단부터 사후 코칭까지,<br />
              4단계로 굳히는 AI 리터러시.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border-dark">
            {[
              { day: 'Pre', label: 'Diagnose', title: '직무·니즈 진단', desc: '참가자 직무 구성과 현업 페인 포인트를 사전 인터뷰로 파악' },
              { day: 'Day 1', label: 'Lecture', title: 'AI 핵심 특강', desc: '생성형 AI 작동 원리, 프롬프트 기본기, 핵심 도구 데모' },
              { day: 'Day 2', label: 'Workshop', title: '직무별 실습', desc: '실제 본인 업무 케이스로 자동화·생산성 워크플로우 구축' },
              { day: 'Post', label: 'Coach', title: '2주 후 코칭', desc: '현업 적용 시 막힌 부분 Q&A, 추가 시나리오 코칭' },
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
            <h2 className="section-title text-bg-dark">AX Learn이 적합한 경우</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: '비개발자 직군 임직원', desc: '기획·마케팅·영업·HR·운영 등 코드와 거리가 먼 현업이 AI를 직접 쓰게 하고 싶은 경우' },
              { title: '전사 AI 도입 사전 교육', desc: 'AX Build/AX Grow 프로젝트 착수 전, 조직 전체의 AI 리터러시 기준선을 맞춰두고 싶을 때' },
              { title: '사내 워크샵·연수', desc: '정기 사내 교육·리더십 워크샵·신규 입사자 온보딩에 AI 모듈을 넣고 싶은 경우' },
              { title: '실무 즉시 적용이 목적', desc: '추상적 AI 이론이 아닌, 다음 주 업무 보고부터 쓸 수 있는 활용법이 필요한 경우' },
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
            이틀 만에, 비개발자도<br />
            AI를 업무 도구로 씁니다.
          </h2>
          <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto">
            지금 사내 특강을 신청하세요. 참가자 직무와 인원에 맞춰 커리큘럼을 설계해 드립니다.
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
