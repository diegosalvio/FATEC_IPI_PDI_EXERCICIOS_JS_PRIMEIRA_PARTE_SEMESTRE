/* 4. Escreva um script que apresenta as seguintes operações para o usuário:
1- Soma
2- Subtração
3-Multiplicação
4- Divisão
5- Sair
O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
o objeto JSON do exercício 4 para realizar as operações aritméticas. */
/* const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
}); */
const prompt = require("prompt-sync")();

function calculadora() {
  let operacoes = {
    soma: (a, b) => a + b,
    sub: (a, b) => a - b,
    multi: (a, b) => a * b,
    divi: (a, b) => a / b,
  };

  let press = 0;
  do {
    console.log(
      "Agora escolhe uma das opções abaixo\n1 - para somar\n2 - para subtrair\n3 - para multiplicar\n4 - para dividir\n5 - para sair"
    );
    press = prompt("Digite sua opção:");
    Number(press);

    switch (press) {
      case "1":
        let aSoma = prompt("Digite um valor: ");
        let bSoma = prompt("Digite outro valor: ");
        console.log(operacoes.soma(Number(aSoma), Number(bSoma)));
        break;
      case "2":
        let aSub = prompt("Digite um valor: ");
        let bSub = prompt("Digite outro valor: ");
        console.log(operacoes.sub(Number(aSub), Number(bSub)));
        break;
      case "3":
        let aMulti = prompt("Digite um valor: ");
        let bMulti = prompt("Digite outro valor: ");
        console.log(operacoes.multi(Number(aMulti), Number(bMulti)));
        break;
      case "4":
        let aDiv = prompt("Digite um valor: ");
        let bDiv = prompt("Digite outro valor: ");
        console.log(operacoes.divi(Number(aDiv), Number(bDiv)));
        break;
      case "5":
        console.log("Você escolheu sair, até mais!");
        break;
      default:
        console.log("\nVocê digitou uma opção inválida, tente novamente!\n");
    }
  } while (press != 5);
}

calculadora();
