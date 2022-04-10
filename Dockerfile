FROM node:alpine
WORKDIR /usr/app

RUN npm install --global pm2

COPY ./package*.json ./
RUN npm install --production
COPY ./ ./
RUN npm run build

EXPOSE 3000

CMD [ "pm2-runtime", "npm", "--", "start" ]
