function getValues() {
  return {
    quantity: parseInt(document.getElementById(`quantity`).value),
    from: parseInt(document.getElementById(`from`).value),
    upTo: parseInt(document.getElementById(`upTo`).value),
  };
}

function toDraw() {
  const { quantity, from, upTo } = getValues();

  let drawn = [];
  let number;

  for (let i = 0; i < quantity; i++) {
    number = getRamdomNumber(from, upTo);

    while (drawn.includes(number)) {
      number = getRamdomNumber(from, upTo);
    }

    drawn.push(number);
  }
  drawn.sort((a, b) => a - b);

  let result = document.getElementById(`result`);
  result.innerHTML = `<label class="text__paragraph">Drawn numbers: ${drawn.join(`, `)}.</label>`;

  setButtonAfterDraw();
}

function getRamdomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setButtonAfterDraw() {
  const drawBtn = document.getElementById(`btn-toDraw`);
  const resetBtn = document.getElementById(`btn-reset`);

  drawBtn.disabled = true;
  drawBtn.classList.remove(`container__button`);
  drawBtn.classList.add(`container__button-disabled`);

  resetBtn.disabled = false;
  resetBtn.classList.remove(`container__button-disabled`);
  resetBtn.classList.add(`container__button`);
}

function reset() {
  document.getElementById("quantity").value = "";
  document.getElementById("from").value = "";
  document.getElementById("upTo").value = "";
  document.getElementById(`result`).innerHTML = `<label class="text__paragraph">Drawn numbers: none so far.</label>`;

  const resetBtn = document.getElementById(`btn-reset`);

  resetBtn.disabled = true;
  resetBtn.classList.remove(`container__button`);
  resetBtn.classList.add(`container__button-disabled`);

  validadeValues();
}

function validadeValues() {
  const { quantity, from, upTo } = getValues();
  const buttonToDraw = document.getElementById(`btn-toDraw`);

  if (quantity && from && upTo) {
    buttonToDraw.disabled = false;
    buttonToDraw.classList.remove(`container__button-disabled`);
    buttonToDraw.classList.add(`container__button`);
  } else {
    buttonToDraw.disabled = true;
    buttonToDraw.classList.remove(`container__button`);
    buttonToDraw.classList.add(`container__button-disabled`);
  }
}

document.getElementById(`quantity`).addEventListener(`input`, validadeValues);
document.getElementById(`from`).addEventListener(`input`, validadeValues);
document.getElementById(`upTo`).addEventListener(`input`, validadeValues);
