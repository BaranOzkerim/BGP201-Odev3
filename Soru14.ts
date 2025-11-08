// Soru 14: Rekürsif Tipler (Recursive Types)
// DeepReadonly<T> tipini, iç içe nesneleri de readonly yapacak şekilde tanımlayın.

type DeepReadonly<T> = 
  T extends any[] 
    ? readonly T[number][] 
    : T extends object 
      ? { readonly [K in keyof T]: DeepReadonly<T[K]> } 
      : T;

// Test (beklenen çıktıyı almak için)
interface User {
  name: string;
  address: {
    city: string;
    coords: {
      lat: number;
      lng: number;
    };
  };
}

type ReadonlyUser = DeepReadonly<User>;

const user: ReadonlyUser = {
  name: "Baran",
  address: {
    city: "İstanbul",
    coords: { lat: 41, lng: 29 }
  }
};

// user.name = "Ali";        // Hata: readonly
// user.address.city = "İzmir"; // Hata: readonly
// user.address.coords.lat = 40; // Hata: readonly

console.log("DeepReadonly çalışıyor!");