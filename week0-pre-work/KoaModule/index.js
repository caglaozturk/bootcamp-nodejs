/**
 * Koa.js ile web sunucumuzu yazalım.
 * koa paketini indirelim.
 * index, hakkimda ve iletisim sayfaları oluşturalım.
 * Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
 * port numarası olarak 3000'i kullanalım.
 */

const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", async (ctx) => {
    ctx.body =  '<h1>Index Sayfasına Hoşgeldiniz</h1>'
});

router.get("/hakkimda", async (ctx) => {
    ctx.body =  '<h1>Hakkımda Sayfasına Hoşgeldiniz</h1>'
});

router.get("/iletisim", async (ctx) => {
    ctx.body =  '<h1>İletişim Sayfasına Hoşgeldiniz</h1>'
});

const port = 3000;
app.use(router.routes()).use(router.allowedMethods());
app.listen(port, ()=> {
    console.log(`Sunucu port ${port} da çalışmaya başladı...`)
})

// app
//   .use(router.routes())
//   .use(router.allowedMethods())
//   .listen(port, "0.0.0.0", () =>
//     console.log(`Sunucu port ${port} da çalışmaya başladı...`)
//   );
