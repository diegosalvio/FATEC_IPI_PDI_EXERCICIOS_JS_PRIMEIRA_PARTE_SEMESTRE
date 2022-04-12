const axios = require("axios");
require("dotenv").config();
const prompt = require("prompt-sync")();

const { APPID, UNITS, LAT, LON, LANG } = process.env;

//const url = `https://api.openweathermap.org/data/2.5/weather?lat=23&lon=46&appid=d76320aa8cec3415e038dc656a6aaa62&units=metric`

function previsao(lat, lon) {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}&units=${UNITS}`
    )
    .then((resultado) => {
      //console.log(resultado);
      return resultado.data;
    })
    .then((res) => {
      //console.log(res.main.temp)
      return res.main.temp;
    })
    .catch((err) => {
      console.log(err);
    });
}
//previsao(23,46)

function weatherReport() {
  let opcao = 0;
  do {
    opcao = prompt("Digite 1 se deseja uma previsão e aguarde, e 2 se deseja sair e receber suas respostas ");
    Number(opcao);

    switch (opcao) {
      case "1":
        let lat = prompt("Digite uma latitude: ");
        Number(lat)
        let lon = prompt("Digite uma longitude: "); 
        Number(lon)
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}&units=${UNITS}`)
        .then((res) => {
            return res.data
        })
        .then((temperatura) => {
            console.log(temperatura.main.temp)
        })
        break;
      case "2":
        console.log("Saindo... Logo você verá suas respostas");
        break;
      default:
        console.log("Você inseriu uma opção errada, tente novamente");
    }
  } while (opcao != 2);
}
weatherReport();

