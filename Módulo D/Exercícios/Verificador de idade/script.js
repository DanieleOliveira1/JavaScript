function verificar(){
    var data = new Date()
    var ano = data.getFullYear() 
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'homem'
            
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', '../Imagens/menino.jpeg')

            } else if (idade < 21){
                //jovem
                img.setAttribute('src', '../Imagens/adolescente-menino.jpeg')

            } else if(idade < 50){
                //adulto
                img.setAttribute('src', '../Imagens/adulto.jpeg')
            }else{
                //idoso
                img.setAttribute('src', '../Imagens/idoso.jpeg')
            }


        } else if(fsex[1].checked){
            genero = 'mulher'

            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', '../Imagens/menina.jpg')

            } else if (idade < 21){
                //jovem
                img.setAttribute('src', '../Imagens/adolescente-menina.jpeg')

            } else if(idade < 50){
                //adulta
                img.setAttribute('src', '../Imagens/adulta.jpeg')
            }else{
                //idosa
                img.setAttribute('src', '../Imagens/idosa.jpeg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)


        
    }
}