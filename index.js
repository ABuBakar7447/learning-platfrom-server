const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const coursedata = require('./data/coursedata.json');

const coursedetails = require('./data/detailscourse.json')

const DetailsById = require('./data/detailscourse.json')





app.get('/', (req, res) =>{
    res.send('Api Running')
});

app.get('/course-data', (req, res) =>{
    res.send(coursedata)
});

app.get('/course/:id', (req, res) =>{
    const id = req.params.id
    const seletedCourse = coursedetails.find(n =>n.id === id)
    res.send(seletedCourse)
    
})
app.get('/premium/:id', (req, res) =>{
    const id = req.params.id
    const seletedCourse = coursedetails.find(n =>n.course_id === id)
    res.send(seletedCourse)
    
})

app.listen(port, () =>{
    console.log('Server runing on port', port)
})