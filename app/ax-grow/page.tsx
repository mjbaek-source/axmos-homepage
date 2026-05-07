import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AX Grow - 우리 팀이 직접 만드는 AI 업무 자동화',
  description: '16일 동안 당신의 팀이 AI 역량을 갖추고 직접 AI Agent를 만듭니다. AI 내재화가 필요한 조직을 위한 교육형 솔루션.',
  keywords: ['AX Grow', 'AI 교육', 'AI 역량 강화', 'AI 내재화', '비즈니스 빌더톤'],
};

export default function AXGrow() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-light text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-black mb-6">AX Grow</h1>
          <p className="text-2xl text-blue-100">우리 팀이 직접 만드는 AI 업무 자동화</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-brand">3가지 약속</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-2xl font-black text-brand-light flex-shrink-0">✓</span>
                <div>
                  <p className="font-bold text-gray-900">실무 도메인 기반 기술 교육</p>
                  <p className="text-sm text-gray-600 mt-1">당신의 업무에 맞춘 집중 교육</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-black text-brand-light flex-shrink-0">✓</span>
                <div>
                  <p className="font-bold text-gray-900">사내 빌더톤으로 Agent 구축</p>
                  <p className="text-sm text-gray-600 mt-1">팀이 직접 배우며 만드는 경험</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-black text-brand-light flex-shrink-0">✓</span>
                <div>
                  <p className="font-bold text-gray-900">조직 전체 확산 구조 설계</p>
                  <p className="text-sm text-gray-600 mt-1">지속 가능한 성장을 위한 로드맵</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 border border-brand-light">
            <h3 className="font-bold text-brand mb-6">산출물</h3>
            <ul className="space-y-4">
              <li className="pb-4 border-b">
                <p className="font-bold text-gray-900">AI 역량 진단 리포트</p>
                <p className="text-sm text-gray-600 mt-1">현재 상태 분석</p>
              </li>
              <li className="pb-4 border-b">
                <p className="font-bold text-gray-900">사내 빌더톤 결과물</p>
                <p className="text-sm text-gray-600 mt-1">팀이 만든 AI Agent</p>
              </li>
              <li>
                <p className="font-bold text-gray-900">AX 확산 로드맵</p>
                <p className="text-sm text-gray-600 mt-1">조직 내 확대 전략</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-brand-light text-white rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold mb-6">진행 프로세스 (Day 1~16)</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
            <div className="bg-white bg-opacity-10 rounded p-4">
              <p className="font-bold">Day 1</p>
              <p>교육 설계</p>
            </div>
            <div className="text-2xl hidden md:flex items-center justify-center">→</div>
            <div className="bg-white bg-opacity-10 rounded p-4">
              <p className="font-bold">Day 2~3</p>
              <p>교육 운영 설계</p>
            </div>
            <div className="text-2xl hidden md:flex items-center justify-center">→</div>
            <div className="bg-white bg-opacity-10 rounded p-4">
              <p className="font-bold">Day 4~5</p>
              <p>AI 실무 교육</p>
            </div>
            <div className="text-2xl hidden md:flex items-center justify-center">→</div>
            <div className="bg-white bg-opacity-10 rounded p-4">
              <p className="font-bold">Day 6~15</p>
              <p>사내 빌더톤</p>
            </div>
            <div className="text-2xl hidden md:flex items-center justify-center">→</div>
            <div className="bg-white bg-opacity-10 rounded p-4">
              <p className="font-bold">Day 16</p>
              <p>성과 공유</p>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-bg-light rounded-lg p-12">
          <h3 className="font-bold text-brand mb-6 text-lg">AX Grow가 적합한 경우</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li className="flex gap-3">
              <span>✓</span>
              <span>자체 IT팀이 있는 조직</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span>AI 내재화가 필요한 경우</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span>조직 확산을 목표로 하는 경우</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span>중견·대기업, 금융·공공기관</span>
            </li>
          </ul>
        </div>

        <div className="text-center mt-20">
          <Link href="/contact" className="bg-brand-light text-white font-bold py-4 px-12 rounded-lg inline-block hover:bg-opacity-90 transition">
            AX Grow 신청하기 →
          </Link>
        </div>
      </div>
    </main>
  );
}
