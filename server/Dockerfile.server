FROM node:10-alpine

WORKDIR /app

COPY package* ./

RUN yarn install

EXPOSE 5000

CMD yarn run server