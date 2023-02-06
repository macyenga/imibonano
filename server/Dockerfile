# syntax=docker/dockerfile:1
FROM node:15.0-alpine
WORKDIR /sever
COPY . .
RUN yarn install --production
CMD ["node", "src/index.ts"]
EXPOSE 3000