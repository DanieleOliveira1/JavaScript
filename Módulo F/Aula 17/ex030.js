let amigo = {
    nome: 'josé',
    sexo: 'M',
    peso:85.4,
    aumentar(p=0){
        this.peso += p
    }
}

amigo.aumentar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)