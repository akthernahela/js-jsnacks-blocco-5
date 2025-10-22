const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

let evenNumArray = [];
for (let i = 0; i < nums.length; i++) {
    const evenNum = nums[i];
    if(evenNum % 2 === 0){
        evenNumArray.push(evenNum)  
    }
}
console.log(evenNumArray); 
// Risultato: [2, 8, 4, 12]