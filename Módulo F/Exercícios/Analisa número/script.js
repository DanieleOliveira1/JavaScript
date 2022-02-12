let num = document.getElementById('num')
let tab = document.getElementById('seltab')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >=1  && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        let init = document.getElementById('init')
        init.innerHTML = ""

        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        res.innerHTML = ""

    }else{
        alert('valor inválido ou já adicionado na lista')
    }

    num.value = ""
    num.focus()
}

function analisar(){
    if(valores.length == 0){
        alert('adicione valores antes de finalizar')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){

            soma += valores[pos]

            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }

        media = soma/total

        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores informados é ${media}.</p>`

    }
}

/*
function adicionar(){
    if(num.value.length == 0 || num.value > 100){
        alert('informe um valor válido e tente novamente')
    }else{
        let item = document.createElement('option')
        let init = document.getElementById('init')

        init.innerHTML = ""
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
    }
}
*/

