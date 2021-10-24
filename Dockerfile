FROM node AS ui
WORKDIR /usr/src/ui
COPY ui .
RUN npm i
RUN npm run build

FROM alpine AS PRODUCTION
LABEL maintainer="igrass97@gmail.com"
RUN apk add --update nodejs npm
COPY /server /src
WORKDIR /src
RUN npm i
WORKDIR /src/ui-build
COPY --from=ui /usr/src/ui/build .
EXPOSE 3000
WORKDIR /src
ENTRYPOINT [ "node", "app.js" ]