const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("static"));
app.use(express.json());

let wordList =[];

app.get("/list", (req, res) => {
    res.json({ list: wordList });
});

app.post("/list", (req, res) => {
    const text = req.body.text;
    wordList.push(text);
    res.json({ list: wordList });
})

app.get("/", (req, res) => {
    res.send("<h1>Hello World!!</h1>");
});

app.get("/hello", (req, res) => {
    res.json({msg: "Hello world"})
})

app.get("/echo/:id", (req, res) => {
    let obj = {id: req.params.id}
    res.send(obj);
});

app.get("/sum", (req, res) => {
    res.send([1, 2, 3])
})

app.post("/sum", (req, res) => {
    const numbers = req.body.numbers;
    
    if (!Array.isArray(numbers)) {
        res.status(400).json({ error: "Invalid input. 'numbers' must be an array."})
        return;
    }

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    res.json({ sum: sum});
})

app.listen(port, () => console.log("Server is listening port " + port + "!"));