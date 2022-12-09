FROM node:17-alpine

WORKDIR /home/client_node/app

COPY package*.json ./
RUN npm install

COPY . ./

CMD [ "npm", "run", "dev" ]