function obterValores() {
  return {
    quantity: parseInt(document.getElementById(`quantity`).value),
    from: parseInt(document.getElementById(`from`).value),
    upTo: parseInt(document.getElementById(`upTo`).value),
  };
}

function sortear() {
  const { quantity, from, upTo } = obterValores();

  let sorteados = [];
  let numero;

  for (let i = 0; i < quantity; i++) {
    numero = obterNumeroAleatorio(from, upTo);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(from, upTo);
    }

    sorteados.push(numero);
  }

  let resultado = document.getElementById(`resultado`);
  resultado.innerHTML = `<label class="text__paragraph">Drawn numbers: ${sorteados}</label>`;
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
  document.getElementById("quantity").value = "";
  document.getElementById("from").value = "";
  document.getElementById("upTo").value = "";
  document.getElementById(`resultado`).innerHTML = `<label class="text__paragraph">Drawn numbers: none so far</label>`;

  validarValores();
  alterarStatusBotao();
}

function validarValores() {
  const { quantity, from, upTo } = obterValores();
  const botaoSortear = document.getElementById(`btn-sortear`);

  if (quantity && from && upTo) {
    botaoSortear.disabled = false;
    botaoSortear.classList.remove(`container__botao-desabilitado`);
    botaoSortear.classList.add(`container__botao`);
  } else {
    botaoSortear.disabled = true;
    botaoSortear.classList.remove(`container__botao`);
    botaoSortear.classList.add(`container__botao-desabilitado`);
  }
}

document.getElementById(`quantity`).addEventListener(`input`, validarValores);
document.getElementById(`from`).addEventListener(`input`, validarValores);
document.getElementById(`upTo`).addEventListener(`input`, validarValores);
