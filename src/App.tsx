import { Assets as NavigationAssets } from "@react-navigation/elements";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { Asset } from "expo-asset";
import { createURL } from "expo-linking";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { useColorScheme } from "react-native";
import { Navigation } from "./navigation";
import { useFonts } from "expo-font";

Asset.loadAsync(NavigationAssets);

SplashScreen.preventAutoHideAsync();

const prefix = createURL("/");

export function App() {
  const [ready, setReady] = React.useState(false);

  const [loaded, error] = useFonts({
    "Bunken-Bold": require("../assets/fonts/BunkenTechSansPro-Bold.ttf"),
    "Bunken-ExtraBold": require("../assets/fonts/BunkenTechSansPro-ExBd.ttf")
  });

  React.useEffect(() => {
    if (ready && (loaded || error)) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error, ready]);

  // const colorScheme = useColorScheme();

  // const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme
  const theme = DefaultTheme;

  return (
    <Navigation
      theme={theme}
      linking={{
        enabled: "auto",
        prefixes: [prefix],
      }}
      onReady={() => {
        setReady(true);
      }}
    />
  );
}
