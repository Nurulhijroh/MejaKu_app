import { View, Text, StyleSheet } from "react-native";

export default function ThankYou() {
  return (
    <view style={styles.container}>
      <Text style={styles.text}>Thank You For your Order </Text>
    </view>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: 600,
  },
});
