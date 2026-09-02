import { Assets as NavigationAssets } from "@react-navigation/elements";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { Asset } from "expo-asset";
import Constants, { ExecutionEnvironment } from "expo-constants";
import * as Font from "expo-font";
import { createURL } from "expo-linking";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { Platform, useColorScheme } from "react-native";
import { Navigation } from "./navigation";

Asset.loadAsync([
  ...NavigationAssets,
  require("./assets/settings.png"),
  require("./assets/low-temperature.png"),
  require("./assets/light-bulb.png"),
  require("./assets/snowflake.png"),
  require("./assets/lock.png"),
  require("./assets/camera.png"),
]);

SplashScreen.preventAutoHideAsync();

const prefix = createURL("/");

const needsRuntimeFonts =
  Platform.OS == "web" ||
  Constants.executionEnvironment === ExecutionEnvironment.StoreClient ||
  Constants.executionEnvironment === ExecutionEnvironment.Bare;

export function App() {
  const [ready, setReady] = React.useState(false);

  const [fontsLoaded, setFontsLoaded] = React.useState(!needsRuntimeFonts);

  React.useEffect(() => {
    if (!needsRuntimeFonts) {
      return;
    }
    let mounted = true;
    Font.loadAsync({
      "Bunken Tech Sans Pro Bold": require("./assets/fonts/BunkenTechSansPro-Bold.ttf"),
      "Bunken Tech Sans Pro ExBd": require("./assets/fonts/BunkenTechSansPro-ExBd.ttf"),
    })
      .then(() => {
        if (mounted) setFontsLoaded(true);
      })
      .catch(() => {
        if (mounted) setFontsLoaded(true);
      });
    return () => {
      mounted = false;
    };
  }, []);

  React.useEffect(() => {
    if (ready && fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [ready, fontsLoaded]);

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
