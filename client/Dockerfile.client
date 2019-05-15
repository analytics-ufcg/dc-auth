# build stage
FROM node:10-alpine

WORKDIR /app
COPY *.js* ./
RUN yarn install

EXPOSE 8080
CMD yarn run serve
