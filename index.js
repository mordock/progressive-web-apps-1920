const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const compression = require('compression');
require('dotenv').config();

const env = process.env;

let numbersUsedList = [];
const numberOfPages = 9;
const numberOfPeople = 6;

let randomNumber;

const app = express();

URL_BASE = 'https://swapi.co/api'
URL_EXTENSION_CATEGORY = "/people/"
URL_PAGE_EXTENSION = "?page="
URL_SEARCH_EXTENSION = "?search="

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(compression());

//use public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get(['/', '/randomize'], (req, res) => {
    console.log('OVERVIEW');
    fetch(URL_BASE + URL_EXTENSION_CATEGORY + URL_PAGE_EXTENSION + randomAPIPageNumber(numberOfPages))
    .then(res => res.json())
    .then(myjson => res.render('overview', {characterNames:getRandomNames(myjson)}));
});

app.get('/char/:id', (req, res) => {
    console.log('Details');
    fetch(URL_BASE + URL_EXTENSION_CATEGORY + URL_SEARCH_EXTENSION + req.params.id)
    .then(res => res.json())
    .then(myjson => res.render('detail', {characterData:myjson.results[0]}));
});

function randomAPIPageNumber(maxNumberPages){
    const randomPageNumber = Math.floor((Math.random() * maxNumberPages) + 1);
    return randomPageNumber;
}

function getRandomNames(json){
    let myjson = [];

    for(let i = 0; i < numberOfPeople; i++){
        const length = json.results.length;

        const currentRandom = getRandomNumber(length);

        myjson.push(json.results[currentRandom].name);      
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