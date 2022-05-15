// check with different data
let result;
console.log("toGetSum - function declaration");

result = toGetMessageFD(12);
console.log(result); // unexpected token

result = toGetMessageFD("af");
console.log(result); // unexpected token

result = toGetMessageFD("13faf");
console.log(result); // unexpected token

result = toGetMessageFD("faf13");
console.log(result); // unexpected token

result = toGetMessageFD(undefined);
console.log(result); // unexpected token

function toGetMessageFD(){
    return "unexpected token";
};
