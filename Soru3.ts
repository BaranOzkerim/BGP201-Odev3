// Soru 3: Sınıf ve Erişim Belirleyiciler

class Logger {
  private logHistory: string[] = [];

  log(message: string): void {
    this.logHistory.push(message);
    console.log(message);
  }

  getLogCount(): number {
    return this.logHistory.length;
  }
}

// Test
const logger = new Logger();
logger.log("Uygulama başlatıldı");
logger.log("Kullanıcı giriş yaptı");
console.log(logger.getLogCount()); // 2
// console.log(logger.logHistory); // Hata: private erişilemez