                //variables
var SayHello = 'Hello world! \'Im a programmer\' '
//управляющий символ обратного слеша (\) 
//превращает специальные симвроы в символьные строки

            //switch
switch (expression) {
    case n1:
        statements
        breack;
    case n2:
        statements
        breack;
    default:
        statements
}
    //пример
var day = 2;
switch (day){
        case 1: 
    document.write('Monday');
    break;
        case 2:
    document.write('tuesday');
    break;
        case 3:
    document.write('Wednesday');
    break;
    default:
        document.write('Another day');
}
            //Functions
function hello (sayMyName) {
    alert('Hi, ' + sayMyName);
}
hello('David');
hello('Sarah');
hello('John');

//many pararmeters

function whoami(name, age) {
    document.write (name + ' is '+ age +' years.old.');
}
whoami('John', 20);

//alert in function

function myFunction (x,y)
{
    alert(x+y);
}

            //Objects
var person = {
    name:'John', age: 31, favColor: 'green', height: 179
}
alert (person.name);//два способа получения свойств объектов
alert (person['age']);//два способа получения свойств объектов

var course = {
    name:"JS",
    lessons: 41
};
document.write(course.name.lenght); //.lenght подсчитает количество символов и в данном случае выведет 2 (JS)

//Object constructor

var person = {
    name: 'John',
    age: 42,
    favColor: 'green'   
    }   // будет создан только один объект

// как создать шаблон для Object

function person(name, age, color) {
    this.name = name;
    this.age = age;
    this. color = color;
    var p1 = new person('john', 42, 'green')
    var p2 = new person('Amy', 21, 'Red')
    document.write(p1.age);
    document.write(p2.name);
}

//Вы также можете опеределить функцию вне функции - конструктора и связать ее с объектом

function human(name, age) {
    this.name = name;
    this.age = age; 
    this.yearOfBirth = bornYear;
}
function bornYear() {
    return 2016 - this.age;
}
var p = new person('A', 22);
document.write(p.yearOfBirth());

            //Массивы
var course1 = 'HTML'
var course2 = 'CSS'
var course3 = 'JS'//переменные для примера

var courses = new Array('HTML', 'CSS', 'JS')//массив

var courses = new Array('HTML', 'CSS', 'JS')
var course = courses[0]; //в переменную course заносится значение 'HTML'
courses[1] = 'C++' //заменяет первый элемент

// другой способ создания массивов
var courses =  new Array(3);
courses[0] = 'HTML'
courses[1] = 'CSS'
courses[2] = 'JS'
//массив является специальным типом объекта

//массивы в js являются динамическими так что вы можете объявыить 
//массив и не передавать никаких аргументов с конструктором Array() 
//вы можете позже добавить элеменннты динамически

var coutses = new Array(); 
courses[0] = 'HTML'
courses[2] = 'CSS'
courses[3] = 'JS'
courses[4] = 'C++'

//метод concat() позволяет вам соединять массивы и создавать совсем новые 

var c1 =['HTML', 'CSS']
var c2 =['JS', 'C++']
var courses = c1.concat(c2);

//Объект math

var n = prompt('Enter a number', '');
var ansver = Math.sqrt(n); //метод ыйке вычисляет квадратный корень
alert ('The square root of ' + n + 'is' + 'answer');

//setInterval() 
// метод setInterval() вызываеи функцию которая вычисляет выражение

//на указаных интервалах(в милисекндах)
//Он продолжит вызывать функцию пока не будет вызван clearInterval() или не будет закрыто окно
//(1000 мс = 1 cек)
function myAlert() {
    alert('Hi');
}
setInterval(myAlert, 3000);

//Oбъект Dates

