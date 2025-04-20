import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Menu() {
  return (
    <view style={styles.container}>
      <Text> @ minuman :</Text>
      <Text> - Kopi Hitam</Text>
      <Text> - Latte</Text>
      <Text> - Cappucino</Text>
      <Text> - Matcha</Text>
      <Text> - Oreo Milk</Text>
      <Text> @ Makanan :</Text>
      <Text> - Roti Bakar</Text>
      <Text> - Potato stick</Text>
      <Text> - Brownies</Text>
      <Text> - panCake</Text>
      <Text> - Piscok Lumer</Text>
      <Button title="Pesan Sekaran" onPress={() => router.push("/thankyou")} />
    </view>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
