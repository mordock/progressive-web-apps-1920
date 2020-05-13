const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const compression = require('compression');

let numbersUsedList = [];
const numberOfPeople = 6;

let randomNumber;

const app = express();

let APIKEY = "6JjTY2938Y90KJu1kTij3tJrrfwubQil";

URL_BASE = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=10&q=`;
URL_EXTENSION_CATEGORY = "/people/"
URL_PAGE_EXTENSION = "?page="
URL_SEARCH_EXTENSION = "?search="

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(compression());

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

//use public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'orign, x-requested-width, Content-Type, Accept');
    next();
});

app.get(['/', '/randomize'], (req, res) => {
    res.render('overview', {characterNames:getRandomNames(characters)});
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
        gifUrl = content.data[randomImageNumber(content.data.length)].images.downsized.url;
        res.render('detail', {characterData:getOneCharacter(req.params.id), gifData:gifUrl });

    });
});

function randomImageNumber(maxLength){
    returnNumber = Math.floor(Math.random() * maxLength);
    return returnNumber;
}

function getOneCharacter(name){
    var characterObject
    characters.forEach(element => {
        if(element.name.includes(name)){
            characterObject = element;
        }
    });
    return characterObject;
}

function getRandomNames(json){
    let myjson = [];

    for(let i = 0; i < numberOfPeople; i++){
        const length = json.length;

        const currentRandom = getRandomNumber(length);

        myjson.push(json[currentRandom].name);      
    }

    numbersUsedList = [];

    return myjson;
}

function getRandomNumber(maxNumber){
    while(numbersUsedList.length < maxNumber){
        randomNumber = Math.floor(Math.random() * maxNumber);
        if(numbersUsedList.indexOf(randomNumber) === -1) {
            numbersUsedList.push(randomNumber);
            return randomNumber;
        }
    }
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started on port: ' + PORT));