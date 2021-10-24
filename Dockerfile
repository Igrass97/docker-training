FROM alpine

LABEL maintainer="igrass97@gmail.com"

RUN apk add --update nodejs npm

COPY . /src

WORKDIR /src

RUN npm i

EXPOSE 3000

ENTRYPOINT [ "node", "app.js" ]