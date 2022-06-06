// check with different data
let result;
console.log("toGetSum - function declaration");

result = toGetSumFD("2", "3"); // result = 5
console.log("2 + 3 = ", result); 

result = toGetSumFD("2faf", "3afaf"); // result = 5
console.log("2faf + 3afaf = ", result); 

result = toGetSumFD("afa2faf", "3afaf"); // result = 3
console.log("afa2faf + 3afaf = ", result); 

result = toGetSumFD(); // result = 0
console.log("undefined + undefined = ", result); 

result = toGetSumFD("2.5", "3.7", "5"); // result = 5
console.log("2.5 + 3.7 = ", result); 

function toGetSumFD(num1 = 0, num2 = 0){
    let num1Parsed = parseInt(num1);
    let num2Parsed = parseInt(num2);
    if(isNaN(num1Parsed)){
        num1Parsed = 0;
    }
    if (isNaN(num2Parsed)) {
        num2Parsed = 0;
    }
    return num1Parsed + num2Parsed;
};
