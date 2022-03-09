/*
Post Sıralama ve Post Ekleme
Blog oluşturmaya hazır mısınız? 
Konsol ekranında postlarımızı sıralayalım,
sonrasında yeni bir post oluşturalım ve 
yeni post ile birlikte postlarımızı 
tekrar sıralayalım.
*/

const posts = [
    {id: 1, post: "İlk Post", author: "Çağla Öztürk"},
    {id: 2, post: "İkinci Post", author: "Ayşe Öztürk"}
]

const addPost = (newPost) => {
    const promise = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts)
    });
    return promise;
}

const listPosts = () => {
    posts.map(p => {
        console.log(`Post: ${p.post}, Yazar: ${p.author}`)
    });
}

const showPost = async () => {
    try {
        await addPost({id: 3, post: "Üçüncü Post", author: "Şeyma Öztürk"});
        listPosts();
    } catch(err) {
        console.log("error")
    }
}

listPosts();
console.log("---------")
showPost();