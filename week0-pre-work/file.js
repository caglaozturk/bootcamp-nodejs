const fs = require('fs');                 // fs modülünü çağırıyoruz (İleride daha detalı konuşacağız.)
fs.readFile('/file.md', (err, data) => {  // Burada kod asenkron çalışır ve devamındaki kodu **bloklamaz**if (err) throw err;
  console.log(data);                      // data bilgisini yazdırıyoruz
});
moreWork();                               // kod bloklanmadığı için kodun bu kısmı data bilgisi yazdırmaktan önce çalışır.