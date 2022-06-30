FROM node:13.12-alpine
WORKDIR /
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build || true
CMD node dist/index.js
