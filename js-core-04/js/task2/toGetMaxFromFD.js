// check with different data
let result;
console.log("toGetMaxFrom - function declaration");

result = toGetMaxFromFD(1, 12, 55);
console.log(result); // 55

result = toGetMaxFromFD("132", "21", "1323");
console.log(result); // 1323

result = toGetMaxFromFD("23afaf", "11afa", "aa3233");
console.log(result); // 23

result = toGetMaxFromFD("afa23","afaf55", "Andrii");
console.log(result); // 0

result = toGetMaxFromFD();
console.log(result); // 0

function toGetMaxFromFE(num1 = 0, num2 = 0, num3 = 0){
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