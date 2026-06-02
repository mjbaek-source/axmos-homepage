import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-near-black text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        {/* Newsletter top section — Cohere-style coral label */}
        <div className="border-b border-white/10 pb-16 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-xl">
            <p className="font-mono uppercase text-[14px] tracking-[0.28px] text-coral mb-4">
              AI moves fast
            </p>
            <h3 className="font-display text-3xl md:text-4xl leading-tight text-white tracking-tight">
              한국 AI 도입의 흐름을<br />매주 메일로 받아보세요.
            </h3>
          </div>
          <div className="md:w-96">
            <div className="flex items-center border-b border-white/30 pb-3 focus-within:border-white transition">
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email"
                className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-base"
              />
              <button
                type="button"
                className="text-white text-xl px-3 hover:opacity-60 transition"
                aria-label="Subscribe"
              >
                →
              </button>
            </div>
            <p className="text-xs text-white/40 mt-3">
              구독 시 개인정보 처리방침에 동의한 것으로 간주됩니다.
            </p>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Image
              src="/logo.png"
              alt="AXMOS"
              width={140}
              height={47}
              className="brightness-0 invert mb-6"
            />
            <p className="text-white/65 text-sm leading-relaxed max-w-md">
              한국 기업을 위한 AI 운영체제.<br />
              기존 시스템을 교체하지 않고, 3주 안에 AI 자동화를 도입합니다.
            </p>
          </div>

          <div>
            <h4 className="font-mono uppercase text-[11px] tracking-[0.28px] text-white mb-5">Product</h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li><Link href="/ax-build" className="hover:text-white transition">AX Build</Link></li>
              <li><Link href="/ax-grow" className="hover:text-white transition">AX Grow</Link></li>
              <li><Link href="/ax-learn" className="hover:text-white transition">AX Learn</Link></li>
              <li><Link href="/ax-insight" className="hover:text-white transition">AX Insight</Link></li>
              <li><Link href="/cases" className="hover:text-white transition">AX Cases</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono uppercase text-[11px] tracking-[0.28px] text-white mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li><Link href="/contact" className="hover:text-white transition">Get in touch</Link></li>
              <li>axmos@codepresso.io</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-16 flex flex-col md:flex-row justify-between text-xs text-white/40">
          <p>&copy; 2026 AXMOS. All rights reserved.</p>
          <p>Built for Korean enterprises. Powered by Codepresso.</p>
        </div>
      </div>
    </footer>
  );
}
