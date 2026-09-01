import { Button, getHeaderTitle, Text } from '@react-navigation/elements';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

export function Dashboard() {
  const route = useRoute()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Smart Home</Text>
        <Button screen="Settings">Go to Settings</Button>
      </View>
      <Text>Open up 'src/App.tsx' to start working on your app!</Text>
      <Button variant="plain" screen="Devices">View All Devices</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 24,
  },

  header: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  headerText: {
    alignContent: "center",

    fontSize: 24,
    fontFamily: "Bunken-Bold"
  }
});
