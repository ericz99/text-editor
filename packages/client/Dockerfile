FROM node:12-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn run build

FROM nginx:alpine

COPY --from=builder /usr/src/app/dist/ /usr/share/nginx/html

COPY proxy.conf /etc/nginx/conf.d/default.conf