# Multi-stage

FROM node:12.16-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install && yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# FROM node:12.16-alpine
# RUN npm install -g http-server
# RUN yarn global add http-server
# WORKDIR /app
# COPY package.json yarn.lock ./
# RUN npm install
# RUN yarn install && yarn cache clean
# COPY . .
# RUN npm run build
# RUN yarn build
# EXPOSE 8080
# CMD [ "http-server", "dist" ]