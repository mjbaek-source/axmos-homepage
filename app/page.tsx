'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-brand to-brand-light text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-black mb-6 leading-tight">
            AI 도입이 아니라,<br />업무를 줄이는 실행을 합니다
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            3주 안에 AI Agent로 업무 자동화 구현
          </p>
          <Link href="/contact" className="inline-block bg-white text-brand font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition text-lg">
            무료 신청하기 →
          </Link>
        </div>
      </section>

      {/* 문제 제기 */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="section-title text-center mb-12">한국 기업의 AI 활용 현황</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-brand">
            <p className="text-4xl font-black text-brand mb-2">77%</p>
            <p className="text-gray-700 font-semibold">AI 도입 계획 있음</p>
            <p className="text-sm text-gray-600 mt-2">하지만...</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-brand">
            <p className="text-4xl font-black text-brand mb-2">70%</p>
            <p className="text-gray-700 font-semibold">구축 중 실패 경험</p>
            <p className="text-sm text-gray-600 mt-2">프로젝트 중단 또는 미활용</p>
          </div>
          <div className="bg-red-50 p-8 rounded-lg border-l-4 border-accent-before">
            <p className="text-sm text-gray-700 font-semibold mb-4">실제 효율성</p>
            <p className="text-3xl font-black mb-2">
              <span className="text-brand-light">1.7%</span>
              <span className="text-gray-700 text-lg"> vs </span>
              <span className="text-accent-before">4.0%</span>
            </p>
            <p className="text-sm text-gray-600">예상 효율 vs 실제 효율</p>
          </div>
        </div>
      </section>

      {/* 검증된 성과 */}
      <section className="bg-bg-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title text-center mb-12">검증된 성과</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-brand">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">회사명</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-900">산업</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-900">자동화 업무</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-900">효과</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-4">트랜스링크</td>
                  <td className="py-4 px-4">물류</td>
                  <td className="py-4 px-4">배송 현황 리포트</td>
                  <td className="py-4 px-4 text-center"><span className="badge">월 20시간 단축</span></td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-4">체인로지스</td>
                  <td className="py-4 px-4">물류·마케팅</td>
                  <td className="py-4 px-4">고객사 공지사항 분류</td>
                  <td className="py-4 px-4 text-center"><span className="badge">월 40시간 단축</span></td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-4">핀테크스타트업</td>
                  <td className="py-4 px-4">금융·VC</td>
                  <td className="py-4 px-4">거래처 실사 요청 정리</td>
                  <td className="py-4 px-4 text-center"><span className="badge">월 30시간 단축</span></td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-4">병원</td>
                  <td className="py-4 px-4">헬스케어</td>
                  <td className="py-4 px-4">환자 상담 기록 정리</td>
                  <td className="py-4 px-4 text-center"><span className="badge">월 25시간 단축</span></td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-4">세무·회계 법인</td>
                  <td className="py-4 px-4">회계</td>
                  <td className="py-4 px-4">월말 정산서 생성</td>
                  <td className="py-4 px-4 text-center"><span className="badge">월 50시간 단축</span></td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-4">보험사</td>
                  <td className="py-4 px-4">금융</td>
                  <td className="py-4 px-4">청구 서류 심사</td>
                  <td className="py-4 px-4 text-center"><span className="badge">월 35시간 단축</span></td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-4">식품 유통사</td>
                  <td className="py-4 px-4">유통·마케팅</td>
                  <td className="py-4 px-4">주간 판매 현황 분석</td>
                  <td className="py-4 px-4 text-center"><span className="badge">월 15시간 단축</span></td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-4">건설사</td>
                  <td className="py-4 px-4">건설</td>
                  <td className="py-4 px-4">공정 보고서 작성</td>
                  <td className="py-4 px-4 text-center"><span className="badge">월 45시간 단축</span></td>
                </tr>
                <tr>
                  <td className="py-4 px-4">에너지 회사</td>
                  <td className="py-4 px-4">에너지</td>
                  <td className="py-4 px-4">사용량 청구서 처리</td>
                  <td className="py-4 px-4 text-center"><span className="badge">월 60시간 단축</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 대표 사례 */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="section-title text-center mb-12">대표 사례 3선</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border-2 border-brand rounded-lg p-8">
            <h3 className="text-lg font-bold text-brand mb-3">금융 VC 회사</h3>
            <p className="text-gray-700 mb-4">
              거래처 실사 요청을 자동으로 분류하고 정리하는 AI Agent 구축
            </p>
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-bold text-sm text-brand">결과</p>
              <p className="text-sm text-gray-700 mt-2">월 30시간 업무 단축, 실수율 0%로 감소</p>
            </div>
          </div>

          <div className="bg-white border-2 border-brand rounded-lg p-8">
            <h3 className="text-lg font-bold text-brand mb-3">물류 마케팅</h3>
            <p className="text-gray-700 mb-4">
              고객사 공지사항을 자동으로 분류하고 담당자에게 알림
            </p>
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-bold text-sm text-brand">결과</p>
              <p className="text-sm text-gray-700 mt-2">월 40시간 단축, 대응 속도 5배 증가</p>
            </div>
          </div>

          <div className="bg-white border-2 border-brand rounded-lg p-8">
            <h3 className="text-lg font-bold text-brand mb-3">물류 고객 서비스</h3>
            <p className="text-gray-700 mb-4">
              배송 현황을 자동으로 수집하고 리포트 생성
            </p>
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-bold text-sm text-brand">결과</p>
              <p className="text-sm text-gray-700 mt-2">월 20시간 단축, 정확도 99.8%</p>
            </div>
          </div>
        </div>
      </section>

      {/* AXMOS 차별점 */}
      <section className="bg-brand text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">AXMOS 차별점</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="text-4xl font-black flex-shrink-0">⚡</div>
              <div>
                <h3 className="text-xl font-bold mb-2">3주 초고속 구축</h3>
                <p className="text-blue-100">
                  기획부터 배포까지 3주 안에 완성. 기업의 시간은 금입니다.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-4xl font-black flex-shrink-0">🌍</div>
              <div>
                <h3 className="text-xl font-bold mb-2">글로벌 개발 인력</h3>
                <p className="text-blue-100">
                  한국 PM과 동남아 개발팀의 조합으로 비용은 낮추고 품질은 높입니다.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-4xl font-black flex-shrink-0">📊</div>
              <div>
                <h3 className="text-xl font-bold mb-2">10만명 데이터 기반</h3>
                <p className="text-blue-100">
                  1000+ 프로젝트 경험과 10만명 사용자 데이터로 최적화된 솔루션 제공
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-4xl font-black flex-shrink-0">🔒</div>
              <div>
                <h3 className="text-xl font-bold mb-2">기업 보안 준수</h3>
                <p className="text-blue-100">
                  ISO 27001, SOC 2 인증. 금융, 공공기관 보안 기준 충족
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 자동화 가능 영역 */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="section-title text-center mb-12">자동화 가능 영역</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-brand">
            <h3 className="text-xl font-bold text-brand mb-4">병원·의료</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• 환자 상담 기록 정리</li>
              <li>• 처방전 관리 자동화</li>
              <li>• 검사 결과 요약</li>
              <li>• 예약 시스템 자동 운영</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-brand">
            <h3 className="text-xl font-bold text-brand mb-4">세무·회계</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• 월말 정산서 자동 생성</li>
              <li>• 영수증 자동 분류</li>
              <li>• 세금 신고 데이터 정리</li>
              <li>• 거래처 장부 관리</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-brand">
            <h3 className="text-xl font-bold text-brand mb-4">물류·CS</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• 배송 현황 리포트 자동화</li>
              <li>• 고객 문의 분류 및 응답</li>
              <li>• 재고 관리 자동화</li>
              <li>• 배송 추적 정보 수집</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-brand">
            <h3 className="text-xl font-bold text-brand mb-4">금융·VC</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• 거래처 실사 요청 정리</li>
              <li>• 청구서 심사 자동화</li>
              <li>• 투자 기회 분석</li>
              <li>• 계약서 검토 지원</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 두 가지 시작 방법 */}
      <section className="bg-bg-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title text-center mb-12">두 가지 시작 방법</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-brand text-white">
                  <th className="text-left py-4 px-6 font-bold">항목</th>
                  <th className="text-center py-4 px-6 font-bold">AX Build</th>
                  <th className="text-center py-4 px-6 font-bold">AX Grow</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-bold">특징</td>
                  <td className="py-4 px-6 text-center">우리가 직접 만들어드림</td>
                  <td className="py-4 px-6 text-center">당신 팀이 직접 배우며 만듦</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-bold">기간</td>
                  <td className="py-4 px-6 text-center">20일</td>
                  <td className="py-4 px-6 text-center">16일</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-bold">산출물</td>
                  <td className="py-4 px-6 text-center">완성된 AI Agent</td>
                  <td className="py-4 px-6 text-center">역량진단 + Agent + 로드맵</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-bold">비용</td>
                  <td className="py-4 px-6 text-center">높음</td>
                  <td className="py-4 px-6 text-center">중간</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-bold">추천 대상</td>
                  <td className="py-4 px-6 text-center">빠른 구축 원할 때</td>
                  <td className="py-4 px-6 text-center">내재화가 중요할 때</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold">신청</td>
                  <td className="py-4 px-6 text-center"><Link href="/ax-build" className="text-brand font-bold hover:underline">상세보기</Link></td>
                  <td className="py-4 px-6 text-center"><Link href="/ax-grow" className="text-brand font-bold hover:underline">상세보기</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 진행 프로세스 */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="section-title text-center mb-12">진행 프로세스</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-brand text-white p-6 rounded-lg text-center">
            <p className="text-xl font-bold mb-2">1단계</p>
            <p className="font-semibold">요청 분석</p>
            <p className="text-sm text-blue-100 mt-2">당신의 업무 현황 파악</p>
          </div>
          <div className="hidden md:flex items-center justify-center text-3xl text-brand font-bold">→</div>
          <div className="bg-brand-light text-white p-6 rounded-lg text-center">
            <p className="text-xl font-bold mb-2">2단계</p>
            <p className="font-semibold">설계·개발</p>
            <p className="text-sm text-blue-100 mt-2">맞춤형 솔루션 개발</p>
          </div>
          <div className="hidden md:flex items-center justify-center text-3xl text-brand font-bold">→</div>
          <div className="bg-accent-after text-white p-6 rounded-lg text-center md:col-span-1">
            <p className="text-xl font-bold mb-2">3단계</p>
            <p className="font-semibold">테스트·배포</p>
            <p className="text-sm text-blue-100 mt-2">검증 후 운영 시작</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-light py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="section-title text-center mb-12">자주 묻는 질문</h2>
          <div className="space-y-4">
            {[
              {
                q: '우리 회사 업무도 자동화 가능한가요?',
                a: '대부분 가능합니다. 예측 가능한 패턴이 있고 반복되는 업무라면 AI로 자동화할 수 있습니다. 상담을 통해 정확히 판단하겠습니다.'
              },
              {
                q: '개발 인력이 없어도 되나요?',
                a: '네, AX Build는 저희가 모두 구축해드립니다. AX Grow를 선택하시면 당신 팀이 배우면서 함께 만들 수 있습니다.'
              },
              {
                q: '비용은 얼마나 되나요?',
                a: '상담을 통해 요구사항과 복잡도를 파악한 후 맞춤 견적을 제시합니다. 무료 상담 신청 후 논의하겠습니다.'
              },
              {
                q: '구축 후 유지보수는?',
                a: '3개월간 무료 유지보수를 제공합니다. 이후 연장은 별도 계약으로 진행됩니다.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-300">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full px-6 py-4 text-left font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  {faq.q}
                  <span className="text-brand text-xl">{openFAQ === i ? '−' : '+'}</span>
                </button>
                {openFAQ === i && (
                  <div className="px-6 py-4 bg-blue-50 border-t border-gray-300 text-gray-700">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 최종 CTA */}
      <section className="bg-gradient-to-r from-brand to-brand-light text-white py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">지금 시작하세요</h2>
          <p className="text-xl text-blue-100 mb-8">
            3주 안에 당신의 업무를 줄이는 AI를 만날 수 있습니다.
          </p>
          <Link href="/contact" className="inline-block bg-white text-brand font-bold py-4 px-12 rounded-lg hover:bg-gray-100 transition text-lg">
            무료 신청하기 →
          </Link>
          <p className="text-sm text-blue-100 mt-6">
            비용 Zero, 리스크 Zero. 2영업일 내에 회신합니다.
          </p>
        </div>
      </section>
    </main>
  );
}
