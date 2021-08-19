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
        return tentarNovamente()

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
    let tentarNovamente = document.querySelector('#tentar-novamente');
    let msgDaResposta = document.querySelector('#situacao-fase1');
    msgDaResposta.innerHTML = 'Pela sua escolha obviamente você não conhece o Sonic, só para exemplificar, enquanto você está se preparando para sair correndo ele já deve estar chegando, Resumindo, em uma corrida normal ele vai vencer. :('
    tentarNovamente.style.display = 'inline-block';
    btnResponder.style.display = 'none';
    
}

function proximaFase(){
    let aProximaFase = document.querySelector('#proxima-fase');
    let btnResponder = document.querySelector('#respoder1');
    let msgDaResposta = document.querySelector('#situacao-fase1');
    msgDaResposta.innerHTML = 'Ótima escolha, como todos sabemos os encanamentos do Mario não tem lógica nenhuma, ou seja, com certeza este encanamento vai dar exatamente onde a princesa está né :~)  Vá para a próxima fase!'
    aProximaFase.style.display = ('inline-block');
    btnResponder.style.display = ('none');
}




