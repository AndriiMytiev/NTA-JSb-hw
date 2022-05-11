let userCountry = prompt('Введите свою страну для доставки: ').trim();
let normalizeUserCountry = userCountry.toLowerCase();

let countryArray = ["Китай", "Чили", "Австралия", "Индия", "Ямайка"];
let priceArray = [100, 250, 170, 80, 120];

switch(normalizeUserCountry){
    case countryArray[0].toLowerCase(): console.log(`Доставка в ${countryArray[0]} будет стоить ${priceArray[0]} кредитов.`);
    break;
    case countryArray[1].toLowerCase(): console.log(`Доставка в ${countryArray[1]} будет стоить ${priceArray[1]} кредитов.`);
    break;
    case countryArray[2].toLowerCase(): console.log(`Доставка в ${countryArray[2]} будет стоить ${priceArray[2]} кредитов.`);
    break;
    case countryArray[3].toLowerCase(): console.log(`Доставка в ${countryArray[3]} будет стоить ${priceArray[3]} кредитов.`);
    break;
    case countryArray[4].toLowerCase(): console.log(`Доставка в ${countryArray[4]} будет стоить ${priceArray[4]} кредитов.`);
    break;
    default: alert("В вашей стране доставка не доступна");
};