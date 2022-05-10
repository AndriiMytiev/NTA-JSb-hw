let input = 0;
let total = 0;
while(input != null){
    input = prompt("Введите число: ");
    // total += Number(input);
    if (!isNaN(input)){
        total += Number(input);
    } else{
        alert('Было введено не число, попробуйте еще раз');
    }
};
alert(`Общая сумма чисел равна ${total}`);