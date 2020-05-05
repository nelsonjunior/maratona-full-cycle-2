FROM node:14.1-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD ["node", "server.js"]