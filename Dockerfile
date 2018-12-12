FROM node:8.14.0-alpine

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
