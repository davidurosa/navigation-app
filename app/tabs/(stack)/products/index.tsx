import { View, Text, FlatList } from "react-native";
import React from "react";
import { products } from "@/store/products.store";
import { Link } from "expo-router";

export default function ProductsScreen() {
  return (
    <View className="flex flex-1 mx-2">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="border-b p-4">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text>{item.description}</Text>
            <View className="flex flex-row justify-between">
              <Text className="text-lg font-work-medium">{item.price}</Text>
              <Link
                href={`/tabs/(stack)/products/${item.id}`}
                className="text-primary"
              >
                Ver más
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
}
