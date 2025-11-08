// Soru 15: Mapped Types ile Filtreleme
// PickByValueType<T, V> tipini tanımlayın. Bir nesne (T) içinden, değeri (V) tipine uyan özellikleri seçmelidir.

type PickByValueType<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K];
};

// Test (beklenen çıktıyı almak için)
interface User {
  id: number;
  name: string;
  active: boolean;
  age: number;
}

type NumbersOnly = PickByValueType<User, number>;
// { id: number; age: number }

const numbers: NumbersOnly = {
  id: 1,
  age: 25
};

console.log("Sadece sayılar:", numbers);