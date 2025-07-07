const express = require('express');
const app = express();
const PORT = 8383;

const message = "Welcome to homepage!";

app.get('/', (req, res) => {
    res.send(message);
})

app.get('/Mathematics', (req, res) => {
    res.send("This is Mathematics route");
})

app.get('/Science', (req, res) => {
    res.send("This is Science route");
})

app.get('/English', (req, res) => {
    res.send("This is English route");
})

app.get('/json', (req, res) => {
    res.json({ subject: "AP", level: "easy"});
})



app.listen(PORT, console.log(`Server is running at: ${PORT}`));