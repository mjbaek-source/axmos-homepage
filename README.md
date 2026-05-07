# AXMOS 공식 홈페이지

AI 도입이 아니라, 업무를 줄이는 실행을 합니다.

## 기술 스택

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## 프로젝트 구조

```
axmos-homepage/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 페이지
│   ├── ax-build/
│   │   └── page.tsx        # AX Build 상세 페이지
│   ├── ax-grow/
│   │   └── page.tsx        # AX Grow 상세 페이지
│   ├── contact/
│   │   └── page.tsx        # 파트너십 신청 페이지
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # 신청 폼 API
│   └── globals.css
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── public/
│   └── images/             # 로고, 이미지 파일
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 로컬 개발

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

`http://localhost:3000`에서 확인할 수 있습니다.

### 3. 빌드

```bash
npm run build
npm run start
```

## GitHub 업로드 가이드

### 1. GitHub에 새 레포지토리 생성

1. [github.com](https://github.com)에 로그인
2. 우측 상단 "+" → "New repository" 클릭
3. Repository name: `axmos-homepage`
4. "Create repository" 클릭

### 2. 로컬에서 Git 초기화

```bash
cd ~/Downloads/axmos-homepage
git init
git add .
git commit -m "Initial commit: AXMOS 홈페이지 첫 배포"
git branch -M main
git remote add origin https://github.com/[당신의사용자명]/axmos-homepage.git
git push -u origin main
```

(`[당신의사용자명]`을 실제 GitHub 사용자명으로 바꾸세요. 예: mjbaek-source)

## Vercel 배포 가이드

### 1. Vercel 로그인

https://vercel.com/signup에서 GitHub으로 로그인

### 2. 프로젝트 import

1. "Add New" → "Project" 클릭
2. "Import Git Repository"에서 `axmos-homepage` 선택
3. "Import" 클릭

### 3. 설정

- Framework Preset: **Next.js**
- Build Command: **npm run build** (자동)
- Output Directory: **.next** (자동)

### 4. Deploy

"Deploy" 버튼 클릭하면 자동으로 배포됩니다!

배포 완료 후:
- 무료 Vercel 도메인: `https://axmos-homepage.vercel.app`
- 커스텀 도메인 추가 가능 (Settings → Domains)

## 환경 변수 설정

`.env.local` 파일 생성 (배포 후):

```env
CONTACT_EMAIL=axmos@codepresso.io
```

## 페이지별 내용

### 메인 페이지 (`/`)
- 10개 섹션
- Hero + 문제 + 성과 + 사례 + 차별점 + 자동화 영역 + 두 가지 시작 방법 + 프로세스 + FAQ + CTA

### AX Build (`/ax-build`)
- 구축형 서비스 상세
- 프로세스 설명
- 신청하기 버튼

### AX Grow (`/ax-grow`)
- 교육형 서비스 상세
- 프로세스 설명
- 신청하기 버튼

### 파트너십 신청 (`/contact`)
- 신청 폼 (회사명, 담당자, 이메일, 휴대폰, 관심 트랙, 자동화 업무)
- 폼 제출 → axmos@codepresso.io로 전송

## 지원

문의: axmos@codepresso.io
