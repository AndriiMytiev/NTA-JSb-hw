const toGetMessageFE = function(){
    return "unexpected token";
};

// check with different data
let result;
console.log("toGetSum - function expression");

result = toGetMessageFE(12);
console.log(result); // unexpected token

result = toGetMessageFE("af");
console.log(result); // unexpected token

result = toGetMessageFE("13faf");
console.log(result); // unexpected token

result = toGetMessageFE("faf13");
console.log(result); // unexpected token

result = toGetMessageFE(undefined);
console.log(result); // unexpected token