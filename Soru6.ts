// Soru 6: Jenerik Sınıf Implementasyonu

class MemoryCache<T> {
  private storage: { [key: string]: T } = {};

  set(key: string, value: T): void {
    this.storage[key] = value;
  }

  get(key: string): T | undefined {
    return this.storage[key];
  }

  clear(): void {
    this.storage = {};
  }
}

// Test
const stringCache = new MemoryCache<string>();
stringCache.set("name", "Baran");
console.log(stringCache.get("name")); // "Baran"

const numberCache = new MemoryCache<number>();
numberCache.set("age", 25);
console.log(numberCache.get("age")); // 25

stringCache.clear();
console.log(stringCache.get("name")); // undefined