/*
Daire Modüler Dosyası
Daire alan : circleArea ve daire çevre : 
circleCircumference fonksiyonları içeren ve consola 
sonuçları yazdıran circle.js dosyası oluşturunuz.
module.exports yöntemi ile fonksiyonları 
oluştururken export ediniz.
require ve object destructing kullanarak 
index.js dosyasında yarıçap (r) 5 olacak 
şekilde ekran çıktısını alınız.
*/

import { circleArea, circleCircumference } from "./calculate.js";

let radius = 5;

if(radius && radius>0) {
	console.log(`Yarıçapı ${radius} olan dairenin alanı: ${circleArea(radius)}`);
    console.log(`Yarıçapı ${radius} olan dairenin çevresi: ${circleCircumference(radius)}`)
} else {
    console.log("Hesaplama yapılamıyor...")
}