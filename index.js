let nome = "Fawkes"
let expAtual = 10001
let nivel

if (expAtual <= 1000) {
    nivel = "Ferro"
} else if (expAtual <= 2000) {
    nivel = "Bronze"
} else if (expAtual <= 5000) {
    nivel = "Prata"
} else if (expAtual <= 7000) {
    nivel = "Ouro"
} else if (expAtual <= 8000) {
    nivel = "Platina"
} else if (expAtual <= 9000) {
    nivel = "Ascendente"
} else if (expAtual <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}



console.log("O Herói de nome " + [nome] + " está no nível de " + [nivel])