// ==========================================================
// 01. Criar array de nomes, acessar e alterar elemento
// ==========================================================
console.log("\n=== Exercício 01 ===");

let nomes = ["Ana", "Bruno", "Carlos", "Daniel"];

console.log("Nome no índice 2:", nomes[2]); // Carlos
nomes[1] = "Beatriz"; // alterando
console.log("Array atualizado:", nomes);


// ==========================================================
// 02. Ordenar 2 números sem sort
// ==========================================================
console.log("\n=== Exercício 02 ===");

function ordenar2(arr) {
    if (arr[0] > arr[1]) {
        let tmp = arr[0];
        arr[0] = arr[1];
        arr[1] = tmp;
    }
    return arr;
}

console.log(ordenar2([9, 3]));


// ==========================================================
// 03. Ordenar 3 números sem sort
// ==========================================================
console.log("\n=== Exercício 03 ===");

function ordenar3(arr) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

console.log(ordenar3([7, 2, 9]));


// ==========================================================
// 04. Inverter array de 3 números
// ==========================================================
console.log("\n=== Exercício 04 ===");

let arr4 = [1, 2, 3];
console.log("Original:", arr4);
console.log("Invertido:", arr4.slice().reverse());


// ==========================================================
// 05. Inverter array de tamanho variável
// ==========================================================
console.log("\n=== Exercício 05 ===");

let arr5 = [10, 20, 30, 40, 50];
console.log("Original:", arr5);
console.log("Invertido:", arr5.slice().reverse());


// ==========================================================
// 06. Bubble sort
// ==========================================================
console.log("\n=== Exercício 06 ===");

function bubbleSort(arr) {
    let n = arr.length;
    let trocou;

    do {
        trocou = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                trocou = true;
            }
        }
    } while (trocou);

    return arr;
}

console.log(bubbleSort([9, 3, 7, 1]));


// ==========================================================
// 07. Encontrar todos os índices onde aparece um número
// ==========================================================
console.log("\n=== Exercício 07 ===");

function encontrarIndices(arr, num) {
    let indices = [];
    arr.forEach((val, i) => {
        if (val === num) indices.push(i);
    });
    return indices;
}

console.log(encontrarIndices([3, 5, 3, 9, 3], 3));


// ==========================================================
// 08. Fibonacci
// ==========================================================
console.log("\n=== Exercício 08 ===");

let nFib = 8;
let fib = [0, 1];

for (let i = 2; i < nFib; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(`Fibonacci (${nFib} números):`, fib);


// ==========================================================
// 09. Fatorial em array
// ==========================================================
console.log("\n=== Exercício 09 ===");

let nFat = 6;
let fat = [1]; // fatorial de 0

for (let i = 1; i <= nFat; i++) {
    fat[i] = i * fat[i - 1];
}

console.log(`Fatorial até ${nFat}:`, fat);


// ==========================================================
// 10. Jogo da velha + matriz preenchida 1..N
// ==========================================================
console.log("\n=== Exercício 10 ===");

// ------- Parte 1: Jogo da Velha -------
let tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function jogar(linha, coluna, jogador) {
    if (tabuleiro[linha][coluna] === "") {
        tabuleiro[linha][coluna] = jogador;
    }
}

jogar(0, 0, "X");
jogar(1, 1, "O");
jogar(2, 2, "X");

console.log("Tabuleiro:");
console.table(tabuleiro);

// ------- Parte 2: Matriz personalizada -------
let linhas = 3;
let colunas = 4;

let matriz = [];
let valor = 1;

for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = valor++;
    }
}

console.log("Matriz 3x4 preenchida:");
console.table(matriz);
