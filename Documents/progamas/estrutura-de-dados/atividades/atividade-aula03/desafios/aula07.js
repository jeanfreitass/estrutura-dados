// ==========================================
// TAD Aluno
// ==========================================
class Aluno {
    constructor(nome, nota, matriculaAtiva = true) {
        this.nome = nome;
        this.nota = nota;
        this.matriculaAtiva = matriculaAtiva;
    }
}

// ==========================================
// TAD ListaAlunos
// ==========================================
class ListaAlunos {
    constructor() {
        this.lista = [];
        this.limite = 40;
    }

    inserir(aluno, posicao) {
        if (this.lista.length >= this.limite) {
            console.log("Limite máximo de alunos atingido.");
            return;
        }

        this.lista.splice(posicao - 1, 0, aluno);
        console.log(`${aluno.nome} adicionada(o) na posição ${posicao}.`);
    }

    remover(posicao) {
        if (posicao < 1 || posicao > this.lista.length) {
            console.log("Posição inválida.");
            return;
        }

        let removido = this.lista.splice(posicao - 1, 1)[0];
        console.log(`${removido.nome} removido(a) da posição ${posicao}.`);
    }

    ordenarPorNotaDesc() {
        this.lista.sort((a, b) => b.nota - a.nota);
    }

    mostrarListaCompleta() {
        console.log("\nPos  Aluno      Nota  Status");
        console.log("-------------------------------");

        this.lista.forEach((a, i) => {
            console.log(
                `${i + 1}  ${a.nome.padEnd(10)}  ${a.nota}  ${a.matriculaAtiva ? "A" : "I"}`
            );
        });
    }

    mostrarAtivos() {
        console.log("\nAlunos com matrícula ativa:");
        this.lista
            .filter(a => a.matriculaAtiva)
            .forEach(a => console.log(`${a.nome} - Nota: ${a.nota}`));
    }
}

// ==========================================
// Demonstração igual ao exemplo da imagem
// ==========================================

const lista = new ListaAlunos();

// Parte 1
lista.inserir(new Aluno("Pedro", 8.9), 1);
lista.inserir(new Aluno("Ana", 8.7), 2);
lista.inserir(new Aluno("Maria", 9.3, false), 3);

lista.ordenarPorNotaDesc();
lista.mostrarListaCompleta();

// Removendo Pedro
lista.remover(1);
lista.mostrarListaCompleta();

// Parte 2
lista.inserir(new Aluno("Paula", 9.1), 1);
lista.mostrarListaCompleta();

// Parte 3
lista.inserir(new Aluno("João", 7.5), 5);
