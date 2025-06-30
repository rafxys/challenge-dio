
// variáveis que armazenam o nome e a quantidade de experiência de um herói
let nomeHeroi = "Rafael"
let quantExp = 10001
let nivel = 0

switch (true) {
    case (quantExp <= 1000):
        nivel = "Ferro"
        break
    
    case (quantExp <= 2000):
        nivel = "Bronze"
        break

    case (quantExp <= 5000):
        nivel = "Prata"
        break

    case (quantExp <= 7000):
        nivel = "Ouro"
        break

    case (quantExp <= 8000):
        nivel = "Platina"
        break

    case (quantExp <= 9000):
        nivel = "Ascendente"
        break
    
    case (quantExp <= 10000):
        nivel = "Imortal"
        break
    
    case (quantExp >= 10001):
        nivel = "Radiante"
        break

    default:
        console.log("Você não se classifica em nenhuma das classes heróicas")
}

console.log(`O herói de nome ${nomeHeroi} está no nivel de ${nivel}`)