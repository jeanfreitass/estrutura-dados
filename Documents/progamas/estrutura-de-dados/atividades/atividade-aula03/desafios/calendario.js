// ============================================================
// CALENDÁRIO 2025  
// ============================================================

// Meses
const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
];

// Dias por mês 
const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Dia da semana do primeiro dia do ano:
// 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
let primeiroDiaSemana = 3; // 1º de janeiro de 2025 = Quarta-feira (índice 3)

for (let m = 0; m < 12; m++) {

    console.log("\n=================================");
    console.log(`      ${meses[m]} de 2025`);
    console.log("=================================");

    let semanas = [];      
    let semanaAtual = new Array(7).fill(" "); // semana vazia
    let dia = 1;

    // Colocar os espaços iniciais antes do primeiro dia do mês
    for (let i = primeiroDiaSemana; i < 7 && dia <= diasPorMes[m]; i++) {
        semanaAtual[i] = dia;
        dia++;
    }

    semanas.push(semanaAtual);

    // Semanas seguintes
    while (dia <= diasPorMes[m]) {
        let novaSemana = [];

        for (let i = 0; i < 7; i++) {
            if (dia <= diasPorMes[m]) {
                novaSemana[i] = dia;
                dia++;
            } else {
                novaSemana[i] = " ";
            }
        }

        semanas.push(novaSemana);
    }

    // Exibir semanas formatadas
    semanas.forEach(semana => {
        console.log(
            semana
                .map(d => String(d).padStart(2, " "))
                .join(" ")
        );
    });

    // Atualizar dia da semana para o próximo mês
    primeiroDiaSemana = 
        (primeiroDiaSemana + diasPorMes[m]) % 7;
}
