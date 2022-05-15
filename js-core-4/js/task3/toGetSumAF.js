const toGetSumAF = (num1 = 0, num2 = 0) => {
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

// check with different data
let result;
console.log("toGetSum - arrow function");

result = toGetSumAF("2", "3"); // result = 5
console.log("2 + 3 = ", result); 

result = toGetSumAF("2faf", "3afaf"); // result = 5
console.log("2faf + 3afaf = ", result); 

result = toGetSumAF("afa2faf", "3afaf"); // result = 3
console.log("afa2faf + 3afaf = ", result); 

result = toGetSumAF(); // result = 0
console.log("undefined + undefined = ", result); 

result = toGetSumAF("2.5", "3.7", "5"); // result = 5
console.log("2.5 + 3.7 = ", result); 