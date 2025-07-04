import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// ────────────────────────────────────────────────
// Next.js 기본 설정 + 국제화 플러그인(next-intl)
// + 내부 백엔드(dev-backend:8080)로 리버스 프록시
// ────────────────────────────────────────────────

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // 브라우저 → /api/* 요청 시 컨테이너 내부 백엔드로 프록시
        source: "/api/:path*",
        destination: "http://dev-backend:8080/api/:path*",
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
