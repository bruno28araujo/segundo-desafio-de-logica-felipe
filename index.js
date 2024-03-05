let placar = resultadoPlacar(200, 85)

function resultadoPlacar(vitorias, derrotas){
    let ranking = vitorias - derrotas
    return ranking
}

if (placar <= 10){
    console.log("Ferrou! Se esforce mais.")
    console.log("Seu resutado foi: " + placar)
}else if(placar >= 11 && placar <= 20){
    console.log("Parabéns! Você é nível Bronze.")
    console.log("Seu resutado foi: " + placar)
}else if(placar >= 21 && placar <= 50){
    console.log("Parabéns! Você é nível Prata.")
    console.log("Seu resutado foi: " + placar)
}else if(placar >= 51 && placar <= 80){
    console.log("Parabéns! Você é nível Ouro.")
    console.log("Seu resutado foi: " + placar)
}else if(placar >= 81 && placar <= 90){
    console.log("Parabéns! Você é nível Diamante.")
    console.log("Seu resutado foi: " + placar)
}else if(placar >= 91 && placar <= 100){
    console.log("Parabéns! Você é Lendário.")
    console.log("Seu resutado foi: " + placar)
}else if(placar > 101){
    console.log("Parabéns! Você é imortal.")
    console.log("Seu resutado foi: " + placar)
}else{
    console.log("Valores errados.")
}
