FROM oven/bun:1.1.2-alpine
WORKDIR /app

COPY . .

ENV NODE_ENV=production

RUN bun install --silent

RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["sh", "./entrypoint.sh"]
