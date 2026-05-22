type LogoProps = {
  variant?: 'dark' | 'light';
  className?: string;
};

// AX.presso 워드마크 — code.presso 패밀리 육각형 마크 + 스피드라인 X(질주감) + 네이비→시안→틸 그라데이션
export default function Logo({ variant = 'dark', className = 'h-9 w-auto' }: LogoProps) {
  const axColor = variant === 'dark' ? '#ffffff' : '#15294F';
  const streak = variant === 'dark' ? '#7FF2F2' : '#2E75B6';

  return (
    <svg
      viewBox="0 0 660 150"
      className={className}
      role="img"
      aria-label="AX.presso"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="axpGrad" gradientUnits="userSpaceOnUse" x1="0" y1="75" x2="640" y2="75">
          <stop offset="0%" stopColor="#15294F" />
          <stop offset="38%" stopColor="#2456A0" />
          <stop offset="70%" stopColor="#1FA6C0" />
          <stop offset="100%" stopColor="#12C7B0" />
        </linearGradient>
        <filter id="axpBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>

      {/* 육각형 마크 (code/match.presso 패밀리) — 상향 화살표 = 가속 */}
      <g transform="translate(2,30)">
        <path
          fill="url(#axpGrad)"
          fillRule="evenodd"
          d="M 42 6 L 6 27 L 6 68 L 19 75.58 L 19 34.42 L 42 21 L 65 34.42 L 65 60.58 L 42 74 L 42 89 L 78 68 L 78 27 Z M 42 31 L 57 49 L 49.5 49 L 42 40 L 34.5 49 L 27 49 Z"
        />
      </g>

      {/* 워드마크 */}
      <text
        x="108"
        y="112"
        fontFamily="Poppins, 'Segoe UI', system-ui, sans-serif"
        fontSize="104"
        letterSpacing="-3"
      >
        <tspan fill={axColor} fontWeight="700">AX</tspan>
        <tspan fill="url(#axpGrad)" fontWeight="600">.presso</tspan>
      </text>

      {/* 역동적 X 스피드 라인 (질주감) */}
      <g className="logo-streaks" filter="url(#axpBlur)" strokeLinecap="round">
        <line x1="176" y1="116" x2="262" y2="2"  stroke={streak} strokeOpacity="0.9" strokeWidth="7" />
        <line x1="196" y1="118" x2="276" y2="12" stroke={streak} strokeOpacity="0.5" strokeWidth="5" />
        <line x1="214" y1="120" x2="288" y2="24" stroke={streak} strokeOpacity="0.28" strokeWidth="4" />
        <line x1="160" y1="114" x2="214" y2="44" stroke={streak} strokeOpacity="0.38" strokeWidth="3" />
      </g>
    </svg>
  );
}
