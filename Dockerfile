FROM node:20-alpine

WORKDIR /app

COPY index.js .

COPY package*.json ./

RUN npm install

COPY prisma ./prisma/

RUN npx prisma generate


COPY . .


CMD ["node","index.js"]

