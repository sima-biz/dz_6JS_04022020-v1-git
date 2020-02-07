
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//////////////////   1. Массив случайных чисел.   /////////////////
///////////////////////////////////////////////////////////////////

// let randArr = []
// let randomArrLength = Math.floor(Math.random() * (50 - 30)) + 30 // создание случайного числа длинны массивав диапазоне от 30 до 50 
// console.log("randomArrLength - " + randomArrLength)
// for (let i = 1; i <= randomArrLength; i++) {
//   let res = Math.floor(Math.random() * (100 - (-100)) + (-100)) // случайные числаот -100 до 100
//   // console.log(" numb - " + i + "   " + res)
//   randArr.push(res) // заполняем массив длинна которого randomArrLength
// }
// console.log(randArr)
// let randArrPlusTwo = randArr.map(randArr => randArr +2) //.map проходит по каждому элементу в массиве и прибавляет 2 и результат записует в новый массив
// console.log(randArrPlusTwo)
// let averagerandomArrLength
// if (randomArrLength % 2 == 0) {
//   averagerandomArrLength = (randomArrLength / 2) + 1 // средний элемент массива четный
// } else {
//   averagerandomArrLength = (Math.ceil(randomArrLength / 2)) // средний элемнт массива не четный
// }
// console.log("averagerandomArrLength - " + averagerandomArrLength)
// let elementMidlands = randArrPlusTwo[averagerandomArrLength -1] // находим средний элемент массива
// console.log("elementMidlands - " + elementMidlands)
// let elementDeletFirst = randArrPlusTwo.shift() // удаляем последний єлемент массива и возращаем его значение переменной - elementDeletFirs
// console.log("elementDeletFirst - " + elementDeletFirst)
// console.log(randArrPlusTwo) // массив без первого элемента
// randArrPlusTwo.unshift(elementMidlands) // добавляем элемент в начало массива
// console.log(randArrPlusTwo)
// let ddd = "ВСЕ ЭЛЕМЕНТЫ МАССИВА БОЛЬШЕ НУЛЯ"
// let elementPositive = randArrPlusTwo.some(randArrPlusTwo => randArrPlusTwo <= 0)
// let resultElemPositive = elementPositive ? console.log("НЕ " + ddd) : console.log(ddd) // .some прооверяет удовлетворяет ли какой либо элемент условию
// let bbb = "ЭЛЕМЕНТ МАССИВА РАВНЫЙ НУЛЮ"
// let elementZero = randArrPlusTwo.some(randArrPlusTwo => randArrPlusTwo === 0)
// let resultElemZero = elementZero ? console.log(bbb + " ПРИСУТСТВУЕТ") : console.log(bbb + " ОТСУТСТВУЕТ")



///////////////////////////////////////////////////////////////////
////////////////////  2. Разворот строки  /////////////////////////
///////////////////////////////////////////////////////////////////


// let initStr = "Lorem ipsum dolor sit amet"
// console.log(initStr)
// // let initArr = initStr.split("") // разбиваем обьект на массив строк
// // console.log(initArr)
// // let revArr = initArr.reverse() // порядок элементов в массиве меняем на обратный
// // console.log(revArr)
// // let newRevStr = revArr.join("") // объединяем все элементы массива в строку
// let newRevStr = initStr.split("").reverse().join("")
// console.log(newRevStr)


//////////////////////////////////////////////////////////////////
////////////////////  3. Изменение текста  /////////////////////////
///////////////////////////////////////////////////////////////////


