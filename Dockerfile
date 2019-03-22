FROM node:11.12.0-alpine

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN yarn install
