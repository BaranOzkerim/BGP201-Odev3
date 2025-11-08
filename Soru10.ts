// Soru 10: Statik Özellikler ve Metotlar
// MathHelper sınıfına statik PI (3.14159) özelliğini ve
// statik calculateCircumference (Çevre = 2×π×r) metodunu ekleyin.

class MathHelper {
  static PI: number = 3.14159;

  static calculateCircumference(radius: number): number {
    return 2 * this.PI * radius;
  }
}

// Test (beklenen çıktıyı almak için)
console.log(MathHelper.PI); // 3.14159
console.log(MathHelper.calculateCircumference(5).toFixed(2)); // 31.42