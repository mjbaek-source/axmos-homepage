import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
