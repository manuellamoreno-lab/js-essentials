let dados = {
    produto:'Hello Kitty Pelucia',
    marca:'Sanrio',
    preco:90.99,
    emEstoque:true
}
let arrayfinal=[]

for(let propriedade in dados){
    let valor = dados[propriedade];
    let stringformatada = propriedade + ': '+valor;
    
    arrayfinal.push(stringformatada)
}
console.log(arrayfinal)
