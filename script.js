var numeroSecreto = parseInt(Math.random() * 11);
var chances = 2;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns!! 🤩 você acertou o valor ";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "coleque um numero entre 0 e 10";
  } else if (chances > 0 && chute > numeroSecreto) {
    resultado.innerHTML =
      "Um pouco mais pra baixo ! Você tem mais " + chances + " tentativas ";
    chances -= 1;
  } else if (chances > 0 && chute < numeroSecreto) {
    resultado.innerHTML =
      "Um pouco mais pra cima  ! Você tem mais " + chances + " tentativas";
    chances -= 1;
  } else {
    resultado.innerHTML =
      "Poxa que pena 😥 acabaram suas tentativas, O número certo era: " +
      numeroSecreto;
    alert("Fim de jogo");
    const button = document.querySelector("button");
    button.disabled = true;
  }
}