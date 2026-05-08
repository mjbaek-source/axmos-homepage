'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CasesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('전체');

  const cases = [
    { company: '트랜스링크 인베스트먼트', industry: '금융·VC', task: '거래처 실사 요청 정리', before: '3~5일', after: '1시간', reduction: '90~99%', effect: '월 30시간 단축', color: 'from-blue-500 to-blue-600', icon: '💼' },
    { company: '체인로지스', industry: '물류·마케팅', task: '고객사 공지사항 분류', before: '2~4시간', after: '3분', reduction: '97%', effect: '월 40시간 단축', color: 'from-green-500 to-green-600', icon: '📦' },
    { company: '체인로지스', industry: '물류·CS', task: '배송 문의 자동 응대', before: '수동 2명', after: 'AI 90%', reduction: '24h 무중단', effect: '24시간 운영', color: 'from-green-500 to-green-600', icon: '📦' },
    { company: '동탄퍼스트안과', industry: '헬스케어', task: '환자 상담 자동화', before: '수동 응대', after: 'AI 90%', reduction: '24h 무중단', effect: '24시간 운영', color: 'from-red-500 to-red-600', icon: '⚕️' },
    { company: '엑스퍼트 세무법인', industry: '회계', task: '월말 정산서 생성', before: '2~3시간', after: '10분', reduction: '90%', effect: '월 50시간 단축', color: 'from-purple-500 to-purple-600', icon: '📊' },
    { company: '엑스퍼트 세무법인', industry: '회계', task: '영수증 자동 분류', before: '10~20시간', after: '30분', reduction: '95%', effect: '월 40시간 단축', color: 'from-purple-500 to-purple-600', icon: '📊' },
    { company: '우하컴퍼니', industry: '이커머스·정산', task: '주문 정산 자동화', before: '2~3시간', after: '30초', reduction: '99%', effect: '월 60시간 단축', color: 'from-indigo-500 to-indigo-600', icon: '🛒' },
    { company: '부자테이프', industry: '콘텐츠·미디어', task: '블로그 콘텐츠 생성', before: '2~4시간', after: '5분', reduction: '95%', effect: '월 80시간 단축', color: 'from-pink-500 to-pink-600', icon: '✍️' },
    { company: '동탄퍼스트안과', industry: '헬스케어', task: '검사 결과 정리', before: '5~9분', after: '1.5~2분', reduction: '70%', effect: '월 15시간 단축', color: 'from-red-500 to-red-600', icon: '⚕️' },
  ];

  const industries = ['전체', '물류', '물류·마케팅', '금융·VC', '금융', '헬스케어', '회계', '이커머스·정산', '콘텐츠·미디어'];
  const filteredCases = selectedIndustry === '전체'
    ? cases
    : cases.filter(c => c.industry.includes(selectedIndustry) || selectedIndustry.includes(c.industry.split('·')[0]));

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-brand to-brand-light text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight animate-slideUp">
            AXMOS 실행 사례<br />
            <span className="text-blue-100">9가지 산업, 20+ 성과</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 animate-slideUp" style={{animationDelay: '0.2s'}}>
            검증된 기업들이 경험한 실제 업무 자동화 결과
          </p>
        </div>
      </section>

      {/* 필터 & 사례 */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="section-title text-center mb-8 animate-slideUp">산업별 사례</h2>

        {/* 필터 */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 animate-slideUp" style={{animationDelay: '0.1s'}}>
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition transform hover:scale-110 ${
                selectedIndustry === ind
                  ? 'bg-brand text-white shadow-lg scale-110'
                  : 'bg-white border border-gray-300 text-gray-700 hover:border-brand'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* 사례 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((c, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${c.color} text-white rounded-2xl overflow-hidden card-hover transform hover:scale-105 transition-all animate-slideUp`}
              style={{animationDelay: `${(i % 3) * 0.1}s`}}
            >
              <div className="p-8">
                <div className="text-6xl mb-4 opacity-30">{c.icon}</div>

                <h3 className="text-lg font-bold mb-1">{c.company}</h3>
                <p className="text-xs font-semibold opacity-80 mb-4">{c.industry}</p>

                <p className="text-sm mb-6 opacity-90 leading-relaxed">
                  {c.task}
                </p>

                <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-4 border border-white border-opacity-30 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-left">
                      <p className="text-xs opacity-75">Before</p>
                      <p className="text-xl font-black">{c.before}</p>
                    </div>
                    <div className="text-2xl opacity-50">→</div>
                    <div className="text-right">
                      <p className="text-xs opacity-75">After</p>
                      <p className="text-xl font-black">{c.after}</p>
                    </div>
                  </div>
                  <p className="text-xs opacity-75 text-center border-t border-white border-opacity-20 pt-2 mt-2">
                    절감율: <span className="font-bold">{c.reduction}</span>
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 p-3 rounded-lg">
                  <p className="text-xs font-semibold">📈 {c.effect}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">해당 산업의 사례가 없습니다.</p>
          </div>
        )}
      </section>

      {/* 통계 */}
      <section className="bg-bg-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title text-center mb-12">AXMOS 사례 통계</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm card-hover transform hover:scale-105 transition-transform">
              <p className="text-5xl font-black text-brand mb-2">9개</p>
              <p className="text-gray-700 font-semibold">산업군</p>
              <p className="text-xs text-gray-600 mt-2">금융, 물류, 헬스케어 등 다양한 산업에 적용</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm card-hover transform hover:scale-105 transition-transform">
              <p className="text-5xl font-black text-accent-after mb-2">90%+</p>
              <p className="text-gray-700 font-semibold">평균 업무 단축</p>
              <p className="text-xs text-gray-600 mt-2">최소 70%부터 최대 99% 업무 효율 개선</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm card-hover transform hover:scale-105 transition-transform">
              <p className="text-5xl font-black text-green-600 mb-2">월 600시간</p>
              <p className="text-gray-700 font-semibold">총 업무 단축</p>
              <p className="text-xs text-gray-600 mt-2">전체 사례의 누적 업무 절감 효과</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-6 animate-slideUp">
          당신의 업무도 AXMOS로<br />자동화할 수 있습니다
        </h2>
        <p className="text-lg text-gray-600 mb-8 animate-slideUp" style={{animationDelay: '0.1s'}}>
          3주 안에 실제 효과를 경험해보세요
        </p>
        <Link href="/contact" className="inline-block bg-brand text-white font-bold py-4 px-12 rounded-lg hover:bg-brand-light hover:scale-105 transition text-lg animate-slideUp" style={{animationDelay: '0.2s'}}>
          무료 상담 신청 →
        </Link>
      </section>
    </main>
  );
}
