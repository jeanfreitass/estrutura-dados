const experiencias = [
    [24, 1],
    [ 1, 1],
    [32, 2],
    [ 2, 1],
    [ 4, 2],
    [24, 1],
    [ 9, 1],
    [ 8, 2],
    [34, 1],
    [25, 2],
    [43, 1],
    [24, 1],
    [43, 2],
    [54, 2],
    [76, 1]
]

animais = {
    'ratos': 1,
    'coelhos': 2
}

let totalCobaias = 0
let totalCoelhos = 0
let totalRatos = 0
let prcCoelhos = 0
let prcRatos = 0

//total de cobaias
for (const experiencia of experiencias){
    totalCobaias += experiencia[0]
}

//total de coelhos
for (const experiencia of experiencias){
    if (experiencia[1] == 1) {
        totalCoelhos += experiencia[0]
    }
}
//total de ratos
for (const experiencia of experiencias){
    if (experiencia[1] == 2) {
        totalRatos += experiencia[0]
    }
}

//percentual de uso
prcCoelhos = ( (totalCoelhos / totalCobaias) * 100 ).toFixed(2) 
prcRatos = ( (totalRatos  / totalCobaias) * 100 ).toFixed(2) 

console.log('Total de cobaias: ', totalCobaias)
console.log('Total de coelhos: ', totalCoelhos)
console.log('Total de ratos: ', totalRatos)
console.log('Percentual de coelhos usados: ', prcCoelhos, '%')
console.log('Percentual de ratos usados: ', prcRatos, '%')
