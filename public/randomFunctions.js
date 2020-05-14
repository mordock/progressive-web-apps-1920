let characters = require('./characters');

let numbersUsedList = [];
const numberOfPeople = 6;
let randomNumber;

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

module.exports = {randomImageNumber, getOneCharacter, getRandomNames};

function getRandomNumber(maxNumber){
    while(numbersUsedList.length < maxNumber){
        randomNumber = Math.floor(Math.random() * maxNumber);
        if(numbersUsedList.indexOf(randomNumber) === -1) {
            numbersUsedList.push(randomNumber);
            return randomNumber;
        }
    }
}