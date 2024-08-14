FROM node:20-alpine

RUN npm i -g pnpm

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --shamefully-hoist

COPY . .

RUN npx prisma generate

RUN pnpm build

CMD ["pnpm", "start:migrate:prod"]
