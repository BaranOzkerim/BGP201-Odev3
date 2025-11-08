// Soru 7: Partial ile Güncelleme Fonksiyonu

interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser(user: User, updates: Partial<User>): Readonly<User> {
  return Object.freeze({ ...user, ...updates });
}

// Test
const user: User = { id: 1, name: "Baran", email: "baran@example.com" };
const updatedUser = updateUser(user, { name: "Baran Özkerim" });

console.log(updatedUser.name); // "Baran Özkerim"
console.log(updatedUser.id);   // 1
// updatedUser.name = "Deneme"; // Hata: Readonly