const toGetMaxFromAF = (num1 = 0, num2 = 0, num3 = 0) => {
    let num1Parsed = parseInt(num1);
    let num2Parsed = parseInt(num2);
    let num3Parsed = parseInt(num3);
    if(isNaN(num1Parsed)){
        num1Parsed = 0;
    }
    if (isNaN(num2Parsed)) {
       num2Parsed = 0;
    }
    if (isNaN(num3Parsed)) {
       num3Parsed = 0;
    }
    return Math.max(num1Parsed, num2Parsed, num3Parsed);
};

// check with different data
let result;
console.log("toGetMaxFrom - arrow function");

result = toGetMaxFromAF(1, 12, 55);
console.log(result); // 55

result = toGetMaxFromAF("132", "21", "1323");
console.log(result); // 1323

result = toGetMaxFromAF("23afaf", "11afa", "aa3233");
console.log(result); // 23

result = toGetMaxFromAF("afa23","afaf55", "Andrii");
console.log(result); // 0

result = toGetMaxFromAF();
console.log(result); // 0