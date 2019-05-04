FROM node:alpine

RUN mkdir /usr/app
WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn
RUN yarn db:migrate

COPY . ./

EXPOSE 3000

CMD yarn start
