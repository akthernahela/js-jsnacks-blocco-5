const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
//const increasedNum = [];

//Cycle for
/*for(let i = 0; i < numbers.length; i++){
    let num = numbers[i];
    num++
    increasedNum.push(num)
};*/

//Cycle forEach
/*numbers.forEach(number => {
    number++
    increasedNum.push(number)
});*/

//map()
const increasedNum = numbers.map( number => number + 1);
console.log(increasedNum);


// Risultato: [3, 9, 5, 8, 3, 88]
//console.log(increasedNum);
