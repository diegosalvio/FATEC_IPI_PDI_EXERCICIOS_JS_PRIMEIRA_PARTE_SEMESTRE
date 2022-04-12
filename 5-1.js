const axios = require("axios");
require("dotenv").config();
const prompt = require("prompt-sync")();

const { APPID, LAT, LON, LANG } = process.env;


function previsao(){
    let opcao = 0
    do{
        opcao = prompt("Digite 1 se deseja uma previsão, e 2 se deseja sair  ");
        Number(opcao);
        switch (opcao) {
            case "1":
              let lat = prompt("Digite uma latitude: ");
              Number(lat);
              let lon = prompt("Digite uma longitude: ");
              Number(lon);
              axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}&units=metric`)
              .then((resultado) => {
                 return resultado.data
              })
              .then((temperatura) => {

                  console.log(temperatura.main.temp)
              })
              break;
            case "2":
              console.log("Saindo...");
              break;
            default:
              console.log("Você inseriu uma opção errada, tente novamente");
          } 
    } while(opcao !=2)
}

previsao()