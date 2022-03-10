/* 
Node.JS Komut Satırı Kullanımı
Hepimizin Matematik derslerinden bildiği üzere 
Dairenin Alanı = π x r^2 şeklinde hesaplanır. 
Node.JS Javascript çalışma ortamında yarıçap değerini 
konsoldan parametre olarak girerek alanı bulmaya çalışacağız. 
Konsol çıktısı: 
Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) 
şeklinde olmalıdır. 
*/

let radius = 5;
let circleCalculateArea = r => Math.PI * (r * r);

if(radius && radius>0) {
	console.log(`Yarıçapı ${radius} olan dairenin alanı: ${circleCalculateArea(radius)}`)
} 