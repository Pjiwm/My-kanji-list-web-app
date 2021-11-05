FROM node:latest
RUN mkdir -p /usr/src/app/
RUN chown -R node:node /usr/src/app/
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
RUN npm install -g @angular/cli@8.1.2
USER node