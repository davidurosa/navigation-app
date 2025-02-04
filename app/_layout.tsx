import { View, Text } from "react-native";
import { Slot, SplashScreen, Stack } from "expo-router";

// Import your global CSS file
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontLoaded, error] = useFonts({
    "WorkSans-Black": require("@/assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("@/assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("@/assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (error) {
      throw error;
    }

    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, error]);

  if (!fontLoaded && !error) {
    return null;
  }

  return <Slot />;
  /* return <Stack />; */
}
