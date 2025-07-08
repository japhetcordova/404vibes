const express = require('express');
const app = express();
const PORT = 8383;

// MIDDLEWARE TO PARSE JSON IN POST REQUESTS
app.use(express.json());

// SAMPLE DATA
const data = ['Jason'];

// ROUTE: /GREET WITH OPTIONAL QUERY PARAMETER
app.get('/greet', (req, res) => {
    const name = req.query.name;
    if (name) {
        return res.send(`Hello ${name}`);
    }
    res.send("THIS IS THE GREET PAGE");
});

// ROUTE: ROOT - RETURNS STATIC HTML CONTENT WITH DATA
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8"><title>Home</title></head>
        <body>
            <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
        </body>
        </html>
    `);
});

// ROUTE: /MATHEMATICS
app.get('/Mathematics', (req, res) => {
    res.send("THIS IS MATHEMATICS ROUTE");
});

// ROUTE: /SCIENCE
app.get('/Science', (req, res) => {
    res.send("THIS IS SCIENCE ROUTE");
});

// ROUTE: /ENGLISH
app.get('/English', (req, res) => {
    res.send("THIS IS ENGLISH ROUTE");
});

// ROUTE: /JSON - RETURNS JSON DATA
app.get('/json', (req, res) => {
    res.json({ subject: "AP", level: "easy" });
});

// ROUTE: /SAMPLE WITH DYNAMIC PARAMETERS
app.get('/sample/:name/:year/:program', (req, res) => {
    const { name, year, program } = req.params;
    res.send(`HELLO ${name}! YEAR: ${year}, PROGRAM: ${program}`);
});

// ROUTE: GET ALL DATA FROM /API/DATA
app.get('/api/data', (req, res) => {
    console.log("THIS ROUTE IS RESPONSIBLE FOR GETTING DATA");
    res.send(data);
});

// ROUTE: POST NEW DATA TO /API/DATA
app.post('/api/data', (req, res) => {
    const newData = req.body;
    if (!newData.name) {
        return res.status(400).send("MISSING 'NAME' IN REQUEST BODY");
    }
    data.push(newData.name);
    console.log("NEW USER ADDED:", newData.name);
    res.sendStatus(201);
});

// ROUTE: DELETE DATA FROM /API/DATA
app.delete('/api/data', (req, res) => {

    if(data.length === 0){
        return res.status(404).send("NO DATA TO BE REMOVED.");
    }

    const removed = data.pop();
    console.log(`${removed} HAS BEEN REMOVED`)
    res.sendStatus(200);
})

// START THE SERVER
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT: http://localhost:${PORT}`);
});
