import { View, Text, Pressable } from "react-native";
import React from "react";
import { Stack, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

export default function StackLayout() {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    console.log("toggle drawer");
  };

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Pressable
            onPress={() => console.log("hola")}
            style={{ marginLeft: 10 }}
            className="flex justify-center items-center relative z-50"
          >
            <Text>Menu</Text>
          </Pressable>
        ),
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
