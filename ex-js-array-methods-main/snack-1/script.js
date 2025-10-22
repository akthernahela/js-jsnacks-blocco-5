const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
const nameString = names.join(', ');
// Risultato: 'Edoardo', 'Simone', 'Francesco'
console.log(nameString);

//Cycle for() 
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//Cycle forEach()
names.forEach(name => {
    console.log(name);
});