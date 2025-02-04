import React from "react";
import { Pressable, PressableProps, Text, View } from "react-native";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  variant?: "contained" | "outlined";
  className?: string;
}

export const CustomButton = ({
  children,
  color = "primary",
  onPress,
  onLongPress,
  variant = "contained",
  className,
}: Props) => {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];

  const textColor = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  }[color];

  const BorderColor = {
    primary: "border-primary",
    secondary: "border-secondary",
    tertiary: "border-tertiary",
  }[color];

  if (variant === "outlined") {
    return (
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        className={` active:opacity-80 p-2 rounded-md my-2 border ${BorderColor} ${className}`}
      >
        <Text className={`text-center ${textColor}  font-work-medium`}>
          {children}
        </Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className={`${btnColor} active:opacity-80 p-2 rounded-md my-2 ${className}`}
    >
      <Text className="text-white text-center font-work-medium">
        {children}
      </Text>
    </Pressable>
  );
};
