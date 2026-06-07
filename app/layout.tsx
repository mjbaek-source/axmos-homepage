import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
  metadataBase: new URL('https://axmos-en.vercel.app'),
  title: 'AXMOS — The Enterprise AI Operating System',
  description: 'AXMOS connects your existing systems, data, and workflows into a single operational intelligence layer. Deploy production-ready AI agents in weeks.',
  keywords: ['AI automation', 'enterprise AI', 'AI Agent', 'AI Operating System', 'AI agents for enterprise', 'workflow automation'],
  authors: [{ name: 'AXMOS' }],
  creator: 'AXMOS',
  publisher: 'AXMOS',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://axmos-en.vercel.app',
    siteName: 'AXMOS',
    title: 'AXMOS — The Enterprise AI Operating System',
    description: 'AXMOS connects your systems, data, and workflows into one operational intelligence layer. Production-ready AI agents in weeks.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AXMOS — The Enterprise AI Operating System',
    description: 'The operational intelligence layer for enterprise execution. Production AI agents, deployed onto your existing infrastructure.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        {/* GA & Hotjar load only after cookie consent === 'accepted' */}
        <Analytics />
      </body>
    </html>
  );
}
