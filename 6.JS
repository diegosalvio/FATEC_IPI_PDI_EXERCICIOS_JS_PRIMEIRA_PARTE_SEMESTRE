//6. Refaça o exercício 5 usando a construção async/await.

const axios = require("axios");
require("dotenv").config();
const prompt = require("prompt-sync")();
const { APPID, UNITS, LAT, LON, LANG } = process.env;



const menu = async () => {
    let opcao = 0;
    do { 
        opcao = prompt("Digite 1 para ver a temperatura, e 2 para sair ")
        Number(opcao)

        switch (opcao) {
            case "1":
                let lat = prompt ("digite uma latitude: ")
                Number(lat);
                let lon = prompt("digite uma longitude: ")
                Number(lon)
                const resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}&units=${UNITS}`)
                console.log(resposta.data.main.temp)
                break;
            case "2":
                console.log("Saindo...")
                break;
            default:
                console.log("Você inseriu uma opção errada, tente novamente ")
        }
    } while(opcao != 2)
}

menu()
