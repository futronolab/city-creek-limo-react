# pull the base image. #Download base image ubuntu 20.04
FROM ubuntu:20.04

# Info about the custom image
LABEL maintainer="jacobthewest@gmail.com"
LABEL version="0.1"
LABEL description="This is a custom Docker Image for \
react development for City Creek Limo."

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get -y install nodejs
RUN apt-get -y install npm
RUN apt-get -y install git
RUN apt-get -y install vim
RUN npm install
RUN npm install react-router-dom
# Install material UI as CSS framework
RUN npm install @material-ui/core
RUN npm install @material-ui/icons
# Install nodemon globally
RUN npm install -g nodemon
# Install nodemon as a development dependency
RUN npm install --save-dev nodemon
# Fixes nodemon dependencies 
RUN npm audit fix

# add app
COPY . ./

# start app. You can have only one CMD
CMD ["echo", "City Creek Limo React image created"]
