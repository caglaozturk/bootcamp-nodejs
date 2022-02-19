// Gerekli kütüphaneyi çağır
const http = require("http");
// Dosyaları dahil et
const users = require("./data/users.json")
const posts = require("./data/posts.json")

// Serverı olustur 
const server = http.createServer((req,res) => {
    console.log(`Talep geldi: ${req.url}`)
    if(req.url === "/users"){
        // users geriye dön
        res.setHeader("Content-Type","application/json");
        res.write(JSON.stringify(users));
        res.end();
    } else if(req.url === "/posts"){
        // posts geriye don
        res.setHeader("Content-Type","application/json");
        res.write(JSON.stringify(posts));
        res.end();
    } else {
        //404 dön
        res.writeHead(404, "Content-Type","application/json");
        res.end(JSON.stringify({message: "Yönlendirme Hatalı"}));
    }
})

// Port numarasını belırle
const PORT = 5001;

// Serverı dınlemeye basla
server.listen(PORT, () => console.log(`Server ${PORT} portu üzerinde çalışmaya başladı`))