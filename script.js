
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//////////////////   1. Массив случайных чисел.   /////////////////
///////////////////////////////////////////////////////////////////





// let randArr = []
// let randomArrLength = Math.floor(Math.random() * (50 - 30)) + 30 
// console.log("randomArrLength - " + randomArrLength)
// for (let i = 1; i <= randomArrLength; i++) {
//   let res = Math.floor(Math.random() * (100 - (-100)) + (-100)) 
//   randArr.push(res) // заполняем массив длинна которого randomArrLength
// }
// console.log(randArr)
// randArr = randArr.map(randArr => randArr +2) // прибовляем 2 каждому элемену
// console.log(randArr)
// let elementMidlands
// if (randomArrLength % 2 == 0) {
//   elementMidlands = randArr[(randomArrLength / 2) - 1]
//   console.log(elementMidlands) // "четный" 
// } else {
//   elementMidlands = randArr[(Math.ceil(randomArrLength / 2)) - 1]
//   console.log(elementMidlands) //" не четный"
// }   
// console.log("elementMidlands - " + elementMidlands) // находим средний элемент 
// randArr.shift() // удаляем первый єлемент массива
// console.log(randArr) 
// randArr.unshift(elementMidlands) // добавляем элемент в начало массива
// console.log(randArr)
// let ddd = "ВСЕ ЭЛЕМЕНТЫ МАССИВА БОЛЬШЕ НУЛЯ"
// let elementPositive = randArr.every(randArr => randArr > 0)
// elementPositive ? console.log(ddd) : console.log("НЕ " + ddd) 
// let bbb = "ЭЛЕМЕНТ МАССИВА РАВНЫЙ НУЛЮ"
// let elementZero = randArr.some(randArr => randArr === 0)
// elementZero ? console.log(bbb + " ПРИСУТСТВУЕТ") : console.log(bbb + " ОТСУТСТВУЕТ")



///////////////////////////////////////////////////////////////////
////////////////////  2. Разворот строки  /////////////////////////
///////////////////////////////////////////////////////////////////


// let initStr = "Lorem ipsum dolor sit amet"
// console.log(initStr)
// let newRevStr = initStr.split("").reverse().join("")
// console.log(newRevStr)

//////////////////////////////////////////////////////////////////
////////////////////  3. Изменение текста  /////////////////////////
// ///////////////////////////////////////////////////////////////////




// let initText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// let initArrText = initText.split(". ") 
// console.log(initArrText)
// initArrText[initArrText.length-1] = initArrText[initArrText.length-1].toUpperCase()
// console.log(initArrText)
// let resinitArrText = initArrText.join(".\n")
// console.log(resinitArrText)


///////////////////////////////////////////////////////////////////
//////////////////// 4. Два массива вместе   //////////////////////
///////////////////////////////////////////////////////////////////



// let tenLongArr = []
// arr(10, 10, 0, tenLongArr)
// console.log(tenLongArr)
// let twentyLongArr = []
// arr(20, 0, -10, twentyLongArr)
// console.log(twentyLongArr)
// function arr(n, maxX, minX, arrX = []) {
//   for (let i = 1; i <= n; i++) {  
//      let res = Math.floor(Math.random() * (maxX - (minX)) + (minX))   
//       arrX.push(res) 
//     }
// }
// let commonLongArr = twentyLongArr.concat(tenLongArr)
// console.log("СОЕДИНИЛИ ДВА МАССИВА")
// console.log(commonLongArr)
// commonLongArr = commonLongArr.map(element => element / 5)
// console.log(commonLongArr) // "МАССИВ ДЕЛЕННЫЙ НА 5"

// commonLongArr.sort((elementA, elementB) => elementB - elementA)
// console.log(commonLongArr) //"МАССИВ СОРТИРОВАННЫЙ ОТ БОЛЬШЕГО К МЕНЬШЕМУ"
// let resultCommonLongArr = commonLongArr.filter(function(element) {
//   if (Number.isInteger(element)) {
//     return true  
//   } else {
//     return false
//   }
// })
// console.log(resultCommonLongArr) //"МАССИВ ИЗ ЦЕЛЫХ ЧИСЕЛ"
// commonLongArr.length = 0
// console.log(commonLongArr, 'пустой массив')
// commonLongArr = null
// console.log(commonLongArr, "теперь это не массив")



////////////////////////////////////////////////////////////////////
//////////////////// 5. Задание со звездочкой //////////////////////
////////////////////////////////////////////////////////////////////


// let arrInit = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let arrTemp = arrInit.slice() // рабочий массив в конце  не будет обнулён
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
// console.log(arrInit)
// console.log(arrNew)



//////////////////////////////////////////////////////////////

// let  arrInit = [1, 2, 3, 4, 5, 6, 7, 8, 9] // исходный массив
// let arrInitTemp = arrInit.slice() 
// arrInitTemp.sort(function() {  
// return Math.ceil(arrInitTemp.length / 3) - Math.floor(Math.random() * (arrInitTemp.length)) // при делении на 3 лучше сортируется
// })
// console.log(arrInit)
// console.log(arrInitTemp)