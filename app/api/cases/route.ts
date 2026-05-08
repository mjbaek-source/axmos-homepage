import { NextResponse } from 'next/server';
import { getCases } from '@/lib/notion';

export async function GET() {
  try {
    const cases = await getCases();
    return NextResponse.json(cases, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Cases API error:', error);
    return NextResponse.json(
      { error: '사례 데이터를 가져올 수 없습니다' },
      { status: 500 }
    );
  }
}
