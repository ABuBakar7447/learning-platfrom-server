const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const coursedata = require('./data/coursedata.json');


app.get('/', (req, res) =>{
    res.send('Api Running')
});

app.get('/course-data', (req, res) =>{
    res.send(coursedata)
})
app.listen(port, () =>{
    console.log('Server runing on port', port)
})