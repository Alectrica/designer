FROM node:alpine as base
ENV PUID=1000
ENV PGID=1000
COPY . /usr/app

WORKDIR /usr/app
#https://stackoverflow.com/questions/9023672/how-do-i-resolve-cannot-find-module-error-using-node-js
RUN npm install bootstrap@v5.2.2
