function contar(){
    console.log('apertou')
    let init = document.getElementById('init')
    let end = document.getElementById('end')
    let pass = document.getElementById('pass')
    let res = document.getElementById('res')

    if(init.value.length == 0 || end.value.length == 0 || pass.value.length == 0){
        alert('Dados faltando! tente novamente completando todos os campos')
    }else{
        res.innerHTML = `contando: <br>`
        let i = Number(init.value)
        let f = Number(end.value)
        let p = Number(pass.value)

        if(p<=0){
            alert('Passo inválido! Considerando passo 1...')
            p = 1
        }
        
        res.innerHTML += `🟢`
        if(i < f){
            //contagem crescente
            for(let c = i; c<=f; c+=p){
                res.innerHTML += ` 👉🏾 ${c} `
            }
           
        }else{
            //contagem regressiva
            for (let c = i; c>=f; c-=p){
                res.innerHTML += ` 👉🏾 ${c} `
            }
           
        }
        res.innerHTML += `🎉`
       
       
    }
    
}
