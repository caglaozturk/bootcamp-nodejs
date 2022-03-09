function showPrimeNumbers(lownumber, highNumber) {
    for (let i =lownumber; i <= highNumber; i++) {
        let isPrime = true;
        for (let j = 2; j <= i; j ++) {
            if( i % j ===0 && j !==i) {
                isPrime = false
            }
        }

        if(isPrime) {
            console.log(i);
        }
    }
}

function showFivePrimes() {
    showPrimeNumbers(1,10);
}
// Burada fonksiyonu diğer dosyaların kullanımına açıyoruz.
module.exports = { showPrimeNumbers, showFivePrimes }