const toCheckAgeAF = (age, name) => {
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

// check with different data
let result;
console.log("toCheckAge - function expression");

result = toCheckAgeAF("15", "Stepan");
console.log(result); // вы еще очень молоды!

result = toCheckAgeAF("30", "Vlad");
console.log(result); // добро пожаловать в личный кабинет!

result = toCheckAgeAF("60afaf", "Andrii");
console.log(result); // моё почтение!

result = toCheckAgeAF("-40fa", "Oleg");
console.log(result); // Укажите корректные данные!

result = toCheckAgeAF("afaf40ff", "Vlad");
console.log(result); // Укажите корректные данные!