let obj = {
    nombre: 'Carlos',
    edad: 44,
    apellido: 'Ulibarri',
    keypress: function () {
        return 'Se ha presionado una tecla';
    },
    mouseOver: function () {
        return 'El puntero del mouse esta arriba';
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);


// asegurarse que el nombre de la key este igual, sino marca error.
//copiar y pegar la key puede ayudar a no cometer errores.
let myKey = 'nombre';
console.log(obj[myKey]);


myKey = 'keypress';
// Como es una funcion se tienen que poner los parentesis, en caso de que tenga parametros deben ser incluidos.
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());


// ----------------- A R R A Y S.
let myArray = [];
// En los arrays se puede meter cualquier tipo de objeto.
myArray.push(4);
myArray.push('Una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log('Hola desde el array');
});

console.log(myArray);


let funcArray = [];

funcArray.push(() => {
    console.log('Function 1');
});

funcArray.push(() => {
    console.log('Function 2');
});

funcArray.push (() => {
    console.log('Function 3');
});

// hace un callback de cada item que se encuentra en el array y como esta es una funcion la invoca.
funcArray.forEach((item) => {
    item();
});




// ------------------- T A R E A .
//Llamar una funcion desde un objeto en un array.
console.log(myArray[2].mouseOver());
//Llamar una funcion sin nombre de un array.
console.log(myArray[3]());

var Emitter = require('./emitter');
var emtr = new Emitter();
// al mandar a llamar se mandan los resultados, se usa on para crear una nueva funcion.
emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting ocurred!');
});

// se usa el emit para llamar la funcion.
console.log('Hello!');
emtr.emit('greet');



emtr.on('jump', () => {
    console.log('Someone jumped!');
});
//se llama emitter y se pueden observar las dos funciones.
console.log(emtr);
//se llama especificamente jump, donde tiene que tener el mismo nombre de la misma manera.
emtr.emit('jump');