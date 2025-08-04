function saudaUsuario() {
  const elNomeUsr = document.getElementById('nomeUsrEx00'); // elemento com o nome do usuário
  const nomeUsr   = elNomeUsr.value.trim(); // Recupera o nome do usuario
  
  const elSaudaUsr = document.getElementById('saudacaoUsr'); // recupera elemento que exibirá a saudação na tela

  if (nomeUsr != '') {// se o nome digitado é válido, exibe a saudação
     const mensagem =  'Olá, '+nomeUsr+', seja muito bem vindo ao site de processamento de números!'  
     elSaudaUsr.innerHTML = mensagem;
     elSaudaUsr.style.display = 'block'; // Torna o elemento visível
  } else {// se o nome digitado NÃO é válido, exibe uma mensagem de erro e oculta a saudação 
    alert('Você não digitou um nome válido!');
    elSaudaUsr.style.display = 'none'; // Torna o elemento invisível
  }
}

function dobraNumero() {
  const elNum1 = document.getElementById('num1Ex01'); // Recupera o elemento com o número a ser dobrado
  const num1 = parseFloat(elNum1.value); // Lê o primeiro valor e o transforma em número 
  const resultado = num1*2; // dobra o núemro fornecido pelo usuário
  const elResultado = document.getElementById('resultadoDobra'); // Recupera o elemento que vai exibir o resultado
  elResultado.innerHTML = resultado; // Exibe o resultado 
}

function somaNumeros() {
  const elNum1 = document.getElementById('num1Ex02'); // Recupera o elemento com o primeiro número 
  const elNum2 = document.getElementById('num2Ex02'); // Recupera o elemento com o segundo número 
  const num1 = parseFloat(elNum1.value); // Lê o primeiro valor 
  const num2 = parseFloat(elNum2.value); // Lê o segundo valor 
  const resultado = num1 + num2; // soma os números
  const elResultado = document.getElementById('resultadoSoma');  // Recupera o elemento que vai exibir o resultado
  elResultado.innerHTML = resultado; // Exibe o resultado
  }

  function somaTres() {
  const elNum1 = document.getElementById('num1Ex03'); // Recupera o elemento com o primeiro número 
  const elNum2 = document.getElementById('num2Ex03'); // Recupera o elemento com o segundo número 
  const elNum3 = document.getElementById('num3Ex03'); // Recupera o elemento com o segundo número 
  const num1 = parseFloat(elNum1.value); // Lê o primeiro valor 
  const num2 = parseFloat(elNum2.value); // Lê o segundo valor
  const num3 = parseFloat(elNum3.value); // Lê o segundo valor 
  const resultado = num1 + num2 + num3; // soma os números
  const elResultado = document.getElementById('resultadoSomatres');  // Recupera o elemento que vai exibir o resultado
  elResultado.innerHTML = resultado; // Exibe o resultado
  }

  function subtracaoNumeros() {
  const elNum1 = document.getElementById('num1Ex04'); // Recupera o elemento com o primeiro número 
  const elNum2 = document.getElementById('num2Ex04'); // Recupera o elemento com o segundo número 
  const num1 = parseFloat(elNum1.value); // Lê o primeiro valor 
  const num2 = parseFloat(elNum2.value); // Lê o segundo valor 
  const resultado = num1 - num2; // soma os números
  const elResultado = document.getElementById('resultadoSubtracao');  // Recupera o elemento que vai exibir o resultado
  elResultado.innerHTML = resultado; // Exibe o resultado
  }

  function multiplicacaoNumeros() {
  const elNum1 = document.getElementById('num1Ex05'); // Recupera o elemento com o primeiro número 
  const elNum2 = document.getElementById('num2Ex05'); // Recupera o elemento com o segundo número 
  const num1 = parseFloat(elNum1.value); // Lê o primeiro valor 
  const num2 = parseFloat(elNum2.value); // Lê o segundo valor 
  const resultado = num1 * num2; // soma os números
  const elResultado = document.getElementById('resultadoMultiplicacao');  // Recupera o elemento que vai exibir o resultado
  elResultado.innerHTML = resultado; // Exibe o resultado
  }

  function divisaoNumeros() {
  const elNum1 = document.getElementById('num1Ex06'); // Recupera o elemento com o primeiro número 
  const elNum2 = document.getElementById('num2Ex06'); // Recupera o elemento com o segundo número 
  const num1 = parseFloat(elNum1.value); // Lê o primeiro valor 
  const num2 = parseFloat(elNum2.value); // Lê o segundo valor 
  const resultado = num1 / num2; // soma os números
  const elResultado = document.getElementById('resultadoDivisao');  // Recupera o elemento que vai exibir o resultado
  elResultado.innerHTML = resultado; // Exibe o resultado
  }

  function multiplasOperacoes() {
  const elNum1 = document.getElementById('num1Ex07'); // Recupera o elemento com o primeiro número 
  const elNum2 = document.getElementById('num2Ex07'); // Recupera o elemento com o segundo número 
  const num1 = parseFloat(elNum1.value); // Lê o primeiro valor 
  const num2 = parseFloat(elNum2.value); // Lê o segundo valor 
  const resultado = num1 *2 - num2; // soma os números
  const elResultado = document.getElementById('resultadoOperacao');  // Recupera o elemento que vai exibir o resultado
  elResultado.innerHTML = resultado; // Exibe o resultado
  }

  function nomeUsuario() {
  const elNomeUsr = document.getElementById('nomeUsrEx08'); // elemento com o nome do usuário
  const nomeUsr   = elNomeUsr.value.trim(); // Recupera o nome do usuario

  const elSobrenomeUsr = document.getElementById('sobreNomeUsrEx08'); // elemento com o nome do usuário)
  const sobreNomeUsr   = elSobrenomeUsr.value.trim(); // Recupera o nome do usuario
  
  const nomeCompleto = nomeUsr+' '+sobreNomeUsr;
  const elResult08 = document.getElementById('resultEx08'); // recupera elemento que exibirá a saudação na tela
  elResult08.innerHTML = nomeCompleto;
}



