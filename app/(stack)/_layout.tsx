import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        /* headerShown: false  */
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "home Screen" }} />
      <Stack.Screen
        name="products/index"
        options={{ title: "Productos Screen" }}
      />
      <Stack.Screen
        name="profile/index"
        options={{ title: "Perfil Screen", animation: "slide_from_bottom" }}
      />

      <Stack.Screen
        name="settings/index"
        options={{ title: "Ajustes Screen" }}
      />
    </Stack>
  );
}
