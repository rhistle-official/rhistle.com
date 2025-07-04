import { NextRequest, NextResponse } from "next/server";
import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const dbPath = path.join(process.cwd(), "data", "app.db");
if (!fs.existsSync(path.dirname(dbPath))) {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
}
const db = new Database(dbPath);

db.prepare(`
  CREATE TABLE IF NOT EXISTS media (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    date TEXT NOT NULL,
    press TEXT NOT NULL,
    summary TEXT,
    link TEXT,
    thumbnail TEXT
  )
`).run();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);

  let where = "";
  let params: any[] = [];
  if (q) {
    where = "WHERE title LIKE ? OR summary LIKE ? OR press LIKE ?";
    params = [`%${q}%`, `%${q}%`, `%${q}%`];
  }

  const totalRow = db.prepare(`SELECT COUNT(*) as cnt FROM media ${where}`).get(...params) as { cnt: number };
  const total = totalRow ? totalRow.cnt : 0;
  const offset = (page - 1) * pageSize;
  const rows = db.prepare(
    `SELECT * FROM media ${where} ORDER BY date DESC LIMIT ? OFFSET ?`
  ).all(...params, pageSize, offset);

  return NextResponse.json({ total, rows });
}

export async function POST(req: NextRequest) {
  const body = await req.json() as {
    title: string;
    date: string;
    press: string;
    summary: string;
    link: string;
    thumbnail: string;
  };
  const { title, date, press, summary, link, thumbnail } = body;
  const stmt = db.prepare(
    "INSERT INTO media (title, date, press, summary, link, thumbnail) VALUES (?, ?, ?, ?, ?, ?)"
  );
  const info = stmt.run(title, date, press, summary, link, thumbnail);
  return NextResponse.json({ id: info.lastInsertRowid });
} 