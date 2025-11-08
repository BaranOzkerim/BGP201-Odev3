// Soru 19: infer ile Dizi Elemanı Tipi
// Flatten<T> tipini tanımlayın. T bir dizi ise eleman tipini (T[] -> T), değilse T'yi döndürmelidir.

type Flatten<T> = T extends (infer U)[] ? U : T;

// Test (beklenen çıktıyı almak için)
type StringArray = string[];
type NumberArray = number[];
type MixedArray = (string | number)[];

type FlatString = Flatten<StringArray>;     // string
type FlatNumber = Flatten<NumberArray>;     // number
type FlatMixed = Flatten<MixedArray>;       // string | number
type FlatPrimitive = Flatten<string>;       // string

const str: FlatString = "hello";           // OK
const num: FlatNumber = 42;                // OK
// const err: FlatString = 123;            // Hata

console.log("Flatten çalışıyor:", str, num);