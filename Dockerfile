# 1단계: 빌드 단계

FROM node:lts-alpine AS builder

WORKDIR /app

# package.json과 lock 파일 복사 후 의존성 설치
RUN apk add --no-cache python3 make g++ sqlite-dev

COPY package.json package-lock.json* ./

RUN npm install --legacy-peer-deps

COPY .env .env
# 전체 소스 복사 및 빌드
COPY . .
RUN npm run build

# 2단계: 실행 단계
FROM node:lts-alpine

WORKDIR /app

# 실행에 필요한 파일만 복사
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env .env

EXPOSE 3000

CMD ["npm", "run", "start"]
