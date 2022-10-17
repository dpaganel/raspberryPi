const express = require('express')
var path = require('path');
let fs = require('fs');
const { response } = require('express');

const app = express()
const port = 3000

//prepare to serve static data
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, 'public/csv_graph.html'));       
    } catch (error) {
        console.log(error.message);
    }
    /*
    fs.readFile('public/dynamic_canvas_demo.html', null, function (error, data) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('Should see some graph now...');
            res.sendFile(data);
            console.log('Done!');
        }
    });
    */
});

app.get('/csv', (req, res) => {
    console.log("Got a GET REQUEST, lets send this badboy");
    try {
        res.sendFile(path.join(__dirname, 'public/smoke.tsv'));
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
* http://localhost:3000/
*/

