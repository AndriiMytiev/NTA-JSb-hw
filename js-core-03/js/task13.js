let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;

let amount = prompt("Сколько дронов хотите купить?");
if (amount == null){
    console.log('Отменено пользователем!');
} else{
    totalPrice = amount*pricePerDroid;
    if (totalPrice > credits){
        console.log('Недостаточно средств на счету!');
    } else{
        console.log(`Вы купили ${amount} дроидов, на счету осталось ${credits-totalPrice} кредитов.`);
    }
};