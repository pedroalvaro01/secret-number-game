alert('Seja bem-vindo ao jogo do número secreto');
let numeroSecreto = 7;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 30');

if (chute == numeroSecreto) {
    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Poxa... Infelizmente, você errou. :(')
}
