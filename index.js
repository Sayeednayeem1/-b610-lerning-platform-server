const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json');

const details = require('./data/details.json');

app.get('/', (req, res) => {
    res.send('Hello World! This is my server side')
});

app.get('/language-categories', (req, res) => {
    res.send(categories);
});

app.get('/details', (req, res) =>{
    res.send(details);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id == '07') {
        res.send(details);
    }
    else {
        const category_details = details.filter(d => d.category_id == id);
        res.send(category_details);
    }
});

app.get('/details/:id', (req, res) => {

    const id = req.params.id;
    console.log(req.params);
    const selectedDetails = details.find(d => d._id == id);
    res.send(selectedDetails);
});

app.listen(port, () => {
    console.log('server is running on port: ', port);
})