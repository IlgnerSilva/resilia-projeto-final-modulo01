function verificaSeENumero(){
    let numUsuario = Number(prompt(`Digite o número da sua resposta`));
    while(isNaN(numUsuario)){
        numUsuario = Number(prompt(`Digite um número válido`));   
    }
    
    return verificaSeONumeroE123(numUsuario);
}

function verificaSeONumeroE123 (num){
    if(num == 1){
        return tentarNovamente();
        
    }else if(num == 2){
        return proximaFase();

    }else if(num == 3){
        alert('Desistir nunca será uma opção, trate de escolher uma opção digna!');
        return verificaSeENumero();
    }else{
        alert(`São válidos apenas os números 1,2 ou 3`);
        return verificaSeENumero();
    }
    
}

function tentarNovamente(){
    let btnResponder = document.querySelector('#respoder1');
    let aProximaFase = document.querySelector('#proxima-fase');
    let msgDaResposta = document.querySelector('#situacao-fase1');
    msgDaResposta.innerHTML = 'Mas Pikachu é muito curioso e resolve ir atrás da princesa.'
    aProximaFase.style.display = ('inline-block');
    btnResponder.style.display = 'none';
    
}

function proximaFase(){
    let aProximaFase = document.querySelector('#proxima-fase');
    let btnResponder = document.querySelector('#respoder1');
    let msgDaResposta = document.querySelector('#situacao-fase1');
    msgDaResposta.innerHTML = 'Te endendemos, Pikachu é um Pokemon que se assusta facilmente. Vá para a próxima fase!'
    aProximaFase.style.display = ('inline-block');
    btnResponder.style.display = ('none');
}




