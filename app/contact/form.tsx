'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = '올바른 이메일을 입력해주세요';
    }

    if (phone && !phone.match(/^(\d{2,3}-?\d{3,4}-?\d{4}|\d{10,11})$/)) {
      newErrors.phone = '올바른 전화번호를 입력해주세요 (예: 010-0000-0000)';
    }

    return newErrors;
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

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
        setErrors({});
        setTouched({});
      } else {
        alert('제출 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('제출 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-4 bg-white border text-bg-dark focus:outline-none transition ${
      touched[field] && errors[field]
        ? 'border-red-500 focus:border-red-500'
        : 'border-gray-300 focus:border-bg-dark'
    }`;

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative bg-bg-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/60 via-bg-dark/80 to-bg-dark"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <p className="section-eyebrow">Get in Touch</p>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6 max-w-3xl">
            Schedule a Demo.
          </h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl leading-relaxed">
            첫 미팅에서 자동화 가능 영역과 예상 ROI를 함께 분석해 드립니다.
            2영업일 내에 답변드립니다.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {submitted ? (
            <div className="bg-bg-light border border-gray-300 p-12 md:p-16">
              <p className="section-eyebrow text-bg-dark/60">Submitted</p>
              <h2 className="text-3xl md:text-4xl font-bold text-bg-dark mb-6">
                신청이 완료되었습니다.
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                감사합니다. 2영업일 내에 <span className="font-semibold text-bg-dark">axmos@codepresso.io</span>에서
                회신해드리겠습니다. 첫 미팅에서는 자동화 가능 영역 분석과 예상 ROI를 함께 검토합니다.
              </p>
              <Link href="/" className="inline-flex items-center text-bg-dark font-semibold border-b-2 border-bg-dark pb-1 hover:opacity-60 transition">
                Back to Home →
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold text-bg-dark mb-3 text-sm uppercase tracking-wider">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    className={inputClass('company')}
                    placeholder="회사명"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-bg-dark mb-3 text-sm uppercase tracking-wider">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className={inputClass('name')}
                    placeholder="담당자 이름"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold text-bg-dark mb-3 text-sm uppercase tracking-wider">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    onBlur={() => handleBlur('email')}
                    className={inputClass('email')}
                    placeholder="your@email.com"
                  />
                  {touched.email && errors.email && (
                    <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block font-semibold text-bg-dark mb-3 text-sm uppercase tracking-wider">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    onBlur={() => handleBlur('phone')}
                    className={inputClass('phone')}
                    placeholder="010-0000-0000"
                  />
                  {touched.phone && errors.phone && (
                    <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-bg-dark mb-4 text-sm uppercase tracking-wider">
                  Engagement Model *
                </label>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    { value: 'AX Build', title: 'AX Build', desc: 'AXMOS 팀이 직접 구축' },
                    { value: 'AX Grow', title: 'AX Grow', desc: '팀이 함께 배우며 구축' },
                    { value: '아직 모르겠음', title: '아직 모르겠음', desc: '상담 후 결정하고 싶음' },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className="border border-gray-300 p-5 cursor-pointer hover:border-bg-dark transition has-[:checked]:bg-bg-dark has-[:checked]:text-white has-[:checked]:border-bg-dark"
                    >
                      <input
                        type="radio"
                        name="track"
                        value={opt.value}
                        required
                        className="sr-only"
                      />
                      <p className="font-bold mb-1">{opt.title}</p>
                      <p className="text-xs opacity-70">{opt.desc}</p>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-bg-dark mb-3 text-sm uppercase tracking-wider">
                  Workflow to Automate *
                </label>
                <input
                  type="text"
                  name="task"
                  required
                  className={inputClass('task')}
                  placeholder="예: 월말 정산서 100건 발송, 거래처 실사 요청 정리 등"
                />
                <p className="text-xs text-gray-500 mt-2">
                  구체적으로 작성해주실수록 더 정확한 상담이 가능합니다.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacy"
                    required
                    className="w-5 h-5 mt-0.5 cursor-pointer accent-bg-dark"
                  />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    개인정보 수집·이용에 동의합니다. 수집된 정보는 상담 목적으로만 사용되며,
                    제3자에게 제공되지 않습니다. *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-bg-dark text-white font-semibold py-5 hover:bg-bg-dark-3 disabled:opacity-50 transition flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    제출 중...
                  </>
                ) : (
                  <>
                    Schedule a Demo
                    <span>→</span>
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-600">
                ⚡ 2영업일 내 답변 · 무료 상담
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
