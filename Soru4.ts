// Soru 4: keyof ile Jenerik Fonksiyon

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Test
const person = {
  name: "Baran",
  age: 20,
  city: "İstanbul"
};

console.log(getProperty(person, "name")); // "Baran"
console.log(getProperty(person, "age"));  // 20
// console.log(getProperty(person, "email")); // Hata: 'email' anahtarı yok