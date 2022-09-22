/*
Project: Lab 1 - Javascript with Simple Algorithms 
Name: Roann Cordova
Course: SCTM-S3001-301 (Fall 2022) Comp Sci 2-Data & Algorithms
Instructor: Dr. Adam Tindale

Sources:

Spread syntax (...)
•   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

String.prototype.replace()
•   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

isNaN()
•   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN


Array.prototype.splice()
•  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

Finding the Min (same thing with Max) value in an array
•  https://bobbyhadz.com/blog/javascript-get-index-of-min-value-in-array

Finding the longest word in the array and its count / finding the word and printing it
•  https://www.freecodecamp.org/news/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c/



Purpose:
•   The whole purpose of the code is to find the longest word / highest value / lowest value in the array no matter what file is imported.
    The code will not read long lines of numbers as a the longest word, and instead it will only print out the legible word.
    The code will also still print out the highest and lowest number in the file even though there are words included in the file.
*/




const fs = require('fs');
const { isNumberObject } = require('util/types');


let data = fs.readFileSync('test.csv');

data = String(data);

while(data.includes(",")){
    data = data.replace(',', ' ');
}
while(data.includes(", ")){
    data = data.replace(',', '');
}
while(data.includes("  ")){
    data = data.replace('  ', ' ');
}
while(data.includes(". ")){
    data = data.replace('. ', ' ');
}




let dataarray = data.split(' ');
for(let i = 0; i < dataarray.length; i++){
    dataarray[i] = Number(dataarray[i]);
}


console.table(dataarray);



// Finds the minimum value and prints out the index
function minFunction(){
    if(dataarray.includes(NaN)){
        takeNaNOut();
        minFunction();

    }else {
        let min = Math.min(...dataarray);
        let indexMin = dataarray.indexOf(min);
        console.log("\nThe min value is: " + dataarray[indexMin] + "\nand it is in index: " + indexMin);
    }
}


// Finds the maximum value and prints out the index
function maxFunction(){
    if(dataarray.includes(NaN)){
        takeNaNOut();
        maxFunction();
    }else {
        let max = Math.max(...dataarray);
        let indexMax = dataarray.indexOf(max);
        console.log("\nThe max value is: " + dataarray[indexMax] + "\nand it is in index: " + indexMax);

    }
}


// Finds the longest word in the Array
function longestWordFunction(){

    let wordsArray = data.split(' ');
    let longestWord = 0;
    longestWord = wordsArray.sort(function(a, b){
        return b.length - a.length;
    });


    console.table(longestWord);


    var longestWordIndex= 0;
    let longestWordConverted = [];
    for (let i = 0; i < longestWord.length; i++){

        longestWordConverted[i] = Number(longestWord[i]);


        if (isNaN(longestWordConverted[i]) != false){
            longestWordIndex = i;
            break;
        }
    }


    if (isNaN(longestWord[0 + longestWordIndex]) != false){
        console.log("The longest word in the file is: " + longestWord[0 + longestWordIndex]);
    }
}


// Takes the NaN out in the Array
function takeNaNOut(){
    for(let i = 0; i < dataarray.length; i++){
        if (isNaN(dataarray[i])){
            let NaNindex = i;
            dataarray.splice(i, 1);
            i--;
        }
    }
   

}   





longestWordFunction();
minFunction();
maxFunction();






