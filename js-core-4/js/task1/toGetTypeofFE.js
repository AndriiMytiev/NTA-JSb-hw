const toGetTypeofFE = function(element){
    return typeof element;
};

// check with different data
let result;
console.log("toGetTypeof - function expression");

result = toGetTypeofFE(12);
console.log("typeof 12: ", result); // number

result = toGetTypeofFE("faf");
console.log("typeof 'faf': ", result); // string

result = toGetTypeofFE(NaN);
console.log("typeof NaN: ", result); // number

result = toGetTypeofFE(true);
console.log("typeof true: ", result); // boolean

result = toGetTypeofFE(undefined);
console.log("typeof undefined: ", result); // undefined