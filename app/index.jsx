import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

export default function App() {
  return <Redirect href="/drawer" />;

  /* return (
    <SafeAreaView>
      <View className="mt-4 mx-2.5">
        <Text className=" text-3xl font-work-black text-primary">App hola</Text>
        <Text className=" text-3xl font-work-medium text-secondary-100">
          App hola
        </Text>
        <Text className=" text-3xl font-work-light text-tertiary">
          App hola
        </Text>
        <Link href="/products">Products</Link>
      </View>
    </SafeAreaView>
  ); */
}
