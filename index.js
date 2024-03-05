let placar = resultadoPlacar(80, 85)

function resultadoPlacar(vitorias, derrotas){
    let ranking = vitorias - derrotas
    return ranking
}


switch(placar){
    case placar <= 10:
        console.log("Ferrou! Se esforce mais. Seu resutado foi: " + placar)
        break
    case placar >= 11 && placar <= 20:
        console.log("Parabéns! Você é nível Bronze. Seu resutado foi: " + result)
        break
    case placar >= 21 && placar <= 50:
        console.log("Parabéns! Você é nível Prata. Seu resutado foi: " + result)
        break
    case placar >= 51 && placar <= 80:
        console.log("Parabéns! Você é nível Ouro. Seu resutado foi: " + result)
        break
    case placar >= 81 && placar <= 90:
        console.log("Parabéns! Você é nível Diamante. Seu resutado foi: " + result)
        break
    case placar >= 91 && placar <= 100:
        console.log("Parabéns! Você é Lendário. Seu resutado foi: " + result)
        break
    case placar > 101:
        console.log("Parabéns! Você é imortal. Seu resutado foi: " + result)
        break
    default:
        console.log("Valores errados.")
        break
    
}