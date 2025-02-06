import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { FontAwesome } from "@expo/vector-icons";
import { CustomDrawer } from "@/components/shared/CustomDrawer";

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerActiveTintColor: "purple",
        headerShadowVisible: false,
        sceneStyle: { backgroundColor: "white" },
      }}
    >
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Horario",
          title: "Horario",
          drawerIcon: ({ color, size }) => (
            <FontAwesome size={size} name="calendar" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Usuarios",
          title: "Usuarios",
          drawerIcon: ({ color, size }) => (
            <FontAwesome size={size} name="user" color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
