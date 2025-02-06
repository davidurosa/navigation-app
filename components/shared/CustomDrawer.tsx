import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={true}>
      <View className="flex justify-center items-center mx-3 py-10 mb-10 h-[150px] bg-purple-500">
        <View className="flex justify-center items-center bg-white rounded-full w-24 h-24">
          <Text className="text-purple-500 text-2xl font-bold">DU</Text>
        </View>
      </View>

      {/* DrawerItems */}

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
