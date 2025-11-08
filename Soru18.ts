// Soru 18: infer ile Fonksiyon Parametresi
// LastParameter<T> tipini tanımlayın. Bir fonksiyonun son parametresinin tipini döndürmelidir.

type LastParameter<T> = 
  T extends (...args: [...any[], infer L]) => any ? L : never;

// Test (beklenen çıktıyı almak için)
function greet(name: string, age: number) {
  return `Hello ${name}, you are ${age}`;
}

type LastParam = LastParameter<typeof greet>; // number

const test: LastParam = 25; // OK
// const test2: LastParam = "hello"; // Hata

console.log("Son parametre tipi number:", test);