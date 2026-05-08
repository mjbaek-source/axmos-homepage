import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'axmos@codepresso.io';

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

    // 관리자에게 보낼 이메일
    const adminEmailResult = await resend.emails.send({
      from: 'AXMOS <noreply@axmos.co>',
      to: CONTACT_EMAIL,
      subject: `[AXMOS] 새로운 파트너십 신청: ${company}`,
      html: `
        <h2>새로운 파트너십 신청</h2>
        <p><strong>회사명:</strong> ${company}</p>
        <p><strong>담당자명:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>연락처:</strong> ${phone || '입력 안됨'}</p>
        <p><strong>관심 분야:</strong> ${track}</p>
        <p><strong>자동화 영역:</strong> ${task}</p>
        <hr />
        <p>관리 페이지: <a href="https://axmos-homepage.vercel.app/admin">AXMOS Admin</a></p>
      `,
    });

    if (adminEmailResult.error) {
      console.error('Admin email error:', adminEmailResult.error);
      return NextResponse.json(
        { error: '이메일 발송에 실패했습니다' },
        { status: 500 }
      );
    }

    // 사용자에게 보낼 확인 이메일
    const userEmailResult = await resend.emails.send({
      from: 'AXMOS <noreply@axmos.co>',
      to: email,
      subject: 'AXMOS 파트너십 신청이 접수되었습니다',
      html: `
        <h2>${name}님, 안녕하세요!</h2>
        <p>AXMOS 파트너십 신청을 위해 문의해주셔서 감사합니다.</p>
        <p>귀사의 신청 정보:</p>
        <ul>
          <li><strong>회사명:</strong> ${company}</li>
          <li><strong>관심 분야:</strong> ${track}</li>
          <li><strong>자동화 영역:</strong> ${task}</li>
        </ul>
        <p>당사의 팀이 곧 연락드리겠습니다. 감사합니다!</p>
        <hr />
        <p style="color: #666; font-size: 12px;">
          이 이메일은 자동으로 발송된 메일입니다. 회신하지 마세요.
        </p>
      `,
    });

    if (userEmailResult.error) {
      console.error('User email error:', userEmailResult.error);
    }

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
