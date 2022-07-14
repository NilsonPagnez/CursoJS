var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)
if(hora >=6 && hora <= 12 ) {
    console.log('Bom dia')

}else if(hora < 18 && hora > 12) {
    console.log('Boa tarde')
}else if(hora <= 23 && hora >= 18){
    console.log('Boa noite')
}else if(hora >= 0 && hora <= 24){
    console.log('Boa madruga')
}else {
    console.log('Esse horario não existe')

}