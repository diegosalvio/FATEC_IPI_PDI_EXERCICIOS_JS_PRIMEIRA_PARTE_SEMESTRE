/* 
function previsao(lat, lon) {
    return new Promise(function(resolve, reject){
        const resposta = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}&units=${UNITS}`)
        resolve(resposta)
        return resposta
    })
}


const menu1 = () =>
{

}

previsao(23,46)
.then((resultado) => {
    let opcao = 0;
    do { 
        opcao = prompt("Digite 1 para ver a temperatura, e 2 para revelar os resultados e sair ")
        Number(opcao)

        switch (opcao) {
            case "1":
                let lat = prompt ("digite uma latitude: ")
                Number(lat);
                let lon = prompt("digite uma longitude: ")
                Number(lon)
                console.log(resultado.data.main.temp)
                break;
            case "2":
                console.log("Revelando resultados")
                break;
            default:
                console.log("Você inseriu uma opção errada, tente novamente ")
        }
    } while(opcao != 2)
    
})
.catch((erro) => console.log(erro)) */