let total = 100;
let ordered = 50;

console.log(`total: ${total}, ordered: ${ordered}`);
if (ordered > total){
    console.log("На складе недостаточно товаров!");
} else{
    console.log("Заказ оформлен, с вами свяжется менеджер."); // result
};

console.log("");

ordered = 20;

console.log(`total: ${total}, ordered: ${ordered}`);
if (ordered > total){
    console.log("На складе недостаточно товаров!");
} else{
    console.log("Заказ оформлен, с вами свяжется менеджер."); // result
};

console.log("");

ordered = 80;

console.log(`total: ${total}, ordered: ${ordered}`);
if (ordered > total){
    console.log("На складе недостаточно товаров!");
} else{
    console.log("Заказ оформлен, с вами свяжется менеджер."); // result
};

console.log("");

ordered = 120;

console.log(`total: ${total}, ordered: ${ordered}`);
if (ordered > total){
    console.log("На складе недостаточно товаров!"); // result
} else{
    console.log("Заказ оформлен, с вами свяжется менеджер.");
};