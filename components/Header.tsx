'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '/ax-build', label: 'AX Build' },
  { href: '/ax-grow', label: 'AX Grow' },
  { href: '/ax-learn', label: 'AX Learn' },
  { href: '/ax-insight', label: 'AX Insight' },
  { href: '/cases', label: 'AX Cases' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-hairline">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* 라이트 nav 위에서는 brightness-0만 — 로고가 black silhouette로 */}
          <Image
            src="/logo.png"
            alt="AXMOS"
            width={116}
            height={38}
            priority
            className="brightness-0"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-ink text-sm font-medium hover:opacity-60 transition"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-near-black text-white text-sm font-medium px-5 py-2.5 rounded-pill hover:bg-ink transition"
          >
            Get in touch
          </Link>
        </nav>

        <button
          className="md:hidden text-ink text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-hairline px-6 py-6 space-y-5 animate-slideUp">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-ink text-sm font-medium hover:opacity-60 transition"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block bg-near-black text-white text-sm font-medium py-3 px-6 text-center rounded-pill hover:bg-ink transition"
          >
            Get in touch
          </Link>
        </nav>
      )}
    </header>
  );
}
