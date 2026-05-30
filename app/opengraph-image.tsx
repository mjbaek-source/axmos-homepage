import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AXMOS — The AI Operating System for Korean Enterprises';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// 동일 도메인의 실제 로고 PNG를 OG 카드에 임베드 (역동적 X + 네이비→시안 그라데이션 보존)
const LOGO_URL = 'https://axmos-legacy.vercel.app/logo.png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: '#FAF7F0',
          backgroundImage:
            'radial-gradient(circle at 88% 12%, rgba(46,117,182,0.10), transparent 55%)',
          padding: '90px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 8,
            color: '#15294F',
            textTransform: 'uppercase',
          }}
        >
          Enterprise AI Operating System
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={LOGO_URL}
          width={780}
          height={202}
          alt="AXMOS"
          style={{ marginTop: 32 }}
        />

        <div
          style={{
            display: 'flex',
            fontSize: 42,
            fontWeight: 600,
            color: '#404040',
            marginTop: 36,
            maxWidth: 1000,
          }}
        >
          The AI Operating System for Korean Enterprises
        </div>

        <div
          style={{
            display: 'flex',
            width: 120,
            height: 6,
            background: '#2E75B6',
            marginTop: 40,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
