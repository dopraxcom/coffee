FROM golang:1.16-alpine

RUN mkdir /app
WORKDIR /app/backend
COPY ./backend /app/backend

RUN go mod download
RUN go build -o /icoffee
EXPOSE 9006

CMD ["/icoffee"]