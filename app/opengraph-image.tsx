import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AXMOS — The AI Operating System for Korean Enterprises';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

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
          background: '#0a0a0a',
          backgroundImage:
            'radial-gradient(circle at 78% 18%, rgba(46,117,182,0.28), transparent 55%)',
          padding: '90px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 8,
            color: '#2E75B6',
            textTransform: 'uppercase',
          }}
        >
          Enterprise AI Operating System
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 150,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1,
            marginTop: 28,
          }}
        >
          AXMOS
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 44,
            fontWeight: 600,
            color: '#a3a3a3',
            marginTop: 28,
            maxWidth: 900,
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
            marginTop: 44,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
