FROM ubuntu:trusty
ENV TERM=xterm-256color
RUN apt-get update && \
    apt-get install curl -y && \
    curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash - && \
    apt-get install nodejs -y
    
COPY . /app
WORKDIR /app

RUN npm install -g mocha && \
    npm install 

ENTRYPOINT ["mocha"]

