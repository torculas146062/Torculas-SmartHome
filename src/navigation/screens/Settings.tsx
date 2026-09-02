import { Text } from "@react-navigation/elements";
import { useState } from "react";
import { Pressable, StyleSheet, Switch, View } from "react-native";

export function Settings() {
  const [notificationToggle, setNotificationToggle] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Settings</Text>
      <Pressable
        android_ripple={{
          color: "#ccc",
          foreground: true,
        }}
        style={styles.item}
        onPress={() => setNotificationToggle((a) => !a)}
      >
        <Text style={[styles.text, styles.stretch]}>Notifications</Text>
        <Switch
          value={notificationToggle}
          onValueChange={setNotificationToggle}
        />
      </Pressable>
      <Pressable
        android_ripple={{
          color: "#ccc",
          foreground: true,
        }}
        style={styles.item}
      >
        <Text style={[styles.text, styles.stretch]}>Temperature Unit</Text>
        <Text style={styles.text}>°C</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  stretch: {
    flex: 1,
  },

  container: {
    flex: 1,
    padding: 24,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },

  headerText: {
    marginTop: 32,
    marginBottom: 24,

    alignContent: "center",
    fontSize: 32,
    fontFamily: "Bunken Tech Sans Pro ExBd",
  },

  item: {
    borderColor: "#2e2e2e",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 60,
  },

  text: {
    fontFamily: "Bunken Tech Sans Pro Bold",
    fontSize: 18,
  },
});
