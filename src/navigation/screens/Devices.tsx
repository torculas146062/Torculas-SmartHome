import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';

export function Devices() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Devices</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  headerText: {
    marginTop: 32,
    alignContent: "center",
    fontSize: 32,
    fontFamily: "Bunken-ExtraBold"
  }
});
