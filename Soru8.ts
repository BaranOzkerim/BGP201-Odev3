// Soru 8: Rest Parametreleri
// Aldığı tüm sayısal parametreleri toplayan sum fonksiyonunu "rest parameters" kullanarak implemente edin.

function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// Test (beklenen çıktıyı almak için)
console.log(sum(1, 2, 3));        // 6
console.log(sum(5));              // 5
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum());               // 0