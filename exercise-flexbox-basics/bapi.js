
let endPoint =  "https://api.binance.com";


let url = {
    ping:endPoint + "/api/v3/ping",
    time: endPoint + "/api/v3/time",
    exchangeInfo: endPoint + "/api/v3/exchangeInfo", 
    btcValue: endPoint + "/api/v3/avgPrice?symbol=BTCUSDT" ,
    priceChangeStatistics: endPoint + "/api/v3/ticker/24hr",
}


fetch(url.priceChangeStatistics) 
    .then((response) => {
        console.log(response)
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })