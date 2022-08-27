
function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function imcDescricao(valorImc) {
  resultado = '';

  if (valorImc >= 16 && valorImc <= 16.9) {
    resultado = '"Muito abaixo do peso!"';
  } else if (valorImc >= 17 && valorImc <= 18.4) {
    resultado = '"Abaixo do peso!"';
  } else if (valorImc >= 18.5 && valorImc <= 24.9) {
    resultado = '"Peso normal!"';
  } else if (valorImc >= 25 && valorImc <= 29.9) {
    resultado = '"Acima do peso!"';
  } else if (valorImc >= 30 && valorImc <= 34.9) {
    resultado = '"Obesidade Grau I!"';
  } else if (valorImc >= 35 && valorImc <= 40) {
    resultado = '"Obesidade Grau II!"';
  } else if (valorImc > 40) {
    resultado = '"Obesidade Grau III!"';
  } else {
    resultado = '"Valor inválido!"';
  }

  return resultado;
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var vimcDescricao = document.querySelector('#imc-descricao');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;
  vimcDescricao.textContent = imcDescricao(imc);
}

start();

