FROM node:15-alpine

WORKDIR /app

RUN apk --no-cache add --virtual builds-deps build-base python

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "run", "start"]