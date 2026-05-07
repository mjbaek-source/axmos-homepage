'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="AXMOS"
            width={120}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/ax-build" className="text-gray-700 hover:text-brand font-semibold transition">
            AX Build
          </Link>
          <Link href="/ax-grow" className="text-gray-700 hover:text-brand font-semibold transition">
            AX Grow
          </Link>
          <Link href="/contact" className="bg-brand text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition">
            무료 신청
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-gray-50 px-6 py-4 space-y-4">
          <Link href="/ax-build" className="block text-gray-700 hover:text-brand font-semibold">
            AX Build
          </Link>
          <Link href="/ax-grow" className="block text-gray-700 hover:text-brand font-semibold">
            AX Grow
          </Link>
          <Link href="/contact" className="block bg-brand text-white font-bold py-2 px-6 rounded-lg text-center">
            무료 신청
          </Link>
        </nav>
      )}
    </header>
  );
}
