"use sctrict"

//to string

console.log(typeof(String(null)));

console.log(typeof(5 + ''));

const num = 5;

console.log(`https://vk.com/catalog/${num}`);

const fontsize = 26 + 'px';


// to number

console.log(typeof(Number('4')));

console.log(typeof(+'5'));

console.log(typeof(parseInt('15px, 10')));


let answ = +prompt('Hello', '');

//to boolean

/* 0, '', null, undefined, NaN; */

let switcher = null;

switcher = 1

if (switcher) {
    console.log('Working...');
};

//2)

console.log(typeof(Boolean('4')));

//3)

console.log(typeof(!!'444444')));