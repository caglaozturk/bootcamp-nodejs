/*
FS File System Modülü
Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.
employees.json dosyası oluşturalım ve içerisine 
{"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.
*/

import fs from "fs";                 // fs modülünü çağırıyoruz
const fileName = "employees.json";

fs.writeFileSync(fileName, '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
  if(err) console.log(err);
})

fs.appendFileSync(fileName, ',\n{"name": "Employee 2 Name", "salary": 5500}', 'utf8', (err) => {
  if(err) console.log(err);
});

fs.readFile(fileName, 'utf8', (err, data) => {
  if(err) console.log(err);
  console.log(data);
});

fs.unlink(fileName, (err) => {
  if(err) console.log(err);
});