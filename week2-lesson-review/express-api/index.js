// Gerekli kütüphaneyi çağır
const express = require("express");
// Dosyaları dahil et
const users = require("./data/users.json")
const posts = require("./data/posts.json")

const app = express();

//  users'a gittiğin zaman verilecek sonuç
app.get("/users", (req,res) => {
    console.log(req)
    if(req.query.id) {
        var item = users.filter(x=>x.id==req.query.id)
        res.send(item);
    } else{
        res.send(users);
    }
});

//  posts'a gittiğin zaman verilecek sonuç
app.get("/posts", (req,res) => {
    res.send("Posts çalıştı")
})

//  user/1'e gittiğin zaman verilecek sonuç
app.get('/users/:userId', (req, res) => {
    req.params; // { userId: '42' }
    res.json(req.params);
});

// Port numarasını belırle
const PORT = 5002;
// Serverı dınlemeye basla
app.listen(PORT)