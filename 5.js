const axios = require("axios");
require("dotenv").config();
const prompt = require("prompt-sync")();

const { APPID, LAT, LON, LANG } = process.env;

//const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APPID}&units=metric`

function previsao(lat, lon) {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}&units=metric`
    )
    .then((resultado) => {
      //console.log(resultado);
      return resultado.data;
    })
    .then((previsao) => {
        console.log(previsao.main.temp)
    })
}

/* function EntaoPega(lat, lon) {
  previsao(lat, lon)
    .then(res => console.log(res))
    .catch((erro) => console.log(erro));
} */

function weatherReport() {
  let opcao = 0;
  do {
    opcao = prompt("Digite 1 se deseja uma previsão, e 2 se deseja sair  ");
    Number(opcao);

    switch (opcao) {
      case "1":
        /* let lat = prompt("Digite uma latitude: ");
        let lon = prompt("Digite uma longitude: "); */
       console.log()     
        break;
      case "2":
        console.log("Saindo...");
        break;
      default:
        console.log("Você inseriu uma opção errada, tente novamente");
    }
  } while (opcao != 2);
}
weatherReport();
//previsao(23,46)
