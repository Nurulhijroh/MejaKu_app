import { useRouter } from "expo-router";
import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native-web";

export default function Index() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    const table = new URL(data).searchParams.get("table") || "unknown";
    router.push("/welcome?table=${table}");
  };

  if (hasPermission === null) {
    return <Text>Meminta izin kamera </Text>;
  }
  if (hasPermission === false) {
    return <Text>Akses kamera ditolak.</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillobject}
      />

      {scanned && (
        <button title={"scan lagi"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
