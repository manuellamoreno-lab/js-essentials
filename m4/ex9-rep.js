let alea = [12,'casa', true, 34, 'maçã']

let unicos = new Set()

for(let valor of alea){
    unicos.add(valor)
}

let quantidadeunico = unicos.size

console.log("Array original: "+alea)
console.log("Quantidade de valores unicos: "+quantidadeunico)
