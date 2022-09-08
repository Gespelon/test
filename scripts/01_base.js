// console.log("I'm Alive");

//     //Переменные
// var login = 'Scarlett'//string
// const lastname = 'Dexter'//string
// let age = 8762 //number
// const sentient = true //boolean
// fafafa = false //boolean

// alb = 'mist of'//string
// ion = 'avalon'//string
// albion = alb +' '+ ion
// console.log(albion)
// //конкатенация

// //переменные могут быть:
// const $ = 'private'//string
// const _ = 'private'//string
// const withNUM5 = 'private'//string
// //const if = 'failed'   //err
// //const 5number = 'failed'   //err

//     //Мутирование
// console.log('Имя человека: ' +
// login + ', а возраст: ' + age.toString())
// console.log(age)
// // функция алерт доступна только на десктопе 
// alert('aboba')
// const howyoucall = prompt('Введите фамилию')
// alert(howyoucall + ' ку')

//     //Операторы
// const currentYear = 2022
// const birthYear = 2000
// alert(currentYear - birthYear)
//инкрементирование

    //Типы данных
// const Variable1 = true
// const Variable2 = Text
// const Variable3 = 'text'
// let x
// console.log(typeof Variable1)
// console.log(typeof Variable2)
// console.log(typeof Variable3)
// console.log(typeof x)
// console.log(null)

    //Условные операторы
// const sent = 'mind'
// if(sent === 'nevermind') {
//     console.log('bug')
// } else if (sent === 'mind'){
//     console.log('havent bug')
// } else {
//     console.log('BIG BUG')
// }

//тернарные выражения нужны для протсух условий, например:
//isReady ? console.log('OK') : console.log('NOT GOOD')

// const num1 = 42
// const num2 = '42'
// console.log(num2 == num2)//необходимо тройное равно

    //Булевая логика
//true && true = true 
//true && false = false 
//false && true = false 
//false && false = false

//true || true = true 
//true || false = true 
//false || true = true  
//false || false = false

//!true = false
//!!true = true

    //Функции
// function calcAge(year) {
//     return 2022 - year
//}
//console.log (calcAge (2000))

// function logInfoAbout(name, year) {
// const age = calcAge(year)

//     if (age>0) {
// console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else{
//     console.log('Вообще-то это уже будущее!')
//     }
// }
// logInfoAbout('Александр', 2000)

    // Массивы
// const fishes = ['Барбус', 'Данио', 'Гуппи']
// console.log(fishes)
// console.log (fishes[2])
// fishes[0] = 'Бетта'
// console.log(fishes.length)
// console.log(fishes)

    // Циклы
// const fishes = ['Барбус', 'Данио', 'Гуппи', 'Креветка']
// for (let i =0; i <fishes.length; i++) {
//     const fish = fishes[i]
//     console.log(fish)
// }

// for (let fish of fishes){
//     console.log(fish)
// }

    //Объекты
//Группировка
const person = {
    firstName: 'valeriy',
    lastName: 'aboba',
    year:'2000',
    lang: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function(){
        console.log('greet')
    }
}

console.log(person.year)
person.greet()