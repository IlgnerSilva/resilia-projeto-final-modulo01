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
    msgDaResposta.innerHTML = 'Sua escolha foi nobre, mas com esse gesto Sonic acaba ultrapassando Mario e salvando a princessa'
    tentarNovamente.style.display = 'inline-block';
    btnResponder.style.display = 'none';
    
}

function proximaFase(){
    let aProximaFase = document.querySelector('#proxima-fase');
    let btnResponder = document.querySelector('#respoder1');
    let msgDaResposta = document.querySelector('#situacao-fase1');
    msgDaResposta.innerHTML = 'Gênio, acredito que tenha feito essa escolha pois se lembrou de ter comido o cogumelo, com isso mesmo que tenha tomado um choque, você ainda tinha mais uma vida(chance). E por você ser um encanador gordinho, quando caiu em cima do Pikachu ele acabou desmaiando. Agora é só salvar a princesa.  Vá para a próxima fase!'
    aProximaFase.style.display = ('inline-block');
    btnResponder.style.display = ('none');
}




