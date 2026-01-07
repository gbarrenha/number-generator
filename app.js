function obterValores() {
  return {
    quantidade: parseInt(document.getElementById(`quantidade`).value),
    de: parseInt(document.getElementById(`de`).value),
    ate: parseInt(document.getElementById(`ate`).value),
  };
}

function sortear() {
  const { quantidade, de, ate } = obterValores();

  let sorteados = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
    }

    sorteados.push(numero);
  }

  let resultado = document.getElementById(`resultado`);
  resultado.innerHTML = `<label class="texto__paragrafo">Drawn numbers: ${sorteados}</label>`;
  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  let botao = document.getElementById(`btn-reiniciar`);

  if (botao.classList.contains(`container__botao-desabilitado`)) {
    botao.classList.remove(`container__botao-desabilitado`);
    botao.classList.add(`container__botao`);
  } else {
    botao.classList.remove(`container__botao`);
    botao.classList.add(`container__botao-desabilitado`);
  }
}

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById(`resultado`).innerHTML = `<label class="texto__paragrafo">Drawn numbers: none so far</label>`;

  validarValores();
  alterarStatusBotao();
}

function validarValores() {
  const { quantidade, de, ate } = obterValores();
  const botaoSortear = document.getElementById(`btn-sortear`);

  if (quantidade && de && ate) {
    botaoSortear.disabled = false;
    botaoSortear.classList.remove(`container__botao-desabilitado`);
    botaoSortear.classList.add(`container__botao`);
  } else {
    botaoSortear.disabled = true;
    botaoSortear.classList.remove(`container__botao`);
    botaoSortear.classList.add(`container__botao-desabilitado`);
  }
}

document.getElementById(`quantidade`).addEventListener(`input`, validarValores);
document.getElementById(`de`).addEventListener(`input`, validarValores);
document.getElementById(`ate`).addEventListener(`input`, validarValores);
