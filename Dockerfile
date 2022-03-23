FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install 

EXPOSE 4200 

CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0 --disable-host-check