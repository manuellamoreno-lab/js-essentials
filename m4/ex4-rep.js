let fruta = {
  nome: "Maçã",
  cor: "Vermelha",
  preço: 2.50,
  temporada: "Outono",
  vitaminas: ["C", "A", "K"],
  origem: "Brasil"
}
let soma=0

for(let propriedades in fruta){
    soma++
}

console.log(soma+" propriedades")
