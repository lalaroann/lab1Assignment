const fs = require('fs');
const { isNumberObject } = require('util/types');

//----------testnumbers1.csv------------------
let data = fs.readFileSync('testtext1.txt');

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




//----------testnumbers1.csv closed-----------


