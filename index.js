let frutas = ['Banana', 'Macâ', 'Laranja', 'Uva']

// let frutasExtraidas = frutas.slice(1,3)

// console.log(frutasExtraidas)

let frutasExtraidas = frutas.splice(1, 2)

console.log(frutasExtraidas)

console.log(frutas)

let removeEAdcionaFrutas = frutas.splice(1, 2, 'Goiaba', 'Abacaxi', 'Pêra')

console.log(frutas)


console.log(removeEAdcionaFrutas)