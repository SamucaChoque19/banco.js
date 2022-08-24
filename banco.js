let banco = {
    saldo: 2500,
    tipodeConta: "Conta Poupança",
    agencia: "Marin dos Caetés",
    numero: 3209,

    buscarsaldo: function() {
        console.log(this.saldo);
    },

    deposito: function(deposito) {
        this.saldo += deposito;
        console.log(`${deposito} depositado`);
    },

    saque: function(saque) {
        if(this.saldo >= saque){
            this.saldo -= saque;
            console.log(`${saque} saque realizado. \n saldo restante: ${this.saldo}`)    
        }else{
            console.log("saldo insuficiente!");
        }
    },

    info: function() {
        console.log(`\n ----- sua conta neste banco ${this.agencia} ---- \n numero da conta: ${this.numero} \n tipo de conta: ${this.tipodeConta} \n saldo atualizado: ${this.saldo} \n`);
    }
}

banco.buscarsaldo();
banco.deposito(500);
banco.saque(1000);
banco.info();