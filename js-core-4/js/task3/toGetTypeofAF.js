const toGetTypeofAF = (element) => typeof element;

// check with different data
let result;
console.log("toGetTypeof - arrow function");

result = toGetTypeofAF(12);
console.log("typeof 12: ", result); // number

result = toGetTypeofAF("faf");
console.log("typeof 'faf': ", result); // string

result = toGetTypeofAF(NaN);
console.log("typeof NaN: ", result); // number

result = toGetTypeofAF(true);
console.log("typeof true: ", result); // boolean

result = toGetTypeofAF(undefined);
console.log("typeof undefined: ", result); // undefined