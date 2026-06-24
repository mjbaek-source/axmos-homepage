// 브랜드 설정 — Vercel 프로젝트별 NEXT_PUBLIC_BRAND 환경변수로 전환
//   (미설정/axmos) → AXMOS 브랜드,  axpresso → ax.presso 브랜드
// 같은 코드 한 벌로 두 도메인(axmos.ai / axpresso.ai)을 서로 다른 브랜드로 배포한다.

type BrandKey = 'axmos' | 'axpresso';

const KEY: BrandKey = process.env.NEXT_PUBLIC_BRAND === 'axpresso' ? 'axpresso' : 'axmos';

const CONFIG = {
  axmos: {
    key: 'axmos' as const,
    name: 'AXMOS',
    logo: '/logo.png',
    logoInvert: false, // 원본 색감(네이비→시안) 유지
  },
  axpresso: {
    key: 'axpresso' as const,
    name: 'ax.presso',
    logo: '/logo-axpresso.png',
    logoInvert: true, // 어두운 배경에서 흰색으로 표시
  },
} satisfies Record<BrandKey, { key: BrandKey; name: string; logo: string; logoInvert: boolean }>;

export const BRAND = CONFIG[KEY];
