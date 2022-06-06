// check with different data
let result;
console.log("toGetTypeof - function declaration");

result = toGetTypeofFD(12);
console.log("typeof 12: ", result); // number

result = toGetTypeofFD("faf");
console.log("typeof 'faf': ", result); // string

result = toGetTypeofFD(NaN);
console.log("typeof NaN: ", result); // number

result = toGetTypeofFD(true);
console.log("typeof true: ", result); // boolean

result = toGetTypeofFD(undefined);
console.log("typeof undefined: ", result); // undefined

function toGetTypeofFD(element){
    return typeof element;
};