// let initText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// let initArrText = initText.split(". ") // разбиваем обьект на массив строк подстрокой (". ")
// console.log(initArrText)
// let element4ArrText = initArrText.pop() // удаляем последний єлемент массива и возращаем его значение переменной - element4ArrText
// console.log(element4ArrText)
// let element4ArrTextToUpCa = element4ArrText.toUpperCase() // строку преобразуем в верхний регистр
// console.log(element4ArrTextToUpCa)
// console.log(initArrText)
// let newinitArrText = initArrText.map(initArrText => initArrText + ".") //.map проходит по каждому элементу в массиве и прибавляет "." и результат записует в новый 
// newinitArrText.push(element4ArrTextToUpCa) // добавляем элементы в конец массива
// console.log(newinitArrText)
// let carryovernewinitArrText = newinitArrText.map(newinitArrText => newinitArrText + "\n")  //.map проходит по каждому элементу в массиве и прибавляет "\n" и результат записует в новый массив
// console.log(carryovernewinitArrText)
// let paragraph = "  " // чтобы сделать начало параграфа
// carryovernewinitArrText.unshift(paragraph) // добавляем элементы в начало массива
// console.log(carryovernewinitArrText)
// let newinitText = carryovernewinitArrText.join("") // объединяем все элементы массива в строку
// console.log(newinitText)


///////////////////////////////////////////////////////////////////
//////////////////// 4. Два массива вместе   //////////////////////
///////////////////////////////////////////////////////////////////



// let tenLongArr = []
// for (let i = 1; i <= 10; i++) { // 10 элементов
//   let resTen = Math.floor(Math.random() * (10 - 0) + 0) // случайное число от 0 до 10
//   console.log("numbe - " + i + "  " + resTen)
//   tenLongArr.push(resTen) // добавляем элементы в конец массива
// }
// console.log(tenLongArr)
// let twentyLongArr = []
// for (let i = 1; i <= 20; i++) {  // 20 элементов
//   let resTwenty = Math.floor(Math.random() * (0 - (-10)) + (-10)) //число от -10 до 0
//   console.log("numbe - " + i + "  " + resTwenty)
//   twentyLongArr.push(resTwenty) // добавляем элементы в конец массива
// }
// console.log(twentyLongArr)
// let commonLongArr = twentyLongArr.concat(tenLongArr)
// console.log("СОЕДИНИЛИ ДВА МАССИВА")
// console.log(commonLongArr)
// let shareCommonLongArr = commonLongArr.map(elementCoLoArr => elementCoLoArr / 5)
// console.log("МАССИВ ДЕЛЕННЫЙ НА 5")
// console.log(shareCommonLongArr)
// shareCommonLongArr.sort((elementA, elementB) => elementB - elementA)
// console.log("МАССИВ СОРТИРОВАННЫЙ ОТ БОЛЬШЕГО К МЕНЬШЕМУ")
// console.log(shareCommonLongArr)
// let wholeNumbShaComLongArr = []
// let fractionalNumbShaComLongArr = []
// for (i = 0; i <= (shareCommonLongArr.length -1); i++) {
//   Number.isInteger(shareCommonLongArr[i]) ? wholeNumbShaComLongArr.push(shareCommonLongArr[i]) : fractionalNumbShaComLongArr.push(shareCommonLongArr[i])
// }
// console.log("МАССИВ ИЗ ЦЕЛЫХ ЧИСЕЛ")  
// console.log(wholeNumbShaComLongArr)
// console.log("МАССИВ ИЗ ДРОБНЫХ ЧИСЕЛ")
// console.log(fractionalNumbShaComLongArr)
// fractionalNumbShaComLongArr.length = 0
// console.log("МАССИВ УДАЛЁН ИЗ ДРОБНЫХ ЧИСЕЛ")
// console.log(fractionalNumbShaComLongArr)




////////////////////////////////////////////////////////////////////
//////////////////// 5. Задание со звездочкой //////////////////////
////////////////////////////////////////////////////////////////////


// let arrInit = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let arrTemp = arrInit // рабочий массив в конце будет обнулён
// let arrNew = []
// let n = arrInit.length // длинна массива 9
// console.log(n) 
// console.log(arrTemp)
// for (let i = n; i > 0; i--) {  // начинаем с конца
//   let posElement = Math.floor(Math.random() * (i) ) //случайное число ИНДЕКС от 0 до i (i при каждом проходе уменьшается на 1)
//   console.log(posElement)
//   arrNew[n-i] = arrTemp[posElement] // заполняем массив arrNew по индексу начиная с 0
//   arrTemp.splice(posElement, 1) // удаляем 1 элемент из массива arrTemp по индексу
//   // console.log(arrTemp)
// }
// console.log(arrNew)