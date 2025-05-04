let listaDenumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número de 1 a 100');
     
}
exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentaiva = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voçê descobriu o número secreto com ${tentativas} ${palavraTentaiva}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor!');
        }
        else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas++
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
let quantidadeDeElementosNaLista = listaDenumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDenumerosSorteados = [];
  }
  if (listaDenumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
    }
  else{
    listaDenumerosSorteados.push(numeroEscolhido);
    console.log(listaDenumerosSorteados);
    return numeroEscolhido;
  }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.querySelector('reiniciar').setAttribute('disabled',true);

}