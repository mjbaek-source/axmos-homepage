import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AXMOS - 3주 안에 AI 업무 자동화 구현',
  description: 'AI 도입이 아니라, 업무를 줄이는 실행을 합니다. 3주 안에 AI Agent로 업무 자동화를 완성하세요.',
  keywords: ['AI 자동화', '업무 자동화', '업무 효율화', 'AI Agent', 'AI 솔루션', '업무 자동화 서비스'],
  authors: [{ name: 'AXMOS' }],
  creator: 'AXMOS',
  publisher: 'AXMOS',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://axmos-homepage.vercel.app',
    siteName: 'AXMOS',
    title: 'AXMOS - 3주 안에 AI 업무 자동화 구현',
    description: 'AI 도입이 아니라, 업무를 줄이는 실행을 합니다. 3주 안에 AI Agent로 업무 자동화를 완성하세요.',
    images: [
      {
        url: 'https://axmos-homepage.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AXMOS - AI 업무 자동화',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AXMOS - 3주 안에 AI 업무 자동화 구현',
    description: 'AI 도입이 아니라, 업무를 줄이는 실행을 합니다.',
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
      </body>
    </html>
  );
}
