import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
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
    url: 'https://axmos-homepage.vercel.app',
    siteName: 'AXMOS',
    title: 'AXMOS — The AI Operating System for Korean Enterprises',
    description: '기존 시스템과 도구는 그대로. AXMOS가 연결하고 자동화합니다. 3주 안에 가시적인 결과를 만듭니다.',
    images: [
      {
        url: 'https://axmos-homepage.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AXMOS — AI Operating System',
      },
    ],
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
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Hotjar */}
        {process.env.NEXT_PUBLIC_HOTJAR_ID && (
          <Script id="hotjar" strategy="afterInteractive">
            {`
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </Script>
        )}
      </head>
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
