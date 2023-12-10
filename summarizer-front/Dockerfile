FROM node:18 as build-stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g @ionic/cli
RUN npx ionic build


FROM nginx:1.16-alpine as production-stage
COPY --from=build-stage /usr/src/app/www/* /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
