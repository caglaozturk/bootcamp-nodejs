const express = require("express");   //  express modülünü projeye dahil et
const postController = require("./src/controllers/posts-controller")    //controller dosyasını projeye dahil et

const app = express();

const cors = require("cors");
app.use(cors());

app.get("/posts",(req,res) => {
    // controller call
    var posts = postController.getAllPosts();

    // data return
    res.send(posts);
})

app.get('/posts/:id', (req, res) => {
    var post = postController.getPostById(req.params.id)    //  controller dosyasındaki getPostById metoduna id'yi gönder dönen sonucu post değişkenine yaz
    res.send(post)  //  data return
});
app.listen(5003);   //  5003 portundan dinle