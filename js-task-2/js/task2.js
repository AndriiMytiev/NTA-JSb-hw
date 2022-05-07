if (1 == true){ // Boolean(1) --> true, true == true --> true
    console.log(`Условие выполнено!`); // result
} else {
    console.log(`Условие не выполнено!`);
}

if (0 == false){ // Boolean(0) --> false, false == false --> true
    console.log(`Условие выполнено!`); // result
} else {
    console.log(`Условие не выполнено!`);
}

if ("" == true){ // Boolean("") --> false, false == true --> false
    console.log(`Условие выполнено!`);
} else {
    console.log(`Условие не выполнено!`); // result 
}

if ("_" == false){ // Boolean("_") --> true, true == false --> false
    console.log(`Условие выполнено!`);
} else {
    console.log(`Условие не выполнено!`); // result
}

console.log("");

// Why NaN == false => false, isn't NaN falsy?

// Answer from stackoverflow
// NaN as you are using, is a global property initialized with value of Not-A-Number. 
// It's not boolean. It's NaN data type as defined by IEEE 754.
// It's the "same thing" you compare null == false --> false 
console.log("NaN == false");
if (NaN == false){ 
    console.log(`Условие выполнено!`);
} else {
    console.log(`Условие не выполнено!`); // result
}

console.log("");

// But Boolean(NaN) == false --> true
console.log("Boolean(NaN) == false");
if (Boolean(NaN) == false){ 
    console.log(`Условие выполнено!`); // result
} else {
    console.log(`Условие не выполнено!`); 
}