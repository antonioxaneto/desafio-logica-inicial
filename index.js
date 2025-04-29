let heroi = "Batman"
let xpDoHeroi = 10001
let nivelDoHeroi;

if (xpDoHeroi < 1000) {
    nivelDoHeroi = "ferro";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    nivelDoHeroi = "bronze";
} else if (xpDoHeroi > 2000 && xpDoHeroi <= 5000) {
    nivelDoHeroi = "prata";
} else if (xpDoHeroi > 5000 && xpDoHeroi <= 7000) {
    nivelDoHeroi = "ouro";
} else if (xpDoHeroi > 7000 && xpDoHeroi <= 8000) {
    nivelDoHeroi = "platina";
} else if (xpDoHeroi > 8000 && xpDoHeroi <= 9000) {
    nivelDoHeroi = "ascendente";
} else if (xpDoHeroi > 9000 && xpDoHeroi <= 10000) {
    nivelDoHeroi = "imortal";
} else {
    nivelDoHeroi = "radiante";
}

console.log("O Herói de nome " + heroi + " está no nível de " + nivelDoHeroi)