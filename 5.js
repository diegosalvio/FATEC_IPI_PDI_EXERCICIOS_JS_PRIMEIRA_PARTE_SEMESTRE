const axios = require("axios");
require('dotenv').config()

const {APPID, LAT, LON, LANG} = process.env


const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APPID}&units=metric`


axios
    .get(url)
    .then((resultado) => {
        //console.log(resultado);
        return resultado.data
    })
   .then((previsao) => {
        console.log(previsao.main.temp)
    })