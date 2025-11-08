// Soru 13: Mapped Types ve Template Literals
// CreateGetters<T> tipini tanımlayın. id: number özelliğini getId: () => number metoduna dönüştürmelidir.

type CreateGetters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

// Test (beklenen çıktıyı almak için)
interface User {
  id: number;
  name: string;
}

type UserGetters = CreateGetters<User>;
// { getId: () => number; getName: () => string; }

const userGetters: UserGetters = {
  getId: () => 42,
  getName: () => "Baran"
};

console.log(userGetters.getId());   // 42
console.log(userGetters.getName()); // Baran