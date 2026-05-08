import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-black text-2xl mb-4 tracking-tight">AXMOS</h3>
            <p className="text-text-light text-sm leading-relaxed max-w-md">
              The AI Operating System for Korean enterprises.<br />
              Implement AI automation in 3 weeks—without replacing your existing systems.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-5">Product</h4>
            <ul className="space-y-3 text-sm text-text-light">
              <li><Link href="/ax-build" className="hover:text-white transition">AX Build</Link></li>
              <li><Link href="/ax-grow" className="hover:text-white transition">AX Grow</Link></li>
              <li><Link href="/cases" className="hover:text-white transition">Customers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-text-light">
              <li><Link href="/contact" className="hover:text-white transition">Get in touch</Link></li>
              <li>axmos@codepresso.io</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between text-xs text-text-muted">
          <p>&copy; 2026 AXMOS. All rights reserved.</p>
          <p>Built for Korean enterprises. Powered by Codepresso.</p>
        </div>
      </div>
    </footer>
  );
}
