const express = require('express');

const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req,res) => {
    res.send("getting root");
});



app.get('/profile',(req,res) => {

    res.send("geting profile");
});

app.post('/profile',(req,res) => {

    console.log(req.body);
    res.send('success');
});





app.listen(3000);