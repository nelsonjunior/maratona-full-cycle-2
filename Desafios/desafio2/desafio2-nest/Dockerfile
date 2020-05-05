FROM node:12.14.0-alpine3.11

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ .

RUN npm run build

CMD ["npm", "run", "start:prod"]