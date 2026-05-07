'use client';

import Link from 'next/link';

export default function AXBuild() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-black mb-6">AX Build</h1>
          <p className="text-2xl text-blue-100">우리가 직접 만드는 AI 업무 자동화</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-brand">3가지 약속</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-2xl font-black text-brand flex-shrink-0">✓</span>
                <div>
                  <p className="font-bold text-gray-900">완전 맞춤형 솔루션</p>
                  <p className="text-sm text-gray-600 mt-1">당신 회사의 업무 방식에 맞게 구축</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-black text-brand flex-shrink-0">✓</span>
                <div>
                  <p className="font-bold text-gray-900">3주 내 구축 완료</p>
                  <p className="text-sm text-gray-600 mt-1">빠른 실행으로 ROI 빠른 달성</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-black text-brand flex-shrink-0">✓</span>
                <div>
                  <p className="font-bold text-gray-900">운영 핸드오버</p>
                  <p className="text-sm text-gray-600 mt-1">3개월 무료 지원 후 자체 운영</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 border border-brand">
            <h3 className="font-bold text-brand mb-6">산출물</h3>
            <ul className="space-y-4">
              <li className="pb-4 border-b">
                <p className="font-bold text-gray-900">조직 맞춤 도구</p>
                <p className="text-sm text-gray-600 mt-1">당신의 시스템에 맞춰 통합된 AI Agent</p>
              </li>
              <li className="pb-4 border-b">
                <p className="font-bold text-gray-900">AI Workflow</p>
                <p className="text-sm text-gray-600 mt-1">자동으로 업무 프로세스 처리</p>
              </li>
              <li>
                <p className="font-bold text-gray-900">운영 매뉴얼</p>
                <p className="text-sm text-gray-600 mt-1">관리자용 운영 가이드 제공</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-brand text-white rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold mb-6">진행 프로세스 (Day 1~20)</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
            <div className="bg-white bg-opacity-10 rounded p-4">
              <p className="font-bold">Day 1~3</p>
              <p>요구사항 분석</p>
            </div>
            <div className="text-2xl hidden md:flex items-center justify-center">→</div>
            <div className="bg-white bg-opacity-10 rounded p-4">
              <p className="font-bold">Day 4~10</p>
              <p>Agent 개발</p>
            </div>
            <div className="text-2xl hidden md:flex items-center justify-center">→</div>
            <div className="bg-white bg-opacity-10 rounded p-4">
              <p className="font-bold">Day 11~16</p>
              <p>테스트·수정</p>
            </div>
            <div className="text-2xl hidden md:flex items-center justify-center">→</div>
            <div className="bg-white bg-opacity-10 rounded p-4">
              <p className="font-bold">Day 17~20</p>
              <p>배포·오너쉽</p>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-bg-light rounded-lg p-12">
          <h3 className="font-bold text-brand mb-6 text-lg">AX Build가 적합한 경우</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li className="flex gap-3">
              <span>✓</span>
              <span>빠른 구축이 우선인 경우</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span>기술팀이 부족한 경우</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span>즉시 효과가 필요한 경우</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span>스타트업, 중소기업</span>
            </li>
          </ul>
        </div>

        <div className="text-center mt-20">
          <Link href="/contact" className="bg-brand text-white font-bold py-4 px-12 rounded-lg inline-block hover:bg-opacity-90 transition">
            AX Build 신청하기 →
          </Link>
        </div>
      </div>
    </main>
  );
}
