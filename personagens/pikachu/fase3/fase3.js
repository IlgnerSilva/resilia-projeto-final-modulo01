function verificaSeENumero(){
    let numUsuario = Number(prompt(`Digite o número da sua resposta`));
    while(isNaN(numUsuario)){
        numUsuario = Number(prompt(`Digite um número válido`));   
    }
    
    return verificaSeONumeroE123(numUsuario);
}

function verificaSeONumeroE123 (num){
    if(num == 1){
        alert('Você terminou sua jornada');
        return proximaFase();

    }else if(num == 2){
        alert('Você terminou sua jornada');
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
    msgDaResposta.innerHTML = 'A princesa acaba se assustando e Pikachu também e com isso ele atinge ele com um raio.'
    tentarNovamente.style.display = 'inline-block';
    tentarNovamente.innerHTML = 'Jogar novamente'
    btnResponder.style.display = 'none';
    
}

function proximaFase(){
    let tentarNovamente = document.querySelector('#tentar-novamente');
    let btnResponder = document.querySelector('#respoder1');
    let msgDaResposta = document.querySelector('#situacao-fase1');
    msgDaResposta.innerHTML = 'Pikachu consegue guia-la em segurança até o castelo'
    tentarNovamente.style.display = 'inline-block';
    tentarNovamente.innerHTML = 'Jogar novamente'
    btnResponder.style.display = ('none');
}




