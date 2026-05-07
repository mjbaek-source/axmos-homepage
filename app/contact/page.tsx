'use client';

import { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error('Error:', error);
      alert('제출 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-brand text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-black mb-4">파트너십 신청</h1>
          <p className="text-lg text-blue-100">비용 Zero, 리스크 Zero</p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        {submitted ? (
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-12 text-center">
            <h2 className="text-2xl font-bold text-green-900 mb-4">신청이 완료되었습니다! ✓</h2>
            <p className="text-green-700 mb-6">
              감사합니다! 2영업일 내에 axmos@codepresso.io에서 회신해드리겠습니다.
            </p>
            <a href="/" className="text-brand font-bold hover:underline">
              홈으로 돌아가기 →
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 회사명 */}
            <div>
              <label className="block font-bold text-gray-900 mb-2">회사명 *</label>
              <input
                type="text"
                name="company"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand"
                placeholder="예: 코드프레소"
              />
            </div>

            {/* 담당자 이름 */}
            <div>
              <label className="block font-bold text-gray-900 mb-2">담당자 이름 *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand"
                placeholder="이름"
              />
            </div>

            {/* 이메일 */}
            <div>
              <label className="block font-bold text-gray-900 mb-2">이메일 *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand"
                placeholder="your@email.com"
              />
            </div>

            {/* 휴대폰 */}
            <div>
              <label className="block font-bold text-gray-900 mb-2">휴대폰</label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand"
                placeholder="010-0000-0000"
              />
            </div>

            {/* 관심 트랙 */}
            <div>
              <label className="block font-bold text-gray-900 mb-4">관심 트랙 *</label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="track"
                    value="AX Build"
                    required
                    className="w-5 h-5"
                  />
                  <span>AX Build (우리가 직접 만들어드림)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="track"
                    value="AX Grow"
                    className="w-5 h-5"
                  />
                  <span>AX Grow (우리 팀이 직접 만듦)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="track"
                    value="아직 모르겠음"
                    className="w-5 h-5"
                  />
                  <span>아직 모르겠음</span>
                </label>
              </div>
            </div>

            {/* 자동화하고 싶은 업무 */}
            <div>
              <label className="block font-bold text-gray-900 mb-2">자동화하고 싶은 업무 (한 줄) *</label>
              <input
                type="text"
                name="task"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand"
                placeholder="예: 월말 정산서 100건 발송"
              />
            </div>

            {/* 개인정보 동의 */}
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="w-5 h-5"
                />
                <span className="text-sm text-gray-700">
                  개인정보 수집·이용에 동의합니다 *
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand text-white font-bold py-4 rounded-lg hover:bg-opacity-90 disabled:opacity-50 transition mt-8"
            >
              {loading ? '제출 중...' : '무료 신청하기'}
            </button>

            <p className="text-center text-sm text-gray-600">
              제출 후 2영업일 내에 연락드리겠습니다.
            </p>
          </form>
        )}
      </section>
    </main>
  );
}
