// Soru 16: Nominal Tipleme (Branded Types)
// UserID ve PostID tiplerini (Brand<T, U> kullanarak) tanımlayın.
// İkisi de string olmalı ama birbirine atanamamalıdır.

type Brand<T, U> = T & { __brand: U };

type UserID = Brand<string, "UserID">;
type PostID = Brand<string, "PostID">;

// Test (beklenen çıktıyı almak için)
const userId: UserID = "user-123" as UserID;
const postId: PostID = "post-456" as PostID;

// userId = postId; // Hata: Tip uyuşmazlığı
// postId = userId; // Hata: Tip uyuşmazlığı

console.log("UserID:", userId);
console.log("PostID:", postId);