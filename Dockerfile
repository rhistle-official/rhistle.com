# 1단계: 빌드 단계

FROM node:lts-alpine AS builder

WORKDIR /app

# better-sqlite3 빌드를 위한 빌드 도구 설치
RUN apk add --no-cache python3 make g++

# package.json과 lock 파일 복사 후 의존성 설치
RUN apk add --no-cache python3 make g++ sqlite-dev

COPY package.json package-lock.json* ./

RUN npm install --legacy-peer-deps

# .env 파일 복사 (있는 경우만)
COPY .env* ./

# 필요한 소스 파일만 명시적으로 복사 (보안 강화)
COPY src ./src
COPY public ./public
COPY messages ./messages
COPY next.config.ts ./
COPY tsconfig.json ./
COPY postcss.config.mjs ./
COPY components.json ./
COPY biome.json ./

# 빌드 실행
RUN npm run build

# 2단계: 실행 단계
FROM node:lts-alpine

# 보안: 비특권 사용자 생성 및 사용
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

WORKDIR /app

# 실행에 필요한 파일만 복사
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env* ./

# 소유권 변경 (보안 강화)
RUN chown -R nextjs:nodejs /app

# 비특권 사용자로 전환
USER nextjs

EXPOSE 3000

# 보안: 환경 변수로 불필요한 기능 비활성화
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["npm", "run", "start"]
