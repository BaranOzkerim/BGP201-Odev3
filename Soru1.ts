// Soru 1: Jenerik Dizi Birleştirme
function mergeArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2];
}

// Test (beklenen çıktıyı almak için)
const numbers = [1, 2, 3];
const strings = ["a", "b", "c"];
const merged = mergeArrays(numbers, strings);
console.log(merged); // [1, 2, 3, "a", "b", "c"]