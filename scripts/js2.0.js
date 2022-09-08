//Массивы

let a  = 'Иван'
let b = '37'
let c = 'Овен'

let d = ['Иван', 37, 'Овен']; //массив с названием с
let e = [];
//console.log(c[2]); //вывод значения с индексом 0 из массива c
//console.log(c.length); //вывод длинны массива  

//console.log('hello'); //строки берем в кавычки
//console.log(1);
//console.log('hello ' + 'world'); // не забывай про конкатенацию 
//console.info('hello');

//document.getElementById('output').innerHTML = 'Hello'
//document.getElementById('output').innerHTML = '<b>2020</b>'
// document.getElementById('output').innerHTML = '2019'
// document.querySelector('h2.header').innerHTML = 5
// document.getElementById('one').innerHTML = 5

// let x = document.getElementById('output');
// let y = document.querySelector('h2.header').innerHTML = 5;
// let z;
// z = document.getElementById('one').innerHTML = 5;

// x.innerHTML = 999

// console.log(a)


let f = 6;
let i = 'Hello';

let InputIn = document.querySelector('.input-in'); //получение строки ввода
let button = document.querySelector('button');// получение кнопки
let div = document.querySelector('.out') //получение тега див с классом out
button.onclick = function (){
    //когда кнопка будет нажата
    console.log('work');
    let h = +InputIn.value; //value это то что введено в инпут
    console.log (h*2);
    div.innerHTML = h //в тег out будет сохранять введенную переменную
    //InputIn.value = ''
}
//Условия
let j = 9;
if (j == 9){
    //true
    console.log('Yes');
}
else{
    console.log('No')
}

const buttonAge = document.querySelector('button');
const inputAge = document.querySelector('.age');

buttonAge.onclick = () => {
    let num = +inputAge.value;
    if (num >=16 && num<60){
        console.log('Welcome');
    } else if(num > 60) {
        console.log('ты точно сюда?')
    } else {
        console.log('no');
    }


switch (num) {
    case 15:
        console.log('Еще год потерпи');
        break;
    case 16:
        console.log('Заходи');
        break;
    default:
        console.log('ok')
}
}

let k = 3
console.log(k == 4 || k == 7);




//JavaScript v. 2.0
//https://www.youtube.com/watch?v=6OiLYSkj7vM&list=PLM7wFzahDYnEltE-aVGhRHYPwIJn0Xquu&index=11

let c1='(()))()'; // нужно проверить количество скобочек в строке
//нужны переменные куда будем сохранять результат 
//нужен цикл который будет перебирать скобочки
//цикл
//длина строки c.length
console.log(c1.length);
let count = 0;
for (let i = 0; 1 < c1.length; i++) {
    console.log(c1[i]);
    if (c1[i] == '('){
        count++;
    }
}
            
console.log (count);