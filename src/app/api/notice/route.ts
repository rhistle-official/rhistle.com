import { NextRequest, NextResponse } from "next/server";
import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import { cookies } from "next/headers";

const dbPath = path.join(process.cwd(), "data", "app.db");
if (!fs.existsSync(path.dirname(dbPath))) {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
}
const db = new Database(dbPath);

db.prepare(`
  CREATE TABLE IF NOT EXISTS notice (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    createdAt TEXT NOT NULL DEFAULT (datetime('now', 'localtime'))
  )
`).run();

// 관리자 인증 - 환경 변수 사용
function isAdmin(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) return false;
  const base64 = auth.replace("Basic ", "");
  const [id, pw] = Buffer.from(base64, "base64").toString().split(":");
  
  // 환경 변수에서 관리자 정보 가져오기
  const adminId = process.env.ADMIN_ID || "namooinc";
  const adminPw = process.env.ADMIN_PW || "namooinc101!";
  
  return id === adminId && pw === adminPw;
}

function checkAdminSession(req: NextRequest) {
  const cookie = req.cookies.get("admin_session");
  if (!cookie || cookie.value !== "1") {
    return false;
  }
  return true;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
  const id = searchParams.get("id");

  if (id) {
    // 상세
    const row = db.prepare("SELECT * FROM notice WHERE id = ?").get(id);
    if (!row) return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
    return NextResponse.json(row);
  }

  let where = "";
  let params: any[] = [];
  if (q) {
    where = "WHERE title LIKE ? OR content LIKE ?";
    params = [`%${q}%`, `%${q}%`];
  }
  const totalRow = db.prepare(`SELECT COUNT(*) as cnt FROM notice ${where}`).get(...params) as { cnt: number };
  const total = totalRow ? totalRow.cnt : 0;
  const offset = (page - 1) * pageSize;
  const rows = db.prepare(
    `SELECT * FROM notice ${where} ORDER BY createdAt DESC LIMIT ? OFFSET ?`
  ).all(...params, pageSize, offset);
  return NextResponse.json({ total, rows });
}

export async function POST(req: NextRequest) {
  if (!checkAdminSession(req)) {
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }
  const body = await req.json() as { title: string; content: string };
  const { title, content } = body;
  const stmt = db.prepare(
    "INSERT INTO notice (title, content) VALUES (?, ?)"
  );
  const info = stmt.run(title, content);
  return NextResponse.json({ id: info.lastInsertRowid });
}

export async function DELETE(req: NextRequest) {
  if (!checkAdminSession(req)) {
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID_REQUIRED" }, { status: 400 });
  db.prepare("DELETE FROM notice WHERE id = ?").run(id);
  return NextResponse.json({ ok: true });
}

export async function PATCH(req: NextRequest) {
  if (!checkAdminSession(req)) {
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }
  const body = await req.json() as { id: number; title: string; content: string };
  const { id, title, content } = body;
  db.prepare("UPDATE notice SET title = ?, content = ? WHERE id = ?").run(title, content, id);
  return NextResponse.json({ ok: true });
} 