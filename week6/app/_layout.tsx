import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* กลุ่ม Tab ซ่อน header */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* หน้า product แสดง header */}
      <Stack.Screen
        name="product/[id]"
        options={{ title: "Product Detail" }}
      />
    </Stack>
  );
}