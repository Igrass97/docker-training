# Docker training

## Build the image and run the container

    docker build -t containerize-me .
    docker run -d -p 3000:3000 containerize-me

## Server

Simple express server with two endpoints

    POST /notes
    GET /notes

...and a static serve of UI production code for the react application

    /ui-build

## UI

Simple react app to add and view notes. Consuming the two endpoints from the server.

## Notes

This is just a learning project for Docker and multi stage builds, don't expect the best practices nor a beautiful server/ui code.
First, I'm using the node image to build the production code for the react application.
Then, I'm using an alpine image to host the server and copying the production code from the other stage to /ui-build
