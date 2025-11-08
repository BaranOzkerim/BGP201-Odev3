// Soru 9: Soyut Sınıf (Abstract Class)
// getArea adında soyut bir metoda sahip Shape sınıfını ve ondan türeyen Circle sınıfını implemente edin.
// Circle alanı π×r² olmalıdır.

abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Test (beklenen çıktıyı almak için)
const circle = new Circle(5);
console.log(circle.getArea().toFixed(2)); // 78.54