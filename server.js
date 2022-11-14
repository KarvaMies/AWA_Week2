let hello = {msg: "Hello world"}

const express = require("express");
const os = require("os")
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!!</h1>");
});

app.get("/hello", (req, res) => {
    res.json(hello)
})

app.get("/echo/:id", (req, res) => {
    let obj = {id: req.params.id}
    res.send(obj);
});

app.listen(port, () => console.log("Server is listening port " + port + "!"));


/*
const http = require("http")

console.log("Server is running...")

http.createServer(function(req, res) {
    res.write("Hello World!");
    res.end();
    console.log("Browser has reached us!")
}).listen(3000);
*/