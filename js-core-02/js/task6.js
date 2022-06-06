let var1 = 1;
let var2 = 0;
let var3 = true;

console.log('var1 > var2: ', var1 > var2);
// true, 1 > 0 --> true

console.log('var1 == var3: ', var1 == var3);
// true, 1 --> true, true == true --> true

console.log('var1 === var3: ', var1 === var3);
// false, typeof 1 --> number, typeof true --> boolean
// different type of --> false

console.log('var1 != var3: ', var1 != var3);
// false, 1 --> true, true != true --> false

console.log('var2 != var3: ', var2 != var3);
// true, 0 --> false, false != true --> true

console.log('var1 > var2 == var3: ', var1 > var2 == var3);
// true, var1 > var2 --> true, true == true --> true

console.log('var1 > var2 > var3: ', var1 > var2 > var3);
// false, var1 > var2 --> true, true > true --> false