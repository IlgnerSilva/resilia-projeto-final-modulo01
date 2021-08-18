function recebeNumero(){
    let numUsuario = Number(prompt(`Digite o número da sua resposta`));
    while(isNaN(numUsuario)){
        numUsuario = Number(prompt(`Digite um número válido`));
        
    }
    return testando(numUsuario);
}

function testando (testo){
    console.log('Sua função funcionou ', testo);
}




