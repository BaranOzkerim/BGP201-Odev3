// Soru 17: Dağıtılmış Koşullu Tipler (Distributive Conditionals)
// FilterUnion<T, U> tipini tanımlayın. Bir Union (T) içinden, U'ya atanabilen tipleri çıkarmalıdır.

type FilterUnion<T, U> = T extends U ? T : never;

// Test (beklenen çıktıyı almak için)
type Animals = "cat" | "dog" | "bird" | "fish";
type Mammals = "cat" | "dog";

type LandAnimals = FilterUnion<Animals, Mammals>;
// "cat" | "dog"

const pet: LandAnimals = "cat"; // OK
// const pet2: LandAnimals = "bird"; // Hata

console.log("LandAnimals tipi çalışıyor:", pet);