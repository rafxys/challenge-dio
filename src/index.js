
// variables that store the name and the amount of experience of a hero
let name = "Rafael"
let quantExp = 10001
let level = 0


// I used the switch for this case:
switch (true) {
    case (quantExp <= 1000):
        level = "Iron"
        break
    
    case (quantExp >= 1001 && quantExp <= 2000):
        level = "Bronze"
        break

    case (quantExp >= 2001 && quantExp <= 5000):
        level = "Silver"
        break

    case (quantExp >= 5001 && quantExp <= 7000):
        level = "Gold"
        break

    case (quantExp >= 7001 && quantExp <= 8000):
        level = "Platinum"
        break

    case (quantExp >= 8001 && quantExp <= 9000):
        level = "Ascendant"
        break
    
    case (quantExp >= 9001 && quantExp <= 10000):
        level = "Immortal"
        break
    
    case (quantExp >= 10001):
        level = "Radiant"
        break

    default:
        console.log("You do not qualify")
}

console.log(`The Hero named ${name} is at the ${level} level`)
