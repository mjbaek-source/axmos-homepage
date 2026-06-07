'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'ax-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 이미 선택한 적 없으면 배너 노출
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== 'accepted' && saved !== 'declined') setVisible(true);
  }, []);

  const choose = (value: 'accepted' | 'declined') => {
    localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event('ax-consent-change'));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-bg-dark-2 border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <p className="text-sm text-text-light leading-relaxed flex-1">
          AXMOS는 서비스 개선과 분석을 위해 쿠키를 사용합니다. 분석용(비필수) 쿠키는 동의하신 경우에만 사용되며,
          자세한 내용은{' '}
          <Link href="/privacy" className="text-white underline hover:opacity-70 transition">
            개인정보처리방침
          </Link>
          에서 확인하실 수 있습니다.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => choose('declined')}
            className="text-sm font-semibold text-white/80 hover:text-white border border-white/25 rounded-full px-5 py-2.5 transition"
          >
            필수만 허용
          </button>
          <button
            onClick={() => choose('accepted')}
            className="text-sm font-semibold bg-white text-bg-dark rounded-full px-6 py-2.5 hover:bg-gray-200 transition"
          >
            모두 동의
          </button>
        </div>
      </div>
    </div>
  );
}
