// // === TO BOOLEAN ===

// любое строчное значение К BOOLEAN
let value = "Bla Bla Bla";

// 1й способ
let toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

console.log("");

// любое строчное число К BOOLEAN
value = "100";

// 1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

console.log("");

// пустая строка К BOOLEAN
value = "";

// 1й способ
toBoolean = Boolean(value);
console.log(`пустая строка${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных пустая строка${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2й способ
toBoolean = !!value;
console.log(`пустая строка${value}, через !!: `, toBoolean);
console.log(`тип данных пустая строка${value}, через !!: `, typeof toBoolean);

console.log("");

// строка c пробелом К BOOLEAN
value = " ";

// 1й способ
toBoolean = Boolean(value);
console.log(`строка c пробелом${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных строка c пробелом${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2й способ
toBoolean = !!value;
console.log(`строка c пробелом${value}, через !!: `, toBoolean);
console.log(`тип данных строка c пробелом${value}, через !!: `, typeof toBoolean);

console.log("");

// число К BOOLEAN
value = 0;

// 1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

console.log("");

// число К BOOLEAN
value = 1;

// 1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

console.log("");

// undefined К BOOLEAN
value = undefined;

// 1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

console.log("");

// null К BOOLEAN
value = null;

// 1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);