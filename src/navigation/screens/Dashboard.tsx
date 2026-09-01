import { Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";

function SmallButton(props: {
  source?: ImageSourcePropType;
  name: string;
  state: string;
}) {
  const navigation = useNavigation();

  return (
    <Pressable
      android_ripple={{
        color: "#ccc",
        foreground: true,
      }}
      style={[styles.button, styles.smallButton]}
      onPress={() => {
        navigation.navigate("Devices");
      }}
    >
      {props.source && (
        <View style={styles.smallButtonIconContainer}>
          <Image
            style={styles.fill}
            resizeMethod="scale"
            resizeMode="contain"
            source={props.source}
          ></Image>
        </View>
      )}
      <Text style={styles.smallButtonName}>{props.name}</Text>
      <Text style={styles.smallButtonState}>{props.state}</Text>
    </Pressable>
  );
}

export function Dashboard() {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContainer}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Smart Home</Text>
          <TouchableOpacity
            style={styles.settingsButton}
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            <Image
              style={styles.fill}
              resizeMode="contain"
              source={require("../../../assets/settings.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <Pressable
          android_ripple={{
            color: "#ccc",
            foreground: true,
          }}
          onPress={() => {
            navigation.navigate("Devices");
          }}
          style={[styles.button, styles.bigButton, styles.bigButtonGap]}
        >
          <View style={styles.bigButtonIconContainer}>
            <Image
              style={styles.fill}
              resizeMode="contain"
              source={require("../../../assets/low-temperature.png")}
            ></Image>
          </View>
          <Text style={[styles.text, styles.bigButtonTemp]}>26°C</Text>
          <Text style={[styles.text, styles.bigButtonLabel]}>Living Room</Text>
        </Pressable>
        <View style={styles.smallButtonContainer}>
          <SmallButton
            source={require("../../../assets/light-bulb.png")}
            name="Light"
            state="ON"
          />
          <SmallButton
            source={require("../../../assets/snowflake.png")}
            name="AC"
            state="24°C"
          />
        </View>
        <View style={styles.smallButtonContainer}>
          <SmallButton
            source={require("../../../assets/lock.png")}
            name="Door"
            state="LOCKED"
          />
          <SmallButton
            source={require("../../../assets/camera.png")}
            name="Camera"
            state="ON"
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Devices");
          }}
          style={styles.viewAllButton}
        >
          <Text style={[styles.text, styles.viewAllText]}>
            View All Devices ➔
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    fontFamily: "Bunken-Bold",
  },

  fill: {
    height: "100%",
    width: "100%",
  },

  smallButtonIconContainer: {
    width: 40,
    height: 40,
  },

  smallButtonName: {
    fontFamily: "Bunken-Bold",
    fontSize: 20,
  },

  smallButtonState: {
    fontFamily: "Bunken-Bold",
    fontSize: 16,
  },

  bigButtonGap: {
    gap: 8,
  },

  bigButtonIconContainer: {
    width: 48,
    height: 48,
    alignSelf: "center",
  },

  bigButtonTemp: {
    fontFamily: "Bunken-ExtraBold",
    fontSize: 52,
  },

  bigButtonLabel: {
    fontSize: 18,
  },

  viewAllButton: {
    marginVertical: 24,
  },

  viewAllText: {
    fontSize: 18,
  },

  container: {
    flex: 1,
    padding: 24,
  },

  scrollContainer: {
    flex: 1,
  },

  settingsButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  headerText: {
    alignContent: "center",
    fontSize: 32,
    fontFamily: "Bunken-ExtraBold",
  },

  button: {
    borderColor: "#2e2e2e",
    borderWidth: 1,
    borderRadius: 16,
  },

  bigButton: {
    justifyContent: "center",
    alignSelf: "stretch",
    flex: 1,
    minHeight: 180,
    marginBottom: 8,
  },

  smallButtonContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },

  smallButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 4,
  },
});
