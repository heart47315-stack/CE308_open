import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function DetailsScreen() {
  const { name, price } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder} />

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>฿{price}</Text>

      <Text style={styles.desc}>
        แสดงรายละเอียดสินค้าตามโจทย์
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  imagePlaceholder: {
    height: 180,
    backgroundColor: "#ddd",
    borderRadius: 12,
    marginBottom: 16,
  },
  name: { fontSize: 20, fontWeight: "bold" },
  price: { color: "red", fontSize: 18, marginVertical: 6 },
  desc: { color: "#666" },
});