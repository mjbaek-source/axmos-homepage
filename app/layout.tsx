import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
  metadataBase: new URL('https://axmos-legacy.vercel.app'),
  title: 'AXMOS — The AI Operating System for Korean Enterprises',
  description: '기존 시스템과 도구는 그대로. AXMOS가 연결하고 자동화합니다. 3주 안에 가시적인 결과를 만듭니다.',
  keywords: ['AI 자동화', '업무 자동화', 'AI Agent', 'AI Operating System', 'Enterprise AI', '한국 기업 AI', 'AI 솔루션'],
  authors: [{ name: 'AXMOS' }],
  creator: 'AXMOS',
  publisher: 'AXMOS',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://axmos-legacy.vercel.app',
    siteName: 'AXMOS',
    title: 'AXMOS — The AI Operating System for Korean Enterprises',
    description: '기존 시스템과 도구는 그대로. AXMOS가 연결하고 자동화합니다. 3주 안에 가시적인 결과를 만듭니다.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AXMOS — The AI Operating System for Korean Enterprises',
    description: '기존 시스템은 그대로. AXMOS가 연결하고 자동화합니다.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        {/* GA·Hotjar는 쿠키 동의(accepted) 시에만 로딩 */}
        <Analytics />
      </body>
    </html>
  );
}
