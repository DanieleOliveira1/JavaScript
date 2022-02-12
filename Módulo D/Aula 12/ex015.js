//hora do usuário
var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas`);

if (hora < 12){
    console.log('bom dia')
} else if(hora >=12 && hora <=18){
    console.log('boa tarde')
}else{
    console.log('boa noite')
}
