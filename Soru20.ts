// Soru 20: Template Literal Parsing (Rekürsif)
// ParseRouteParams<T> tipini tanımlayın. /users/:id gibi bir string alıp
// { id: string } gibi bir nesne tipine dönüştürmelidir.

type ParseRouteParams<T extends string> = 
  T extends `${infer _}:${infer Param}/${infer Rest}`
    ? { [K in Param]: string } & ParseRouteParams<Rest>
    : T extends `${infer _}:${infer Param}`
      ? { [K in Param]: string }
      : {};

// Test (beklenen çıktıyı almak için)
type Route1 = ParseRouteParams<"/users/:id">;           // { id: string }
type Route2 = ParseRouteParams<"/users/:id/posts/:postId">; 
// { id: string; postId: string }

const params1: Route1 = { id: "123" };           // OK
const params2: Route2 = { id: "123", postId: "456" }; // OK

console.log("Route parsing çalışıyor:", params1, params2);