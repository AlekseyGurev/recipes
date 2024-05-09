FROM node:18
WORKDIR /usr/src/app.
COPY . .

RUN cd frontend && yarn install
RUN cd frontend && yarn build
RUN cd server && yarn install

EXPOSE 3000

CMD ["node", "server/server"]