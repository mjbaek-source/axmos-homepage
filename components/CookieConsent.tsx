'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'ax-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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
          AXMOS uses cookies to improve and analyze the service. Non-essential (analytics) cookies are used
          only with your consent. See our{' '}
          <Link href="/privacy" className="text-white underline hover:opacity-70 transition">
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => choose('declined')}
            className="text-sm font-semibold text-white/80 hover:text-white border border-white/25 rounded-full px-5 py-2.5 transition"
          >
            Essential only
          </button>
          <button
            onClick={() => choose('accepted')}
            className="text-sm font-semibold bg-white text-bg-dark rounded-full px-6 py-2.5 hover:bg-gray-200 transition"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
