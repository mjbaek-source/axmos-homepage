import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'growth@codepresso.kr';
const EMAIL_FROM = process.env.EMAIL_FROM || 'AXMOS <onboarding@resend.dev>';

interface ContactData {
  company: string;
  name: string;
  email: string;
  phone?: string;
  track: string;
  task: string;
}

async function sendEmail(data: ContactData) {
  if (!process.env.RESEND_API_KEY) {
    return { ok: false, skipped: true, reason: 'RESEND_API_KEY not set' };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const adminRow = (label: string, value: string) =>
      `<tr><td style="padding:8px 12px;border:1px solid #e5e5e5;background:#f8f9fa;font-weight:600;width:120px">${label}</td><td style="padding:8px 12px;border:1px solid #e5e5e5">${value}</td></tr>`;

    // Admin notification
    await resend.emails.send({
      from: EMAIL_FROM,
      to: CONTACT_EMAIL,
      replyTo: data.email,
      subject: `[AXMOS] New inquiry — ${data.company}`,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="color:#0a0a0a;margin:0 0 16px 0;font-size:24px">New partnership inquiry</h2>
          <p style="color:#737373;margin:0 0 24px 0">The company below requested a consultation with AXMOS.</p>
          <table style="border-collapse:collapse;width:100%;font-size:14px">
            ${adminRow('Company', data.company)}
            ${adminRow('Contact', data.name)}
            ${adminRow('Email', `<a href="mailto:${data.email}" style="color:#1F3864">${data.email}</a>`)}
            ${adminRow('Phone', data.phone || 'Not provided')}
            ${adminRow('Track', data.track)}
            ${adminRow('Workflow', data.task)}
          </table>
          <p style="color:#737373;margin:24px 0 0 0;font-size:12px">Received at: ${new Date().toUTCString()}</p>
        </div>
      `,
    });

    // User confirmation
    await resend.emails.send({
      from: EMAIL_FROM,
      to: data.email,
      subject: 'Your AXMOS inquiry has been received',
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="color:#0a0a0a;margin:0 0 16px 0">${data.name}, thank you for reaching out.</h2>
          <p style="color:#404040;line-height:1.6">Your AXMOS inquiry has been received.<br />A team member will reply within 2 business days.</p>
          <div style="border-left:3px solid #0a0a0a;padding:12px 16px;margin:24px 0;background:#f8f9fa">
            <p style="margin:0 0 8px 0;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:1px">Your submission</p>
            <p style="margin:0;color:#0a0a0a;font-weight:600">${data.company} · ${data.track}</p>
            <p style="margin:4px 0 0 0;color:#404040;font-size:14px">${data.task}</p>
          </div>
          <p style="color:#737373;font-size:12px;margin-top:32px;border-top:1px solid #e5e5e5;padding-top:16px">
            This message was sent automatically. Questions: ${CONTACT_EMAIL}
          </p>
        </div>
      `,
    });

    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
}

async function saveToSheets(data: ContactData) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    return { ok: false, skipped: true, reason: 'GOOGLE_SHEETS_WEBHOOK_URL not set' };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ...data,
      }),
    });

    if (!response.ok) {
      throw new Error(`Sheets webhook returned HTTP ${response.status}`);
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
}

async function saveToNotion(data: ContactData) {
  const notionKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!notionKey || !databaseId) {
    return { ok: false, skipped: true, reason: 'Notion credentials not set' };
  }

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${notionKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties: {
          Company: { title: [{ text: { content: data.company } }] },
          Contact: { rich_text: [{ text: { content: data.name } }] },
          Email: { email: data.email },
          Phone: data.phone ? { phone_number: data.phone } : { phone_number: null },
          Track: { select: { name: data.track } },
          Workflow: { rich_text: [{ text: { content: data.task } }] },
          Status: { select: { name: 'New' } },
        },
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Notion API returned HTTP ${response.status}: ${text}`);
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { company, name, email, phone, track, task } = body;

    if (!company || !name || !email || !track || !task) {
      return NextResponse.json(
        { error: 'Please complete all required fields' },
        { status: 400 }
      );
    }

    const data: ContactData = { company, name, email, phone, track, task };

    // Run all three integrations in parallel — any failure does not block others
    const [emailResult, sheetsResult, notionResult] = await Promise.all([
      sendEmail(data),
      saveToSheets(data),
      saveToNotion(data),
    ]);

    // Audit log — visible in `vercel logs` and Vercel dashboard
    console.log('[contact] submission', {
      data,
      results: {
        email: emailResult,
        sheets: sheetsResult,
        notion: notionResult,
      },
    });

    return NextResponse.json(
      { success: true, message: 'Inquiry submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[contact] error', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
