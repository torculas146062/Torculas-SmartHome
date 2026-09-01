import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';

export function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },

  headerText: {
    marginTop: 32,
    alignContent: "center",
    fontSize: 32,
    fontFamily: "Bunken-ExtraBold"
  }
});
