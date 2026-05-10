'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        <nav className="hidden md:flex items-center gap-10">
          <Link href="/ax-build" className="text-text-light hover:text-white text-sm font-medium transition">
            AX Build
          </Link>
          <Link href="/ax-grow" className="text-text-light hover:text-white text-sm font-medium transition">
            AX Grow
          </Link>
          <Link href="/cases" className="text-text-light hover:text-white text-sm font-medium transition">
            Customers
          </Link>
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
          <Link href="/ax-build" className="block text-text-light hover:text-white text-sm font-medium transition">
            AX Build
          </Link>
          <Link href="/ax-grow" className="block text-text-light hover:text-white text-sm font-medium transition">
            AX Grow
          </Link>
          <Link href="/cases" className="block text-text-light hover:text-white text-sm font-medium transition">
            Customers
          </Link>
          <Link href="/contact" className="block bg-white text-bg-dark text-sm font-semibold py-3 px-6 text-center hover:bg-gray-200 transition">
            Get in touch
          </Link>
        </nav>
      )}
    </header>
  );
}
