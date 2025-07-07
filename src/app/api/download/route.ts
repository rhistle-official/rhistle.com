import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('file');

  if (!filename) {
    return NextResponse.json({ error: '파일명이 필요합니다.' }, { status: 400 });
  }

  // 허용된 파일 목록
  const allowedFiles = ['corecode_kr.pdf', 'corecode_suite.pdf', 'Reference.pdf'];
  
  if (!allowedFiles.includes(filename)) {
    return NextResponse.json({ error: '허용되지 않은 파일입니다.' }, { status: 403 });
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'pdf', filename);
    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('파일 다운로드 오류:', error);
    return NextResponse.json({ error: '파일을 찾을 수 없습니다.' }, { status: 404 });
  }
} 