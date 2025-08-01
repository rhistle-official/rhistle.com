import { NextResponse } from "next/server";
import { z, ZodError } from "zod";
import nodemailer from "nodemailer";

const InquirySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  rank: z.string().optional(),
  industry: z.string().optional(),
  detail: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = InquirySchema.parse(body);

    // nodemailer 설정
    const transporter = nodemailer.createTransport({
      service: "gmail", // 또는 smtp 설정
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 메일 내용 구성
    const mailOptions = {
      from: `"문의하기" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "새로운 문의가 도착했습니다",
      html: `
        <div style="font-family: 'Arial', sans-serif; padding: 16px; font-size: 14px;">
          <h2 style="color: #222;">📩 문의 내용</h2>
          <table cellpadding="8" style="border-collapse: collapse;">
            <tr>
              <td><strong>문의자</strong></td>
              <td>${parsed.name}</td>
            </tr>
            <tr>
              <td><strong>이메일</strong></td>
              <td>${parsed.email}</td>
            </tr>
            <tr>
              <td><strong>회사</strong></td>
              <td>${parsed.company}</td>
            </tr>
            <tr>
              <td><strong>직급</strong></td>
              <td>${parsed.rank}</td>
            </tr>
            <tr>
              <td><strong>업종</strong></td>
              <td>${parsed.industry}</td>
            </tr>
            <tr>
              <td><strong>문의 내용</strong></td>
              <td style="white-space: pre-line;">${parsed.detail}</td>
            </tr>
          </table>
        </div>
      `,
    };

    // 메일 전송
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "메일 전송 성공" }, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      console.error("❌ zod 입력 오류:", error.errors);
      // zod validation 에러일 경우: 클라이언트가 잘못한 것
      return NextResponse.json(
        { message: "입력값 오류", errors: error.errors }, // 상세 에러 포함 가능
        { status: 400 }
      );
    }

    // ✅ 그 외 오류: 서버 문제
    console.error("서버 오류:", error);
    return NextResponse.json({ message: "서버 오류" }, { status: 500 });
  }
}