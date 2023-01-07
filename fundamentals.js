"use strict"
/*
//  javaScript funadamental part one where we covered all of the fundamentals

const country = 'india';
const continent = 'asia';
let population = 1028;
console.log("My country name is " + country + ". My country is located in " + continent + ". with a population of " + population + " Million.");
const isIsland = false;
let language;
language = 'hindi';
console.log(typeof country);
console.log(typeof population);
console.log(typeof continent);
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof null);
console.log(language);
console.log(population / 2);
population++;
console.log(population);
const populationOfFinland = 6;
console.log(population > populationOfFinland);
const averagePopulaton = 33;
console.log(population > averagePopulaton);
const description = (country + " is in " + continent + " and its " + population + " milion people speaks " + language);
console.log(description);


// BMI calculator using operators #1 coding challenge--------------------*****------------------------

const markMass = 78;
const JohnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;
const markMass1 = 95;
const JohnMass1 = 85;
const markHeight1 = 1.88;
const johnHeight1 = 1.76;
const markBmi = markMass / (markHeight ** 2);
const markBmi1 = markMass1 / (markHeight1 ** 2);
const johnBmi = JohnMass / (johnHeight ** 2);
const johnBmi1 = JohnMass1 / (johnHeight1 ** 2);
console.log(markBmi);
console.log(johnBmi);
console.log(markBmi1);
console.log(johnBmi1);
const markHeigherBMI = markBmi > johnBmi;
console.log(markHeigherBMI);
console.log(markBmi1 > johnBmi1);

// tempelate literal example synatx -----------**********---------------

const tempelateLiteral = `${country} is in ${continent} and its ${population}
million people speak ${language}`;
console.log(tempelateLiteral);
// BMI challenge using if/else #2 ------------------************--------------------
const markMass = 78;
const JohnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;
const markMass1 = 95;
const JohnMass1 = 85;
const markHeight1 = 1.88;
const johnHeight1 = 1.76;
const markBmi = Math.floor(markMass / (markHeight ** 2));
const markBmi1 = Math.floor(markMass1 / (markHeight1 ** 2));
const johnBmi = Math.floor(JohnMass / (johnHeight ** 2));
const johnBmi1 = Math.floor(JohnMass1 / (johnHeight1 ** 2));
console.log(markBmi);
console.log(johnBmi);
console.log(markBmi1);
console.log(johnBmi1);
const markHeigherBMI = markBmi > johnBmi;
console.log(markHeigherBMI);
console.log(markBmi1 > johnBmi1);
console.log(`Who has higher bmi?`)
if (markBmi > johnBmi) {
    console.log(`Mark's BMI (${markBmi}) is higher than john's (${johnBmi})!`)
} else {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`)
}
if (markBmi1 > johnBmi1) {
    console.log(`Mark's BMI (${markBmi1}) is higher than john's (${johnBmi1})!`)
} else {
    console.log(`John's BMI (${johnBmi1}) is higher than Mark's (${markBmi1})!`)
}

let indiaPopulation = 1417;
const currentContry = "india";
const averagePopulation = 33;
if (indiaPopulation > averagePopulation) {
    console.log(`${currentContry}'s population is above average`);
} else {

    console.log(`${currentContry}'s population is ${averagePopulation - indiaPopulation} million below average`);
}

//  Equality operators losse qual == vs strict equal ===  ----------------********--------------------

const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
if (numNeighbours === 1) {
    console.log("only 1 border");
} else if (numNeighbours > 1) {
    console.log(` your contry shares border with ${numNeighbours} countries ! thats nice`);
} else {
    console.log(" no borders LOL!")
}

//  assignment on logical operators to chech if /else-------------*******************-------------------------------


const languageSpeak = "english";
const contryPopulation = 40;
const isIsland = false;
if (languageSpeak === "english" && contryPopulation < 50 && !isIsland) {
    console.log(`you should live in france :)`);
} else {
    console.log(`france dosen't meet your criteria :(`);
}

//  coding challenge #3 to check the logical operators and if/else -------------*******************--------------------------------


const doplphinAverageScore = (96 + 108 + 89) / 3;
const koalasAverageScore = (88 + 91 + 110) / 3;

if (doplphinAverageScore > koalasAverageScore) {
    console.log(`dolphin is the winner:`)
} else if (doplphinAverageScore === koalasAverageScore) {
    console.log(`its a tie they both played well!!!`)
} else {
    console.log(` koala beats dolphins this time  `)
}


const doplphinAverageScore1 = (97 + 112 + 101) / 3;
const koalasAverageScore1 = (109 + 95 + 123) / 3;
let minimumScore;
if (doplphinAverageScore1 > koalasAverageScore1) {
    minimumScore = doplphinAverageScore1;
    console.log("doplphinAverageScore1 is :" + minimumScore);
} else {
    minimumScore = koalasAverageScore1;
    console.log("koalasAverageScore1 is :" + minimumScore);
}

if (doplphinAverageScore1 > koalasAverageScore1 && minimumScore > 100) {
    console.log(` dolphin is the winner`);
} else if (doplphinAverageScore1 === koalasAverageScore1 && minimumScore > 100) {
    console.log(` its a tie again `);
} else if (koalasAverageScore1 > doplphinAverageScore1 && minimumScore > 100) {
    console.log(` koala beats dolphins this time the winner`);
}
const doplphinAverageScore1 = (97 + 112 + 101) / 3;
const koalasAverageScore1 = (109 + 95 + 106) / 3;
console.log(doplphinAverageScore1, koalasAverageScore1);
let minimumScore;
if (doplphinAverageScore1 > koalasAverageScore1) {
    minimumScore = doplphinAverageScore1;
    console.log("doplphinAverageScore1 is :" + minimumScore);
} else {
    minimumScore = koalasAverageScore1;
    console.log("koalasAverageScore1 is :" + minimumScore);
}

if (doplphinAverageScore1 > koalasAverageScore1 && minimumScore >= 100) {
    console.log(` dolphin is the winner`);
} else if (doplphinAverageScore1 === koalasAverageScore1 && minimumScore >= 100) {
    console.log(` its a tie! `);
} else if (koalasAverageScore1 > doplphinAverageScore1 && minimumScore >= 100) {
    console.log(` koala beats dolphins this time the winner`);
} else {
    console.log(` no onw wins`);
}
//  if / else convesion from switch statement -------------*********--------------
const day = `sunday`;

if (day === "monday") {
    console.log(day);
} else if (day === "tuesday") {
    console.log(day);
} else if (day === "wednesday" || day === "thrusday") {
    console.log(day);
} else if (day === "friday") {
    console.log(day);
} else if (day === "saturday" || day === "sunday") {
    console.log(day);
} else {
    console.log(`enter a valid day :(`);
}

//  i know i know i wrote the same console for everyday but it's kinda boaring to write all diffrent just wanted to check the l0gic 🤷‍♀️🤷‍♀️🤷‍♀️🤷🤷🤷🤷‍♂️🤷‍♂️🤷‍♂️

//  challenge from switch statement -----------****************--------------------

const language = "french";

switch (language) {
    case `chinese`:
    case `mandarin`:
        console.log(`Most number of native speakers!`);
        break;
    case `spanish`:
        console.log(`2nd most spoken language by native speakers`);
        break;
    case `english`:
        console.log(`3rd most spoken by native speakers`);
        break;
    case `hindi`:
        console.log(`4th most spoken in the world`);
        break;
    case `arabic`:
        console.log(`5th most spoken language in the world`);
        break;
    default:
        console.log(`Great language too :D`);
        break;
}
//  challenge ternary operator -----------************---------------

const contry = "india";
const population = 1040;

const isGreater = population >= 33 ? (` ${contry}s population is above average`) : (`${contry}'s population is below average`);
console.log(isGreater);


//  coding challenge #4 ------------******************----------------------


const bill = 430;
const tip = bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;
console.log(` the bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);

end ----------------*******************------------------part 1--------------*********


//  fundamental part 2 beginss --------------******************---------------------
"use strict"

//  function Declaration synatax ----------------*************-------------


function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}
const tempelate = describeCountry("India", 1028, "Delhi");
const tempelate1 = describeCountry("Finland", 6, "Helsinki");
const tempelate2 = describeCountry("Canada", 100, "Toronto");
console.log(tempelate, tempelate1, tempelate2);

function percentageOfWorld1(country1, population1) {
    return `${country1} has ${population1} million people, so it's about ${population1 / 79}% of the world population.`;
}
const indiaPopulation = percentageOfWorld1("India", 1040);
const canadaPopulation = percentageOfWorld1("Canada", 120);
const francePopulation = percentageOfWorld1("France", 100);
console.log(indiaPopulation, canadaPopulation, francePopulation);

// function expression syntax -----*************--------------

const percentageOfWorld2 = function (country2, population2) {
    return `${country2} has ${population2} millions people, so it's about ${(population2 / 7900) * 100}% of the world population`
}
const indiaPopulation1 = percentageOfWorld2("India", 1040);
const canadaPopulation1 = percentageOfWorld2("Canada", 120);
const francePopulation1 = percentageOfWorld2("France", 100);
console.log(indiaPopulation1, canadaPopulation1, francePopulation1);

//  arrow function exaple syntax-----------***************---------------------

const percentageOfWorld3 = (country3, population3) => {
    return `${country3} has ${population3} millions people, so it's about ${(population3 / 7900) * 100}% of the world population`
}
const indiaPopulation2 = percentageOfWorld3("India", 1040);
const canadaPopulation2 = percentageOfWorld3("Canada", 120);
const francePopulation2 = percentageOfWorld3("France", 100);
console.log(indiaPopulation2, canadaPopulation2, francePopulation2);

//  calling a function----*************---------

function describePopulation(country5, population5) {
    const temp = percentageOfWorld1(country5, population5);
    return temp;
}
const indPopulation = describePopulation("India", 1040);
const pakPopulation = describePopulation("Pakistan", 104);
const chiPopulation = describePopulation("China", 1441);
console.log(indPopulation, pakPopulation, chiPopulation);


//  coding challenge #1 part 2 -------------------***************------------------
// arrow function to calculate the avgScore

const calcAverage = (roundOne, roundTwo, roundThree) => (roundOne + roundTwo + roundThree) / 3;
// test data 1
const dolphinsRound1 = calcAverage(44, 23, 71);
const koalaRound1 = calcAverage(65, 54, 49);

// test data 2
const dolphinsRound2 = calcAverage(85, 54, 41);
const koalaRound2 = calcAverage(23, 34, 27);

//  all data avgScore output

console.log(dolphinsRound1, koalaRound1, dolphinsRound2, koalaRound2);

// arrow function to checkTheWinner

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphin's win ${"(" + avgDolphins + "vs" + avgKoalas + ")"}`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return ` Koala's win ${"(" + avgKoalas + "vs" + avgDolphins + ")"}`;
    } else {
        return ` no one wins`;
    }
}

// final Winner output test data 1
console.log(checkWinner(dolphinsRound1, koalaRound1));
// final winner output test data 2
console.log(checkWinner(dolphinsRound2, koalaRound2));

//  introduction to arrays exercise questions

const population = [1040, 30, 40, 100];
console.log(population.length === 4);

function percentageOfWorld1(population) {
    return ((population / 79) + "%");
}
const percentages = [percentageOfWorld1(population[0]),
percentageOfWorld1(population[1]),
percentageOfWorld1(population[2]),
percentageOfWorld1(population[3]),
];
console.log(percentages);


//   basic array operations (methods)----***********-------

const neighbours = ["pakistan", "china", "srilanka", "nepal"];

neighbours.push("utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);
// upshift for pushing in front and shift for poping from front

if (neighbours.includes("germany")) {
    console.log("Probably  a central European country :D");
} else {
    console.log("Probably not a central European country :D");
}

console.log(neighbours.indexOf("china"));

neighbours[1] = "Republic of china"

console.log(neighbours);

//  coding challenge #2 Arrays 

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        tips.push(bill * 0.15);
        total.push(bill + bill * 0.15);
        // console.log(tips, total);
    } else {
        tips.push(bill * 0.2);
        total.push(bill + bill * 0.2);
        // console.log(tips, total);
        
    }
}
const bills = [125, 555, 44];
const tips = [];
const total = [];
const allBills = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// calcTip(bills[1]);
// calcTip(bills[2]);
console.log(tips, total, bills);
// console.log(total);


//  introduction to object -----assisment-------- 

const myCountry = {
    country: "India",
    capital: "Delhi",
    language: "hindi",
    population: 1040,
    neighbours: ["pakistan", "china", "nepal", "srilanka"]
}
console.log(myCountry.neighbours[3]);

// using dot vs bracket notaion -------------************-------------------
console.log(`${myCountry.country} has ${myCountry.population} millions ${myCountry.language}-speaking peoples,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}!`);

console.log(myCountry.population + 2);  dot notation
console.log(myCountry["population"] - 2); bracket notation 

//  live video challenge solution 

console.log(`${jonas.firstName} has ${jonas.friends.length} friends,and his best friend is called ${jonas.friends[0]}`);

const myCountry = {
    country: "India",
    capital: "Delhi",
    language: "hindi",
    population: 1040,
    neighbours: ["pakistan", "china", "nepal", "srilanka"],
    describe: function () {
        console.log(`${this.country} has ${this.population} millions ${this.language}-speaking peoples,${this.neighbours.length} neighbouring countries and a capital called ${this.capital}!`);

    },
    checkIsland: function () {
        this.Island = this.neighbours.length > 0 ? (false) : (true);
        console.log(this.Island);
    }
}
console.log(myCountry.neighbours[3]);

// using dot vs bracket notaion -------------************-------------------


myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);


//  coding challenge #3 


// part one method to mark bmi


const markBMI = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = markBMI.mass / markBMI.height ** 2;
        return this.bmi;
    }
}


// part to calculate john's


const johnBMI = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = (`${johnBMI.mass / johnBMI.height ** 2}`);
        return this.bmi;
    }
}


//  without calling the function console.log(Math.round(markBMI.bmi)); this won't work

markBMI.calcBMI();
johnBMI.calcBMI()


//  logging the values to console


console.log(Math.round(markBMI.bmi));
console.log(Math.round(johnBMI.bmi));

// ternerary opertaor to log the statement an dthis is the part 3

const heigherBMI = markBMI.bmi > johnBMI.bmi ? `${markBMI.fullName}'s BMI (${markBMI.bmi}) is higher tha ${johnBMI.fullName}'s (${johnBMI.bmi})!` : `${johnBMI.fullName}'s BMI (${johnBMI.bmi}) is higher tha ${markBMI.fullName}'s (${markBMI.bmi})!`;

//  logging the output from opertaor

console.log(heigherBMI);




*/