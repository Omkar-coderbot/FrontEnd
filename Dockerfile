  
FROM node:latest AS builder


WORKDIR app


COPY package*.json ./



RUN npm install


COPY . .

RUN pwd

RUN  npm run build


FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html


EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]
