alert('Seja bem-vindo ao jogo do número secreto');
let numeroSecreto = 3;
console.log(numeroSecreto)
let chute

// enquanto o chute não for igual ao n.s
while (chute != numeroSecreto) {
   chute = prompt('Escolha um número entre 1 e 30');
   // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Parabéns! Você descobriu o número secreto é ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    } 
}

