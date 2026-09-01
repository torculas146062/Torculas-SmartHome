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
      <Text style={[styles.smallButtonText, styles.smallButtonName]}>
        {props.name}
      </Text>
      <Text style={[styles.smallButtonText, styles.smallButtonState]}>
        {props.state}
      </Text>
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
          style={[styles.button, styles.bigButton]}
        >
          <View style={styles.bigButtonIconContainer}>
            <Image
              style={styles.fill}
              resizeMode="contain"
              source={require("../../../assets/low-temperature.png")}
            ></Image>
          </View>
          <Text style={[styles.text, styles.bigButtonTemp]}>26°C</Text>
          <Text style={[styles.text, styles.subtext]}>Living Room</Text>
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
          <Text style={[styles.text, styles.subtext]}>View All Devices ➔</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Shared text helpers
  text: {
    alignSelf: "center",
    fontFamily: "Bunken-Bold",
  },
  subtext: {
    fontSize: 18,
  },

  // Layout
  container: {
    flex: 1,
    padding: 24,
  },
  scrollContainer: {
    flex: 1,
  },

  // Header
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
  settingsButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },

  // Images
  fill: {
    height: "100%",
    width: "100%",
  },

  // Big temperature card
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

  // Small device buttons
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
  smallButtonIconContainer: {
    width: 40,
    height: 40,
  },
  smallButtonText: {
    fontFamily: "Bunken-Bold",
  },
  smallButtonName: {
    fontSize: 20,
  },
  smallButtonState: {
    fontSize: 16,
  },

  // View all button
  viewAllButton: {
    marginVertical: 24,
  },
});
