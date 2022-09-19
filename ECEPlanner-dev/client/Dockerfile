FROM node:16

RUN mkdir /client
WORKDIR /client

COPY package*.json /client

RUN npm install

COPY . /client

EXPOSE 3000

ENTRYPOINT ["tail"]
CMD ["-f","/dev/null"]