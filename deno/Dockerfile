FROM denoland/deno:alpine-1.42.0
WORKDIR /app

COPY . .

ENV NODE_ENV=production

RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["sh", "./entrypoint.sh"]
