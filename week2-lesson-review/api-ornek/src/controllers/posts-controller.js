const posts = require("../data/posts.json")     //  json dosyasını projeye dahil et

getAllPosts = () => {
    return posts;       //  Tüm postsları geri dön
}

getPostById = (id) => {
    return posts.filter(x=>x.id==id)    //  sadece id'si eşleşen postları geri dön
}

module.exports = { getAllPosts, getPostById };      //  getAllPosts ve getPostById metodlarını dışarıya aktar