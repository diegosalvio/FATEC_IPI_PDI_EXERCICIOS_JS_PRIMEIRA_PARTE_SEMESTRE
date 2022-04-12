/* 5. O serviço Current weather data pode ser encontrado no link a seguir. Observe que ele
não é o mesmo utilizado em aula.
https://openweathermap.org/current
Faça um programa que, utilizando promises e as funções then/catch, exibe a temperatura
atual (atributo chamado  temp). O programa deve ser um loop que exibe as seguintes
opções para o usuário:
1- Digitar latitude e longitude
2- Sair
O programa fica em loop até que o usuário digite 2. Ao digitar 1, o usuário deve
informar   os   valores   de   latitude   e   longitude   da   localização   da   qual   deseja   saber   a
temperatura atual. Use um arquivo .env e o pacote dotenv para configurar uma variável
de ambiente que indica qual unidade de medida  de temperatura  deve ser utilizada:
Kelvin, Fahrenheit ou Celsius. Lembre-se de armazenar a chave de API no arquivo .env
e de tomar o cuidado de não armazená-lo no sistema de controle de versão. */
//--//
const axios = require("axios");
require("dotenv").config();
const prompt = require("prompt-sync")();
const { APPID, UNITS } = process.env;
//--//

function previsao(lat, lon) {
  return new Promise(function (resolve, reject) {
    const resposta = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}&units=${UNITS}`
    );
    resolve(resposta);
    return resposta;
  });
}

const menu1 = (lat, lon) => {
  previsao(lat, lon)
    .then((resultado) => {
      console.log(
        "Aqui a sua temperatura em celcius: " + resultado.data.main.temp
      );
      return resultado.data.main.temp;
    })
    .catch((erro) => console.log(erro));
};

const menu2 = () => {
  let opcao = 0;
  do {
    opcao = prompt("Digite 1 para ver a temperatura, e 2 sair ");
    Number(opcao);
    switch (opcao) {
      case "1":
        lat = prompt("digite uma latitude: ");
        Number(lat);
        lon = prompt("digite uma longitude: ");
        Number(lon);
        menu1(lat,lon)
        console.log("Para ver sua temperatura saia do menu, para adicionar mais, digite 1")
        break;
      case "2":
        console.log("Saindo para ver as temperaturas...");
        break;
      default:
        console.log("Você inseriu uma opção errada, tente novamente ");
    }
  } while (opcao != 2);
};

menu2();
