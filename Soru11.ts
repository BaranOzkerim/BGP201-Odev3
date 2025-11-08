// Soru 11: Koşullu Tipler (Conditional Types)
// UnwrapPromise<T> tipini tanımlayın. Eğer T bir Promise ise içindeki tipi,
// değilse T'nin kendisini döndürmelidir.

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// Test (beklenen çıktıyı almak için)
type T1 = UnwrapPromise<Promise<string>>;  // string
type T2 = UnwrapPromise<number>;           // number

const test1: T1 = "hello";     // OK
const test2: T2 = 42;          // OK

console.log("T1 tipi:", typeof test1); // string
console.log("T2 tipi:", typeof test2); // number