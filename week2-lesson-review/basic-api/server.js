// Gerekli kütüphaneyi çağır
const http = require("http");
const kisiler = require("./data.json")

// Serverı olustur 
const server = http.createServer((req,res) => {
    console.log(req.url)
    res.statusCode = 200;   //  Geriye 200 status code dön
    // res.setHeader("Content-Type","text/html");
    // res.write("<hr>Server Çalıştı</hr>");
    // res.setHeader("Content-Type","application/json");
    // res.write("{name: 'Ahmet'}");

    res.setHeader("Content-Type","application/json");   //  Geriye json döneceğini belirt
    res.write(JSON.stringify(kisiler)); //  kisiler verisini string'e çevir
    res.end();  //  bitir
})

// Port numarasını belırle
const PORT = 5001;

// Serverı dınlemeye basla
server.listen(PORT, () => console.log(`Server ${PORT} portu üzerinde çalışmaya başladı`))