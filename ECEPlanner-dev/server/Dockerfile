FROM node:latest

RUN mkdir -p /server
WORKDIR /server

COPY package*.json /server

RUN npm install

COPY . /server

ENTRYPOINT ["tail"]
CMD ["-f","/dev/null"]