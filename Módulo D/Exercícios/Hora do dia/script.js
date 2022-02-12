function carregar(){
    
    var msg =  window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >=0 && hora < 12){
        //bom dia
        console.log('bom dia')
        document.body.style.background = "rgb(175 134 86)"
        img.src = "../Imagens/manha.jpeg"
    }else if(hora >=12 && hora < 18){
        //boa tarde
        document.body.style.background = "rgb(175 71 0)"
        img.src= "../Imagens/tarde.jpeg"
    }else{
        //boa noite
        document.body.style.background = "rgb(2 35 65)"
        img.src= "../Imagens/noite.jpeg"
    }
}
