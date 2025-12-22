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
        destination: "http://localhost:3000/api/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // 에디터 라이브러리 필요
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; ')
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ];
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
