function verificaSeENumero(){
    let numUsuario = Number(prompt(`Digite o número da sua resposta`));
    while(isNaN(numUsuario)){
        numUsuario = Number(prompt(`Digite um número válido`));   
    }
    
    return verificaSeONumeroE123(numUsuario);
}

function verificaSeONumeroE123 (num){
    if(num == 1){
        alert('Desistir nunca será uma opção, trate de escolher uma opção digna!');
        return verificaSeENumero();

    }else if(num == 2){ 
        alert('Parabéns você desbloqueou um Final alternativo, mas pode jogar de novo para ver outros finais possíveis.');
        return tentarNovamente()

    }else if(num == 3){      
        return proximaFase();

    }else{
        alert(`São válidos apenas os números 1,2 ou 3`);
        return verificaSeENumero();
    }
    
}

function tentarNovamente(){
    let btnResponder = document.querySelector('#respoder1');
    let tentarNovamente = document.querySelector('#tentar-novamente');
    let msgDaResposta = document.querySelector('#situacao-fase1');
    msgDaResposta.innerHTML = 'Sonic gostou tanto de ficar com o Pikachu que acaba desistindo de ir procura-la para ficar com seu novo amigo.'
    tentarNovamente.style.display = 'inline-block';
    tentarNovamente.innerHTML = 'Jogar novamente'
    btnResponder.style.display = 'none';
    
}

function proximaFase(){
    let aProximaFase = document.querySelector('#proxima-fase');
    let btnResponder = document.querySelector('#respoder1');
    let msgDaResposta = document.querySelector('#situacao-fase1');
    msgDaResposta.innerHTML = 'Exato, em todos os desafios que tiver durante sua jornada deve sempre dar o melhor de si. Não pare de correr. Vá para a próxima fase.'
    aProximaFase.style.display = ('inline-block');
    btnResponder.style.display = ('none');
}




