let numbersUsedList = [];
const numberOfPeople = 6;
let randomNumber;

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