'use client';

import { useState } from 'react';
import Link from 'next/link';

type TQ = { name: string; label: string; type: 'text' | 'select'; placeholder?: string; options?: string[] };

// 트랙 선택 시 노출되는 맞춤 질문 (모두 선택 입력)
const TRACK_QUESTIONS: Record<string, TQ[]> = {
  'AX Build': [
    { name: 'q_systems', label: '현재 사용 중인 시스템·도구', type: 'text', placeholder: '예: Slack, Gmail, Excel, 자체 ERP, Salesforce' },
    { name: 'q_data', label: '데이터·시스템 연동(API·접근 권한) 가능 여부', type: 'select', options: ['가능', '일부 가능', '확인 필요', '잘 모름'] },
    { name: 'q_timeline', label: '목표 일정', type: 'select', options: ['최대한 빨리', '1개월 내', '분기 내', '미정'] },
  ],
  'AX Grow': [
    { name: 'q_team', label: '내부 개발·IT 인력 보유', type: 'select', options: ['전담 개발팀 있음', '일부 개발 인력', '비개발 중심', '없음'] },
    { name: 'q_aitools', label: '현재 활용 중인 AI 도구·API', type: 'text', placeholder: '예: ChatGPT, Claude, 자체 LLM API, 없음' },
    { name: 'q_ailevel', label: '구성원의 AI 활용 수준', type: 'select', options: ['거의 안 씀', '일부 사용', '적극 활용'] },
    { name: 'q_participants', label: '빌더톤 참여 예상 인원', type: 'text', placeholder: '예: 5~10명' },
  ],
  'AX Learn': [
    { name: 'q_headcount', label: '참여 예상 인원', type: 'text', placeholder: '예: 20명' },
    { name: 'q_roles', label: '참여자 직군', type: 'text', placeholder: '예: 기획, 마케팅, 영업, HR' },
    { name: 'q_ailevel', label: '현재 AI 활용 수준', type: 'select', options: ['전혀 안 씀', '가끔 씀', '자주 씀'] },
    { name: 'q_timing', label: '교육 희망 시기', type: 'text', placeholder: '예: 다음 달, 분기 내' },
  ],
};

const TRACKS = [
  { value: 'AX Build', title: 'AX Build', desc: 'AXMOS 팀이 직접 구축' },
  { value: 'AX Grow', title: 'AX Grow', desc: '팀이 함께 배우며 구축' },
  { value: 'AX Learn', title: 'AX Learn', desc: '비개발자 AI 특강' },
  { value: '아직 모르겠음', title: '아직 모르겠음', desc: '상담 후 결정하고 싶음' },
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [track, setTrack] = useState<string>('');

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

  const handleBlur = (field: string) => setTouched({ ...touched, [field]: true });

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

    // 트랙별 추가 답변을 라벨과 함께 한 줄씩 정리
    const trackVal = (formData.get('track') as string) || '';
    const details = (TRACK_QUESTIONS[trackVal] || [])
      .map((q) => {
        const v = formData.get(q.name) as string;
        return v ? `${q.label}: ${v}` : null;
      })
      .filter(Boolean)
      .join('\n');

    const data = { ...Object.fromEntries(formData), details };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
        setTrack('');
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
      touched[field] && errors[field] ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-bg-dark'
    }`;

  const trackQuestions = TRACK_QUESTIONS[track] || [];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative bg-bg-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/30 via-bg-dark/55 to-bg-dark/95"></div>

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
                  <label className="block font-semibold text-bg-dark mb-3 text-sm uppercase tracking-wider">Company *</label>
                  <input type="text" name="company" required className={inputClass('company')} placeholder="회사명" />
                </div>
                <div>
                  <label className="block font-semibold text-bg-dark mb-3 text-sm uppercase tracking-wider">Name *</label>
                  <input type="text" name="name" required className={inputClass('name')} placeholder="담당자 이름" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold text-bg-dark mb-3 text-sm uppercase tracking-wider">Email *</label>
                  <input type="email" name="email" required onBlur={() => handleBlur('email')} className={inputClass('email')} placeholder="your@email.com" />
                  {touched.email && errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                </div>
                <div>
                  <label className="block font-semibold text-bg-dark mb-3 text-sm uppercase tracking-wider">Phone</label>
                  <input type="tel" name="phone" onBlur={() => handleBlur('phone')} className={inputClass('phone')} placeholder="010-0000-0000" />
                  {touched.phone && errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-bg-dark mb-4 text-sm uppercase tracking-wider">Engagement Model *</label>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {TRACKS.map((opt) => (
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
                        onChange={(e) => setTrack(e.target.value)}
                      />
                      <p className="font-bold mb-1">{opt.title}</p>
                      <p className="text-xs opacity-70">{opt.desc}</p>
                    </label>
                  ))}
                </div>
              </div>

              {/* 트랙별 맞춤 질문 (선택 입력) */}
              {trackQuestions.length > 0 && (
                <div className="border border-gray-200 bg-bg-light p-6 md:p-8 space-y-6 animate-slideUp">
                  <p className="text-sm font-semibold text-bg-dark">
                    {track} 관련 추가 질문
                    <span className="text-gray-500 font-normal"> · 답변해 주시면 더 정확한 상담이 가능해요 (선택)</span>
                  </p>
                  {trackQuestions.map((q) => (
                    <div key={q.name}>
                      <label className="block font-medium text-bg-dark mb-2 text-sm">{q.label}</label>
                      {q.type === 'select' ? (
                        <select name={q.name} defaultValue="" className={inputClass(q.name)}>
                          <option value="" disabled>선택해주세요</option>
                          {q.options!.map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      ) : (
                        <input type="text" name={q.name} className={inputClass(q.name)} placeholder={q.placeholder} />
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div>
                <label className="block font-semibold text-bg-dark mb-3 text-sm uppercase tracking-wider">Workflow to Automate *</label>
                <input type="text" name="task" required className={inputClass('task')} placeholder="예: 월말 정산서 100건 발송, 거래처 실사 요청 정리 등" />
                <p className="text-xs text-gray-500 mt-2">구체적으로 작성해주실수록 더 정확한 상담이 가능합니다.</p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="privacy" required className="w-5 h-5 mt-0.5 cursor-pointer accent-bg-dark" />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    <Link href="/privacy" className="font-semibold text-bg-dark underline hover:opacity-60 transition">개인정보처리방침</Link>에 따른
                    개인정보 수집·이용에 동의합니다. 수집된 정보는 상담 목적으로만 사용됩니다. *
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

              <p className="text-center text-sm text-gray-600">⚡ 2영업일 내 답변 · 무료 상담</p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
