FROM node:18-alpine3.15

RUN mkdir "abzTest"

WORKDIR abzTest

COPY . .

RUN npm install

EXPOSE 3000

CMD npm start
