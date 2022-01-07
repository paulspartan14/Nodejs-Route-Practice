FROM node:12-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

USER node

EXPOSE ${PORT}

CMD ["npm", "start"]