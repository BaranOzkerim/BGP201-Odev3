// Soru 5: Fonksiyon Aşırı Yüklemesi (Overloading)

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ayşe" },
  { id: 3, name: "Baran" }
];

function search(id: number): User;
function search(name: string): User[];
function search(input: number | string): User | User[] {
  if (typeof input === "number") {
    return users.find(u => u.id === input)!;
  } else {
    return users.filter(u => u.name.includes(input));
  }
}

// Test
console.log(search(1)); // { id: 1, name: "Ali" }
console.log(search("A")); // [{ id: 1, name: "Ali" }, { id: 2, name: "Ayşe" }]