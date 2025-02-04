import { View, Text } from "react-native";
import React from "react";
import { Redirect, useLocalSearchParams } from "expo-router";
import { products } from "@/store/products.store";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id == id);
  console.log(product);

  if (!product) return <Redirect href="/" />;

  return (
    <View className="flex flex-1 mx-2">
      <Text className="text-2xl font-work-black">{product.title}</Text>
      <Text>{product.description}</Text>
      <Text className="text-lg font-work-medium">{product.price}</Text>
    </View>
  );
}
