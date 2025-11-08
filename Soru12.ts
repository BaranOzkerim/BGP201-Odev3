// Soru 12: infer ile Fonksiyon Dönüş Tipi
// TypeScript'in ReturnType<T> tipini GetReturnType<T> olarak kendiniz yazın.

type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Test (beklenen çıktıyı almak için)
function greet() {
  return "hello";
}
function add(a: number, b: number) {
  return a + b;
}

type GreetReturn = GetReturnType<typeof greet>;  // string
type AddReturn = GetReturnType<typeof add>;      // number

const test1: GreetReturn = "hello";  // OK
const test2: AddReturn = 42;         // OK

console.log("GreetReturn:", typeof test1); // string
console.log("AddReturn:", typeof test2);   // number