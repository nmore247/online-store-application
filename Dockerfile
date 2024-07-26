FROM node:20.15.1 AS build

WORKDIR /app

COPY package*.json ./
#clean install dependancies
RUN npm ci 

RUN npm install -g @angular/cli

COPY . .

RUN npm run build --configuration=production

FROM nginx:latest

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/mock-store/browser /usr/share/nginx/html

EXPOSE 80
