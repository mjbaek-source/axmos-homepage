'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

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
    <header className="sticky top-0 z-50 bg-bg-dark border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="AX.presso home">
          <Logo variant="dark" className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/85 hover:text-white text-sm font-semibold transition"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-white text-bg-dark text-sm font-semibold py-2.5 px-6 hover:bg-gray-200 transition"
          >
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
            <Link
              key={l.href}
              href={l.href}
              className="block text-white/85 hover:text-white text-sm font-semibold transition"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block bg-white text-bg-dark text-sm font-semibold py-3 px-6 text-center hover:bg-gray-200 transition"
          >
            Get in touch
          </Link>
        </nav>
      )}
    </header>
  );
}
