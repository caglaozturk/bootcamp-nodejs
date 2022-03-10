/**
 * Kendi Web Sunucumuzu yazalım.
 * Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.
 * createServer metodunu kullanacağız.
 * index, hakkimda ve iletisim sayfaları oluşturalım.
 * Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
 * port numarası olarak 5000'i kullanalım.
 * 
 */

import http from 'http';

const server = http.createServer((req, res) => {
    console.log('Bir istek gönderildi.');  // burada isteğimizin gönderildiğini simüle ediyoruz.
    const url = req.url;

    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>INDEX SAYFASI</h2>"); // tarayıcıda INDEX SAYFASI çıktısını göreceğiz.
    } else if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>ABOUT SAYFASI</h2>");
    } else if (url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>CONTACT SAYFASI</h2>");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h2>404 SAYFA BULUNAMADI</h2>");
    }

    res.end();
});

const port = 5000;

server.listen(port, () => {
console.log(`Sunucu port ${port} de başlatıldı.`);
});