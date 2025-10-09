const readline = require('readline-sync');
let soma = 0
while (true){
    const cardapio = {
    100: { produto: "Cachorro quente", preco: 1.70 },
    101: { produto: "Bauru Simples", preco: 2.30 },
    102: { produto: "Bauru com ovo", preco: 2.60 },
    103: { produto: "Hamburguer", preco: 2.40 },
    104: { produto: "Cheeseburguer", preco: 2.50 },
    105: { produto: "Refrigerante", preco: 1.00 }
    };

    console.log(cardapio)
    console.log('Digite 0 para sair')
    
    const opcao = readline.question("Escolha uma opcao: ")
    switch (opcao){
        case '0': {
            process.exit(0)
        } break
    }
    
    const quantidade = readline.question("Escolha uma quantidade: ")
    
    soma += cardapio[opcao].preco * quantidade
    console.log('Valor total: ', soma)

}