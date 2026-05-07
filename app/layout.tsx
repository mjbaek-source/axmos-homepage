import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AXMOS - AI 업무 자동화',
  description: 'AI 도입이 아니라, 업무를 줄이는 실행을 합니다',
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
