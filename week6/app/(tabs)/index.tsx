import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

const products = [
  { id: "1", name: "Premium Coffee Bean", price: 450 },
  { id: "2", name: "Green Tea Powder", price: 290 },
  { id: "3", name: "Oat Milk 1L", price: 115 },
];

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Market</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/details",
                params: item,
              })
            }
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>฿{item.price}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  name: { fontSize: 16, fontWeight: "600" },
  price: { color: "red" },
});