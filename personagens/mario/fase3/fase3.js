function verificaSeENumero(){
    let numUsuario = Number(prompt(`Digite o número da sua resposta`));
    while(isNaN(numUsuario)){
        numUsuario = Number(prompt(`Digite um número válido`));   
    }
    
    return verificaSeONumeroE123(numUsuario);
}

function verificaSeONumeroE123 (num){
    if(num == 1){
        alert('Parabéns você concluiu sua Jornada');   
        return tentarNovamente();

    }else if(num == 2){
        alert('Parabéns você concluiu sua Jornada');
        return tentarNovamente();
        
    }else{
        alert(`Nesta fase só são válidos apenas os números 1 e 2`);
        return verificaSeENumero();
    }
    
}

function tentarNovamente(){
    let btnResponder = document.querySelector('#respoder1');
    let tentarNovamente = document.querySelector('#tentar-novamente');
    let msgDaResposta = document.querySelector('#situacao-fase1');
    msgDaResposta.innerHTML = 'Parabéns você concluiu sua Jornada!'
    tentarNovamente.style.display = 'inline-block';
    tentarNovamente.innerHTML = 'Jogar novamente'
    btnResponder.style.display = 'none';
    
}





