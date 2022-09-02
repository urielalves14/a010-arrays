const numero = [2,5,98,89,43,667,900]
const string = ["uriel", "marco", "elton"]
const mista = [4, "fany", true]

console.log(numero.length)
console.log(string.length)
console.log(mista.length)

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array
console.log(`${numero[0]}, ${string[1]}, ${mista[2]} `)

// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
console.log(numero.includes(2))
console.log(mista.includes("agnes"))