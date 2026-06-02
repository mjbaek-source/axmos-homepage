import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Insight — From the Field',
  description: '한국 기업의 AI 도입 현장에서 길어 올린 인사이트. 도입 사례, 비개발자 가이드, 도구 리뷰, AX 인사이트.',
  keywords: ['AI Insight', 'AI 블로그', 'AI 도입 사례', '비개발자 AI', 'AX 인사이트', 'AXMOS 블로그'],
};

const TOPICS = [
  {
    label: '도입 사례',
    title: 'Case Studies',
    desc: '어떤 회사가 어떤 워크플로우를 어떻게 자동화했는지. 실제 현장의 시행착오까지 가감 없이.',
  },
  {
    label: '비개발자 가이드',
    title: 'For Non-Developers',
    desc: 'ChatGPT·Claude·노코드 도구를 실무에 바로 쓰는 법. 코드 없이, 직무 그대로.',
  },
  {
    label: 'AX 인사이트',
    title: 'AX Perspective',
    desc: 'AI 시대 조직·운영·역할의 변화. 한국 기업 50곳 이상을 만나며 본 패턴.',
  },
  {
    label: '도구 & 튜토리얼',
    title: 'Tools & Tutorials',
    desc: '새로 쓸 만한 AI 도구 리뷰와, 따라 하면 그대로 작동하는 단계별 워크플로우.',
  },
];

const UPCOMING = [
  {
    category: '도입 사례',
    title: 'FDE 한 명이 바꿔놓은 30명 규모 영업팀',
    excerpt: '기술 부서가 없어도 가능했던 자동화. 어떻게 시작했고, 무엇이 막혔고, 무엇이 풀렸는지.',
  },
  {
    category: '비개발자 가이드',
    title: '엑셀과 PDF만 쓰던 팀의 첫 AI 자동화',
    excerpt: '노코드로 시작하는 영업·기획·운영 자동화. 다음 주 업무 보고부터 쓰는 워크플로우.',
  },
  {
    category: 'AX 인사이트',
    title: '왜 한국 기업 AI 도입은 PoC에서 멈추는가',
    excerpt: '현장 인터뷰로 본 도입 실패의 공통 패턴, 그리고 그것을 깬 조직들의 공통점.',
  },
  {
    category: '도구 & 튜토리얼',
    title: '한국어 업무에서 ChatGPT와 Claude를 다르게 써야 하는 이유',
    excerpt: '실제 워크플로우 케이스로 비교한 강점·약점. 어떤 일은 누구에게 맡길 것인가.',
  },
  {
    category: 'AX 인사이트',
    title: 'AI 시대의 "인쇄공" — Field Deployment Expert',
    excerpt: 'AI를 만드는 사람이 아닌, 현장에 이식하는 사람. 우리가 정의하는 새로운 역할.',
  },
  {
    category: '도구 & 튜토리얼',
    title: '회의록 자동화 30분 셋업 — 녹취부터 액션 아이템까지',
    excerpt: '한 번 셋업하면 매주 2시간이 돌아오는 워크플로우. 비개발자도 따라할 수 있게 단계별로.',
  },
];

export default function AIInsight() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative bg-bg-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/30 via-bg-dark/55 to-bg-dark/95"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
          <p className="section-eyebrow">From the Field</p>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-8 max-w-4xl">
            AI Insight
          </h1>
          <p className="text-xl md:text-2xl text-text-light max-w-3xl leading-relaxed mb-10">
            한국 기업의 AI 도입 현장에서 길어 올린 인사이트.<br />
            사례, 가이드, 도구 리뷰 — 곧 첫 글이 올라옵니다.
          </p>

          <div className="inline-flex items-center gap-3 border border-border-dark bg-bg-dark-2 px-5 py-3">
            <span className="w-2 h-2 bg-accent-after rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-light">
              Coming Soon · 곧 발행 시작
            </span>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="bg-white py-32 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="section-eyebrow text-bg-dark/60">Topics</p>
            <h2 className="section-title text-bg-dark">다루는 주제</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
            {TOPICS.map((t, i) => (
              <div key={i} className="bg-white p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-bg-dark/60 mb-4">{t.label}</p>
                <h3 className="text-2xl font-bold text-bg-dark mb-4 leading-tight">{t.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING POSTS */}
      <section className="bg-bg-dark-2 text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="section-eyebrow">Coming First</p>
            <h2 className="section-title">곧 올라올 글들</h2>
            <p className="text-lg text-text-light mt-6 leading-relaxed">
              제목과 윤곽만 먼저 공개합니다. 첫 글은 곧 이곳에 올라옵니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-dark">
            {UPCOMING.map((p, i) => (
              <article key={i} className="bg-bg-dark-2 p-10 flex flex-col">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-6">{p.category}</p>
                <h3 className="text-xl font-bold mb-4 leading-tight flex-grow-0">{p.title}</h3>
                <p className="text-sm text-text-light leading-relaxed mb-8 flex-grow">{p.excerpt}</p>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Coming Soon</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-dark text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/80 via-bg-dark/90 to-bg-dark"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="section-eyebrow">Suggest a Topic</p>
          <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight mb-8">
            궁금한 주제가 있다면<br />
            먼저 다뤄드립니다.
          </h2>
          <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto">
            현장에서 막힌 자동화·도구·역할에 대한 질문을 보내주세요. 우선순위로 글로 정리해 올립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-bg-dark font-semibold py-4 px-10 hover:bg-gray-200 transition text-lg">
              주제 제안하기 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
