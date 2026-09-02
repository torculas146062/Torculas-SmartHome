import { Text } from "@react-navigation/elements";
import { FlatList, Pressable, StyleSheet, View } from "react-native";

interface Device {
  id: string;
  name: string;
  location: string;
  state: string;
}

const devices: Device[] = [
  {
    id: "0",
    name: "Light",
    location: "Living Room",
    state: "ON",
  },
  {
    id: "1",
    name: "Air Conditioner",
    location: "Living Room",
    state: "24°C",
  },
  {
    id: "2",
    name: "Door",
    location: "Living Room",
    state: "LOCKED",
  },
  {
    id: "3",
    name: "Camera",
    location: "Kitchen",
    state: "ON",
  },
];

export function Devices() {
  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={() => (
        <Text style={styles.headerText}>My Devices</Text>
      )}
      data={devices}
      renderItem={({ item: device }) => (
        <Pressable
          android_ripple={{
            color: "#ccc",
            foreground: true,
          }}
          style={styles.button}
        >
          <View>
            <Text style={styles.text}>{device.name}</Text>
            <Text style={styles.subtext}>{device.location}</Text>
          </View>
          <Text style={styles.subtext}>{device.state}</Text>
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  headerText: {
    marginTop: 32,
    marginBottom: 18,
    alignContent: "center",
    fontSize: 32,
    fontFamily: "Bunken-ExtraBold",
  },

  text: {
    fontFamily: "Bunken-ExtraBold",
    fontSize: 20,
  },

  subtext: {
    fontFamily: "Bunken-Bold",
    fontSize: 16,
  },

  button: {
    borderColor: "#2e2e2e",
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 8,

    paddingHorizontal: 22,
    paddingVertical: 24,


    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
});
