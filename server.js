const express = require('express');
const path = require('path'); 
const app = express();
const PORT = 8383;

const message = "Welcome to homepage!";

app.get('/greet', (req, res) => {
    const name = req.query.name;
    if(name){
        res.send(`Hello ${name}`);
    }
    res.send("This is greet page");
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/cal', (req, res) =>{
    // request
    const {a, b, c, d} = req.params;
    let sum = a + b + c + d;

    // response
    res.send(`The sum of ${a}, ${b}, ${c}, and ${d} is ${sum}`)
})

app.get('/loop', (req, res) =>{
    // request
    const num = Number(req.query.num);
    for(let i = 0 ; i <= num ; i++){
        // response
        res.send(i)
    }
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

app.get('/sample/:name/:year/:program', (req, res) => {
    const { name, year, program }= req.params;

    res.send(`Hello ${name}! Year: ${year}`)
})





app.listen(PORT, console.log(`Server is running at: ${PORT}`));