import { z, ZodError } from "zod";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 슬랙 메시지 생성
function buildSlackMessage({
  name,
  email,
  company,
  rank,
  industry,
  detail,
}: {
  name: string;
  email: string;
  company?: string;
  rank?: string;
  industry?: string;
  detail: string;
}) {
  const optionalLines = [
    company ? `🏢 *회사:* ${company}` : null,
    rank ? `💼 *직급:* ${rank}` : null,
    industry ? `🏭 *업종:* ${industry}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return `
📩 *새로운 문의가 접수되었습니다!*

👤 *이름:* ${name}
📧 *이메일:* ${email}
${optionalLines ? optionalLines + "\n" : ""}📝 *내용:* ${detail}
  `.trim();
}

// 슬랙 전송 함수
async function sendToSlack(message: string) {
  await fetch(process.env.SLACK_WEBHOOK_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: message }),
  });
}

// 입력값 검증 스키마
const InquirySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  rank: z.string().optional(),
  industry: z.string().optional(),
  detail: z.string().min(1),
});

// 🔧 POST 요청 처리
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = InquirySchema.parse(body);

    // 📧 메일 전송 설정
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📧 메일 내용
    const mailOptions = {
      from: `"문의하기" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "새로운 문의가 도착했습니다",
      html: `
        <div style="font-family: 'Arial', sans-serif; padding: 16px; font-size: 14px;">
          <h2 style="color: #222;">📩 문의 내용</h2>
          <table cellpadding="8" style="border-collapse: collapse;">
            <tr><td><strong>문의자</strong></td><td>${parsed.name}</td></tr>
            <tr><td><strong>이메일</strong></td><td>${parsed.email}</td></tr>
            ${parsed.company ? `<tr><td><strong>회사</strong></td><td>${parsed.company}</td></tr>` : ""}
            ${parsed.rank ? `<tr><td><strong>직급</strong></td><td>${parsed.rank}</td></tr>` : ""}
            ${parsed.industry ? `<tr><td><strong>업종</strong></td><td>${parsed.industry}</td></tr>` : ""}
            <tr><td><strong>문의 내용</strong></td><td style="white-space: pre-line;">${parsed.detail}</td></tr>
          </table>
        </div>
      `,
    };

    // 📧 메일 전송
    await transporter.sendMail(mailOptions);

    // 📩 슬랙 전송
    const slackMsg = buildSlackMessage(parsed);
    await sendToSlack(slackMsg);

    return NextResponse.json({ message: "메일 및 슬랙 전송 성공" }, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      console.error("❌ zod 입력 오류:", error.errors);
      return NextResponse.json(
        { message: "입력값 오류", errors: error.errors },
        { status: 400 }
      );
    }

    console.error("서버 오류:", error);
    return NextResponse.json({ message: "서버 오류" }, { status: 500 });
  }
}