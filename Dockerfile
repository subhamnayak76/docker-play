FROM node:20-alpine

WORKDIR /app

COPY index.js .

COPY package*.json ./

RUN npm install

COPY . .


CMD ["node","index.js"]

