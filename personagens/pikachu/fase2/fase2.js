function verificaSeENumero(){
    let numUsuario = Number(prompt(`Digite o número da sua resposta`));
    while(isNaN(numUsuario)){
        numUsuario = Number(prompt(`Digite um número válido`));   
    }
    
    return verificaSeONumeroE123(numUsuario);
}

function verificaSeONumeroE123 (num){
    if(num == 1){
        return proximaFase();

    }else if(num == 2){ 
        alert('Desistir nunca será uma opção, trate de escolher uma opção digna!');
        return verificaSeENumero();

    }else if(num == 3){      
        return tentarNovamente();

    }else{
        alert(`São válidos apenas os números 1,2 ou 3`);
        return verificaSeENumero();
    }
    
}

function tentarNovamente(){
    let btnResponder = document.querySelector('#respoder1');
    let tentarNovamente = document.querySelector('#tentar-novamente');
    let msgDaResposta = document.querySelector('#situacao-fase1');
    msgDaResposta.innerHTML = 'Infelizmente a única coisa que o Sonic entendeu foi Pikachu, por isso você não conseguiu ajudar.'
    tentarNovamente.style.display = 'inline-block';
    btnResponder.style.display = 'none';
    
}

function proximaFase(){
    let aProximaFase = document.querySelector('#proxima-fase');
    let btnResponder = document.querySelector('#respoder1');
    let msgDaResposta = document.querySelector('#situacao-fase1');
    msgDaResposta.innerHTML = 'Eita de novo, tá parecendo que você está atacando de propósito ;). Vá para a próxima fase!'
    aProximaFase.style.display = ('inline-block');
    btnResponder.style.display = ('none');
}




