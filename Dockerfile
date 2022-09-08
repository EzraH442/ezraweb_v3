FROM node:alpine
WORKDIR /usr/app

RUN npm install --global pm2

COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install --production
RUN yarn add --dev typescript @types/react @types/node
COPY ./ ./
RUN yarn build

EXPOSE 3000

CMD [ "pm2-runtime", "yarn", "--", "start" ]
