import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { CustomButton } from "@/components/shared/CustomButton";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="mx-4">
        <CustomButton
          className="mt-2"
          color="primary"
          onPress={() => router.push("/tabs/(stack)/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mt-2"
          color="secondary"
          onPress={() => router.push("/tabs/(stack)/profile")}
          variant="outlined"
        >
          Profile
        </CustomButton>
        <CustomButton
          className="mt-2"
          color="tertiary"
          onPress={() => router.push("/tabs/(stack)/settings")}
        >
          Settings
        </CustomButton>
      </View>
    </SafeAreaView>
  );
}
