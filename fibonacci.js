//Para esse código funcionar, é necessário instalar a biblioteca prompt-sync, que pode ser feito com:
//npm i prompt-sync

const prompt = require("prompt-sync")();

let n = prompt(
  "Digite um número para ver se existe na sequência de Fibonacci \n"
);

while (parseInt(n) != n) {
  console.log("Favor inserir um número válido");
  n = prompt(
    "Digite um número para ver se existe na sequência de Fibonacci \n"
  );
}

console.log(`Número selecionado: ${n}`);

let n1 = 0,
  n2 = 1,
  result = n1 + n2;
success = false;

if (n == 1) {
  console.log("O número digitado existe na sequência de Fibonacci");
  return;
} else {
  while (result <= n) {
    console.log(result);
    n1 = n2;
    n2 = result;
    result = n1 + n2;

    if (result == n) {
      success = true;
    }
  }

  if (success) {
    console.log("O número digitado existe na sequência de Fibonacci");
  } else {
    console.log("O número digitado não existe na sequência de Fibonacci");
  }
}
