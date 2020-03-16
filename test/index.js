const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

//api info
const urlBase = 'https://swapi.co/api';
const urlExtensionCategory = '/people/';
const urlPageExtension = '?page='
const urlSearchExtension = '?search='

let numbersUsedList = [];
const numberOfPages = 9;
const numberOfPeople = 6;

let randomNumber;

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views');


//use public folder
app.use(express.static(path.join(__dirname, 'public')));

// this causes / and /randomize to do the same. This is because of the questionmark at the end, makes ranomize optional
app.get('/:var(randomize)?', (req, res) => {
    fetch(urlBase + urlExtensionCategory + urlPageExtension + randomAPIPageNumber(numberOfPages))
    .then(res => res.json())
    .then(myjson => res.render('overview', {myjson:getRandomNames(myjson)}));
});

app.get('/:id', (req, res) => {
    console.log('BOEEE');
    fetch(urlBase + urlExtensionCategory + urlSearchExtension + req.params.id)
    .then(res => res.json())
    .then(myjson => res.render('detail', {myjson:myjson}));
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