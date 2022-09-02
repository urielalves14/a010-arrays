const numero =[10,20,30]
const palavras = ["leila", "camila", "leiliene"]
const misto = [2, "leila", 5, "camila"]

const numeroCopia = numero.slice()
const palavrasCopia = palavras.slice() 
const mistoCopia = misto.slice()

numeroCopia.push(40)
palavrasCopia.pop()
mistoCopia.splice(1,1)

console.log(numero, numeroCopia)
console.log(palavras, palavrasCopia)
console.log(misto, mistoCopia)


