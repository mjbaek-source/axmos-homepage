import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { company, name, email, phone, track, task } = body;

    if (!company || !name || !email || !track || !task) {
      return NextResponse.json(
        { error: '필수 항목을 모두 입력해주세요' },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL || 'axmos@codepresso.io';

    console.log('신청 정보:', { company, name, email, phone, track, task });

    return NextResponse.json(
      { success: true, message: '신청이 완료되었습니다' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다' },
      { status: 500 }
    );
  }
}
