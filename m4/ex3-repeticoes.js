let pessoa = {
    nome:'Carol',
    idade:'17 anos',
    cidade:'Sorocaba',
}
for(let propriedades in pessoa){
    console.log(propriedades +": "+ pessoa[propriedades])
}
