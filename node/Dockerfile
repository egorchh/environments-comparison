FROM node:21-alpine
WORKDIR /app

COPY . .

ENV NODE_ENV=production

RUN npm ci

RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["sh", "./entrypoint.sh"]
