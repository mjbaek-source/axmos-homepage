'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/ax-build', label: 'AX Build' },
  { href: '/ax-grow', label: 'AX Grow' },
  { href: '/ax-learn', label: 'AX Learn' },
  { href: '/ax-insight', label: 'AX Insight' },
  { href: '/cases', label: 'AX Cases' },
];

// 언어 토글: 이 사이트(EN) → 한글판(axmos-legacy)의 같은 경로로 이동
const ALT_LANG = { base: 'https://axmos-legacy.vercel.app', label: '한국어', aria: '한국어로 보기' };

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const altHref = `${ALT_LANG.base}${pathname || ''}`;

  return (
    <header className="sticky top-0 z-50 bg-bg-dark border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="AXMOS"
            width={120}
            height={40}
            priority
            className="brightness-0 invert"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-white/85 hover:text-white text-sm font-semibold transition">
              {l.label}
            </Link>
          ))}
          <a
            href={altHref}
            aria-label={ALT_LANG.aria}
            className="inline-flex items-center gap-1.5 text-white/85 hover:text-white text-sm font-semibold border border-white/25 rounded-full px-3.5 py-1.5 transition"
          >
            <GlobeIcon />
            {ALT_LANG.label}
          </a>
          <Link href="/contact" className="bg-white text-bg-dark text-sm font-semibold py-2.5 px-6 hover:bg-gray-200 transition">
            Get in touch
          </Link>
        </nav>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-bg-dark-2 border-t border-border-dark px-6 py-6 space-y-5 animate-slideUp">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="block text-white/85 hover:text-white text-sm font-semibold transition">
              {l.label}
            </Link>
          ))}
          <a
            href={altHref}
            aria-label={ALT_LANG.aria}
            className="inline-flex items-center gap-1.5 text-white/85 hover:text-white text-sm font-semibold border border-white/25 rounded-full px-3.5 py-1.5 transition"
          >
            <GlobeIcon />
            {ALT_LANG.label}
          </a>
          <Link href="/contact" className="block bg-white text-bg-dark text-sm font-semibold py-3 px-6 text-center hover:bg-gray-200 transition">
            Get in touch
          </Link>
        </nav>
      )}
    </header>
  );
}
