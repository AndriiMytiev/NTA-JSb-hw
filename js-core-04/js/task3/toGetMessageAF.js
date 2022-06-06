const toGetMessageAF = () => "unexpected token";

// check with different data
let result;
console.log("toGetSum - arrow function");

result = toGetMessageAF(12);
console.log(result); // unexpected token

result = toGetMessageAF("af");
console.log(result); // unexpected token

result = toGetMessageAF("13faf");
console.log(result); // unexpected token

result = toGetMessageAF("faf13");
console.log(result); // unexpected token

result = toGetMessageAF(undefined);
console.log(result); // unexpected token