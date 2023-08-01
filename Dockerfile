
FROM node:16 AS build-stage

WORKDIR /app

COPY package*.json ./


RUN npm install


COPY . .


RUN npm run build --prod


FROM nginx:latest


COPY --from=build-stage /app/dist/omkarproject /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
