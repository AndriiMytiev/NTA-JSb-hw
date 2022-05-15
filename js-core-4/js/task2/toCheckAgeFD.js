// check with different data
let result;
console.log("toCheckAge - function declaration");

result = toCheckAgeFD("15", "Stepan");
console.log(result); // вы еще очень молоды!

result = toCheckAgeFD("30", "Vlad");
console.log(result); // добро пожаловать в личный кабинет!

result = toCheckAgeFD("60afaf", "Andrii");
console.log(result); // моё почтение!

result = toCheckAgeFD("-40fa", "Oleg");
console.log(result); // Укажите корректные данные!

result = toCheckAgeFD("afaf40ff", "Vlad");
console.log(result); // Укажите корректные данные!

function toCheckAgeFD(age, name){
    let ageParsed = parseInt(age);
    if(isNaN(ageParsed) || ageParsed < 0){
        return "Укажите корректные данные!";
    } else if(ageParsed < 18){
        return `${name}, вы еще очень молоды!`;
    } else if(ageParsed > 50){
        return `${name}, моё почтение!`
    } else{
        return `${name}, добро пожаловать в личный кабинет!`;
    }
};
