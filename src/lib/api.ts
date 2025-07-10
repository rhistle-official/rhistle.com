import { post } from "@/lib/type";

function getApiUrl(path: string) {
  if (typeof window === "undefined") {
    // 서버 환경: 절대경로 필요
    const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    return base + path;
  }
  // 클라이언트 환경: 상대경로
  return path;
}

// 언론
export async function fetchPostsMedia(page: string, q?: string) {
  let url = `/api/media?page=${page}`;
  if (q) {
    url += `&q=${encodeURIComponent(q)}`;
  }
  const response = await fetch(getApiUrl(url));
  const data = await response.json();
  
  const items = data.rows || data; // rows가 없을 수도 있으니 대응
  const size = 10;
  const number = Number(page) - 1;

  // 프론트에서 강제 페이지네이션
  const sliced = items.slice(number * size, (number + 1) * size);

  return {
    content: sliced,
    size,
    number,
    totalElements: items.length,
  };
}

export async function fetchPosts(page: string, q?: string) {
  let url = `/api/notice?page=${page}`;
  if (q) {
    url += `&q=${encodeURIComponent(q)}`;
  }
  const response = await fetch(getApiUrl(url));
  const data = await response.json();
  return {
    content: data.rows,
    size: 10,
    number: Number(page) - 1,
    totalElements: data.total,
  };
}

export async function dynamicFetchPost(id: number) {
  const response = await fetch(getApiUrl(`/api/notice?id=${id}`));
  const detailPost: post = await response.json();
  return { detailPost };
}

// 언론 등록
export async function createMedia(
  {
    title,
    date,
    press,
    link,
  }: {
    title: string;      // 제목
    date: string;       // 날짜
    press: string;      // 언론사
    link: string;       // 기사 링크
  },
  auth: string,          // 인증 토큰
) {
  const response = await fetch(getApiUrl("/api/media"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": auth,
    },
    body: JSON.stringify({
      title,
      date,
      press,
      link,
    }),
  });
  return response.json();
}

// 등록
export async function createNotice({ title, content }: { title: string; content: string }, auth: string) {
  const response = await fetch(getApiUrl("/api/notice"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": auth,
    },
    body: JSON.stringify({ title, content }),
  });
  return response.json();
}

// 수정
export async function updateNotice(id: string, { title, content }: { title: string; content: string }, auth: string) {
  const response = await fetch(getApiUrl("/api/notice"), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": auth,
    },
    body: JSON.stringify({ id, title, content }),
  });
  return response.json();
}

// 단일 게시물 조회
export async function getNoticeById(id: string) {
  const response = await fetch(getApiUrl(`/api/notice?id=${id}`));
  return response.json();
}

// 삭제
export async function deleteNotice(id: number, auth: string) {
  const response = await fetch(getApiUrl(`/api/notice?id=${id}`), {
    method: "DELETE",
    headers: {
      "Authorization": auth,
    },
  });
  return response.json();
}