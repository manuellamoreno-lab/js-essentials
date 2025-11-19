let pessoas={
    nome1: 'Carol',
    idade1:17,
    nome2:'Giovanna',
    idade2:18,
    nome3:'Arthur',
    idade3:12,
    nome4:'Enzo',
    idade4:21
}
for(let propriedades in pessoas){
    let valor = pessoas[propriedades]
    if(typeof(valor)==='number'){
        pessoas[propriedades]++
    }
    console.log(pessoas)
}
