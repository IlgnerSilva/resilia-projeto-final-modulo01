
function escolhendoPersonagem() {
    let teste = document.querySelector(".azul");
    let escolhaDePersonagem = Number(prompt("Escolha seu personagem digitando o número dele!"));

    if (escolhaDePersonagem == 1) {
        teste.style.backgroundColor = "green";
    } else if (escolhaDePersonagem == 2) {
        teste.style.backgroundColor = "blue";
    } else if (escolhaDePersonagem == 3) {
        teste.style.backgroundColor = "pink";
    } else {
        alert("Digite um número válido e tente novamente!");
    }

}
