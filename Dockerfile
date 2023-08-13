FROM node:alpine
WORKDIR /usr/app

RUN npm install --global pm2
ARG SITEKEY
ARG POST_URL
ENV POST_URL=$POST_URL

COPY ./package.json ./
RUN npm install 
COPY ./ ./
RUN SITEKEY=$SITEKEY POST_URL=$POST_URL npm run build

EXPOSE 3000

CMD [ "pm2-runtime", "npm", "--", "start" ]
