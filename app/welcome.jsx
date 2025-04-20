import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TouchableOpacity, styleSheet } from "react-native";

export default function welcome() {
  const { table } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.appName}>MejaKu Cafe</Text>
      <Text style={styles.tableText}>Meja nomor :</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/menu?table=${table}")}
      >
        <Text style={styles.buttonText}>Lihat Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = styleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "brown",
  },
  title: { fontSize: 28, color: "white" },
  appName: {
    fontSize: 40,
    fontweight: "bold",
    color: "chocolate",
    marginBottom: 10,
  },
  tableText: { fontSize: 18, marginBottom: 30 },
  button: { backgroundColor: "white", padding: 15, borderRadius: 25 },
  buttonText: { color: "yellow", fontSize: 18 },
});
