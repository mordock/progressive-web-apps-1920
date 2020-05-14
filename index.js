let randomFunctions = require('./public/randomFunctions');
let characters = require('./public/characters');

const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const compression = require('compression');

require('dotenv').config();

const app = express();

URL_BASE = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.APIKEY}&limit=10&q=`;

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(compression());

//use public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'orign, x-requested-width, Content-Type, Accept');
    next();
});

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