let randomFunctions = require('./public/randomFunctions');

const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const compression = require('compression');

require('dotenv').config();

const app = express();

const APIKEY = process.env.APIKEY;

let characters = [
    {
        "name" : "Luke Skywalker",
        "mass" : "77",
        "gender" : "male"
    },
    {
        "name" : "Han Solo",
        "mass" : "80",
        "gender" : "male"
    },
    {
        "name" : "Anakin Skywalker",
        "mass" : "72",
        "gender" : "male"
    },
    {
        "name" : "Padme Amedala",
        "mass" : "60",
        "gender" : "female"
    },
    {
        "name" : "Mace Windu",
        "mass" : "79",
        "gender" : "male"
    },
    {
        "name" : "Obi Wan Kenobi",
        "mass" : "73",
        "gender" : "male"
    },
    {
        "name" : "Rey Palpatine",
        "mass" : "63",
        "gender" : "female"
    },
];

// APIKEY='6JjTY2938Y90KJu1kTij3tJrrfwubQil';

URL_BASE = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=10&q=`;

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(compression());

//use public folder
app.use(express.static(path.join(__dirname, 'public')));

// app.use(function(req, res, next){
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'orign, x-requested-width, Content-Type, Accept');
//     next();
// });

app.get(['/', '/randomize'], (req, res) => {
    res.render('overview', {characterNames:randomFunctions.getRandomNames(characters)});
});

app.get('/char/:id', (req, res) => {
    let gifUrl;
    let characterName;

    characters.forEach(element => {
        if(element.name.includes(req.params.id)){
            characterName = element;
        }
    });

    fetch(URL_BASE + characterName.name)
    .then(response => response.json())
    .then(content => {
        gifUrl = content.data[randomFunctions.randomImageNumber(content.data.length)].images.downsized.url;
        res.render('detail', {characterData:randomFunctions.getOneCharacter(req.params.id), gifData:gifUrl });

    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started on port: ' + PORT));